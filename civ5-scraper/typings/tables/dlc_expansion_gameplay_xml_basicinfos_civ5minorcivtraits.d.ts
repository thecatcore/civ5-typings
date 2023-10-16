declare type dlc_expansion_gameplay_xml_basicinfos_civ5minorcivtraits_MinorCivTraits = {
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
	 * @default NULL
	 */
	TraitIcon: TEXT,
	/**
	 * @default NULL
	 */
	TraitTitleIcon: TEXT,
	/**
	 */
	BackgroundImage: TEXT,
}

declare type dlc_expansion_gameplay_xml_basicinfos_civ5minorcivtraits_MinorCivTraits_Status = {
	/**
	 */
	Type: TEXT,
	/**
	 */
	StatusIcon: TEXT,
	/**
	 */
	PositiveStatusMeter: TEXT,
	/**
	 */
	NegativeStatusMeter: TEXT,
	/**
	 */
	StatusMeterIconAtlasIndex: INTEGER,
}

