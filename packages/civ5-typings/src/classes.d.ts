type int = number;
type bool = boolean;

/**
 * A table of the game database, rows can be:
 * - looked up by their key (usually `Type`) or `ID`: `GameInfo.Buildings.BUILDING_MONUMENT`, `GameInfo.Buildings[0]`
 * - iterated, optionally filtered by an SQL condition or column values: `GameInfo.Buildings("Cost > 100")`, `GameInfo.Buildings({ BuildingClass: "BUILDINGCLASS_MONUMENT" })`
 */
type GameInfoTable<T, K extends string> = {
    readonly [P in K]: T
} & {
    readonly [typeOrID: string | int]: T | undefined
} & ((this: void, filter?: string | Partial<T>) => LuaIterable<T>)

type GameInfoOf<S extends DataSet> = {
    readonly [K in keyof S["tables"] & string]: GameInfoTable<S["tables"][K], DataSetKeys<S, K>>
}

// See: http://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)
declare const GameInfo: GameInfoOf<ActiveDataSet>;

/** The `ID` of every row, by key (usually `Type`): `GameInfoTypes.BUILDING_MONUMENT` */
declare const GameInfoTypes: {
    readonly [T in ActiveDataSet["keys"][keyof ActiveDataSet["keys"]]]: int
} & {
    readonly [type: string]: int | undefined
};