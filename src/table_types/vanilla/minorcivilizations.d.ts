// gameplay/xml/civilizations/civ5minorcivilizations

declare type Vanilla_MinorCivilizations = {
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
	ShortDescription: TEXT,
	/**
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

declare type Vanilla_MinorCivilization_Flavors = {
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

declare type Vanilla_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Not Null
	 */
	CityName: TEXT,
}

