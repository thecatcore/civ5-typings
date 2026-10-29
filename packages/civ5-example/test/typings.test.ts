// Type level tests of the typings, checked by `pnpm typecheck`: each `@ts-expect-error` fails the check if the line below it compiles.

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Accepts<T, V extends T> = V;

export type Tests = [
    // The configured data set is the active one.
    Expect<Equal<ActiveDataSet, ExampleDataSet>>,

    // The mod adds keys to the existing ones, columns to existing tables, and new tables.
    Accepts<ExampleKeys["Buildings"], "BUILDING_MONUMENT">,
    Accepts<ExampleKeys["Buildings"], "BUILDING_EXAMPLE_WONDER">,
    Expect<Equal<ExampleTables["Buildings"]["ExampleBonus"], INTEGER>>,
    Expect<Equal<ExampleTables["Buildings"]["Type"], GnK_BNW_BuildingsType>>,
    Expect<Equal<DataSetKeys<ActiveDataSet, "Example_Rewards">, "EXAMPLE_REWARD_SMALL" | "EXAMPLE_REWARD_BIG">>,

    // Both expansions are optional: Gods and Kings civilizations only exist with it.
    Accepts<GnK_DataSet["keys"]["Civilizations"], "CIVILIZATION_AUSTRIA">,
    Accepts<GnK_BNW_DataSet["keys"]["Civilizations"], "CIVILIZATION_AUSTRIA">,
    // @ts-expect-error
    Accepts<BNW_DataSet["keys"]["Civilizations"], "CIVILIZATION_AUSTRIA">,
    // @ts-expect-error
    Accepts<Vanilla_DataSet["keys"]["Civilizations"], "CIVILIZATION_AUSTRIA">,

    // Brave New World content only exists with it.
    Accepts<BNW_DataSet["keys"]["Civilizations"], "CIVILIZATION_ZULU">,
    // @ts-expect-error
    Accepts<GnK_DataSet["keys"]["Civilizations"], "CIVILIZATION_ZULU">,

    // Tables missing from a data set.
    // @ts-expect-error
    Expect<Equal<Vanilla_DataSet["tables"]["GreatWorks"], never>>,
    // @ts-expect-error
    Expect<Equal<GnK_DataSet["keys"]["GreatWorks"], never>>,
    Expect<Equal<keyof GameInfoOf<Vanilla_DataSet> & "GreatWorks", never>>,
    Expect<Equal<keyof GameInfoOf<BNW_DataSet> & "GreatWorks", "GreatWorks">>,
];

// Values are only checked here, the test file isn't meant to run.
declare const vanilla: GameInfoOf<Vanilla_DataSet>;

// @ts-expect-error
vanilla.GreatWorks;

// @ts-expect-error
GameInfo.Buildings.BUILDING_MONUMENT.NotAColumn;

// Unknown keys may be looked up, but may not exist.
// @ts-expect-error
GameInfo.Buildings["BUILDING_FROM_ANOTHER_MOD"].Cost;

// Filters only take existing columns.
// @ts-expect-error
GameInfo.Buildings({ NotAColumn: 1 });