// dlc/expansion/gameplay/xml/basicinfos/civ5minorcivtraits

declare type GnK_MinorCivTraits = {
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

declare type GnK_MinorCivTraits_Status = {
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

