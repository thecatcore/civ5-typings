declare type gameplay_xml_ai_civ5aigrandstrategies_AIGrandStrategies = {
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
}

declare type gameplay_xml_ai_civ5aigrandstrategies_AIGrandStrategy_Flavors = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type gameplay_xml_ai_civ5aigrandstrategies_AIGrandStrategy_Yields = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type gameplay_xml_ai_civ5aigrandstrategies_AIGrandStrategy_FlavorMods = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

