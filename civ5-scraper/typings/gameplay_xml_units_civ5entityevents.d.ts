declare type gameplay_xml_units_civ5entityevents_EntityEvents = {
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
	UpdateFormation: BOOLEAN,
}

declare type gameplay_xml_units_civ5entityevents_EntityEvent_AnimationPaths = {
	/**
	 * Reference: EntityEvents(Type)
	 */
	EntityEventType: TEXT,
	/**
	 * Reference: AnimationPaths(Type)
	 */
	AnimationPathType: TEXT,
}

