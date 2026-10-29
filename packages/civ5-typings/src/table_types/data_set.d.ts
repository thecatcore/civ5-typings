/**
 * The game database of a ruleset: the rows of each table, and the key values (usually `Type`) of those rows.
 *
 * Both expansions are optional, so the base game has four: `Vanilla_DataSet`, `GnK_DataSet`, `BNW_DataSet` and `GnK_BNW_DataSet`
 * (Brave New World overriding the Gods and Kings data).
 */
type DataSet = {
    tables: { [table: string]: object },
    keys: { [table: string]: string },
}

type DataSetPart<E, P extends keyof DataSet> = E extends { [K in P]: infer T } ? T : {};

/**
 * Adds the tables, columns and rows of a mod to a data set:
 * ```ts
 * type MyModDataSet = ExtendDataSet<GnK_BNW_DataSet, {
 *     tables: { Buildings: { MyColumn: INTEGER }, MyTable: { ID: INTEGER, Type: TEXT } },
 *     keys: { Buildings: "BUILDING_MY_WONDER", MyTable: "MY_ROW" },
 * }>;
 * ```
 */
type ExtendDataSet<S extends DataSet, E extends Partial<DataSet>> = {
    tables: {
        [K in keyof S["tables"] | keyof DataSetPart<E, "tables">]:
            (K extends keyof S["tables"] ? S["tables"][K] : unknown) & (K extends keyof DataSetPart<E, "tables"> ? DataSetPart<E, "tables">[K] : unknown)
    },
    keys: {
        [K in keyof S["keys"] | keyof DataSetPart<E, "keys">]:
            (K extends keyof S["keys"] ? S["keys"][K] : never) | (K extends keyof DataSetPart<E, "keys"> ? DataSetPart<E, "keys">[K] : never)
    },
}

/** The rows of a table, `never` when missing from the data set. */
type DataSetTable<S extends DataSet, T extends string> = T extends keyof S["tables"] ? S["tables"][T] : never;

/** The key values of the rows of a table, `never` when missing from the data set. */
type DataSetKeys<S extends DataSet, T extends string> = T extends keyof S["keys"] ? S["keys"][T] : never;

/**
 * Augment this interface to choose the data set the game database is typed after, defaults to Gods and Kings with Brave New World:
 * ```ts
 * interface Civ5TypingsConfig { dataSet: BNW_DataSet }
 * ```
 */
interface Civ5TypingsConfig {}

type ActiveDataSet = Civ5TypingsConfig extends { dataSet: infer S extends DataSet } ? S : GnK_BNW_DataSet;