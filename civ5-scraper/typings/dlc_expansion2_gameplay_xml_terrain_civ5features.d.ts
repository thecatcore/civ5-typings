declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Features = {
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
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * @default NULL
	 */
	Help: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default 0
	 */
	StartingLocationWeight: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 * @default 0
	 */
	AppearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	DisappearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	Growth: INTEGER,
	/**
	 * Reference: Terrains(Type)
	 */
	GrowthTerrainType: TEXT,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	AdjacentUnitFreePromotion: TEXT,
	/**
	 * @default 0
	 */
	FirstFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	InBorderHappiness: INTEGER,
	/**
	 * @default 0
	 */
	OccurrenceFrequency: INTEGER,
	/**
	 * @default false
	 */
	YieldNotAdditive: BOOLEAN,
	/**
	 * @default false
	 */
	NoCoast: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiver: BOOLEAN,
	/**
	 * @default false
	 */
	NoAdjacent: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresRiver: BOOLEAN,
	/**
	 * @default false
	 */
	AddsFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCity: BOOLEAN,
	/**
	 * @default false
	 */
	NoImprovement: BOOLEAN,
	/**
	 * @default false
	 */
	VisibleAlways: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	NaturalWonder: BOOLEAN,
	/**
	 * @default false
	 */
	Rough: BOOLEAN,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 */
	EffectType: TEXT,
	/**
	 * @default 0
	 */
	EffectProbability: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default 0
	 */
	AdvancedStartRemoveCost: INTEGER,
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_FakeFeatures = {
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
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default 0
	 */
	StartingLocationWeight: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 * @default 0
	 */
	AppearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	DisappearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	Growth: INTEGER,
	/**
	 * Reference: Terrains(Type)
	 */
	GrowthTerrainType: TEXT,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * @default false
	 */
	YieldNotAdditive: BOOLEAN,
	/**
	 * @default false
	 */
	NoCoast: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiver: BOOLEAN,
	/**
	 * @default false
	 */
	NoAdjacent: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresRiver: BOOLEAN,
	/**
	 * @default false
	 */
	AddsFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCity: BOOLEAN,
	/**
	 * @default false
	 */
	NoImprovement: BOOLEAN,
	/**
	 * @default false
	 */
	VisibleAlways: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	NaturalWonder: BOOLEAN,
	/**
	 * @default false
	 */
	Rough: BOOLEAN,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 */
	EffectType: TEXT,
	/**
	 * @default 0
	 */
	EffectProbability: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default 0
	 */
	AdvancedStartRemoveCost: INTEGER,
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Feature_YieldChanges = {
	/**
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Feature_RiverYieldChanges = {
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Feature_HillsYieldChanges = {
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_terrain_civ5features_Natural_Wonder_Placement = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	NaturalWonderType: TEXT,
	/**
	 * @default -1
	 */
	EligibilityMethodNumber: INTEGER,
	/**
	 * @default 10
	 */
	OccurrenceFrequency: INTEGER,
	/**
	 * @default false
	 */
	RequireBiggestLandmass: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidBiggestLandmass: BOOLEAN,
	/**
	 * @default false
	 */
	RequireFreshWater: BOOLEAN,
	/**
	 * @default true
	 */
	AvoidFreshWater: BOOLEAN,
	/**
	 * @default true
	 */
	LandBased: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandAdjacentToOcean: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandAdjacentToOcean: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandOnePlotInland: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandOnePlotInland: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandTwoOrMorePlotsInland: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandTwoOrMorePlotsInland: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyPlotType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeFlatland: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeHills: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeMountain: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeOcean: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyTerrainType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeGrass: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBePlains: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeDesert: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeTundra: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeSnow: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeShallowWater: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeDeepWater: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyFeatureType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeNoFeature: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeForest: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeJungle: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeOasis: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeFloodPlains: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeMarsh: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeIce: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeAtoll: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutPlotTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidAnyland: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireFlatland: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentFlatland: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireHills: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentHills: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireMountain: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentMountain: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireHillsPlusMountains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentHillsPlusMountains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireOcean: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentOcean: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidFlatland: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentFlatland: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidHills: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentHills: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidMountain: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentMountain: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidHillsPlusMountains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentHillsPlusMountains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidOcean: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentOcean: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutTerrainTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireGrass: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentGrass: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequirePlains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireDesert: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentDesert: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireTundra: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentTundra: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireSnow: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentSnow: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireShallowWater: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentShallowWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireDeepWater: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentDeepWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidGrass: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentGrass: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidPlains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidDesert: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentDesert: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidTundra: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentTundra: INTEGER,
	/**
	 * @default true
	 */
	AdjacentTilesAvoidSnow: BOOLEAN,
	/**
	 * @default 0
	 */
	MaximumAllowedAdjacentSnow: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidShallowWater: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentShallowWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidDeepWater: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentDeepWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutFeatureTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireNoFeature: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentNoFeature: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireForest: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentForest: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireJungle: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentJungle: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireOasis: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentOasis: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireFloodPlains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentFloodPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireMarsh: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentMarsh: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireIce: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentIce: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireAtoll: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentAtoll: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidNoFeature: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentNoFeature: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidForest: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentForest: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidJungle: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentJungle: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidOasis: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentOasis: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidFloodPlains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentFloodPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidMarsh: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentMarsh: INTEGER,
	/**
	 * @default true
	 */
	AdjacentTilesAvoidIce: BOOLEAN,
	/**
	 * @default 0
	 */
	MaximumAllowedAdjacentIce: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidAtoll: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentAtoll: INTEGER,
	/**
	 * @default -1
	 */
	TileChangesMethodNumber: INTEGER,
	/**
	 * @default false
	 */
	ChangeCoreTileToMountain: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileToFlatland: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileTerrainToGrass: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileTerrainToPlains: BOOLEAN,
	/**
	 * @default false
	 */
	SetAdjacentTilesToShallowWater: BOOLEAN,
}

