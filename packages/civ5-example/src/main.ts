function describeBuilding(building: ExampleTables["Buildings"]): string {
    return `${building.Type}: ${building.Cost} production, ${building.ExampleBonus} bonus`;
}

// Iterating a table, optionally filtered.
for (const building of GameInfo.Buildings("Cost > 100")) {
    print(describeBuilding(building));
}

for (const unit of GameInfo.Units({ Domain: "DOMAIN_SEA" })) {
    print(unit.Type, unit.Combat);
}

// Looking up rows by key, from the base game, an expansion or the mod.
const monument = GameInfo.Buildings.BUILDING_MONUMENT;
const austria = GameInfo.Civilizations.CIVILIZATION_AUSTRIA;
const reward = GameInfo.Example_Rewards.EXAMPLE_REWARD_BIG;

print(monument.Cost, austria.Description, reward.Gold);

// A key that may not exist, e.g. coming from another mod.
const maybe = GameInfo.Buildings["BUILDING_FROM_ANOTHER_MOD"];

if (maybe != null) {
    print(describeBuilding(maybe));
}

print(GameInfoTypes.BUILDING_EXAMPLE_WONDER, GameInfoTypes.UNIT_AUSTRIAN_HUSSAR);