declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvements = {
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
	Civilopedia: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementPillage: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementUpgrade: TEXT,
	/**
	 * @default false
	 */
	SpecificCivRequired: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default false
	 */
	HillsMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	FreshWaterMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	RiverSideMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	NoFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlandsOrFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFeature: BOOLEAN,
	/**
	 * @default false
	 */
	Coastal: BOOLEAN,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	DestroyedWhenPillaged: BOOLEAN,
	/**
	 * @default false
	 */
	BuildableOnResources: BOOLEAN,
	/**
	 * @default false
	 */
	BarbarianCamp: BOOLEAN,
	/**
	 * @default false
	 */
	Goody: BOOLEAN,
	/**
	 * @default false
	 */
	Permanent: BOOLEAN,
	/**
	 * @default false
	 */
	OutsideBorders: BOOLEAN,
	/**
	 * @default false
	 */
	InAdjacentFriendly: BOOLEAN,
	/**
	 * @default false
	 */
	GraphicalOnly: BOOLEAN,
	/**
	 * @default false
	 */
	CreatedByGreatPerson: BOOLEAN,
	/**
	 * @default 0
	 */
	CultureAdjacentSameType: INTEGER,
	/**
	 * @default 0
	 */
	TilesPerGoody: INTEGER,
	/**
	 * @default 0
	 */
	GoodyRange: INTEGER,
	/**
	 * @default 0
	 */
	FeatureGrowth: INTEGER,
	/**
	 * @default 0
	 */
	UpgradeTime: INTEGER,
	/**
	 * @default 0
	 */
	RiverSideUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	CoastalLandUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	HillsUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	FreshWaterUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	DefenseModifier: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyDamage: INTEGER,
	/**
	 * @default 0
	 */
	PillageGold: INTEGER,
	/**
	 * @default 0
	 */
	ResourceExtractionMod: INTEGER,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default 0
	 */
	CultureBombRadius: INTEGER,
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

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_Flavors = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_AdjacentCityYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_CoastalLandYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_FreshWaterYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_HillsYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_AdjacentMountainYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_PrereqNatureYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_RiverSideYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_ValidTerrains = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_ValidFeatures = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_ResourceTypes = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default true
	 */
	ResourceMakesValid: BOOLEAN,
	/**
	 * @default true
	 */
	ResourceTrade: BOOLEAN,
	/**
	 * @default 0
	 */
	DiscoveryRand: INTEGER,
	/**
	 * @default 0
	 */
	QuantityRequirement: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_ResourceType_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_RouteYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_TechYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_TechNoFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type dlc_expansion_gameplay_xml_terrain_civ5improvements_Improvement_TechFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

