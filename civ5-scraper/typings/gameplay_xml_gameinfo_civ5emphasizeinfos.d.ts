declare type gameplay_xml_gameinfo_civ5emphasizeinfos_EmphasizeInfos = {
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
	Strategy: TEXT,
	/**
	 */
	AvoidGrowth: BOOLEAN,
	/**
	 */
	GreatPeople: BOOLEAN,
}

declare type gameplay_xml_gameinfo_civ5emphasizeinfos_EmphasizeInfo_Yields = {
	/**
	 * Reference: EmphasizeInfos(Type)
	 */
	EmphasizeType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

