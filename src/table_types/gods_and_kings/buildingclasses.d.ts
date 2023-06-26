// dlc/expansion/gameplay/xml/buildings/civ5buildingclasses

declare type GnK_BuildingClasses = {
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
	DefaultBuilding: TEXT,
	/**
	 * @default -1
	 */
	MaxGlobalInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxTeamInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxPlayerInstances: INTEGER,
	/**
	 * @default 0
	 */
	ExtraPlayerInstances: INTEGER,
	/**
	 * @default false
	 */
	NoLimit: BOOLEAN,
	/**
	 * @default false
	 */
	Monument: BOOLEAN,
}

declare type GnK_BuildingClass_VictoryThresholds = {
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: TEXT,
	/**
	 */
	Threshold: INTEGER,
}

