// gameplay/xml/units/civ5builds

declare type Vanilla_Builds = {
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
	 * @default null
	 */
	Help: TEXT,
	/**
	 * @default null
	 */
	DisabledHelp: TEXT,
	/**
	 * @default null
	 */
	Recommendation: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 */
	Time: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	CostIncreasePerImprovement: INTEGER,
	/**
	 * @default false
	 */
	Kill: BOOLEAN,
	/**
	 * @default false
	 */
	Repair: BOOLEAN,
	/**
	 * @default false
	 */
	RemoveRoute: BOOLEAN,
	/**
	 * @default NULL
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 */
	ImprovementType: TEXT,
	/**
	 * @default NULL
	 */
	RouteType: TEXT,
	/**
	 * @default NULL
	 */
	EntityEvent: TEXT,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type Vanilla_BuildFeatures = {
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: TEXT,
	/**
	 */
	FeatureType: TEXT,
	/**
	 */
	PrereqTech: TEXT,
	/**
	 */
	Time: INTEGER,
	/**
	 * @default 0
	 */
	Production: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default false
	 */
	Remove: BOOLEAN,
}

