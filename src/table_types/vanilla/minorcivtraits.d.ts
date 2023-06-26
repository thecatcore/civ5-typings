// gameplay/xml/basicinfos/civ5minorcivtraits

declare type Vanilla_MinorCivTraits = {
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

declare type Vanilla_MinorCivTraits_Status = {
	/**
	 */
	Type: TEXT,
	/**
	 */
	StatusIcon: TEXT,
	/**
	 */
	StatusMeter: TEXT,
}

