// Type level tests of the typings, checked by `pnpm typecheck`: each `@ts-expect-error` fails the check if the line below it compiles.

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
type Accepts<T, V extends T> = V;

export type Tests = [
    // The configured data set is the active one.
    Expect<Equal<ActiveDataSet, ExampleDataSet>>,

    // The mod adds keys to the existing ones, columns to existing tables, and new tables.
    Accepts<BuildingsType, "BUILDING_MONUMENT">,
    Accepts<BuildingsType, "BUILDING_EXAMPLE_WONDER">,
    Expect<Equal<Buildings["ExampleBonus"], INTEGER>>,
    Expect<Equal<Buildings["Type"], GnK_BNW_BuildingsType>>,
    Expect<Equal<DataSetKeys<ActiveDataSet, "Example_Rewards">, "EXAMPLE_REWARD_SMALL" | "EXAMPLE_REWARD_BIG">>,

    // Both expansions are optional: Gods and Kings civilizations only exist with it.
    Accepts<CivilizationsType<GnK_DataSet>, "CIVILIZATION_AUSTRIA">,
    Accepts<CivilizationsType<GnK_BNW_DataSet>, "CIVILIZATION_AUSTRIA">,
    // @ts-expect-error
    Accepts<CivilizationsType<BNW_DataSet>, "CIVILIZATION_AUSTRIA">,
    // @ts-expect-error
    Accepts<CivilizationsType<Vanilla_DataSet>, "CIVILIZATION_AUSTRIA">,

    // Brave New World content only exists with it.
    Accepts<CivilizationsType<BNW_DataSet>, "CIVILIZATION_ZULU">,
    // @ts-expect-error
    Accepts<CivilizationsType<GnK_DataSet>, "CIVILIZATION_ZULU">,

    // Tables missing from a data set.
    Expect<Equal<GreatWorks<Vanilla_DataSet>, never>>,
    Expect<Equal<GreatWorksType<GnK_DataSet>, never>>,
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