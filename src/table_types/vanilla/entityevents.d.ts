// gameplay/xml/units/civ5entityevents

declare type Vanilla_EntityEvents = {
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

declare type Vanilla_EntityEvent_AnimationPaths = {
	/**
	 * Reference: EntityEvents(Type)
	 */
	EntityEventType: TEXT,
	/**
	 * Reference: AnimationPaths(Type)
	 */
	AnimationPathType: TEXT,
}

