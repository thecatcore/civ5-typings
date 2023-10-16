declare type gameplay_xml_basicinfos_civ5concepts_Concepts = {
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

declare type gameplay_xml_basicinfos_civ5concepts_Concepts_RelatedConcept = {
	/**
	 * Reference: Concepts(Type)
	 */
	ConceptType: TEXT,
	/**
	 * Reference: Concepts(Type)
	 */
	RelatedConcept: TEXT,
}

