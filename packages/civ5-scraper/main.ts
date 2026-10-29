import { parse } from "@libs/xml"
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

const assetsDir = process.env.CIV5_ASSETS_DIR ?? "/home/arthur/.steam/steam/steamapps/common/Sid Meier's Civilization V/Assets";

const tablesCache = resolve(import.meta.dirname, "tables.json");
const tableTypesDir = resolve(import.meta.dirname, "../civ5-typings/src/table_types");

const DLCS = ["Vanilla", "GnK", "BNW"] as const;
type DLC = typeof DLCS[number];

// Folder (relative to the assets) holding each expansion's files, layered on top of the base game ones.
const expansionDirs: Record<Exclude<DLC, "Vanilla">, string> = {
    GnK: "DLC/Expansion/",
    BNW: "DLC/Expansion2/",
};

// Statements adding a row to a table, see: https://modiki.civfanatics.com/index.php?title=XML_(Civ5)
const insertStatements = ["Row", "Replace", "InsertOrAbort", "InsertOrIgnore", "InsertOrReplace"];

type Column = {
    name: string,
    type: string,
    primaryKey?: boolean,
    autoIncrement?: boolean,
    notNull?: boolean,
    unique?: boolean,
    reference?: string,
    defaultValue?: string
}

type DLCData = {
    // Table name to its columns.
    tables: Record<string, Column[]>,
    // Table name to the values of its key column (usually "Type"), in insertion order.
    types: Record<string, string[]>,
}

// The parsed XML is loosely typed, its shape is checked at runtime.
type XMLNode = Record<string, any> & {
    "~name": string,
    "~children": XMLNode[],
}

async function parseXMLFile(filePath: string): Promise<XMLNode> {
    // Not flattened, so that "~children" keeps the statements in document order.
    return parse(await readFile(filePath, "utf-8")) as unknown as XMLNode;
}

function childElements(node: XMLNode): XMLNode[] {
    return (node["~children"] ?? []).filter(child => !child["~name"].startsWith("~"));
}

// Recursively yields every ".xml" file under the given directory, sorted for a deterministic output.
async function* walkXML(dir: string): AsyncGenerator<string> {
    const entries = (await readdir(dir, { withFileTypes: true }))
        .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

    for (const entry of entries) {
        const path = join(dir, entry.name);

        if (entry.isDirectory()) {
            yield* walkXML(path);
        } else if (entry.isFile() && entry.name.endsWith(".xml")) {
            yield path;
        }
    }
}

// Gameplay database files, skipping scenarios (only loaded with their own mod) and localized texts.
function isGameplayFile(subPath: string) {
    const dirs = subPath.split("/").slice(0, -1);

    return dirs.includes("Gameplay")
        && !dirs.some(dir => /scenario/i.test(dir) || /text/i.test(dir));
}

function dlcOf(subPath: string): DLC {
    if (subPath.startsWith(expansionDirs.BNW)) return "BNW";
    if (subPath.startsWith(expansionDirs.GnK)) return "GnK";
    return "Vanilla";
}

// An expansion loads the base game files, replacing those sharing a file name with its own, then its new files.
function effectiveFiles(dlc: DLC, filesByDLC: Record<DLC, string[]>): string[] {
    if (dlc === "Vanilla") return filesByDLC.Vanilla;

    const overrides = new Map(filesByDLC[dlc].map(file => [basename(file).toLowerCase(), file]));
    const used = new Set<string>();

    const files = filesByDLC.Vanilla.map(file => {
        const override = overrides.get(basename(file).toLowerCase());

        if (override == null) return file;

        used.add(override);
        return override;
    });

    return [...files, ...filesByDLC[dlc].filter(file => !used.has(file))];
}

function parseColumn(col: XMLNode): Column {
    return {
        name: col["@name"],
        type: col["@type"],
        primaryKey: col["@primarykey"] === "true" || undefined,
        autoIncrement: col["@autoincrement"] === "true" || undefined,
        notNull: col["@notnull"] === "true" || undefined,
        unique: col["@unique"] === "true" || undefined,
        reference: col["@reference"],
        defaultValue: col["@default"],
    }
}

