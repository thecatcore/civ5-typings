// gameplay/xml/gameinfo/civ5culturelevels

declare type Vanilla_CultureLevels = {
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

declare type Vanilla_CultureLevel_SpeedThresholds = {
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

