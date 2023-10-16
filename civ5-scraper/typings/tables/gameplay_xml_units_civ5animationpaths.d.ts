declare type gameplay_xml_units_civ5animationpaths_AnimationPaths = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 */
	Type: TEXT,
	/**
	 * @default false
	 */
	MissionPath: BOOLEAN,
}

declare type gameplay_xml_units_civ5animationpaths_AnimationPath_Entries = {
	/**
	 * Reference: AnimationPaths(Type)
	 */
	AnimationPathType: TEXT,
	/**
	 */
	Category: TEXT,
	/**
	 */
	Operator: TEXT,
	/**
	 * @default 0
	 */
	Parameter: FLOAT,
}

