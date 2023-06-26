// gameplay/xml/gameinfo/civ5emphasizeinfos

declare type Vanilla_EmphasizeInfos = {
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

declare type Vanilla_EmphasizeInfo_Yields = {
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

