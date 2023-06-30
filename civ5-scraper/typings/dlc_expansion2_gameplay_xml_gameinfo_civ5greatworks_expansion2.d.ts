declare type dlc_expansion2_gameplay_xml_gameinfo_civ5greatworks_expansion2_GreatWorkSlots = {
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
	 * Reference: Language_en_US(Tag)
	 */
	SlotsToolTipText: TEXT,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	EmptyToolTipText: TEXT,
	/**
	 * Not Null
	 */
	FilledIcon: TEXT,
	/**
	 * Not Null
	 */
	EmptyIcon: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5greatworks_expansion2_GreatWorkClasses = {
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
	 * Reference: GreatWorkSlots(Type)
	 */
	SlotType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5greatworks_expansion2_GreatWorks = {
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
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: GreatWorkClasses(Type)
	 */
	GreatWorkClassType: TEXT,
	/**
	 * Reference: GreatWorkArtifactClasses(Type)
	 */
	ArtifactClassType: TEXT,
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 * @default null
	 */
	Image: TEXT,
	/**
	 * @default null
	 */
	Audio: TEXT,
	/**
	 * @default null
	 */
	Quote: TEXT,
	/**
	 * @default false
	 */
	ArchaeologyOnly: BOOLEAN,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5greatworks_expansion2_GreatWorkArtifactClasses = {
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
	 * Unique
	 */
	Value: INTEGER,
}

