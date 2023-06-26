// dlc/expansion2/gameplay/xml/technologies/civ5technologies

declare type BMW_Technologies = {
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
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default 0
	 */
	AIWeight: INTEGER,
	/**
	 * @default 0
	 */
	AITradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default -1
	 */
	AdvancedStartCost: INTEGER,
	/**
	 * @default NULL
	 */
	Era: TEXT,
	/**
	 * @default NULL
	 */
	FirstFreeUnitClass: TEXT,
	/**
	 * @default 0
	 */
	FeatureProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitFortificationModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitBaseHealModifier: INTEGER,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	FirstFreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkedMoveChange: INTEGER,
	/**
	 * @default 0
	 */
	InternationalTradeRoutesChange: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceSpreadModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraVotesPerDiplomat: INTEGER,
	/**
	 * @default false
	 */
	EndsGame: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsEmbarking: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsDefensiveEmbarking: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedAllWaterPassage: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsBarbarianBoats: BOOLEAN,
	/**
	 * @default false
	 */
	Repeat: BOOLEAN,
	/**
	 * @default false
	 */
	Trade: BOOLEAN,
	/**
	 * @default false
	 */
	Disable: BOOLEAN,
	/**
	 * @default false
	 */
	GoodyTech: BOOLEAN,
	/**
	 * @default false
	 */
	ExtraWaterSeeFrom: BOOLEAN,
	/**
	 * @default false
	 */
	MapCentering: BOOLEAN,
	/**
	 * @default false
	 */
	MapVisible: BOOLEAN,
	/**
	 * @default false
	 */
	MapTrading: BOOLEAN,
	/**
	 * @default false
	 */
	TechTrading: BOOLEAN,
	/**
	 * @default false
	 */
	GoldTrading: BOOLEAN,
	/**
	 * @default false
	 */
	AllowEmbassyTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	OpenBordersTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	DefensivePactTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	ResearchAgreementTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	TradeAgreementTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	PermanentAllianceTradingAllowed: BOOLEAN,
	/**
	 * @default false
	 */
	BridgeBuilding: BOOLEAN,
	/**
	 * @default false
	 */
	WaterWork: BOOLEAN,
	/**
	 * @default false
	 */
	TriggersArchaeologicalSites: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsWorldCongress: BOOLEAN,
	/**
	 * @default 0
	 */
	GridX: INTEGER,
	/**
	 * @default 0
	 */
	GridY: INTEGER,
	/**
	 * @default NULL
	 */
	Quote: TEXT,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default -1
	 */
	ScenarioTechButton: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default NULL
	 */
	AudioIntro: TEXT,
	/**
	 * @default NULL
	 */
	AudioIntroHeader: TEXT,
}

declare type BMW_Technology_DomainExtraMoves = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Moves: INTEGER,
}

declare type BMW_Technology_TradeRouteDomainExtraRange = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Range: INTEGER,
}

declare type BMW_Technology_Flavors = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type BMW_Technology_ORPrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type BMW_Technology_PrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type BMW_Technology_FreePromotions = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

