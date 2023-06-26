// dlc/expansion2/gameplay/xml/terrain/civ5terrains

declare type BMW_Terrains = {
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
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	Found: BOOLEAN,
	/**
	 * @default false
	 */
	FoundCoast: BOOLEAN,
	/**
	 * @default false
	 */
	FoundFreshWater: BOOLEAN,
	/**
	 * @default 1
	 */
	Movement: INTEGER,
	/**
	 * @default 1
	 */
	SeeFrom: INTEGER,
	/**
	 * @default 1
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	BuildModifier: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 */
	Button: TEXT,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 * @default false
	 */
	GraphicalOnly: BOOLEAN,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BMW_Terrain_Yields = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BMW_Terrain_RiverYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BMW_Terrain_HillsYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

