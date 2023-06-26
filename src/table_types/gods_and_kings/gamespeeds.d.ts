// dlc/expansion/gameplay/xml/gameinfo/civ5gamespeeds

declare type GnK_GameSpeeds = {
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
	 * @default 0
	 */
	DealDuration: INTEGER,
	/**
	 * @default 0
	 */
	GrowthPercent: INTEGER,
	/**
	 * @default 0
	 */
	TrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	ConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	CreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	ResearchPercent: INTEGER,
	/**
	 * @default 0
	 */
	GoldPercent: INTEGER,
	/**
	 * @default 0
	 */
	GoldGiftMod: INTEGER,
	/**
	 * @default 0
	 */
	BuildPercent: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementPercent: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeoplePercent: INTEGER,
	/**
	 * @default 0
	 */
	CulturePercent: INTEGER,
	/**
	 * @default 0
	 */
	FaithPercent: INTEGER,
	/**
	 * @default 0
	 */
	BarbPercent: INTEGER,
	/**
	 * @default 0
	 */
	FeatureProductionPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitDiscoverPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitHurryPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitTradePercent: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgePercent: INTEGER,
	/**
	 * @default 0
	 */
	HurryPercent: INTEGER,
	/**
	 * @default 0
	 */
	InflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	InflationOffset: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousPressureAdjacentCity: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayPercent: INTEGER,
	/**
	 * @default 0
	 */
	MinorCivElectionFreqMod: INTEGER,
	/**
	 * @default 0
	 */
	OpinionDurationPercent: INTEGER,
	/**
	 * @default 0
	 */
	SpyRatePercent: INTEGER,
	/**
	 * @default 0
	 */
	PeaceDealDuration: INTEGER,
	/**
	 * @default 0
	 */
	RelationshipDuration: INTEGER,
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

declare type GnK_GameSpeed_Turns = {
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: TEXT,
	/**
	 */
	MonthIncrement: INTEGER,
	/**
	 */
	TurnsPerIncrement: INTEGER,
}

