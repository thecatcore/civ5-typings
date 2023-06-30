declare type dlc_expansion_gameplay_xml_units_civ5multiunitformations_MultiUnitPositions = {
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
	Name: TEXT,
}

declare type dlc_expansion_gameplay_xml_units_civ5multiunitformations_MultiUnitFormations = {
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
	Name: TEXT,
	/**
	 * @default false
	 */
	RequiresNavalUnitConsistency: BOOLEAN,
}

declare type dlc_expansion_gameplay_xml_units_civ5multiunitformations_MultiUnitFormation_SlotEntries = {
	/**
	 * Reference: MultiUnitFormations(Type)
	 */
	MultiUnitFormationType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	PrimaryUnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	SecondaryUnitType: TEXT,
	/**
	 * Reference: MultiUnitPositions(Type)
	 */
	MultiUnitPositionType: TEXT,
	/**
	 */
	RequiredSlot: BOOLEAN,
}

