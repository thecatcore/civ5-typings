// gameplay/xml/units/civ5multiunitformations

declare type Vanilla_MultiUnitPositions = {
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

declare type Vanilla_MultiUnitFormations = {
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

declare type Vanilla_MultiUnitFormation_SlotEntries = {
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

