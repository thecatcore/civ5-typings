import { parse } from "@libs/xml"
import { walk, exists } from "@std/fs";
import * as console from "node:console";

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

const assetsDir = "/home/arthur/.steam/steam/steamapps/common/Sid Meier's Civilization V/Assets";

async function parseXMLFile(filePath: string) {
    return parse(decoder.decode(await Deno.readFile(filePath)), {
        flatten: {
            attributes: true,
            text: true,
            empty: true,
        },
    })
}

const Tables: Record<string, Record<string, Column[]>> = {}

if (!await exists("./tables.json")) {
    for await (const paf of walk(assetsDir, {
        exts: [
            "xml",
            ".xml"
        ]
    })) {
        console.log("Parsing " + paf.path)
        if (paf.isFile) {
            const subPath = paf.path.replace(assetsDir + "/", "")
            try {
                const doc = await parseXMLFile(paf.path);

                if (Object.hasOwn(doc, "GameData")) {
                    const gameData = doc.GameData
            
                    if (gameData != null && typeof(gameData) == "object") {
                        if (Object.hasOwn(gameData, "Table")) {
                            const tables = gameData.Table
            
                            if (tables != null && Array.isArray(tables)) {
                                for (const j in tables) {
                                    const table = tables[j];
            
                                    if (table != null && typeof(table) == "object") {
                                        const uniqueName = subPath.replace(".xml", "").replaceAll("/", "_")
            
                                        if (Object.hasOwn(table, "Column")) {
                                            const columns = table.Column;
            
                                            if (columns != null && Array.isArray(columns)) {
                                                const columnlist: Column[] = []
                                                for (const k in columns) {
                                                    const column = columns[k];
            
                                                    if (column != null && typeof(column) == "object") {
                                                        columnlist.push(parseColumn(column))
                                                    }
                                                }

                                                if (!Object.hasOwn(Tables, uniqueName)) {
                                                    Tables[uniqueName] = {}
                                                }

                                                Tables[uniqueName][table["@name"]] = columnlist
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                if (e) {
                    console.log("Error while parsing file \"" + paf.path + "\" : \n", e.toString())
                }
            }
        }
    }

    await Deno.writeFile("./tables.json", encoder.encode(JSON.stringify(Tables, undefined, 4)))
} else {
    const old_Tables = JSON.parse(decoder.decode(await Deno.readFile('./tables.json')));
    for (const key in old_Tables) {
        Tables[key] = old_Tables[key];
    }
}

const groupedKeys = Object.groupBy(Object.keys(Tables), (entry) => {
    if (entry.startsWith("DLC_Expansion2")) return "BNW";
    if (entry.startsWith("DLC_Expansion")) return "GnK";
    return "Vanilla"
});

function flatten(value, index, array) {
    this.push(...array[index])
    return value;
}

if (!await exists("./typings")) {
    await Deno.mkdir("./typings")
}

if (!await exists("./typings/tables")) {
    await Deno.mkdir("./typings/tables")
}

for (const key in groupedKeys) {
    const files = groupedKeys[key as 'Vanilla'];

    let fileText = "/// <reference path=\"../../sql_types.d.ts\" />" + "\n\n"

    for (const file of files ?? []) {
        const tables = Tables[file];

        for (const tableName in tables) {
            const table = tables[tableName];

            fileText += buildTableType(key + "_" + tableName, table)
        }
    }

    if (!await exists("../src/table_types/" + key)) {
        await Deno.mkdir("../src/table_types/" + key)
    }

    await Deno.writeFile("../src/table_types/" + key + "/" + key + ".d.ts", encoder.encode(fileText))
}

const expansion2Tables = Object.fromEntries(Object.entries(groupedKeys)
    .map(([key, value]) => [key, value.map(file => {
        return Object.keys(Tables[file]);
    }).flatMap(flatten, [] as string[])]))

const uniqueTableList: Set<string> = new Set(Object.values(expansion2Tables).flatMap(flatten, [] as string[]));

const availability = Object.fromEntries(Array.from(uniqueTableList).map((entry) => {
    const expansions = [];

    for (const key in expansion2Tables) {
        if (expansion2Tables[key].includes(entry)) {
            expansions.push(key);
        }
    }

    return [entry, expansions];
}))

const lines = Object.entries(availability).map(([key, value]) => {
    let text = `declare type ${key}<D extends DLCs> = `;

    if (value.includes("Vanilla")) {
        if (value.includes("GnK")) {
            if (value.includes("BNW")) {
                text += `TableType<D, Vanilla_${key}, GnK_${key}, BNW_${key}>`
            } else {
                console.log("ERROR: BNW not found in " + key + " but G&K and Vanilla are")
                text += `TableType<D, Vanilla_${key}, GnK_${key}, null>`
            }
        } else if (value.includes("BNW")) {
            text += `TableTypeNoGnK<D, Vanilla_${key}, BNW_${key}>`
        } else {
            text += `TableTypeVanilla<D, Vanilla_${key}>`
        }
    } else if (value.includes("GnK")) {
        if (value.includes("BNW")) {
            text += `TableTypeGnK<D, GnK_${key}, BNW_${key}>`
        } else {
            console.log("ERROR: BNW not found in " + key + " but G&K is")
            text += `TableTypeGnK<D, GnK_${key}, null>`
        }
    } else if (value.includes("BNW")) {
        text += `TableTypeBNW<D, BNW_${key}>`
    } else {
        console.log("ERROR: No expansion found in " + key)
        text += `TableType<D, null, null, null>`
    }

    return text + ";"
});

await Deno.writeFile("../src/table_types/index.d.ts", encoder.encode(lines.join("\n\n")));


const UnsTables: Record<string, string> = {}

for (const file in Tables) {
    for (const tableName in Tables[file]) {
        const columns = Tables[file][tableName];

        if (UnsTables[tableName]) continue;

        for (const column of columns) {
            if (column.type === "text" && column.notNull && column.unique) {
                console.log(column.name + " " + tableName)
                UnsTables[tableName] = column.name;
                break;
            }
        }
    }
}

const TablesToRows: Record<string, Record<string, object[]>> = {}

for await (const paf of walk(assetsDir, {
    exts: [
        "xml",
        ".xml"
    ]
})) {
        if (paf.isFile) {
            const subPath = paf.path.replace(assetsDir + "/", "")

            if (subPath.includes("scenario")) continue;

            try {
                const doc = await parseXMLFile(paf.path);
                const uniqueName = subPath.replace(".xml", "").replaceAll("/", "_")

                if (Object.hasOwn(doc, "GameData")) {
                    const gameData = doc.GameData

                    if (gameData != null && typeof(gameData) == "object") {

                        for (const tableName in UnsTables) {
                            if (Object.hasOwn(gameData, tableName)) {
                                const table = gameData[tableName];

                                if (Object.hasOwn(table, "Row")) {
                                    if (!Object.hasOwn(TablesToRows, uniqueName)) {
                                        TablesToRows[uniqueName] = {}
                                    }

                                    const rows = table["Row"];

                                    if (Array.isArray(rows)) {
                                        TablesToRows[uniqueName][tableName] = rows;
                                    } else if (typeof rows == "object") {
                                        TablesToRows[uniqueName][tableName] = [rows];
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                if (e) {
                    console.log("Error while parsing file \"" + paf.path + "\" : \n", e.toString())
                }
            }
        }
}

console.log(Object.fromEntries(Object.entries(TablesToRows).map(([key, value]) => {
    return [key, Object.fromEntries(Object.entries(value).map(([tableName, rows]) => {
        return [tableName, rows.length]
    }))]
})))

type Table = {
    name: string,
    columns: Column[]
}

// deno-lint-ignore no-explicit-any
function parseColumn(col: Record<string, any>): Column {
    return {
        name: col["name"],
        type: col["type"],
        primaryKey: col["primarykey"],
        autoIncrement: col["autoincrement"],
        notNull: col["notnull"],
        unique: col["unique"],
        reference: col["reference"],
        defaultValue: col["default"]
    }
}

type Column = {
    name: string,
    type: string,
    primaryKey?: boolean,
    autoIncrement?: boolean,
    notNull?: boolean,
    unique?: boolean,
    reference?: string,
    defaultValue?: string | number | boolean
}

function buildTableType(tableName: string, columns: Column[]) {
    let text = `declare type ${tableName} = {`

    for (const i in columns) {
        const column = columns[i];

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

        text += `\n\t${column.name}: ${column.type.toUpperCase()},`
    }


    return text + "\n}\n\n"
}