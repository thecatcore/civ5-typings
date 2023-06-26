// gameplay/xml/gameinfo/civ5handicapinfos

declare type Vanilla_HandicapInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: TEXT,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default 0
	 */
	StartingLocPercent: INTEGER,
	/**
	 * @default 0
	 */
	AdvancedStartPointsMod: INTEGER,
	/**
	 * @default 0
	 */
	StartingPolicyPoints: INTEGER,
	/**
	 * @default 0
	 */
	HappinessDefault: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerLuxury: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	PopulationUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	Gold: INTEGER,
	/**
	 * @default 0
	 */
	GoldFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnitsPerCity: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	RouteCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	BuildingCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	ResearchPercent: INTEGER,
	/**
	 * @default 0
	 */
	PolicyPercent: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	CityProductionNumOptionsConsidered: INTEGER,
	/**
	 * @default 0
	 */
	TechNumOptionsConsidered: INTEGER,
	/**
	 * @default 0
	 */
	PolicyNumOptionsConsidered: INTEGER,
	/**
	 * @default 100
	 */
	InflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	FreeCulturePerTurn: INTEGER,
	/**
	 * @default 0
	 */
	AttitudeChange: INTEGER,
	/**
	 * @default 0
	 */
	NoTechTradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	TechTradeKnownModifier: INTEGER,
	/**
	 * @default 0
	 */
	BarbCampGold: INTEGER,
	/**
	 * @default 0
	 */
	BarbSpawnMod: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianBonus: INTEGER,
	/**
	 * @default 0
	 */
	AIBarbarianBonus: INTEGER,
	/**
	 * @default 0
	 */
	EarliestBarbarianReleaseTurn: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianLandTargetRange: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianSeaTargetRange: INTEGER,
	/**
	 * @default 0
	 */
	StartingDefenseUnits: INTEGER,
	/**
	 * @default 0
	 */
	StartingWorkerUnits: INTEGER,
	/**
	 * @default 0
	 */
	StartingExploreUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingUnitMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingDefenseUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingWorkerUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingExploreUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIDeclareWarProb: INTEGER,
	/**
	 * @default 0
	 */
	AIWorkRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIUnhappinessPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIGrowthPercent: INTEGER,
	/**
	 * @default 0
	 */
	AITrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldTrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	AICreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldCreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	AIBuildingCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitSupplyPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitUpgradePercent: INTEGER,
	/**
	 * @default 100
	 */
	AIInflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIPerEraModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIAdvancedStartPercent: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type Vanilla_HandicapInfo_Goodies = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: GoodyHuts(Type)
	 */
	GoodyType: TEXT,
}

declare type Vanilla_HandicapInfo_FreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_HandicapInfo_AIFreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

