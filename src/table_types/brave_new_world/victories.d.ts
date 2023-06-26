// dlc/expansion2/gameplay/xml/gameinfo/civ5victories

declare type BNW_Victories = {
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
	VictoryStatement: TEXT,
	/**
	 */
	VictoryBackground: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 * @default false
	 */
	WinsGame: BOOLEAN,
	/**
	 * @default false
	 */
	TargetScore: BOOLEAN,
	/**
	 * @default false
	 */
	EndScore: BOOLEAN,
	/**
	 * @default false
	 */
	Conquest: BOOLEAN,
	/**
	 * @default false
	 */
	Influential: BOOLEAN,
	/**
	 * @default false
	 */
	DiploVote: BOOLEAN,
	/**
	 * @default false
	 */
	Permanent: BOOLEAN,
	/**
	 * @default false
	 */
	ReligionInAllCities: BOOLEAN,
	/**
	 * @default false
	 */
	FindAllNaturalWonders: BOOLEAN,
	/**
	 * @default 0
	 */
	PopulationPercentLead: INTEGER,
	/**
	 * @default 0
	 */
	LandPercent: INTEGER,
	/**
	 * @default 0
	 */
	MinLandPercent: INTEGER,
	/**
	 * @default 0
	 */
	NumCultureCities: INTEGER,
	/**
	 * @default 0
	 */
	TotalCultureRatio: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayTurns: INTEGER,
	/**
	 */
	VictoryMovie: TEXT,
	/**
	 * @default NULL
	 */
	CityCulture: TEXT,
	/**
	 * @default NULL
	 */
	Audio: TEXT,
}

declare type BNW_VictoryPointAwards = {
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: TEXT,
	/**
	 * Not Null
	 */
	VictoryPoints: INTEGER,
}

declare type BNW_HistoricRankings = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 */
	HistoricLeader: TEXT,
	/**
	 */
	LeaderQuote: TEXT,
	/**
	 * @default 0
	 */
	LeaderScore: INTEGER,
}

