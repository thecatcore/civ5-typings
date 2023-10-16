declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resources = {
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
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 */
	ResourceClassType: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 */
	AltArtDefineTag: TEXT,
	/**
	 * @default null
	 */
	ArtDefineTagHeavy: TEXT,
	/**
	 * @default null
	 */
	AltArtDefineTagHeavy: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechReveal: TEXT,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	PolicyReveal: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechCityTrade: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: TEXT,
	/**
	 * @default NULL
	 */
	AIStopTradingEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionMod: INTEGER,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	WonderProductionModObsoleteEra: TEXT,
	/**
	 * @default 0
	 */
	StartingResourceQuantity: INTEGER,
	/**
	 * @default 0
	 */
	AITradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIObjective: INTEGER,
	/**
	 * @default 0
	 */
	PlacementOrder: INTEGER,
	/**
	 * @default 0
	 */
	ConstAppearance: INTEGER,
	/**
	 * @default 0
	 */
	MinAreaSize: INTEGER,
	/**
	 * @default 0
	 */
	MinLatitude: INTEGER,
	/**
	 * @default 0
	 */
	MaxLatitude: INTEGER,
	/**
	 * @default 0
	 */
	RandApp1: INTEGER,
	/**
	 * @default 0
	 */
	RandApp2: INTEGER,
	/**
	 * @default 0
	 */
	RandApp3: INTEGER,
	/**
	 * @default 0
	 */
	RandApp4: INTEGER,
	/**
	 * @default 0
	 */
	Player: INTEGER,
	/**
	 * @default 0
	 */
	TilesPer: INTEGER,
	/**
	 * @default 0
	 */
	MinLandPercent: INTEGER,
	/**
	 * @default 0
	 */
	Unique: INTEGER,
	/**
	 * @default 0
	 */
	GroupRange: INTEGER,
	/**
	 * @default 0
	 */
	GroupRand: INTEGER,
	/**
	 * @default 0
	 */
	ResourceUsage: INTEGER,
	/**
	 * @default false
	 */
	PresentOnAllValidPlots: BOOLEAN,
	/**
	 * @default false
	 */
	Area: BOOLEAN,
	/**
	 * @default false
	 */
	Hills: BOOLEAN,
	/**
	 * @default false
	 */
	Flatlands: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiverSide: BOOLEAN,
	/**
	 * @default false
	 */
	Normalize: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyMinorCivs: BOOLEAN,
	/**
	 */
	IconString: TEXT,
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_YieldChanges = {
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

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_Flavors = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * @default 0
	 */
	Flavor: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_TerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_FeatureBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_FeatureTerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_terrain_civ5resources_Resource_QuantityTypes = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

