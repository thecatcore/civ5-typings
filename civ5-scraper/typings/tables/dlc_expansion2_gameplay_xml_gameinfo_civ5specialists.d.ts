declare type dlc_expansion2_gameplay_xml_gameinfo_civ5specialists_Specialists = {
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
	Civilopedia: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 */
	GreatPeopleTitle: TEXT,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	Experience: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateChange: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerTurn: INTEGER,
	/**
	 * @default NULL
	 */
	GreatPeopleUnitClass: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5specialists_SpecialistFlavors = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5specialists_SpecialistYields = {
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

