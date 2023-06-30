declare type gameplay_xml_gameinfo_civ5culturelevels_CultureLevels = {
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
	 * @default 0
	 */
	CityDefenseModifier: INTEGER,
}

declare type gameplay_xml_gameinfo_civ5culturelevels_CultureLevel_SpeedThresholds = {
	/**
	 * Reference: CultureLevels(Type)
	 */
	CultureLevelType: TEXT,
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: TEXT,
	/**
	 * @default 0
	 */
	Threshold: INTEGER,
}

