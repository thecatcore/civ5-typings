import { parse } from "@libs/xml"
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

// Settings can also be given in a ".env" file next to this script, see ".env.example", the environment takes precedence.
const envFile = resolve(import.meta.dirname, ".env");

if (existsSync(envFile)) process.loadEnvFile(envFile);

const assetsDir = process.env.CIV5_ASSETS_DIR;

if (assetsDir == null || assetsDir === "") {
    console.error(`ERROR: CIV5_ASSETS_DIR is not set, set it in "${envFile}" or the environment to your "Sid Meier's Civilization V/Assets" folder`);
    process.exit(1);
}

const tablesCache = resolve(import.meta.dirname, "tables.json");
const tableTypesDir = resolve(import.meta.dirname, "../civ5-typings/src/table_types");

const EXPANSIONS = ["GnK", "BNW"] as const;
type Expansion = typeof EXPANSIONS[number];
type Layer = "Vanilla" | Expansion;

// Folder (relative to the assets) holding each expansion's files, layered on top of the base game ones.
const expansionDirs: Record<Expansion, string> = {
    GnK: "DLC/Expansion/",
    BNW: "DLC/Expansion2/",
};

// Both expansions are optional, the enabled ones are layered on top of the base game in this order.
const DLCS = ["Vanilla", "GnK", "BNW", "GnK_BNW"] as const;
type DLC = typeof DLCS[number];

const dlcExpansions: Record<DLC, Expansion[]> = {
    Vanilla: [],
    GnK: ["GnK"],
    BNW: ["BNW"],
    GnK_BNW: ["GnK", "BNW"],
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

function layerOf(subPath: string): Layer {
    if (subPath.startsWith(expansionDirs.BNW)) return "BNW";
    if (subPath.startsWith(expansionDirs.GnK)) return "GnK";
    return "Vanilla";
}

// An expansion loads the files of the layers below it, replacing those sharing a file name with its own, then its new files.
function applyExpansion(files: string[], expansionFiles: string[]): string[] {
    const overrides = new Map(expansionFiles.map(file => [basename(file).toLowerCase(), file]));
    const used = new Set<string>();

    const layered = files.map(file => {
        const override = overrides.get(basename(file).toLowerCase());

        if (override == null) return file;

        used.add(override);
        return override;
    });

    return [...layered, ...expansionFiles.filter(file => !used.has(file))];
}

function effectiveFiles(dlc: DLC, filesByLayer: Record<Layer, string[]>): string[] {
    return dlcExpansions[dlc].reduce((files, expansion) => applyExpansion(files, filesByLayer[expansion]), filesByLayer.Vanilla);
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
    const filesByLayer: Record<Layer, string[]> = { Vanilla: [], GnK: [], BNW: [] };
    const docs = new Map<string, XMLNode>();

    for await (const path of walkXML(assetsDir!)) {
        const subPath = path.replace(assetsDir + "/", "");

        if (!isGameplayFile(subPath)) continue;

        console.log("Parsing " + subPath);

        try {
            const doc = await parseXMLFile(path);
            const gameData = childElements(doc).find(child => child["~name"] === "GameData");

            if (gameData == null) continue;

            docs.set(subPath, gameData);
            filesByLayer[layerOf(subPath)].push(subPath);
        } catch (e) {
            console.log("Error while parsing file \"" + path + "\" : \n", String(e));
        }
    }

    return Object.fromEntries(DLCS.map(dlc => [dlc, scrapeDLC(dlc, effectiveFiles(dlc, filesByLayer), docs)])) as Record<DLC, DLCData>;
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

// The tables of the DLC and the key values of their rows, see "data_set.d.ts".
function buildDataSet(dlc: DLC) {
    const tables = Object.keys(Data[dlc].tables).map(table => `\t\t${table}: ${dlc}_${table},`);
    const keys = Object.keys(Data[dlc].types).map(table => `\t\t${table}: ${typeName(dlc, table)},`);

    return `declare interface ${dlc}_DataSet {\n\ttables: {\n${tables.join("\n")}\n\t},\n\tkeys: {\n${keys.join("\n")}\n\t},\n}\n`
}

for (const dlc of DLCS) {
    let fileText = "/// <reference path=\"../../sql_types.d.ts\" />" + "\n\n"

    for (const tableName in Data[dlc].tables) {
        fileText += buildTableType(dlc, tableName, Data[dlc].tables[tableName])
    }

    for (const tableName in Data[dlc].types) {
        fileText += buildTypeUnion(dlc, tableName, Data[dlc].types[tableName])
    }

    fileText += buildDataSet(dlc)

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

// Shorthands for the rows and row keys of each table, in the active data set by default, `never` when missing from it.
const lines = [
    ...allTables.map(table => `declare type ${table}<S extends DataSet = ActiveDataSet> = DataSetTable<S, "${table}">;`),
    ...typedTables.map(table => `declare type ${table}${typeNameSuffix}<S extends DataSet = ActiveDataSet> = DataSetKeys<S, "${table}">;`),
];

await writeFile(join(tableTypesDir, "index.d.ts"), lines.join("\n\n") + "\n");