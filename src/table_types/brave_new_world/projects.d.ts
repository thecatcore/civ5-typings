// dlc/expansion2/gameplay/xml/gameinfo/civ5projects

declare type BMW_Projects = {
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
	Strategy: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	Requirements: TEXT,
	/**
	 * @default 0
	 */
	MaxGlobalInstances: INTEGER,
	/**
	 * @default 0
	 */
	MaxTeamInstances: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	NukeInterception: INTEGER,
	/**
	 * @default 0
	 */
	CultureBranchesRequired: INTEGER,
	/**
	 * @default 0
	 */
	TechShare: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayPercent: INTEGER,
	/**
	 * @default false
	 */
	Spaceship: BOOLEAN,
	/**
	 * @default false
	 */
	Religious: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsNukes: BOOLEAN,
	/**
	 * @default NULL
	 */
	MovieDefineTag: TEXT,
	/**
	 * @default NULL
	 */
	VictoryPrereq: TEXT,
	/**
	 * @default NULL
	 */
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 */
	EveryoneSpecialUnit: TEXT,
	/**
	 * @default NULL
	 */
	CreateSound: TEXT,
	/**
	 * @default NULL
	 */
	AnyonePrereqProject: TEXT,
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

declare type BMW_Project_Flavors = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BMW_Project_Prereqs = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Projects(Type)
	 */
	PrereqProjectType: TEXT,
	/**
	 * @default 1
	 */
	AmountNeeded: INTEGER,
}

declare type BMW_Project_VictoryThresholds = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: TEXT,
	/**
	 * Not Null
	 */
	Threshold: INTEGER,
	/**
	 * @default 0
	 */
	MinThreshold: INTEGER,
}

declare type BMW_Project_ResourceQuantityRequirements = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

