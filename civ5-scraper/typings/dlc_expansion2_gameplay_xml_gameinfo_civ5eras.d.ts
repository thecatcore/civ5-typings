declare type dlc_expansion2_gameplay_xml_gameinfo_civ5eras_Eras = {
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
	ShortDescription: TEXT,
	/**
	 */
	Abbreviation: TEXT,
	/**
	 */
	ArtPrefix: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 * @default false
	 */
	NoGoodies: BOOLEAN,
	/**
	 * @default false
	 */
	NoBarbUnits: BOOLEAN,
	/**
	 * @default false
	 */
	NoReligion: BOOLEAN,
	/**
	 * @default false
	 */
	FirstSoundtrackFirst: BOOLEAN,
	/**
	 * @default 0
	 */
	ResearchAgreementCost: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkedUnitDefense: INTEGER,
	/**
	 * @default 0
	 */
	StartingUnitMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	StartingDefenseUnits: INTEGER,
	/**
	 * @default 0
	 */
	StartingWorkerUnits: INTEGER,
	/**
	 * @default 0
	 */
	StartingExploreUnits: INTEGER,
	/**
	 * @default 0
	 */
	StartingGold: INTEGER,
	/**
	 * @default 0
	 */
	StartingCulture: INTEGER,
	/**
	 * @default 0
	 */
	FreePopulation: INTEGER,
	/**
	 * @default 0
	 */
	LaterEraBuildingConstructMod: INTEGER,
	/**
	 * @default 0
	 */
	StartPercent: INTEGER,
	/**
	 * @default 0
	 */
	BuildingMaintenancePercent: INTEGER,
	/**
	 * @default 0
	 */
	GrowthPercent: INTEGER,
	/**
	 * @default 0
	 */
	TrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	ConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	CreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	ResearchPercent: INTEGER,
	/**
	 * @default 0
	 */
	BuildPercent: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementPercent: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeoplePercent: INTEGER,
	/**
	 * @default 0
	 */
	CulturePercent: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteFoodBonusTimes100: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteProductionBonusTimes100: INTEGER,
	/**
	 * @default 0
	 */
	EventChancePerTurn: INTEGER,
	/**
	 * @default 0
	 */
	SpiesGrantedForPlayer: INTEGER,
	/**
	 * @default 0
	 */
	SpiesGrantedForEveryone: INTEGER,
	/**
	 * @default 0
	 */
	FaithCostMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	DiploEmphasisReligion: INTEGER,
	/**
	 * @default 0
	 */
	DiploEmphasisLatePolicies: INTEGER,
	/**
	 * @default 0
	 */
	LeaguePercent: INTEGER,
	/**
	 * @default 0
	 */
	WarmongerPercent: INTEGER,
	/**
	 * @default 0
	 */
	SoundtrackSpace: INTEGER,
	/**
	 */
	CityBombardEffectTag: TEXT,
	/**
	 */
	AudioUnitVictoryScript: TEXT,
	/**
	 */
	AudioUnitDefeatScript: TEXT,
	/**
	 */
	CityArtType: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5eras_Era_Soundtracks = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 */
	SoundTrack: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5eras_Era_CitySoundscapes = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 * Reference: CitySizes(Type)
	 */
	CitySizeType: TEXT,
	/**
	 */
	SoundscapeScript: TEXT,
}

declare type dlc_expansion2_gameplay_xml_gameinfo_civ5eras_Era_NewEraVOs = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 */
	VOScript: TEXT,
}

