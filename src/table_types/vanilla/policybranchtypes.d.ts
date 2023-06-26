// gameplay/xml/gameinfo/civ5policybranchtypes

declare type Vanilla_PolicyBranchTypes = {
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
	 * @default false
	 */
	AIMutuallyExclusive: BOOLEAN,
}

declare type Vanilla_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: TEXT,
}

