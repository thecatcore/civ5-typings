declare type gameplay_xml_terrain_civ5features_Features = {
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
	Culture: INTEGER,
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

declare type gameplay_xml_terrain_civ5features_FakeFeatures = {
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

declare type gameplay_xml_terrain_civ5features_Feature_YieldChanges = {
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

declare type gameplay_xml_terrain_civ5features_Feature_RiverYieldChanges = {
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

declare type gameplay_xml_terrain_civ5features_Feature_HillsYieldChanges = {
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

declare type gameplay_xml_terrain_civ5features_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

