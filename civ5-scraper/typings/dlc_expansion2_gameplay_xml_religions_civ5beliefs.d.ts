declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Beliefs = {
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
	 * @default false
	 */
	Pantheon: BOOLEAN,
	/**
	 * @default false
	 */
	Founder: BOOLEAN,
	/**
	 * @default false
	 */
	Follower: BOOLEAN,
	/**
	 * @default false
	 */
	Enhancer: BOOLEAN,
	/**
	 * @default false
	 */
	Reformation: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresPeace: BOOLEAN,
	/**
	 * @default false
	 */
	ConvertsBarbarians: BOOLEAN,
	/**
	 * @default false
	 */
	FaithPurchaseAllGreatPeople: BOOLEAN,
	/**
	 * @default 0
	 */
	MinPopulation: INTEGER,
	/**
	 * @default 0
	 */
	MinFollowers: INTEGER,
	/**
	 * @default 0
	 */
	MaxDistance: INTEGER,
	/**
	 * @default 0
	 */
	CityGrowthModifier: INTEGER,
	/**
	 * @default 0
	 */
	FaithFromKills: INTEGER,
	/**
	 * @default 0
	 */
	FaithFromDyingUnits: INTEGER,
	/**
	 * @default 0
	 */
	RiverHappiness: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerCity: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerFollowingCity: FLOAT,
	/**
	 * @default 0
	 */
	HappinessPerXPeacefulForeignFollowers: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityRangeStrikeModifier: INTEGER,
	/**
	 * @default 0
	 */
	CombatModifierEnemyCities: INTEGER,
	/**
	 * @default 0
	 */
	CombatModifierFriendlyCities: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	CityStateFriendshipModifier: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlayerHappiness: INTEGER,
	/**
	 * @default 0
	 */
	PlayerCultureModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerFollowingCity: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerXFollowers: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerFirstCityConversion: INTEGER,
	/**
	 * @default 0
	 */
	SciencePerOtherReligionFollower: INTEGER,
	/**
	 * @default 0
	 */
	SpreadDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpreadStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	ProphetStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	ProphetCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	MissionaryStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	MissionaryCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyCityStateSpreadModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonExpendedFaith: INTEGER,
	/**
	 * @default 0
	 */
	CityStateMinimumInfluence: INTEGER,
	/**
	 * @default 0
	 */
	CityStateInfluenceModifier: INTEGER,
	/**
	 * @default 0
	 */
	OtherReligionPressureErosion: INTEGER,
	/**
	 * @default 0
	 */
	SpyPressure: INTEGER,
	/**
	 * @default 0
	 */
	InquisitorPressureRetention: INTEGER,
	/**
	 * @default 0
	 */
	FaithBuildingTourism: INTEGER,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	ObsoleteEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Resources(Type)
	 */
	ResourceRevealed: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	SpreadModifierDoublingTech: TEXT,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_BuildingClassYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_BuildingClassHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	Happiness: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_BuildingClassTourism = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * @default 0
	 */
	Tourism: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_BuildingClassFaithPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_CityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_HolyCityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_EraFaithUnitPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_FeatureYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_ImprovementYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
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

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_MaxYieldModifierPerFollower = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Max: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_ResourceQuantityModifiers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_ResourceHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	HappinessChange: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_ResourceYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_TerrainYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangeAnySpecialist = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangePerForeignCity = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangePerXForeignFollowers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	ForeignFollowers: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangeTradeRoute = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangeNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldChangeWorldWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_religions_civ5beliefs_Belief_YieldModifierNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

