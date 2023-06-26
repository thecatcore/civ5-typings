// dlc/expansion2/gameplay/xml/gameinfo/civ5resolutions

declare type BMW_LeagueSpecialSessions = {
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
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 */
	SessionSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraTrigger: TEXT,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	ImmediateProposal: TEXT,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	RecurringProposal: TEXT,
	/**
	 * @default 0
	 */
	TurnsBetweenSessions: INTEGER,
	/**
	 * @default 0
	 */
	CivDelegates: INTEGER,
	/**
	 * @default 0
	 */
	HostDelegates: INTEGER,
	/**
	 * @default 0
	 */
	CityStateDelegates: INTEGER,
	/**
	 * @default false
	 */
	UnitedNations: BOOLEAN,
}

declare type BMW_LeagueNames = {
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
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	NameKey: TEXT,
}

declare type BMW_LeagueProjectRewards = {
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
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	Building: TEXT,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	FreeSocialPolicies: INTEGER,
	/**
	 * @default 0
	 */
	CultureBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	TourismBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgePoints: INTEGER,
	/**
	 * @default 0
	 */
	CityStateInfluenceBoost: INTEGER,
	/**
	 * @default 0
	 */
	BaseBeakersTurnsToCount: INTEGER,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	FreeUnitClass: TEXT,
}

declare type BMW_LeagueProjects = {
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
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 */
	ProjectSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Processes(Type)
	 */
	Process: TEXT,
	/**
	 * @default 0
	 */
	CostPerPlayer: INTEGER,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier1: TEXT,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier2: TEXT,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier3: TEXT,
	/**
	 * @default 0
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BMW_ResolutionDecisions = {
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
}

declare type BMW_Resolutions = {
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
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: ResolutionDecisions(Type)
	 */
	VoterDecision: TEXT,
	/**
	 * @default NULL
	 * Reference: ResolutionDecisions(Type)
	 */
	ProposerDecision: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereqAnyMember: TEXT,
	/**
	 * @default false
	 */
	AutomaticProposal: BOOLEAN,
	/**
	 * @default false
	 */
	UniqueType: BOOLEAN,
	/**
	 * @default false
	 */
	NoProposalByPlayer: BOOLEAN,
	/**
	 * @default 0
	 */
	QuorumPercent: INTEGER,
	/**
	 * @default 0
	 */
	LeadersVoteBonusOnFail: INTEGER,
	/**
	 * @default false
	 */
	DiplomaticVictory: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeLeagueHost: BOOLEAN,
	/**
	 * @default 0
	 */
	OneTimeGold: INTEGER,
	/**
	 * @default 0
	 */
	OneTimeGoldPercent: INTEGER,
	/**
	 * @default false
	 */
	RaiseCityStateInfluenceToNeutral: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: LeagueProjects(Type)
	 */
	LeagueProjectEnabled: TEXT,
	/**
	 * @default 0
	 */
	GoldPerTurn: INTEGER,
	/**
	 * @default 0
	 */
	ResourceQuantity: INTEGER,
	/**
	 * @default false
	 */
	EmbargoCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	EmbargoPlayer: BOOLEAN,
	/**
	 * @default false
	 */
	NoResourceHappiness: BOOLEAN,
	/**
	 * @default 0
	 */
	UnitMaintenanceGoldPercent: INTEGER,
	/**
	 * @default 0
	 */
	MemberDiscoveredTechMod: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerWonder: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerNaturalWonder: INTEGER,
	/**
	 * @default false
	 */
	NoTrainingNuclearWeapons: BOOLEAN,
	/**
	 * @default 0
	 */
	VotesForFollowingReligion: INTEGER,
	/**
	 * @default 0
	 */
	HolyCityTourism: INTEGER,
	/**
	 * @default 0
	 */
	ReligionSpreadStrengthMod: INTEGER,
	/**
	 * @default 0
	 */
	VotesForFollowingIdeology: INTEGER,
	/**
	 * @default 0
	 */
	OtherIdeologyRebellionMod: INTEGER,
	/**
	 * @default 0
	 */
	ArtsyGreatPersonRateMod: INTEGER,
	/**
	 * @default 0
	 */
	ScienceyGreatPersonRateMod: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonTileImprovementCulture: INTEGER,
	/**
	 * @default 0
	 */
	LandmarkCulture: INTEGER,
}

