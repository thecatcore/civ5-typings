// gameplay/xml/units/civ5animationpaths

declare type Vanilla_AnimationPaths = {
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

declare type Vanilla_AnimationPath_Entries = {
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

