declare type gameplay_xml_units_civ5specialunits_SpecialUnits = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 */
	Type: TEXT,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Valid: BOOLEAN,
	/**
	 */
	CityLoad: BOOLEAN,
}

declare type gameplay_xml_units_civ5specialunits_SpecialUnit_CarrierUnitAI = {
	/**
	 * Reference: SpecialUnits(Type)
	 */
	SpecialUnitType: TEXT,
	/**
	 */
	UnitAIType: TEXT,
}

declare type gameplay_xml_units_civ5specialunits_SpecialUnit_ProductionTraits = {
	/**
	 * Reference: SpecialUnits(Type)
	 */
	SpecialUnitType: TEXT,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 */
	Trait: INTEGER,
}