// The column rows are identified by, e.g. "Type" in "Buildings".
function keyColumn(columns: Column[]): string | undefined {
    return columns.find(column => column.type === "text" && column.notNull && column.unique)?.name;
}

// A column value can be given either as an attribute or as a child element.
function columnValue(statement: XMLNode, column: string): string | undefined {
    if (typeof statement["@" + column] === "string") return statement["@" + column];

    const element = childElements(statement).find(child => child["~name"] === column);

    return typeof element?.["#text"] === "string" ? element["#text"] : undefined;
}

function scrapeDLC(dlc: DLC, files: string[], docs: Map<string, XMLNode>): DLCData {
    const data: DLCData = { tables: {}, types: {} };

    // Schemas first, as data can be inserted in tables defined by later files.
    for (const file of files) {
        for (const statement of childElements(docs.get(file)!)) {
            if (statement["~name"] !== "Table") continue;

            const name: string = statement["@name"];

            if (Object.hasOwn(data.tables, name)) {
                console.log(`WARNING: ${dlc} table "${name}" is defined again in "${file}"`);
            }

            data.tables[name] = childElements(statement)
                .filter(child => child["~name"] === "Column")
                .map(parseColumn);
        }
    }

    const types: Record<string, Set<string>> = {};

    for (const file of files) {
        for (const table of childElements(docs.get(file)!)) {
            const name = table["~name"];
            const columns = data.tables[name];
            const key = columns && keyColumn(columns);

            if (key == null) continue;

            const values = types[name] ??= new Set();

            for (const statement of childElements(table)) {
                const kind = statement["~name"];

                if (insertStatements.includes(kind)) {
                    const value = columnValue(statement, key);

                    if (value != null) values.add(value);
                } else if (kind === "Delete") {
                    const value = columnValue(statement, key);

                    if (value != null) {
                        values.delete(value);
                    } else if (Object.keys(statement).length === 0 && childElements(statement).length === 0) {
                        values.clear();
                    } else {
                        console.log(`WARNING: Unsupported delete in ${dlc} table "${name}" from "${file}"`);
                    }
                } else if (kind === "Update") {
                    const set = childElements(statement).find(child => child["~name"] === "Set");

                    if (set != null && columnValue(set, key) != null) {
                        console.log(`WARNING: Unsupported key update in ${dlc} table "${name}" from "${file}"`);
                    }
                }
            }
        }
    }

    for (const name in types) {
        if (types[name].size > 0) data.types[name] = Array.from(types[name]);
    }

    return data;
}

async function scrapeAssets(): Promise<Record<DLC, DLCData>> {
    const filesByDLC: Record<DLC, string[]> = { Vanilla: [], GnK: [], BNW: [] };
    const docs = new Map<string, XMLNode>();

    for await (const path of walkXML(assetsDir)) {
        const subPath = path.replace(assetsDir + "/", "");

        if (!isGameplayFile(subPath)) continue;

        console.log("Parsing " + subPath);

        try {
            const doc = await parseXMLFile(path);
            const gameData = childElements(doc).find(child => child["~name"] === "GameData");

            if (gameData == null) continue;

            docs.set(subPath, gameData);
            filesByDLC[dlcOf(subPath)].push(subPath);
        } catch (e) {
            console.log("Error while parsing file \"" + path + "\" : \n", String(e));
        }
    }

    return Object.fromEntries(DLCS.map(dlc => [dlc, scrapeDLC(dlc, effectiveFiles(dlc, filesByDLC), docs)])) as Record<DLC, DLCData>;
}

let Data: Record<DLC, DLCData>;

if (!existsSync(tablesCache)) {
    Data = await scrapeAssets();

    await writeFile(tablesCache, JSON.stringify(Data, undefined, 4));
} else {
    Data = JSON.parse(await readFile(tablesCache, "utf-8"));
}

const typeNameSuffix = "Type";

function typeName(dlc: DLC, table: string) {
    return `${dlc}_${table}${typeNameSuffix}`;
}

