// dlc/expansion/gameplay/xml/civilizations/civ5traits

declare type GnK_Traits = {
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
	ShortDescription: TEXT,
	/**
	 * @default 0
	 */
	LevelExperienceModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatScientistRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralExtraBonus: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonGiftInfluence: INTEGER,
	/**
	 * @default 0
	 */
	MaxGlobalBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	MaxTeamBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	MaxPlayerBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityUnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	PopulationUnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateBonusModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateFriendshipModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionExtraUnits: INTEGER,
	/**
	 * @default 0
	 */
	SeaBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	LandUnitMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	NavalUnitMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalBuildingModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromKills: INTEGER,
	/**
	 * @default 0
	 */
	CityCultureBonus: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteChange: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlunderModifier: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeDurationModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeMoveChange: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraEmbarkMoves: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderFirstFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderSubsequentFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderYieldModifier: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderHappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	NearbyImprovementCombatBonus: INTEGER,
	/**
	 * @default 0
	 */
	NearbyImprovementBonusRange: INTEGER,
	/**
	 * @default 0
	 */
	CultureBuildingYieldChange: INTEGER,
	/**
	 * @default 0
	 */
	CombatBonusVsHigherTech: INTEGER,
	/**
	 * @default 0
	 */
	CombatBonusVsLargerCiv: INTEGER,
	/**
	 * @default 0
	 */
	RazeSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	DOFGreatPersonModifier: INTEGER,
	/**
	 * @default 0
	 */
	LuxuryHappinessRetention: INTEGER,
	/**
	 * @default 0
	 */
	ExtraSpies: INTEGER,
	/**
	 * @default false
	 */
	FightWellDamaged: BOOLEAN,
	/**
	 * @default false
	 */
	MoveFriendlyWoodsAsRoad: BOOLEAN,
	/**
	 * @default false
	 */
	FasterAlongRiver: BOOLEAN,
	/**
	 * @default false
	 */
	FasterInHills: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedAllWater: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedToLandFlatCost: BOOLEAN,
	/**
	 * @default false
	 */
	NoHillsImprovementMaintenance: BOOLEAN,
	/**
	 * @default false
	 */
	TechBoostFromCapitalScienceBuildings: BOOLEAN,
	/**
	 * @default false
	 */
	StaysAliveZeroCities: BOOLEAN,
	/**
	 * @default false
	 */
	FaithFromUnimprovedForest: BOOLEAN,
	/**
	 * @default false
	 */
	BonusReligiousBelief: BOOLEAN,
	/**
	 * @default false
	 */
	AbleToAnnexCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	CrossesMountainsAfterGreatGeneral: BOOLEAN,
	/**
	 * @default false
	 */
	MayaCalendarBonuses: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	FreeUnit: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	FreeUnitPrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	CombatBonusImprovement: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuilding: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuildingOnConquest: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type GnK_Trait_ExtraYieldThresholds = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_YieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_YieldChangesStrategicResources = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_YieldChangesNaturalWonder = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_YieldModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_FreePromotions = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type GnK_Trait_FreePromotionUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type GnK_Trait_MovesChangeUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	MovesChange: INTEGER,
}

declare type GnK_Trait_Terrains = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 */
	TerrainType: TEXT,
	/**
	 * @default 0
	 */
	StrategicResourceQuantityModifier: INTEGER,
}

declare type GnK_Trait_ResourceQuantityModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type GnK_Trait_FreeResourceFirstXCities = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	ResourceQuantity: INTEGER,
	/**
	 */
	NumCities: INTEGER,
}

declare type GnK_Trait_ImprovementYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_SpecialistYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type GnK_Trait_UnimprovedFeatureYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

