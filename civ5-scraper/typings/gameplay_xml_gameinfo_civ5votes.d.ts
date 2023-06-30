declare type gameplay_xml_gameinfo_civ5votes_Votes = {
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
	PopulationThreshold: INTEGER,
	/**
	 * @default 0
	 */
	MinVoters: INTEGER,
	/**
	 * @default false
	 */
	CityVoting: BOOLEAN,
	/**
	 * @default false
	 */
	CivVoting: BOOLEAN,
	/**
	 * @default false
	 */
	SecretaryGeneral: BOOLEAN,
	/**
	 * @default false
	 */
	Victory: BOOLEAN,
	/**
	 * @default false
	 */
	FreeTrade: BOOLEAN,
	/**
	 * @default false
	 */
	NoNukes: BOOLEAN,
	/**
	 * @default false
	 */
	DefensivePact: BOOLEAN,
	/**
	 * @default false
	 */
	OpenBorders: BOOLEAN,
	/**
	 * @default false
	 */
	ForcePeace: BOOLEAN,
	/**
	 * @default false
	 */
	ForceNoTrade: BOOLEAN,
	/**
	 * @default false
	 */
	ForceWar: BOOLEAN,
	/**
	 * @default false
	 */
	AssignCity: BOOLEAN,
}

declare type gameplay_xml_gameinfo_civ5votes_Vote_DiploVotes = {
	/**
	 * Reference: Votes(Type)
	 */
	VoteType: TEXT,
	/**
	 */
	DiploVoteType: TEXT,
}

