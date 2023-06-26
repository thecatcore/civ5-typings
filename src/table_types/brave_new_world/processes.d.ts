// dlc/expansion2/gameplay/xml/gameinfo/civ5processes

declare type BMW_Processes = {
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
	 */
	Strategy: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
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

declare type BMW_Process_Flavors = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BMW_Process_ProductionYields = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

