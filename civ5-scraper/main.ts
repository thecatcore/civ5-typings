import { parse } from "https://deno.land/x/xml@2.1.1/mod.ts"
import { document } from "https://deno.land/x/xml@2.1.1/utils/types.ts";
import { walk } from "https://deno.land/std@0.192.0/fs/walk.ts";

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

async function parseXMLFile(filePath: string) {
    return parse(decoder.decode(await Deno.readFile(filePath)), {
        flatten: true,
    })
}

const Tables: Record<string, Table[]> = {}

for await (const paf of walk("/home/arthur/.steam/steam/steamapps/common/Sid Meier's Civilization V/steamassets/assets", {
    exts: [
        "xml",
        ".xml"
    ]
})) {
    console.log("Parsing " + paf.path)
    if (paf.isFile) {
        const subPath = paf.path.replace("/home/arthur/.steam/steam/steamapps/common/Sid Meier's Civilization V/steamassets/assets/", "")
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

                                            if (!Tables[uniqueName]) {
                                                Tables[uniqueName] = []
                                            }

                                            Tables[uniqueName].push({
                                                name: table["@name"],
                                                columns: columnlist
                                            })
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

Deno.mkdir("./typings")

for (const key in Tables) {
    const tables = Tables[key];

    console.log("Generating typings for tables in " + key)

    let fileText = ""

    for (const i in tables) {
        const table = tables[i];

        fileText += buildTableType(key, table)
    }

    await Deno.writeFile("./typings/" + key + ".d.ts", encoder.encode(fileText))
}

type Table = {
    name: string,
    columns: Column[]
}

function parseColumn(col: Record<string, any>): Column {
    return {
        name: col["@name"],
        type: col["@type"],
        primaryKey: col["@primarykey"],
        autoIncrement: col["@autoincrement"],
        notNull: col["@notnull"],
        unique: col["@unique"],
        reference: col["@reference"],
        defaultValue: col["@default"]
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

function buildTableType(name: string, table: Table) {
    let text = `declare type ${name + "_" + table.name} = {`

    for (const i in table.columns) {
        const column = table.columns[i];

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