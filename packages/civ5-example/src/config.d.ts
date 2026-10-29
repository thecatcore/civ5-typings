// The database of this mod: the complete game, plus a new building column, a new wonder and a new table.
type ExampleDataSet = ExtendDataSet<GnK_BNW_DataSet, {
    tables: {
        Buildings: { ExampleBonus: INTEGER },
        Example_Rewards: { ID: INTEGER, Type: TEXT, Gold: INTEGER },
    },
    keys: {
        Buildings: "BUILDING_EXAMPLE_WONDER",
        Example_Rewards: "EXAMPLE_REWARD_SMALL" | "EXAMPLE_REWARD_BIG",
    },
}>;

interface Civ5TypingsConfig { dataSet: ExampleDataSet }