// dlc/expansion2/gameplay/xml/units/civ5units

declare type BMW_CivilianAttackPriorities = {
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
}

declare type BMW_Units = {
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
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Strategy: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 */
	Requirements: TEXT,
	/**
	 * @default 0
	 */
	Combat: INTEGER,
	/**
	 * @default 0
	 */
	RangedCombat: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	FaithCost: INTEGER,
	/**
	 * @default false
	 */
	RequiresFaithPurchaseEnabled: BOOLEAN,
	/**
	 * @default false
	 */
	PurchaseOnly: BOOLEAN,
	/**
	 * @default false
	 */
	MoveAfterPurchase: BOOLEAN,
	/**
	 * @default 0
	 */
	Moves: INTEGER,
	/**
	 * @default false
	 */
	Immobile: BOOLEAN,
	/**
	 * @default 0
	 */
	Range: INTEGER,
	/**
	 * @default 2
	 */
	BaseSightRange: INTEGER,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	Class: TEXT,
	/**
	 * @default NULL
	 * Reference: SpecialUnits(Type)
	 */
	Special: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	Capture: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitCombatInfos(Type)
	 */
	CombatClass: TEXT,
	/**
	 * @default NULL
	 * Reference: Domains(Type)
	 */
	Domain: TEXT,
	/**
	 * @default NULL
	 */
	CivilianAttackPriority: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitAIInfos(Type)
	 */
	DefaultUnitAI: TEXT,
	/**
	 * @default false
	 */
	Food: BOOLEAN,
	/**
	 * @default false
	 */
	NoBadGoodies: BOOLEAN,
	/**
	 * @default false
	 */
	RivalTerritory: BOOLEAN,
	/**
	 * @default false
	 */
	MilitarySupport: BOOLEAN,
	/**
	 * @default false
	 */
	MilitaryProduction: BOOLEAN,
	/**
	 * @default false
	 */
	Pillage: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PillagePrereqTech: TEXT,
	/**
	 * @default false
	 */
	Found: BOOLEAN,
	/**
	 * @default false
	 */
	FoundAbroad: BOOLEAN,
	/**
	 * @default 0
	 */
	CultureBombRadius: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeTurns: INTEGER,
	/**
	 * @default 0
	 */
	FreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	OneShotTourism: INTEGER,
	/**
	 * @default 0
	 */
	OneShotTourismPercentOthers: INTEGER,
	/**
	 * @default false
	 */
	IgnoreBuildingDefense: BOOLEAN,
	/**
	 * @default false
	 */
	PrereqResources: BOOLEAN,
	/**
	 * @default false
	 */
	Mechanized: BOOLEAN,
	/**
	 * @default false
	 */
	Suicide: BOOLEAN,
	/**
	 * @default false
	 */
	CaptureWhileEmbarked: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	GoodyHutUpgradeUnitClass: TEXT,
	/**
	 * @default 0
	 */
	HurryCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	AdvancedStartCost: INTEGER,
	/**
	 * @default -1
	 */
	MinAreaSize: INTEGER,
	/**
	 * @default 0
	 */
	AirInterceptRange: INTEGER,
	/**
	 * @default 0
	 */
	AirUnitCap: INTEGER,
	/**
	 * @default -1
	 */
	NukeDamageLevel: INTEGER,
	/**
	 * @default 0
	 */
	WorkRate: INTEGER,
	/**
	 * @default 0
	 */
	NumFreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	BaseBeakersTurnsToCount: INTEGER,
	/**
	 * @default 0
	 */
	BaseCultureTurnsToCount: INTEGER,
	/**
	 * @default false
	 */
	RushBuilding: BOOLEAN,
	/**
	 * @default 0
	 */
	BaseHurry: INTEGER,
	/**
	 * @default 0
	 */
	HurryMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	BaseGold: INTEGER,
	/**
	 * @default 0
	 */
	NumGoldPerEra: INTEGER,
	/**
	 * @default false
	 */
	SpreadReligion: BOOLEAN,
	/**
	 * @default false
	 */
	RemoveHeresy: BOOLEAN,
	/**
	 * @default 0
	 */
	ReligionSpreads: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousStrength: INTEGER,
	/**
	 * @default false
	 */
	FoundReligion: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresEnhancedReligion: BOOLEAN,
	/**
	 * @default false
	 */
	ProhibitsSpread: BOOLEAN,
	/**
	 * @default false
	 */
	CanBuyCityState: BOOLEAN,
	/**
	 * @default 100
	 */
	CombatLimit: INTEGER,
	/**
	 * @default false
	 */
	RangeAttackOnlyInDomain: BOOLEAN,
	/**
	 * @default false
	 */
	RangeAttackIgnoreLOS: BOOLEAN,
	/**
	 * @default false
	 */
	Trade: BOOLEAN,
	/**
	 * @default 0
	 */
	NumExoticGoods: INTEGER,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * @default 0
	 */
	RangedCombatLimit: INTEGER,
	/**
	 * @default 0
	 */
	XPValueAttack: INTEGER,
	/**
	 * @default 0
	 */
	XPValueDefense: INTEGER,
	/**
	 * @default NULL
	 * Reference: SpecialUnits(Type)
	 */
	SpecialCargo: TEXT,
	/**
	 * @default NULL
	 * Reference: Domains(Type)
	 */
	DomainCargo: TEXT,
	/**
	 * @default 0
	 */
	Conscription: INTEGER,
	/**
	 * @default 0
	 */
	ExtraMaintenanceCost: INTEGER,
	/**
	 * @default 0
	 */
	NoMaintenance: BOOLEAN,
	/**
	 * @default 0
	 */
	Unhappiness: INTEGER,
	/**
	 * @default NULL
	 */
	UnitArtInfo: TEXT,
	/**
	 * @default false
	 */
	UnitArtInfoCulturalVariation: BOOLEAN,
	/**
	 * @default false
	 */
	UnitArtInfoEraVariation: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Projects(Type)
	 */
	ProjectPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Projects(Type)
	 */
	SpaceshipProject: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	LeaderPromotion: TEXT,
	/**
	 * @default 0
	 */
	LeaderExperience: INTEGER,
	/**
	 * @default false
	 */
	DontShowYields: BOOLEAN,
	/**
	 * @default true
	 */
	ShowInPedia: BOOLEAN,
	/**
	 * @default BIPED
	 * Reference: MovementRates(Type)
	 */
	MoveRate: TEXT,
	/**
	 * @default 0
	 */
	UnitFlagIconOffset: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default UNIT_FLAG_ATLAS
	 * Reference: IconTextureAtlases(Atlas)
	 */
	UnitFlagAtlas: TEXT,
}

declare type BMW_Unit_AITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type BMW_Unit_Buildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
}

declare type BMW_Unit_BuildingClassRequireds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BMW_Unit_ProductionModifierBuildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type BMW_Unit_Builds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: TEXT,
}

declare type BMW_Unit_ClassUpgrades = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
}

declare type BMW_Unit_FreePromotions = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type BMW_Unit_Flavors = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BMW_Unit_GreatPersons = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	GreatPersonType: TEXT,
}

declare type BMW_Unit_ResourceQuantityRequirements = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 1
	 */
	Cost: INTEGER,
}

declare type BMW_Unit_UniqueNames = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	UniqueName: TEXT,
	/**
	 * Reference: GreatWorks(type)
	 */
	GreatWorkType: TEXT,
}

declare type BMW_Unit_YieldFromKills = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BMW_Unit_NotAITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type BMW_Unit_ProductionTraits = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 */
	Trait: INTEGER,
}

declare type BMW_Unit_TechTypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

