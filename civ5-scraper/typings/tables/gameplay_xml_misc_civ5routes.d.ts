declare type gameplay_xml_misc_civ5routes_Routes = {
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
	 * @default 0
	 */
	AdvancedStartCost: INTEGER,
	/**
	 * @default 0
	 */
	Value: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	FlatMovement: INTEGER,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default false
	 */
	Industrial: BOOLEAN,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 */
	Civilopedia: TEXT,
}

declare type gameplay_xml_misc_civ5routes_Route_Yields = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type gameplay_xml_misc_civ5routes_Route_TechMovementChanges = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Not Null
	 */
	MovementChange: INTEGER,
}

declare type gameplay_xml_misc_civ5routes_Route_ResourceQuantityRequirements = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Not Null
	 */
	Cost: INTEGER,
}

