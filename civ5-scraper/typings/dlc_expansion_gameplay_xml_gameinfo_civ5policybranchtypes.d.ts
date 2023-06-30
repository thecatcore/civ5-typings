declare type dlc_expansion_gameplay_xml_gameinfo_civ5policybranchtypes_PolicyBranchTypes = {
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

declare type dlc_expansion_gameplay_xml_gameinfo_civ5policybranchtypes_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: TEXT,
}