// The union of the rows key values referenced by a column, if known.
function columnType(dlc: DLC, table: string, column: Column): string {
    const tables = Data[dlc].tables;
    const types = Data[dlc].types;

    if (column.name === keyColumn(tables[table]) && Object.hasOwn(types, table)) {
        return typeName(dlc, table);
    }

    const reference = column.reference?.match(/^(\w+)\((\w+)\)$/);

    if (reference != null) {
        const [, referencedTable, referencedColumn] = reference;

        if (Object.hasOwn(types, referencedTable) && keyColumn(tables[referencedTable]) === referencedColumn) {
            return typeName(dlc, referencedTable);
        }
    }

    return column.type.toUpperCase();
}

function buildTableType(dlc: DLC, tableName: string, columns: Column[]) {
    let text = `declare type ${dlc}_${tableName} = {`

    for (const column of columns) {
        text += "\n\t/**"

        if (typeof(column.defaultValue) != "undefined") {
            text += "\n\t * @default " + column.defaultValue
        }

        if (column.primaryKey) {
            text += "\n\t * Primary Key"
        }

        if (column.autoIncrement) {
            text += "\n\t * Auto Increment"
        }

        if (column.notNull) {
            text += "\n\t * Not Null"
        }

        if (column.unique) {
            text += "\n\t * Unique"
        }

        if (column.reference) {
            text += "\n\t * Reference: " + column.reference
        }

        text += "\n\t */"

        text += `\n\t${column.name}: ${columnType(dlc, tableName, column)},`
    }

    return text + "\n}\n\n"
}

function buildTypeUnion(dlc: DLC, tableName: string, values: string[]) {
    return `declare type ${typeName(dlc, tableName)} =\n${values.map(value => `\t| ${JSON.stringify(value)}`).join("\n")};\n\n`
}

for (const dlc of DLCS) {
    let fileText = "/// <reference path=\"../../sql_types.d.ts\" />" + "\n\n"

    for (const tableName in Data[dlc].tables) {
        fileText += buildTableType(dlc, tableName, Data[dlc].tables[tableName])
    }

    for (const tableName in Data[dlc].types) {
        fileText += buildTypeUnion(dlc, tableName, Data[dlc].types[tableName])
    }

    await mkdir(join(tableTypesDir, dlc), { recursive: true })

    await writeFile(join(tableTypesDir, dlc, dlc + ".d.ts"), fileText)
}

const allTables = Array.from(new Set(DLCS.flatMap(dlc => Object.keys(Data[dlc].tables))));
const typedTables = allTables.filter(table => DLCS.some(dlc => Object.hasOwn(Data[dlc].types, table)));

for (const table of typedTables) {
    if (allTables.includes(table + typeNameSuffix)) {
        console.log(`ERROR: "${table}${typeNameSuffix}" is both a table and the type of "${table}" rows`);
    }
}

// Picks the type matching the DLC, or the fallback when the DLC doesn't have it.
function dlcSwitch(name: (dlc: DLC) => string, has: (dlc: DLC) => boolean, fallback: string) {
    return `TableType<D, ${DLCS.map(dlc => has(dlc) ? name(dlc) : fallback).join(", ")}>`
}

const lines = [
    ...allTables.map(table => `declare type ${table}<D extends DLCs> = ${dlcSwitch(
        dlc => `${dlc}_${table}`,
        dlc => Object.hasOwn(Data[dlc].tables, table),
        "null",
    )};`),
    ...typedTables.map(table => `declare type ${table}${typeNameSuffix}<D extends DLCs> = ${dlcSwitch(
        dlc => typeName(dlc, table),
        dlc => Object.hasOwn(Data[dlc].types, table),
        "never",
    )};`),
    `/** Every database table, \`null\` when missing from the DLC. */\ndeclare interface GameInfoTables<D extends DLCs> {\n${allTables.map(table => `\t${table}: ${table}<D>;`).join("\n")}\n}`,
    `/** The key values (usually \`Type\`) of the rows of each table, \`never\` when missing from the DLC. */\ndeclare interface GameInfoTypeKeys<D extends DLCs> {\n${typedTables.map(table => `\t${table}: ${table}${typeNameSuffix}<D>;`).join("\n")}\n}`,
];

await writeFile(join(tableTypesDir, "index.d.ts"), lines.join("\n\n") + "\n");