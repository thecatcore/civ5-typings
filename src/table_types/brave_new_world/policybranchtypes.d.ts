// dlc/expansion2/gameplay/xml/gameinfo/civ5policybranchtypes

declare type BNW_PolicyBranchTypes = {
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
	Strategy: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Title: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreePolicy: TEXT,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreeFinishingPolicy: TEXT,
	/**
	 * @default 0
	 */
	FirstAdopterFreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	SecondAdopterFreePolicies: INTEGER,
	/**
	 * @default false
	 */
	PurchaseByLevel: BOOLEAN,
	/**
	 * @default false
	 */
	LockedWithoutReligion: BOOLEAN,
	/**
	 * @default false
	 */
	AIMutuallyExclusive: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoReligion: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoCulture: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoScience: BOOLEAN,
}

declare type BNW_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: TEXT,
}

