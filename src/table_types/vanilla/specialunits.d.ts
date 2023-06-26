// gameplay/xml/units/civ5specialunits

declare type Vanilla_SpecialUnits = {
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

declare type Vanilla_SpecialUnit_CarrierUnitAI = {
	/**
	 * Reference: SpecialUnits(Type)
	 */
	SpecialUnitType: TEXT,
	/**
	 */
	UnitAIType: TEXT,
}

declare type Vanilla_SpecialUnit_ProductionTraits = {
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

