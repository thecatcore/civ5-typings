// gameplay/xml/basicinfos/civ5concepts

declare type Vanilla_Concepts = {
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
	 * Not Null
	 */
	Topic: TEXT,
	/**
	 * Not Null
	 */
	Description: TEXT,
	/**
	 * Not Null
	 */
	Summary: TEXT,
	/**
	 */
	AdvisorQuestion: TEXT,
	/**
	 * Not Null
	 */
	Advisor: TEXT,
	/**
	 */
	CivilopediaPage: INTEGER,
	/**
	 */
	CivilopediaPageText: TEXT,
	/**
	 */
	CivilopediaHeaderType: TEXT,
	/**
	 * Reference: Concepts(Type)
	 */
	InsertAfter: TEXT,
	/**
	 * Reference: Concepts(Type)
	 */
	InsertBefore: TEXT,
}

declare type Vanilla_Concepts_RelatedConcept = {
	/**
	 * Reference: Concepts(Type)
	 */
	ConceptType: TEXT,
	/**
	 * Reference: Concepts(Type)
	 */
	RelatedConcept: TEXT,
}

