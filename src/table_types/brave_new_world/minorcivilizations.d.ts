// dlc/expansion2/gameplay/xml/civilizations/civ5minorcivilizations

declare type BNW_MinorCivilizations = {
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
	ShortDescription: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Adjective: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 */
	DefaultPlayerColor: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleType: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleSuffix: TEXT,
	/**
	 * @default NULL
	 */
	ArtStylePrefix: TEXT,
	/**
	 * Not Null
	 * Reference: MinorCivTraits(Type)
	 */
	MinorCivTrait: TEXT,
}

declare type BNW_MinorCivilization_Flavors = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type BNW_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Not Null
	 */
	CityName: TEXT,
}

