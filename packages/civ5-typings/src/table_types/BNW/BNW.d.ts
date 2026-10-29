/// <reference path="../../sql_types.d.ts" />

declare type BNW_AICityStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_AICityStrategiesType,
	/**
	 */
	CheckTriggerTurnCount: INTEGER,
	/**
	 */
	MinimumNumTurnsExecuted: INTEGER,
	/**
	 * @default 0
	 */
	WeightThreshold: INTEGER,
	/**
	 * @default false
	 */
	NoMinorCivs: BOOLEAN,
	/**
	 * @default false
	 */
	Permanent: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: BNW_TechnologiesType,
	/**
	 */
	Advisor: TEXT,
	/**
	 */
	AdvisorCounsel: TEXT,
	/**
	 * @default 1
	 */
	AdvisorCounselImportance: INTEGER,
}

declare type BNW_AICityStrategy_Flavors = {
	/**
	 * Reference: AICityStrategies(Type)
	 */
	AICityStrategyType: BNW_AICityStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AICityStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AICityStrategies(Type)
	 */
	AICityStrategyType: BNW_AICityStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIEconomicStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_AIEconomicStrategiesType,
	/**
	 * @default false
	 */
	NoMinorCivs: BOOLEAN,
	/**
	 * @default 0
	 */
	CheckTriggerTurnCount: INTEGER,
	/**
	 * @default 0
	 */
	MinimumNumTurnsExecuted: INTEGER,
	/**
	 * @default 0
	 */
	WeightThreshold: INTEGER,
	/**
	 * @default 0
	 */
	FirstTurnExecuted: INTEGER,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: BNW_TechnologiesType,
	/**
	 */
	Advisor: TEXT,
	/**
	 */
	AdvisorCounsel: TEXT,
	/**
	 * @default 1
	 */
	AdvisorCounselImportance: INTEGER,
}

declare type BNW_AIEconomicStrategy_Player_Flavors = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: BNW_AIEconomicStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIEconomicStrategy_City_Flavors = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: BNW_AIEconomicStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIEconomicStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: BNW_AIEconomicStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIGrandStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_AIGrandStrategiesType,
}

declare type BNW_AIGrandStrategy_Flavors = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: BNW_AIGrandStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIGrandStrategy_Yields = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: BNW_AIGrandStrategiesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_AIGrandStrategy_FlavorMods = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: BNW_AIGrandStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIMilitaryStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_AIMilitaryStrategiesType,
	/**
	 * @default false
	 */
	NoMinorCivs: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyMinorCivs: BOOLEAN,
	/**
	 * @default false
	 */
	UpdateCitySpecializations: BOOLEAN,
	/**
	 * @default 0
	 */
	CheckTriggerTurnCount: INTEGER,
	/**
	 * @default 0
	 */
	FirstTurnExecuted: INTEGER,
	/**
	 * @default 0
	 */
	MinimumNumTurnsExecuted: INTEGER,
	/**
	 * @default 0
	 */
	WeightThreshold: INTEGER,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 */
	Advisor: TEXT,
	/**
	 */
	AdvisorCounsel: TEXT,
	/**
	 * @default 1
	 */
	AdvisorCounselImportance: INTEGER,
}

declare type BNW_AIMilitaryStrategy_Player_Flavors = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: BNW_AIMilitaryStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIMilitaryStrategy_City_Flavors = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: BNW_AIMilitaryStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_AIMilitaryStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: BNW_AIMilitaryStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_CitySpecializations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CitySpecializationsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Subtype: INTEGER,
	/**
	 */
	MustBeCoastal: BOOLEAN,
	/**
	 */
	IsWonder: BOOLEAN,
	/**
	 */
	IsDefault: BOOLEAN,
	/**
	 */
	IsOperationUnitProvider: BOOLEAN,
}

declare type BNW_CitySpecialization_Flavors = {
	/**
	 * Reference: CitySpecializations(Type)
	 */
	CitySpecializationType: BNW_CitySpecializationsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_CitySpecialization_TargetYields = {
	/**
	 * Reference: CitySpecializations(Type)
	 */
	CitySpecializationType: BNW_CitySpecializationsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_TacticalMoves = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TacticalMovesType,
	/**
	 * @default true
	 */
	OperationsCanRecruit: BOOLEAN,
	/**
	 * @default false
	 */
	DominanceZoneMove: BOOLEAN,
	/**
	 */
	OffenseFlavorWeight: INTEGER,
	/**
	 */
	DefenseFlavorWeight: INTEGER,
	/**
	 */
	Priority: INTEGER,
}

declare type BNW_Attitudes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_AttitudesType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_Calendars = {
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
}

declare type BNW_CitySizes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CitySizesType,
}

declare type BNW_Concepts = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ConceptsType,
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
	InsertAfter: BNW_ConceptsType,
	/**
	 * Reference: Concepts(Type)
	 */
	InsertBefore: BNW_ConceptsType,
}

declare type BNW_Concepts_RelatedConcept = {
	/**
	 * Reference: Concepts(Type)
	 */
	ConceptType: BNW_ConceptsType,
	/**
	 * Reference: Concepts(Type)
	 */
	RelatedConcept: BNW_ConceptsType,
}

declare type BNW_Contacts = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ContactsType,
}

declare type BNW_DenialInfos = {
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
}

declare type BNW_Domains = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_DomainsType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_InvisibleInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_InvisibleInfosType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_MajorCivApproachTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MajorCivApproachTypesType,
}

declare type BNW_MemoryInfos = {
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
}

declare type BNW_MinorCivApproachTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MinorCivApproachTypesType,
}

declare type BNW_MinorCivTraits = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MinorCivTraitsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 */
	TraitIcon: TEXT,
	/**
	 * @default NULL
	 */
	TraitTitleIcon: TEXT,
	/**
	 */
	BackgroundImage: TEXT,
}

declare type BNW_MinorCivTraits_Status = {
	/**
	 */
	Type: TEXT,
	/**
	 */
	StatusIcon: TEXT,
	/**
	 */
	PositiveStatusMeter: TEXT,
	/**
	 */
	NegativeStatusMeter: TEXT,
	/**
	 */
	StatusMeterIconAtlasIndex: INTEGER,
}

declare type BNW_Months = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MonthsType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_Seasons = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_SeasonsType,
	/**
	 * Not Null
	 */
	Description: TEXT,
}

declare type BNW_UnitAIInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_UnitAIInfosType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_UnitCombatInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_UnitCombatInfosType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_BuildingClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_BuildingClassesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	DefaultBuilding: TEXT,
	/**
	 * @default -1
	 */
	MaxGlobalInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxTeamInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxPlayerInstances: INTEGER,
	/**
	 * @default 0
	 */
	ExtraPlayerInstances: INTEGER,
	/**
	 * @default false
	 */
	NoLimit: BOOLEAN,
	/**
	 * @default false
	 */
	Monument: BOOLEAN,
}

declare type BNW_BuildingClass_VictoryThresholds = {
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: BNW_VictoriesType,
	/**
	 */
	Threshold: INTEGER,
}

declare type BNW_Buildings = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_BuildingsType,
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
	 * Reference: Language_en_US(Tag)
	 */
	ThemingBonusHelp: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Quote: TEXT,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default -1
	 */
	MutuallyExclusiveGroup: INTEGER,
	/**
	 * @default false
	 */
	TeamShare: BOOLEAN,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	River: BOOLEAN,
	/**
	 * @default false
	 */
	FreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Mountain: BOOLEAN,
	/**
	 * @default false
	 */
	NearbyMountainRequired: BOOLEAN,
	/**
	 * @default false
	 */
	Hill: BOOLEAN,
	/**
	 * @default false
	 */
	Flat: BOOLEAN,
	/**
	 * @default false
	 */
	FoundsReligion: BOOLEAN,
	/**
	 * @default false
	 */
	IsReligious: BOOLEAN,
	/**
	 * @default false
	 */
	BorderObstacle: BOOLEAN,
	/**
	 * @default false
	 */
	PlayerBorderObstacle: BOOLEAN,
	/**
	 * @default false
	 */
	Capital: BOOLEAN,
	/**
	 * @default false
	 */
	GoldenAge: BOOLEAN,
	/**
	 * @default false
	 */
	MapCentering: BOOLEAN,
	/**
	 * @default false
	 */
	NeverCapture: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsWaterRoutes: BOOLEAN,
	/**
	 * @default false
	 */
	ExtraLuxuries: BOOLEAN,
	/**
	 * @default false
	 */
	DiplomaticVoting: BOOLEAN,
	/**
	 * @default false
	 */
	AffectSpiesNow: BOOLEAN,
	/**
	 * @default false
	 */
	NullifyInfluenceModifier: BOOLEAN,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	FaithCost: INTEGER,
	/**
	 * @default 0
	 */
	LeagueCost: INTEGER,
	/**
	 * @default 0
	 */
	UnlockedByBelief: BOOLEAN,
	/**
	 * @default false
	 */
	UnlockedByLeague: BOOLEAN,
	/**
	 * @default 0
	 */
	HolyCity: BOOLEAN,
	/**
	 * @default 0
	 */
	NumCityCostMod: INTEGER,
	/**
	 * @default 0
	 */
	HurryCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	MinAreaSize: INTEGER,
	/**
	 * @default 0
	 */
	ConquestProb: INTEGER,
	/**
	 * @default 0
	 */
	CitiesPrereq: INTEGER,
	/**
	 * @default 0
	 */
	LevelPrereq: INTEGER,
	/**
	 * @default 0
	 */
	CultureRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalCultureRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalGreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonExpendGold: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitUpgradeCostMod: INTEGER,
	/**
	 * @default 0
	 */
	Experience: INTEGER,
	/**
	 * @default 0
	 */
	GlobalExperience: INTEGER,
	/**
	 * @default 0
	 */
	FoodKept: INTEGER,
	/**
	 * @default 0
	 */
	Airlift: BOOLEAN,
	/**
	 * @default 0
	 */
	AirModifier: INTEGER,
	/**
	 * @default 0
	 */
	NukeModifier: INTEGER,
	/**
	 * @default 0
	 */
	NukeExplosionRand: INTEGER,
	/**
	 * @default 0
	 */
	HealRateChange: INTEGER,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	UnmoddedHappiness: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerCity: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerXPolicies: INTEGER,
	/**
	 * @default 0
	 */
	CityCountUnhappinessMod: INTEGER,
	/**
	 * @default false
	 */
	NoOccupiedUnhappiness: BOOLEAN,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	MilitaryProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpaceProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalSpaceProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityConnectionTradeRouteModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapturePlunderModifier: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPopulationChange: INTEGER,
	/**
	 * @default 0
	 */
	TechShare: INTEGER,
	/**
	 * @default 0
	 */
	FreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	FreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	FreeGreatPeople: INTEGER,
	/**
	 * @default 0
	 */
	MedianTechPercentChange: INTEGER,
	/**
	 * @default 0
	 */
	Gold: INTEGER,
	/**
	 * @default false
	 */
	AllowsRangeStrike: BOOLEAN,
	/**
	 * @default false
	 */
	Espionage: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsFoodTradeRoutes: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsProductionTradeRoutes: BOOLEAN,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	ExtraCityHitPoints: INTEGER,
	/**
	 * @default 0
	 */
	GlobalDefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipChange: INTEGER,
	/**
	 * @default 0
	 */
	VictoryPoints: INTEGER,
	/**
	 * @default 0
	 */
	ExtraMissionarySpreads: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousPressureModifier: INTEGER,
	/**
	 * @default 0
	 */
	EspionageModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalEspionageModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraSpies: INTEGER,
	/**
	 * @default 0
	 */
	SpyRankChange: INTEGER,
	/**
	 * @default 0
	 */
	InstantSpyRankChange: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteRecipientBonus: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteTargetBonus: INTEGER,
	/**
	 * @default 0
	 */
	NumTradeRouteBonus: INTEGER,
	/**
	 * @default 0
	 */
	LandmarksTourismPercent: INTEGER,
	/**
	 * @default 0
	 */
	InstantMilitaryIncrease: INTEGER,
	/**
	 * @default 0
	 */
	GreatWorksTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	XBuiltTriggersIdeologyChoice: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteSeaDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteSeaGoldBonus: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteLandDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteLandGoldBonus: INTEGER,
	/**
	 * @default 0
	 */
	CityStateTradeRouteProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatScientistBeakerModifier: INTEGER,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClass: BNW_BuildingClassesType,
	/**
	 * @default NULL
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	NearbyTerrainRequired: BNW_TerrainsType,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	ProhibitedCityTerrain: BNW_TerrainsType,
	/**
	 * @default NULL
	 * Reference: Victories(Type)
	 */
	VictoryPrereq: BNW_VictoriesType,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	FreeStartEra: BNW_ErasType,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	MaxStartEra: BNW_ErasType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	EnhancedYieldTech: BNW_TechnologiesType,
	/**
	 * @default 0
	 */
	TechEnhancedTourism: INTEGER,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuilding: BNW_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuildingThisCity: BNW_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotion: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	TrainedFreePromotion: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotionRemoved: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	ReplacementBuildingClass: BNW_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: BNW_PolicyBranchTypesType,
	/**
	 * @default NULL
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 * @default 0
	 */
	SpecialistCount: INTEGER,
	/**
	 * @default NULL
	 * Reference: GreatWorkSlots(Type)
	 */
	GreatWorkSlotType: BNW_GreatWorkSlotsType,
	/**
	 * @default NULL
	 * Reference: GreatWorks(Type)
	 */
	FreeGreatWork: BNW_GreatWorksType,
	/**
	 * @default 0
	 */
	GreatWorkCount: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistExtraCulture: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateChange: INTEGER,
	/**
	 * @default 0
	 */
	ExtraLeagueVotes: INTEGER,
	/**
	 * @default false
	 */
	CityWall: BOOLEAN,
	/**
	 * @default 0
	 */
	DisplayPosition: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 */
	WonderSplashImage: TEXT,
	/**
	 * @default R,T
	 */
	WonderSplashAnchor: TEXT,
	/**
	 */
	WonderSplashAudio: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default false
	 */
	ArtInfoCulturalVariation: BOOLEAN,
	/**
	 * @default false
	 */
	ArtInfoEraVariation: BOOLEAN,
	/**
	 * @default false
	 */
	ArtInfoRandomVariation: BOOLEAN,
}

declare type BNW_Building_AreaYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_BuildingClassHappiness = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	Happiness: INTEGER,
}

declare type BNW_Building_BuildingClassYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type BNW_Building_ClassesNeededInCity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
}

declare type BNW_Building_FreeUnits = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 */
	NumUnits: INTEGER,
}

declare type BNW_Building_DomainFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_DomainFreeExperiencePerGreatWork = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_DomainProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Modifier: INTEGER,
}

declare type BNW_Building_FreeSpecialistCounts = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 */
	Count: INTEGER,
}

declare type BNW_Building_Flavors = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_Building_GlobalYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_HurryModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: BNW_HurryInfosType,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type BNW_Building_LocalResourceAnds = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
}

declare type BNW_Building_LocalResourceOrs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
}

declare type BNW_Building_LockedBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
}

declare type BNW_Building_PrereqBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	NumBuildingNeeded: INTEGER,
}

declare type BNW_Building_ResourceQuantity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 */
	Quantity: INTEGER,
}

declare type BNW_Building_ResourceQuantityRequirements = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 */
	Cost: INTEGER,
}

declare type BNW_Building_ResourceYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ResourceCultureChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type BNW_Building_ResourceFaithChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 */
	FaithChange: INTEGER,
}

declare type BNW_Building_RiverPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SeaPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_LakePlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SeaResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_FeatureYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_TerrainYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SpecialistYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_UnitCombatFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_UnitCombatProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	Modifier: INTEGER,
}

declare type BNW_Building_TechAndPrereqs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_Building_YieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldChangesPerPop = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldChangesPerReligion = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_TechEnhancedYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ThemingBonuses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Bonus: INTEGER,
	/**
	 */
	SameEra: BOOL,
	/**
	 */
	UniqueEras: BOOL,
	/**
	 */
	MustBeArt: BOOL,
	/**
	 */
	MustBeArtifact: BOOL,
	/**
	 */
	MustBeEqualArtArtifact: BOOL,
	/**
	 */
	RequiresOwner: BOOL,
	/**
	 */
	RequiresAnyButOwner: BOOL,
	/**
	 */
	RequiresSamePlayer: BOOL,
	/**
	 */
	RequiresUniquePlayers: BOOL,
	/**
	 */
	AIPriority: INT,
}

declare type BNW_Civilizations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CivilizationsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 */
	Civilopedia: TEXT,
	/**
	 */
	CivilopediaTag: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Strategy: TEXT,
	/**
	 * @default true
	 */
	Playable: BOOLEAN,
	/**
	 * @default true
	 */
	AIPlayable: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	ShortDescription: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Adjective: TEXT,
	/**
	 * @default NULL
	 * Reference: PlayerColors(Type)
	 */
	DefaultPlayerColor: BNW_PlayerColorsType,
	/**
	 * @default NULL
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleType: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleSuffix: TEXT,
	/**
	 * @default NULL
	 */
	ArtStylePrefix: TEXT,
	/**
	 * @default NULL
	 */
	DerivativeCiv: TEXT,
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
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	AlphaIconAtlas: TEXT,
	/**
	 * @default NULL
	 */
	MapImage: TEXT,
	/**
	 * @default NULL
	 */
	DawnOfManQuote: TEXT,
	/**
	 * @default NULL
	 */
	DawnOfManImage: TEXT,
	/**
	 * @default NULL
	 */
	DawnOfManAudio: TEXT,
	/**
	 * @default NULL
	 */
	PackageID: TEXT,
	/**
	 * @default NULL
	 */
	SoundtrackTag: TEXT,
}

declare type BNW_Civilization_BuildingClassOverrides = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Not Null
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
}

declare type BNW_Civilization_CityNames = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	CityName: TEXT,
}

declare type BNW_Civilization_DisableTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_Civilization_FreeBuildingClasses = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
}

declare type BNW_Civilization_FreeTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_Civilization_FreeUnits = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: BNW_UnitAIInfosType,
	/**
	 */
	Count: INTEGER,
}

declare type BNW_Civilization_Leaders = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderheadType: BNW_LeadersType,
}

declare type BNW_Civilization_Religions = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Religions(Type)
	 */
	ReligionType: BNW_ReligionsType,
}

declare type BNW_Civilization_SpyNames = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	SpyName: TEXT,
}

declare type BNW_Civilization_UnitClassOverrides = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Not Null
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
}

declare type BNW_Civilization_Start_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * @default false
	 */
	StartAlongOcean: BOOLEAN,
}

declare type BNW_Civilization_Start_Along_River = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * @default false
	 */
	StartAlongRiver: BOOLEAN,
}

declare type BNW_Civilization_Start_Region_Priority = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: BNW_RegionsType,
}

declare type BNW_Civilization_Start_Region_Avoid = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: BNW_RegionsType,
}

declare type BNW_Civilization_Start_Place_First_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * @default false
	 */
	PlaceFirst: BOOLEAN,
}

declare type BNW_MinorCivilizations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MinorCivilizationsType,
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
	ShortDescription: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Adjective: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 */
	DefaultPlayerColor: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleType: TEXT,
	/**
	 * @default NULL
	 */
	ArtStyleSuffix: TEXT,
	/**
	 * @default NULL
	 */
	ArtStylePrefix: TEXT,
	/**
	 * Not Null
	 * Reference: MinorCivTraits(Type)
	 */
	MinorCivTrait: BNW_MinorCivTraitsType,
}

declare type BNW_MinorCivilization_Flavors = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: BNW_MinorCivilizationsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type BNW_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: BNW_MinorCivilizationsType,
	/**
	 * Not Null
	 */
	CityName: TEXT,
}

declare type BNW_Regions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_RegionsType,
	/**
	 */
	Description: TEXT,
}

declare type BNW_Traits = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TraitsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	ShortDescription: TEXT,
	/**
	 * @default 0
	 */
	LevelExperienceModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatScientistRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralExtraBonus: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonGiftInfluence: INTEGER,
	/**
	 * @default 0
	 */
	MaxGlobalBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	MaxTeamBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	MaxPlayerBuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityUnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	PopulationUnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateBonusModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateFriendshipModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionExtraUnits: INTEGER,
	/**
	 * @default 0
	 */
	SeaBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	LandUnitMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	NavalUnitMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalBuildingModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromKills: INTEGER,
	/**
	 * @default 0
	 */
	FaithFromKills: INTEGER,
	/**
	 * @default 0
	 */
	CityCultureBonus: INTEGER,
	/**
	 * @default 0
	 */
	CapitalThemingBonusModifier: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityConnectionTradeRouteChange: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlunderModifier: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementMaintenanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeDurationModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeMoveChange: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeGreatArtistRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeGreatMusicianRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeGreatWriterRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraEmbarkMoves: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderFirstFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderSubsequentFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderYieldModifier: INTEGER,
	/**
	 * @default 0
	 */
	NaturalWonderHappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	NearbyImprovementCombatBonus: INTEGER,
	/**
	 * @default 0
	 */
	NearbyImprovementBonusRange: INTEGER,
	/**
	 * @default 0
	 */
	CultureBuildingYieldChange: INTEGER,
	/**
	 * @default 0
	 */
	CombatBonusVsHigherTech: INTEGER,
	/**
	 * @default 0
	 */
	CombatBonusVsLargerCiv: INTEGER,
	/**
	 * @default 0
	 */
	RazeSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	DOFGreatPersonModifier: INTEGER,
	/**
	 * @default 0
	 */
	LuxuryHappinessRetention: INTEGER,
	/**
	 * @default 0
	 */
	ExtraSpies: INTEGER,
	/**
	 * @default 0
	 */
	UnresearchedTechBonusFromKills: INTEGER,
	/**
	 * @default 0
	 */
	ExtraFoundedCityTerritoryClaimRange: INTEGER,
	/**
	 * @default 0
	 */
	FreeSocialPoliciesPerEra: INTEGER,
	/**
	 * @default 0
	 */
	NumTradeRoutesModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteResourceModifier: INTEGER,
	/**
	 * @default 0
	 */
	UniqueLuxuryCities: INTEGER,
	/**
	 * @default 0
	 */
	UniqueLuxuryQuantity: INTEGER,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	AfraidMinorPerTurnInfluence: INTEGER,
	/**
	 * @default 0
	 */
	LandTradeRouteRangeBonus: INTEGER,
	/**
	 * @default 0
	 */
	TradeReligionModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeBuildingModifier: INTEGER,
	/**
	 * @default false
	 */
	FightWellDamaged: BOOLEAN,
	/**
	 * @default false
	 */
	MoveFriendlyWoodsAsRoad: BOOLEAN,
	/**
	 * @default false
	 */
	FasterAlongRiver: BOOLEAN,
	/**
	 * @default false
	 */
	FasterInHills: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedAllWater: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedToLandFlatCost: BOOLEAN,
	/**
	 * @default false
	 */
	NoHillsImprovementMaintenance: BOOLEAN,
	/**
	 * @default false
	 */
	TechBoostFromCapitalScienceBuildings: BOOLEAN,
	/**
	 * @default false
	 */
	StaysAliveZeroCities: BOOLEAN,
	/**
	 * @default false
	 */
	FaithFromUnimprovedForest: BOOLEAN,
	/**
	 * @default false
	 */
	BonusReligiousBelief: BOOLEAN,
	/**
	 * @default false
	 */
	AbleToAnnexCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	CrossesMountainsAfterGreatGeneral: BOOLEAN,
	/**
	 * @default false
	 */
	MayaCalendarBonuses: BOOLEAN,
	/**
	 * @default false
	 */
	NoAnnexing: BOOLEAN,
	/**
	 * @default false
	 */
	TechFromCityConquer: BOOLEAN,
	/**
	 * @default false
	 */
	UniqueLuxuryRequiresNewArea: BOOLEAN,
	/**
	 * @default false
	 */
	RiverTradeRoad: BOOLEAN,
	/**
	 * @default false
	 */
	AngerFreeIntrusionOfCityStates: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	FreeUnit: BNW_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	FreeUnitPrereqTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	CombatBonusImprovement: BNW_ImprovementsType,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuilding: BNW_BuildingsType,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuildingOnConquest: BNW_BuildingsType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: BNW_TechnologiesType,
}

declare type BNW_Trait_ExtraYieldThresholds = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldChangesStrategicResources = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldChangesNaturalWonder = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldChangesPerTradePartner = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldChangesIncomingTradeRoute = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_YieldModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_FreePromotions = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Trait_FreePromotionUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Trait_MovesChangeUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	MovesChange: INT,
}

declare type BNW_Trait_MaintenanceModifierUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	MaintenanceModifier: INT,
}

declare type BNW_Trait_Terrains = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 */
	TerrainType: TEXT,
	/**
	 * @default 0
	 */
	StrategicResourceQuantityModifier: INTEGER,
}

declare type BNW_Trait_ResourceQuantityModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type BNW_Trait_FreeResourceFirstXCities = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 */
	ResourceQuantity: INTEGER,
	/**
	 */
	NumCities: INTEGER,
}

declare type BNW_Trait_ImprovementYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_SpecialistYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_UnimprovedFeatureYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trait_NoTrain = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 * Not Null
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
}

declare type BNW_Diplomacy_Responses = {
	/**
	 */
	LeaderType: STRING,
	/**
	 */
	ResponseType: STRING,
	/**
	 */
	Response: STRING,
	/**
	 * @default 1
	 */
	Bias: INTEGER,
}

declare type BNW_ArtStyleTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ArtStyleTypesType,
}

declare type BNW_Climates = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ClimatesType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	DesertPercentChange: INTEGER,
	/**
	 */
	JungleLatitude: INTEGER,
	/**
	 */
	HillRange: INTEGER,
	/**
	 */
	MountainPercent: INTEGER,
	/**
	 * @default 0.0
	 */
	SnowLatitudeChange: FLOAT,
	/**
	 * @default 0.0
	 */
	TundraLatitudeChange: FLOAT,
	/**
	 * @default 0.0
	 */
	GrassLatitudeChange: FLOAT,
	/**
	 * @default 0.0
	 */
	DesertBottomLatitudeChange: FLOAT,
	/**
	 * @default 0.0
	 */
	DesertTopLatitudeChange: FLOAT,
	/**
	 */
	IceLatitude: FLOAT,
	/**
	 */
	RandIceLatitude: FLOAT,
}

declare type BNW_CultureLevels = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CultureLevelsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	CityDefenseModifier: INTEGER,
}

declare type BNW_CultureLevel_SpeedThresholds = {
	/**
	 * Reference: CultureLevels(Type)
	 */
	CultureLevelType: BNW_CultureLevelsType,
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: BNW_GameSpeedsType,
	/**
	 * @default 0
	 */
	Threshold: INTEGER,
}

declare type BNW_Cursors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CursorsType,
	/**
	 */
	CursorPath: TEXT,
}

declare type BNW_EmphasizeInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_EmphasizeInfosType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 */
	AvoidGrowth: BOOLEAN,
	/**
	 */
	GreatPeople: BOOLEAN,
}

declare type BNW_EmphasizeInfo_Yields = {
	/**
	 * Reference: EmphasizeInfos(Type)
	 */
	EmphasizeType: BNW_EmphasizeInfosType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Eras = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ErasType,
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

declare type BNW_Era_Soundtracks = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: BNW_ErasType,
	/**
	 */
	SoundTrack: TEXT,
}

declare type BNW_Era_CitySoundscapes = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: BNW_ErasType,
	/**
	 * Reference: CitySizes(Type)
	 */
	CitySizeType: BNW_CitySizesType,
	/**
	 */
	SoundscapeScript: TEXT,
}

declare type BNW_Era_NewEraVOs = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: BNW_ErasType,
	/**
	 */
	VOScript: TEXT,
}

declare type BNW_Flavors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_FlavorsType,
}

declare type BNW_GameOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GameOptionsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default false
	 */
	Default: BOOLEAN,
	/**
	 * @default true
	 */
	Visible: BOOLEAN,
	/**
	 * @default true
	 */
	SupportsSinglePlayer: BOOLEAN,
	/**
	 * @default true
	 */
	SupportsMultiplayer: BOOLEAN,
}

declare type BNW_GameSpeeds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GameSpeedsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default 0
	 */
	DealDuration: INTEGER,
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
	GoldPercent: INTEGER,
	/**
	 * @default 0
	 */
	GoldGiftMod: INTEGER,
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
	FaithPercent: INTEGER,
	/**
	 * @default 0
	 */
	BarbPercent: INTEGER,
	/**
	 * @default 0
	 */
	FeatureProductionPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitDiscoverPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitHurryPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitTradePercent: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgePercent: INTEGER,
	/**
	 * @default 0
	 */
	HurryPercent: INTEGER,
	/**
	 * @default 0
	 */
	InflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	InflationOffset: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousPressureAdjacentCity: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayPercent: INTEGER,
	/**
	 * @default 0
	 */
	MinorCivElectionFreqMod: INTEGER,
	/**
	 * @default 0
	 */
	OpinionDurationPercent: INTEGER,
	/**
	 * @default 0
	 */
	SpyRatePercent: INTEGER,
	/**
	 * @default 0
	 */
	PeaceDealDuration: INTEGER,
	/**
	 * @default 0
	 */
	RelationshipDuration: INTEGER,
	/**
	 * @default 0
	 */
	LeaguePercent: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_GameSpeed_Turns = {
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: BNW_GameSpeedsType,
	/**
	 */
	MonthIncrement: INTEGER,
	/**
	 */
	TurnsPerIncrement: INTEGER,
}

declare type BNW_GoodyHuts = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Unique
	 */
	Type: TEXT,
	/**
	 */
	Description: TEXT,
	/**
	 */
	ChooseDescription: TEXT,
	/**
	 */
	Sound: TEXT,
	/**
	 * @default 0
	 */
	Gold: INTEGER,
	/**
	 * @default 0
	 */
	NumGoldRandRolls: INTEGER,
	/**
	 * @default 0
	 */
	GoldRandAmount: INTEGER,
	/**
	 * @default 0
	 */
	MapOffset: INTEGER,
	/**
	 * @default 0
	 */
	MapRange: INTEGER,
	/**
	 * @default 0
	 */
	MapProb: INTEGER,
	/**
	 * @default 0
	 */
	Experience: INTEGER,
	/**
	 * @default 0
	 */
	Healing: INTEGER,
	/**
	 * @default 0
	 */
	DamagePrereq: INTEGER,
	/**
	 * @default 0
	 */
	Population: INTEGER,
	/**
	 * @default 0
	 */
	Culture: INTEGER,
	/**
	 * @default 0
	 */
	Faith: INTEGER,
	/**
	 * @default 0
	 */
	ProphetPercent: INTEGER,
	/**
	 * @default 0
	 */
	RevealNearbyBarbariansRange: INTEGER,
	/**
	 * @default false
	 */
	Tech: BOOLEAN,
	/**
	 * @default false
	 */
	RevealUnknownResource: BOOLEAN,
	/**
	 * @default false
	 */
	UpgradeUnit: BOOLEAN,
	/**
	 * @default false
	 */
	PantheonFaith: BOOLEAN,
	/**
	 * @default false
	 */
	Bad: BOOLEAN,
	/**
	 * @default NULL
	 */
	UnitClass: TEXT,
	/**
	 * @default NULL
	 */
	BarbarianUnitClass: TEXT,
	/**
	 * @default 0
	 */
	BarbarianUnitProb: INTEGER,
	/**
	 * @default 0
	 */
	MinBarbarians: INTEGER,
}

declare type BNW_HandicapInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_HandicapInfosType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default 0
	 */
	StartingLocPercent: INTEGER,
	/**
	 * @default 0
	 */
	AdvancedStartPointsMod: INTEGER,
	/**
	 * @default 0
	 */
	StartingPolicyPoints: INTEGER,
	/**
	 * @default 0
	 */
	HappinessDefault: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerLuxury: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	PopulationUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	Gold: INTEGER,
	/**
	 * @default 0
	 */
	GoldFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnitsPerCity: INTEGER,
	/**
	 * @default 0
	 */
	ProductionFreeUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	RouteCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	UnitCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	BuildingCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	ResearchPercent: INTEGER,
	/**
	 * @default 0
	 */
	PolicyPercent: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	CityProductionNumOptionsConsidered: INTEGER,
	/**
	 * @default 0
	 */
	TechNumOptionsConsidered: INTEGER,
	/**
	 * @default 0
	 */
	PolicyNumOptionsConsidered: INTEGER,
	/**
	 * @default 100
	 */
	InflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	FreeCulturePerTurn: INTEGER,
	/**
	 * @default 0
	 */
	AttitudeChange: INTEGER,
	/**
	 * @default 0
	 */
	NoTechTradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	TechTradeKnownModifier: INTEGER,
	/**
	 * @default 0
	 */
	BarbCampGold: INTEGER,
	/**
	 * @default 0
	 */
	BarbSpawnMod: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianBonus: INTEGER,
	/**
	 * @default 0
	 */
	AIBarbarianBonus: INTEGER,
	/**
	 * @default 0
	 */
	EarliestBarbarianReleaseTurn: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianLandTargetRange: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianSeaTargetRange: INTEGER,
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
	AIStartingUnitMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingDefenseUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingWorkerUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIStartingExploreUnits: INTEGER,
	/**
	 * @default 0
	 */
	AIDeclareWarProb: INTEGER,
	/**
	 * @default 0
	 */
	AIWorkRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIUnhappinessPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIGrowthPercent: INTEGER,
	/**
	 * @default 0
	 */
	AITrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldTrainPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldConstructPercent: INTEGER,
	/**
	 * @default 0
	 */
	AICreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWorldCreatePercent: INTEGER,
	/**
	 * @default 0
	 */
	AIBuildingCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitCostPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitSupplyPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIUnitUpgradePercent: INTEGER,
	/**
	 * @default 100
	 */
	AIInflationPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIPerEraModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIAdvancedStartPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIFreeXP: INTEGER,
	/**
	 * @default 0
	 */
	AIFreeXPPercent: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_HandicapInfo_Goodies = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: BNW_HandicapInfosType,
	/**
	 * Reference: GoodyHuts(Type)
	 */
	GoodyType: TEXT,
}

declare type BNW_HandicapInfo_FreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: BNW_HandicapInfosType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_HandicapInfo_AIFreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: BNW_HandicapInfosType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_HurryInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_HurryInfosType,
	/**
	 */
	Description: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyPrereq: BNW_PoliciesType,
	/**
	 * @default 0
	 */
	GoldPerProduction: INTEGER,
	/**
	 * @default 0
	 */
	ProductionPerPopulation: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerBeaker: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerCulture: INTEGER,
}

declare type BNW_IconFontTextures = {
	/**
	 * Primary Key
	 */
	IconFontTexture: TEXT,
	/**
	 */
	IconFontTextureFile: TEXT,
}

declare type BNW_IconFontMapping = {
	/**
	 * Primary Key
	 */
	IconName: TEXT,
	/**
	 */
	IconMapping: INTEGER,
	/**
	 * @default ICON_FONT_TEXTURE_DEFAULT
	 * Reference: IconFontTextures(IconFontTexture)
	 */
	IconFontTexture: TEXT,
}

declare type BNW_IconTextureAtlases = {
	/**
	 * Not Null
	 */
	Atlas: TEXT,
	/**
	 * Not Null
	 */
	IconSize: INTEGER,
	/**
	 * Not Null
	 */
	Filename: TEXT,
	/**
	 * Not Null
	 */
	IconsPerRow: TEXT,
	/**
	 * Not Null
	 */
	IconsPerColumn: TEXT,
}

declare type BNW_MultiplayerOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MultiplayerOptionsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default false
	 */
	Default: BOOLEAN,
}

declare type BNW_PlayerOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_PlayerOptionsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 * @default false
	 */
	Default: BOOLEAN,
}

declare type BNW_Policies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_PoliciesType,
	/**
	 * @default write a bug on this
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
	 * @default NULL
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: BNW_PolicyBranchTypesType,
	/**
	 * @default 0
	 */
	NumExtraBranches: INTEGER,
	/**
	 * @default 0
	 */
	CultureCost: INTEGER,
	/**
	 * @default 0
	 */
	GridX: INTEGER,
	/**
	 * @default 0
	 */
	GridY: INTEGER,
	/**
	 * @default 0
	 */
	Level: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerCity: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerWonder: INTEGER,
	/**
	 * @default 0
	 */
	CultureWonderMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerTechResearched: INTEGER,
	/**
	 * @default 0
	 */
	CultureImprovementChange: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromKills: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromBarbarianKills: INTEGER,
	/**
	 * @default 0
	 */
	GoldFromKills: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkedExtraMoves: INTEGER,
	/**
	 * @default 0
	 */
	AttackBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeMeterMod: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeDurationMod: INTEGER,
	/**
	 * @default 0
	 */
	NumFreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	NumFreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	NumFreeGreatPeople: INTEGER,
	/**
	 * @default 0
	 */
	MedianTechPercentChange: INTEGER,
	/**
	 * @default 0
	 */
	StrategicResourceMod: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatAdmiralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatWriterRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatArtistRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatMusicianRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatMerchantRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatScientistRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	DomesticGreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappiness: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerCity: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	CityCountUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	OccupiedPopulationUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	CapitalUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	FreeExperience: INTEGER,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	AllFeatureProduction: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementUpgradeRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistUpgradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	MilitaryProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BaseFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	BaseFreeMilitaryUnits: INTEGER,
	/**
	 * @default 0
	 */
	FreeUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	FreeMilitaryUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerGarrisonedUnit: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerGarrisonedUnit: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerTradeRoute: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerXPopulation: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerLuxury: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessFromUnitsMod: INTEGER,
	/**
	 * @default 0
	 */
	NumExtraBuilders: INTEGER,
	/**
	 * @default 0
	 */
	PlotGoldCostMod: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureExponentModifier: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesPolicyCostDiscount: INTEGER,
	/**
	 * @default 0
	 */
	GarrisonedCityRangeStrikeModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitPurchaseCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	BuildingPurchaseCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityConnectionTradeRouteGoldModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeMissionGoldModifier: INTEGER,
	/**
	 * @default 0
	 */
	FaithCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CulturalPlunderMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	StealTechSlowerModifier: INTEGER,
	/**
	 * @default 0
	 */
	StealTechFasterModifier: INTEGER,
	/**
	 * @default 0
	 */
	CatchSpiesModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerUnit: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerMilitaryUnit: INTEGER,
	/**
	 * @default 0
	 */
	RouteGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	BuildingGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitSupplyMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitUpgradeCostMod: INTEGER,
	/**
	 * @default 0
	 */
	CityStrengthMod: INTEGER,
	/**
	 * @default 0
	 */
	CityGrowthMod: INTEGER,
	/**
	 * @default 0
	 */
	CapitalGrowthMod: INTEGER,
	/**
	 * @default 0
	 */
	SettlerProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalSettlerProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	NewCityExtraPopulation: INTEGER,
	/**
	 * @default 0
	 */
	FreeFoodBox: INTEGER,
	/**
	 * @default 0
	 */
	HappyPerMilitaryUnit: INTEGER,
	/**
	 * @default false
	 */
	MilitaryFoodProduction: BOOLEAN,
	/**
	 * @default 0
	 */
	HappinessToCulture: INTEGER,
	/**
	 * @default 0
	 */
	HappinessToScience: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesFreeCultureBuilding: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesFreeFoodBuilding: INTEGER,
	/**
	 * @default false
	 */
	HalfSpecialistUnhappiness: BOOLEAN,
	/**
	 * @default false
	 */
	HalfSpecialistFood: BOOLEAN,
	/**
	 * @default 0
	 */
	MaxConscript: INTEGER,
	/**
	 * @default 0
	 */
	UnitSightRangeChange: INTEGER,
	/**
	 * @default 0
	 */
	WoundedUnitDamageMod: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianCombatBonus: INTEGER,
	/**
	 * @default false
	 */
	AlwaysSeeBarbCamps: BOOLEAN,
	/**
	 * @default false
	 */
	RevealAllCapitals: BOOLEAN,
	/**
	 * @default 0
	 */
	FreeSpecialist: INTEGER,
	/**
	 * @default 0
	 */
	ExpModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExpInBorderModifier: INTEGER,
	/**
	 * @default 0
	 */
	MinorQuestFriendshipMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorGoldFriendshipMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipMinimum: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipDecayMod: INTEGER,
	/**
	 * @default 0
	 */
	OtherPlayersMinorFriendshipDecayMod: INTEGER,
	/**
	 * @default 0
	 */
	CityStateUnitFrequencyModifier: INTEGER,
	/**
	 * @default 0
	 */
	CommonFoeTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	LessHappyTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	SharedIdeologyTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	LandTradeRouteGoldChange: INTEGER,
	/**
	 * @default 0
	 */
	SeaTradeRouteGoldChange: INTEGER,
	/**
	 * @default 0
	 */
	SharedIdeologyTradeGoldChange: INTEGER,
	/**
	 * @default 0
	 */
	RiggingElectionModifier: INTEGER,
	/**
	 * @default 0
	 */
	MilitaryUnitGiftExtraInfluence: INTEGER,
	/**
	 * @default 0
	 */
	ProtectedMinorPerTurnInfluence: INTEGER,
	/**
	 * @default 0
	 */
	AfraidMinorPerTurnInfluence: INTEGER,
	/**
	 * @default 0
	 */
	MinorBullyScoreModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityStateTradeChange: INTEGER,
	/**
	 * @default 0
	 */
	ThemingBonusMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	InternalTradeRouteYieldModifier: INTEGER,
	/**
	 * @default 0
	 */
	SharedReligionTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	OpenBordersTourismModifier: INTEGER,
	/**
	 * @default false
	 */
	MinorGreatPeopleAllies: BOOLEAN,
	/**
	 * @default false
	 */
	MinorScienceAllies: BOOLEAN,
	/**
	 * @default false
	 */
	MinorResourceBonus: BOOLEAN,
	/**
	 * @default false
	 */
	GarrisonFreeMaintenance: BOOLEAN,
	/**
	 * @default false
	 */
	GoldenAgeCultureBonusDisabled: BOOLEAN,
	/**
	 * @default false
	 */
	SecondReligionPantheon: BOOLEAN,
	/**
	 * @default false
	 */
	AddReformationBelief: BOOLEAN,
	/**
	 * @default false
	 */
	EnablesSSPartHurry: BOOLEAN,
	/**
	 * @default false
	 */
	EnablesSSPartPurchase: BOOLEAN,
	/**
	 * @default false
	 */
	AbleToAnnexCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	OneShot: BOOLEAN,
	/**
	 * @default false
	 */
	IncludesOneShotFreeUnits: BOOLEAN,
	/**
	 * @default NULL
	 */
	WeLoveTheKing: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuildingOnConquest: BNW_BuildingsType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 * @default 0
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlasAchieved: TEXT,
}

declare type BNW_Policy_CityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_CoastalCityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_CapitalYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_CapitalYieldPerPopChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_CapitalYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_Disables = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyDisable: BNW_PoliciesType,
}

declare type BNW_Policy_Flavors = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Policy_GreatWorkYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_HurryModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: BNW_HurryInfosType,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type BNW_Policy_PrereqPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: BNW_PoliciesType,
}

declare type BNW_Policy_PrereqORPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: BNW_PoliciesType,
}

declare type BNW_Policy_SpecialistExtraYields = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_BuildingClassYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	YieldMod: INTEGER,
}

declare type BNW_Policy_BuildingClassYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	YieldChange: INTEGER,
}

declare type BNW_Policy_BuildingClassCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type BNW_Policy_BuildingClassProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type BNW_Policy_BuildingClassTourismModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	TourismModifier: INTEGER,
}

declare type BNW_Policy_BuildingClassHappiness = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	Happiness: INTEGER,
}

declare type BNW_Policy_ImprovementYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_ImprovementCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type BNW_Policy_ValidSpecialists = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
}

declare type BNW_Policy_YieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Policy_FreePromotions = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Policy_UnitCombatFreeExperiences = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	FreeExperience: INTEGER,
}

declare type BNW_Policy_FreePromotionUnitCombats = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Policy_UnitCombatProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type BNW_Policy_FreeUnitClasses = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
	/**
	 * Not Null
	 */
	Count: INTEGER,
}

declare type BNW_Policy_TourismOnUnitCreation = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
	/**
	 * Not Null
	 */
	Tourism: INTEGER,
}

declare type BNW_Policy_FreeItems = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: BNW_PoliciesType,
	/**
	 * Not Null
	 */
	SetType: TEXT,
	/**
	 * @default 1
	 */
	MinItems: INTEGER,
	/**
	 * @default 1
	 */
	MaxItems: INTEGER,
}

declare type BNW_PolicyBranchTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_PolicyBranchTypesType,
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
	 * Reference: Language_en_US(Tag)
	 */
	Title: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraPrereq: BNW_ErasType,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreePolicy: BNW_PoliciesType,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreeFinishingPolicy: BNW_PoliciesType,
	/**
	 * @default 0
	 */
	FirstAdopterFreePolicies: INT,
	/**
	 * @default 0
	 */
	SecondAdopterFreePolicies: INT,
	/**
	 * @default false
	 */
	PurchaseByLevel: BOOLEAN,
	/**
	 * @default false
	 */
	LockedWithoutReligion: BOOLEAN,
	/**
	 * @default false
	 */
	AIMutuallyExclusive: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoReligion: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoCulture: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	AIDelayNoScience: BOOLEAN,
}

declare type BNW_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: BNW_PolicyBranchTypesType,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: BNW_PolicyBranchTypesType,
}

declare type BNW_Processes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ProcessesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Process_Flavors = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: BNW_ProcessesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Process_ProductionYields = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: BNW_ProcessesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Projects = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ProjectsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	Requirements: TEXT,
	/**
	 * @default 0
	 */
	MaxGlobalInstances: INTEGER,
	/**
	 * @default 0
	 */
	MaxTeamInstances: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	NukeInterception: INTEGER,
	/**
	 * @default 0
	 */
	CultureBranchesRequired: INTEGER,
	/**
	 * @default 0
	 */
	TechShare: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayPercent: INTEGER,
	/**
	 * @default false
	 */
	Spaceship: BOOLEAN,
	/**
	 * @default false
	 */
	Religious: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsNukes: BOOLEAN,
	/**
	 * @default NULL
	 */
	MovieDefineTag: TEXT,
	/**
	 * @default NULL
	 */
	VictoryPrereq: TEXT,
	/**
	 * @default NULL
	 */
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 */
	EveryoneSpecialUnit: TEXT,
	/**
	 * @default NULL
	 */
	CreateSound: TEXT,
	/**
	 * @default NULL
	 */
	AnyonePrereqProject: TEXT,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Project_Flavors = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: BNW_ProjectsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Project_Prereqs = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: BNW_ProjectsType,
	/**
	 * Reference: Projects(Type)
	 */
	PrereqProjectType: BNW_ProjectsType,
	/**
	 * @default 1
	 */
	AmountNeeded: INTEGER,
}

declare type BNW_Project_VictoryThresholds = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: BNW_ProjectsType,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: BNW_VictoriesType,
	/**
	 * Not Null
	 */
	Threshold: INTEGER,
	/**
	 * @default 0
	 */
	MinThreshold: INTEGER,
}

declare type BNW_Project_ResourceQuantityRequirements = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: BNW_ProjectsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

declare type BNW_ReplayDataSets = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ReplayDataSetsType,
	/**
	 */
	Name: TEXT,
	/**
	 */
	Description: TEXT,
}

declare type BNW_SeaLevels = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_SeaLevelsType,
	/**
	 */
	Description: TEXT,
	/**
	 * Not Null
	 */
	SeaLevelChange: INTEGER,
}

declare type BNW_SmallAwards = {
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
	Civilopedia: TEXT,
	/**
	 */
	Notification: TEXT,
	/**
	 */
	TeamNotification: TEXT,
	/**
	 * @default 0
	 */
	NumVictoryPoints: INTEGER,
	/**
	 * @default 0
	 */
	NumCities: INTEGER,
	/**
	 * @default 0
	 */
	CityPopulation: INTEGER,
}

declare type BNW_Specialists = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_SpecialistsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 */
	Strategy: TEXT,
	/**
	 */
	GreatPeopleTitle: TEXT,
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
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	Experience: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateChange: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerTurn: INTEGER,
	/**
	 * @default NULL
	 */
	GreatPeopleUnitClass: TEXT,
}

declare type BNW_SpecialistFlavors = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_SpecialistYields = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: BNW_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Trades = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TradesType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	InitialPercent: INTEGER,
	/**
	 * @default 0
	 */
	AIWeightPercent: INTEGER,
}

declare type BNW_TurnTimers = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TurnTimersType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	BaseTime: INTEGER,
	/**
	 */
	CityResource: INTEGER,
	/**
	 */
	UnitResource: INTEGER,
	/**
	 */
	FirstTurnMultiplier: INTEGER,
}

declare type BNW_Victories = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_VictoriesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	VictoryStatement: TEXT,
	/**
	 */
	VictoryBackground: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 * @default false
	 */
	WinsGame: BOOLEAN,
	/**
	 * @default false
	 */
	TargetScore: BOOLEAN,
	/**
	 * @default false
	 */
	EndScore: BOOLEAN,
	/**
	 * @default false
	 */
	Conquest: BOOLEAN,
	/**
	 * @default false
	 */
	Influential: BOOLEAN,
	/**
	 * @default false
	 */
	DiploVote: BOOLEAN,
	/**
	 * @default false
	 */
	Permanent: BOOLEAN,
	/**
	 * @default false
	 */
	ReligionInAllCities: BOOLEAN,
	/**
	 * @default false
	 */
	FindAllNaturalWonders: BOOLEAN,
	/**
	 * @default 0
	 */
	PopulationPercentLead: INTEGER,
	/**
	 * @default 0
	 */
	LandPercent: INTEGER,
	/**
	 * @default 0
	 */
	MinLandPercent: INTEGER,
	/**
	 * @default 0
	 */
	NumCultureCities: INTEGER,
	/**
	 * @default 0
	 */
	TotalCultureRatio: INTEGER,
	/**
	 * @default 0
	 */
	VictoryDelayTurns: INTEGER,
	/**
	 */
	VictoryMovie: TEXT,
	/**
	 * @default NULL
	 */
	CityCulture: TEXT,
	/**
	 * @default NULL
	 */
	Audio: TEXT,
}

declare type BNW_VictoryPointAwards = {
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: BNW_VictoriesType,
	/**
	 * Not Null
	 */
	VictoryPoints: INTEGER,
}

declare type BNW_HistoricRankings = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 */
	HistoricLeader: TEXT,
	/**
	 */
	LeaderQuote: TEXT,
	/**
	 * @default 0
	 */
	LeaderScore: INTEGER,
}

declare type BNW_VoteSources = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_VoteSourcesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	PopupText: TEXT,
	/**
	 */
	SecretaryGeneralText: TEXT,
	/**
	 */
	VoteInterval: INTEGER,
	/**
	 * @default NULL
	 */
	FreeSpecialist: TEXT,
	/**
	 * @default NULL
	 */
	Policy: TEXT,
}

declare type BNW_Votes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_VotesType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	PopulationThreshold: INTEGER,
	/**
	 * @default 0
	 */
	MinVoters: INTEGER,
	/**
	 * @default false
	 */
	CityVoting: BOOLEAN,
	/**
	 * @default false
	 */
	CivVoting: BOOLEAN,
	/**
	 * @default false
	 */
	SecretaryGeneral: BOOLEAN,
	/**
	 * @default false
	 */
	Victory: BOOLEAN,
	/**
	 * @default false
	 */
	FreeTrade: BOOLEAN,
	/**
	 * @default false
	 */
	NoNukes: BOOLEAN,
	/**
	 * @default false
	 */
	DefensivePact: BOOLEAN,
	/**
	 * @default false
	 */
	OpenBorders: BOOLEAN,
	/**
	 * @default false
	 */
	ForcePeace: BOOLEAN,
	/**
	 * @default false
	 */
	ForceNoTrade: BOOLEAN,
	/**
	 * @default false
	 */
	ForceWar: BOOLEAN,
	/**
	 * @default false
	 */
	AssignCity: BOOLEAN,
}

declare type BNW_Vote_DiploVotes = {
	/**
	 * Reference: Votes(Type)
	 */
	VoteType: BNW_VotesType,
	/**
	 */
	DiploVoteType: TEXT,
}

declare type BNW_Worlds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_WorldsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	DefaultPlayers: INTEGER,
	/**
	 */
	DefaultMinorCivs: INTEGER,
	/**
	 */
	FogTilesPerBarbarianCamp: INTEGER,
	/**
	 */
	NumNaturalWonders: INTEGER,
	/**
	 */
	UnitNameModifier: INTEGER,
	/**
	 */
	TargetNumCities: INTEGER,
	/**
	 */
	NumFreeBuildingResources: INTEGER,
	/**
	 */
	BuildingClassPrereqModifier: INTEGER,
	/**
	 */
	MaxConscriptModifier: INTEGER,
	/**
	 */
	GridWidth: INTEGER,
	/**
	 */
	GridHeight: INTEGER,
	/**
	 */
	MaxActiveReligions: INTEGER,
	/**
	 */
	TerrainGrainChange: INTEGER,
	/**
	 */
	FeatureGrainChange: INTEGER,
	/**
	 */
	ResearchPercent: INTEGER,
	/**
	 */
	NumCitiesUnhappinessPercent: INTEGER,
	/**
	 */
	NumCitiesPolicyCostMod: INTEGER,
	/**
	 */
	NumCitiesTechCostMod: INTEGER,
	/**
	 */
	AdvancedStartPointsMod: INTEGER,
	/**
	 */
	EstimatedNumCities: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Defines = {
	/**
	 * Primary Key
	 */
	Name: TEXT,
	/**
	 */
	Value: VARIANT,
}

declare type BNW_PostDefines = {
	/**
	 * Primary Key
	 */
	Name: TEXT,
	/**
	 */
	Key: TEXT,
	/**
	 */
	Table: TEXT,
}

declare type BNW_Colors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ColorsType,
	/**
	 * @default 1.0
	 */
	Red: FLOAT,
	/**
	 * @default 1.0
	 */
	Green: FLOAT,
	/**
	 * @default 1.0
	 */
	Blue: FLOAT,
	/**
	 * @default 1.0
	 */
	Alpha: FLOAT,
}

declare type BNW_InterfaceModes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_InterfaceModesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Help: TEXT,
	/**
	 */
	DisabledHelp: TEXT,
	/**
	 */
	CursorType: TEXT,
	/**
	 */
	Mission: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default false
	 */
	GotoPlot: BOOLEAN,
	/**
	 * @default false
	 */
	HighlightPlot: BOOLEAN,
	/**
	 * @default false
	 */
	SelectType: BOOLEAN,
	/**
	 * @default false
	 */
	SelectAll: BOOLEAN,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_PlayerColors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_PlayerColorsType,
	/**
	 * Not Null
	 * Reference: Colors(type)
	 */
	PrimaryColor: TEXT,
	/**
	 * Not Null
	 * Reference: Colors(Type)
	 */
	SecondaryColor: BNW_ColorsType,
	/**
	 * Not Null
	 * Reference: Colors(Type)
	 */
	TextColor: BNW_ColorsType,
}

declare type BNW_Leaders = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_LeadersType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 */
	CivilopediaTag: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default 0
	 */
	VictoryCompetitiveness: INTEGER,
	/**
	 * @default 0
	 */
	WonderCompetitiveness: INTEGER,
	/**
	 * @default 0
	 */
	MinorCivCompetitiveness: INTEGER,
	/**
	 * @default 0
	 */
	Boldness: INTEGER,
	/**
	 * @default 0
	 */
	DiploBalance: INTEGER,
	/**
	 * @default 0
	 */
	WarmongerHate: INTEGER,
	/**
	 * @default 0
	 */
	WorkAgainstWillingness: INTEGER,
	/**
	 * @default 0
	 */
	WorkWithWillingness: INTEGER,
	/**
	 * @default 0
	 */
	DenounceWillingness: INTEGER,
	/**
	 * @default 0
	 */
	DoFWillingness: INTEGER,
	/**
	 * @default 0
	 */
	Loyalty: INTEGER,
	/**
	 * @default 0
	 */
	Neediness: INTEGER,
	/**
	 * @default 0
	 */
	Forgiveness: INTEGER,
	/**
	 * @default 0
	 */
	Chattiness: INTEGER,
	/**
	 * @default 0
	 */
	Meanness: INTEGER,
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
	 * @default NULL
	 */
	PackageID: TEXT,
}

declare type BNW_Leader_MajorCivApproachBiases = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: BNW_LeadersType,
	/**
	 * Reference: MajorCivApproachTypes(Type)
	 */
	MajorCivApproachType: BNW_MajorCivApproachTypesType,
	/**
	 */
	Bias: INTEGER,
}

declare type BNW_Leader_MinorCivApproachBiases = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: BNW_LeadersType,
	/**
	 * Reference: MinorCivApproachTypes(Type)
	 */
	MinorCivApproachType: BNW_MinorCivApproachTypesType,
	/**
	 */
	Bias: INTEGER,
}

declare type BNW_Leader_Flavors = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: BNW_LeadersType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type BNW_Leader_Traits = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: BNW_LeadersType,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
}

declare type BNW_Routes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_RoutesType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	AdvancedStartCost: INTEGER,
	/**
	 * @default 0
	 */
	Value: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	FlatMovement: INTEGER,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default false
	 */
	Industrial: BOOLEAN,
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
	 */
	Civilopedia: TEXT,
}

declare type BNW_Route_Yields = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: BNW_RoutesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type BNW_Route_TechMovementChanges = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: BNW_RoutesType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Not Null
	 */
	MovementChange: INTEGER,
}

declare type BNW_Route_ResourceQuantityRequirements = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: BNW_RoutesType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Not Null
	 */
	Cost: INTEGER,
}

declare type BNW_Notifications = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Unique
	 */
	NotificationType: TEXT,
	/**
	 * @default 0
	 */
	Welcomeness: INTEGER,
	/**
	 * @default false
	 */
	Urgent: BOOL,
}

declare type BNW_Technologies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TechnologiesType,
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

declare type BNW_Technology_DomainExtraMoves = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Moves: INTEGER,
}

declare type BNW_Technology_TradeRouteDomainExtraRange = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Range: INTEGER,
}

declare type BNW_Technology_Flavors = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_Technology_ORPrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: BNW_TechnologiesType,
}

declare type BNW_Technology_PrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: BNW_TechnologiesType,
}

declare type BNW_Technology_FreePromotions = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Features = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_FeaturesType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * @default NULL
	 */
	Help: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default 0
	 */
	StartingLocationWeight: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 * @default 0
	 */
	AppearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	DisappearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	Growth: INTEGER,
	/**
	 * Reference: Terrains(Type)
	 */
	GrowthTerrainType: BNW_TerrainsType,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	AdjacentUnitFreePromotion: BNW_UnitPromotionsType,
	/**
	 * @default 0
	 */
	FirstFinderGold: INTEGER,
	/**
	 * @default 0
	 */
	InBorderHappiness: INTEGER,
	/**
	 * @default 0
	 */
	OccurrenceFrequency: INTEGER,
	/**
	 * @default false
	 */
	YieldNotAdditive: BOOLEAN,
	/**
	 * @default false
	 */
	NoCoast: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiver: BOOLEAN,
	/**
	 * @default false
	 */
	NoAdjacent: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresRiver: BOOLEAN,
	/**
	 * @default false
	 */
	AddsFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCity: BOOLEAN,
	/**
	 * @default false
	 */
	NoImprovement: BOOLEAN,
	/**
	 * @default false
	 */
	VisibleAlways: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	NaturalWonder: BOOLEAN,
	/**
	 * @default false
	 */
	Rough: BOOLEAN,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 */
	EffectType: TEXT,
	/**
	 * @default 0
	 */
	EffectProbability: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default 0
	 */
	AdvancedStartRemoveCost: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_FakeFeatures = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_FakeFeaturesType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default 0
	 */
	StartingLocationWeight: INTEGER,
	/**
	 * @default 0
	 */
	Movement: INTEGER,
	/**
	 * @default 0
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 * @default 0
	 */
	AppearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	DisappearanceProbability: INTEGER,
	/**
	 * @default 0
	 */
	Growth: INTEGER,
	/**
	 * Reference: Terrains(Type)
	 */
	GrowthTerrainType: BNW_TerrainsType,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * @default false
	 */
	YieldNotAdditive: BOOLEAN,
	/**
	 * @default false
	 */
	NoCoast: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiver: BOOLEAN,
	/**
	 * @default false
	 */
	NoAdjacent: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresRiver: BOOLEAN,
	/**
	 * @default false
	 */
	AddsFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCity: BOOLEAN,
	/**
	 * @default false
	 */
	NoImprovement: BOOLEAN,
	/**
	 * @default false
	 */
	VisibleAlways: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	NaturalWonder: BOOLEAN,
	/**
	 * @default false
	 */
	Rough: BOOLEAN,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 */
	EffectType: TEXT,
	/**
	 * @default 0
	 */
	EffectProbability: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default 0
	 */
	AdvancedStartRemoveCost: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Feature_YieldChanges = {
	/**
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Feature_RiverYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Feature_HillsYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
}

declare type BNW_Natural_Wonder_Placement = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	NaturalWonderType: BNW_Natural_Wonder_PlacementType,
	/**
	 * @default -1
	 */
	EligibilityMethodNumber: INTEGER,
	/**
	 * @default 10
	 */
	OccurrenceFrequency: INTEGER,
	/**
	 * @default false
	 */
	RequireBiggestLandmass: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidBiggestLandmass: BOOLEAN,
	/**
	 * @default false
	 */
	RequireFreshWater: BOOLEAN,
	/**
	 * @default true
	 */
	AvoidFreshWater: BOOLEAN,
	/**
	 * @default true
	 */
	LandBased: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandAdjacentToOcean: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandAdjacentToOcean: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandOnePlotInland: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandOnePlotInland: BOOLEAN,
	/**
	 * @default false
	 */
	RequireLandTwoOrMorePlotsInland: BOOLEAN,
	/**
	 * @default false
	 */
	AvoidLandTwoOrMorePlotsInland: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyPlotType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeFlatland: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeHills: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeMountain: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeOcean: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyTerrainType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeGrass: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBePlains: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeDesert: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeTundra: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeSnow: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeShallowWater: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeDeepWater: BOOLEAN,
	/**
	 * @default true
	 */
	CoreTileCanBeAnyFeatureType: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeNoFeature: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeForest: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeJungle: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeOasis: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeFloodPlains: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeMarsh: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeIce: BOOLEAN,
	/**
	 * @default false
	 */
	CoreTileCanBeAtoll: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutPlotTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidAnyland: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireFlatland: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentFlatland: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireHills: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentHills: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireMountain: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentMountain: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireHillsPlusMountains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentHillsPlusMountains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireOcean: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentOcean: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidFlatland: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentFlatland: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidHills: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentHills: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidMountain: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentMountain: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidHillsPlusMountains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentHillsPlusMountains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidOcean: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentOcean: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutTerrainTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireGrass: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentGrass: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequirePlains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireDesert: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentDesert: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireTundra: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentTundra: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireSnow: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentSnow: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireShallowWater: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentShallowWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireDeepWater: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentDeepWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidGrass: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentGrass: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidPlains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidDesert: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentDesert: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidTundra: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentTundra: INTEGER,
	/**
	 * @default true
	 */
	AdjacentTilesAvoidSnow: BOOLEAN,
	/**
	 * @default 0
	 */
	MaximumAllowedAdjacentSnow: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidShallowWater: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentShallowWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidDeepWater: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentDeepWater: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesCareAboutFeatureTypes: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentTilesRequireNoFeature: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentNoFeature: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireForest: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentForest: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireJungle: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentJungle: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireOasis: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentOasis: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireFloodPlains: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentFloodPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireMarsh: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentMarsh: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireIce: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentIce: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesRequireAtoll: BOOLEAN,
	/**
	 * @default 0
	 */
	RequiredNumberOfAdjacentAtoll: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidNoFeature: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentNoFeature: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidForest: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentForest: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidJungle: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentJungle: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidOasis: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentOasis: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidFloodPlains: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentFloodPlains: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidMarsh: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentMarsh: INTEGER,
	/**
	 * @default true
	 */
	AdjacentTilesAvoidIce: BOOLEAN,
	/**
	 * @default 0
	 */
	MaximumAllowedAdjacentIce: INTEGER,
	/**
	 * @default false
	 */
	AdjacentTilesAvoidAtoll: BOOLEAN,
	/**
	 * @default 99
	 */
	MaximumAllowedAdjacentAtoll: INTEGER,
	/**
	 * @default -1
	 */
	TileChangesMethodNumber: INTEGER,
	/**
	 * @default false
	 */
	ChangeCoreTileToMountain: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileToFlatland: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileTerrainToGrass: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeCoreTileTerrainToPlains: BOOLEAN,
	/**
	 * @default false
	 */
	SetAdjacentTilesToShallowWater: BOOLEAN,
}

declare type BNW_Improvements = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ImprovementsType,
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
	Help: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementPillage: BNW_ImprovementsType,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementUpgrade: BNW_ImprovementsType,
	/**
	 * @default false
	 */
	SpecificCivRequired: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * @default false
	 */
	HillsMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	FreshWaterMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	RiverSideMakesValid: BOOLEAN,
	/**
	 * @default false
	 */
	NoFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlands: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFlatlandsOrFreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresFeature: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresImprovement: BOOLEAN,
	/**
	 * @default false
	 */
	RemovesResource: BOOLEAN,
	/**
	 * @default false
	 */
	PromptWhenComplete: BOOLEAN,
	/**
	 * @default false
	 */
	Coastal: BOOLEAN,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	DestroyedWhenPillaged: BOOLEAN,
	/**
	 * @default false
	 */
	DisplacePillager: BOOLEAN,
	/**
	 * @default false
	 */
	BuildableOnResources: BOOLEAN,
	/**
	 * @default false
	 */
	BarbarianCamp: BOOLEAN,
	/**
	 * @default false
	 */
	Goody: BOOLEAN,
	/**
	 * @default false
	 */
	Permanent: BOOLEAN,
	/**
	 * @default false
	 */
	OutsideBorders: BOOLEAN,
	/**
	 * @default false
	 */
	InAdjacentFriendly: BOOLEAN,
	/**
	 * @default false
	 */
	IgnoreOwnership: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyCityStateTerritory: BOOLEAN,
	/**
	 * @default false
	 */
	GraphicalOnly: BOOLEAN,
	/**
	 * @default false
	 */
	CreatedByGreatPerson: BOOLEAN,
	/**
	 * @default false
	 */
	NoTwoAdjacent: BOOLEAN,
	/**
	 * @default false
	 */
	AdjacentLuxury: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsWalkWater: BOOLEAN,
	/**
	 * @default 0
	 */
	CultureAdjacentSameType: INTEGER,
	/**
	 * @default 0
	 */
	TilesPerGoody: INTEGER,
	/**
	 * @default 0
	 */
	GoodyRange: INTEGER,
	/**
	 * @default 0
	 */
	FeatureGrowth: INTEGER,
	/**
	 * @default 0
	 */
	UpgradeTime: INTEGER,
	/**
	 * @default 0
	 */
	RiverSideUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	CoastalLandUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	HillsUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	FreshWaterUpgradeMod: INTEGER,
	/**
	 * @default 0
	 */
	DefenseModifier: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyDamage: INTEGER,
	/**
	 * @default 0
	 */
	PillageGold: INTEGER,
	/**
	 * @default 0
	 */
	ResourceExtractionMod: INTEGER,
	/**
	 * @default 0
	 */
	LuxuryCopiesSiphonedFromMinor: INTEGER,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default 0
	 */
	CultureBombRadius: INTEGER,
	/**
	 * @default -1
	 */
	RequiresXAdjacentLand: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Improvement_Flavors = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Improvement_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_YieldPerEra = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_AdjacentCityYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_CoastalLandYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_FreshWaterYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_HillsYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_AdjacentMountainYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_PrereqNatureYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_RiverSideYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_ValidTerrains = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
}

declare type BNW_Improvement_ValidFeatures = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
}

declare type BNW_Improvement_ValidImprovements = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Improvements(Type)
	 */
	PrereqImprovement: BNW_ImprovementsType,
}

declare type BNW_Improvement_ResourceTypes = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * @default true
	 */
	ResourceMakesValid: BOOLEAN,
	/**
	 * @default true
	 */
	ResourceTrade: BOOLEAN,
	/**
	 * @default 0
	 */
	DiscoveryRand: INTEGER,
	/**
	 * @default 0
	 */
	QuantityRequirement: INTEGER,
}

declare type BNW_Improvement_ResourceType_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_RouteYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: BNW_RoutesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_TechYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_TechNoFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Improvement_TechFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_ResourceClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ResourceClassesType,
	/**
	 */
	UniqueRange: INTEGER,
}

declare type BNW_Resources = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ResourcesType,
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
	Help: TEXT,
	/**
	 */
	ResourceClassType: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 */
	AltArtDefineTag: TEXT,
	/**
	 * @default 
	 */
	ArtDefineTagHeavy: TEXT,
	/**
	 * @default 
	 */
	AltArtDefineTagHeavy: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechReveal: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	PolicyReveal: BNW_PoliciesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechCityTrade: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: BNW_TechnologiesType,
	/**
	 * @default NULL
	 */
	AIStopTradingEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: BNW_CivilizationsType,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionMod: INTEGER,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	WonderProductionModObsoleteEra: BNW_ErasType,
	/**
	 * @default 0
	 */
	StartingResourceQuantity: INTEGER,
	/**
	 * @default 0
	 */
	AITradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	AIObjective: INTEGER,
	/**
	 * @default 0
	 */
	PlacementOrder: INTEGER,
	/**
	 * @default 0
	 */
	ConstAppearance: INTEGER,
	/**
	 * @default 0
	 */
	MinAreaSize: INTEGER,
	/**
	 * @default 0
	 */
	MinLatitude: INTEGER,
	/**
	 * @default 0
	 */
	MaxLatitude: INTEGER,
	/**
	 * @default 0
	 */
	RandApp1: INTEGER,
	/**
	 * @default 0
	 */
	RandApp2: INTEGER,
	/**
	 * @default 0
	 */
	RandApp3: INTEGER,
	/**
	 * @default 0
	 */
	RandApp4: INTEGER,
	/**
	 * @default 0
	 */
	Player: INTEGER,
	/**
	 * @default 0
	 */
	TilesPer: INTEGER,
	/**
	 * @default 0
	 */
	MinLandPercent: INTEGER,
	/**
	 * @default 0
	 */
	Unique: INTEGER,
	/**
	 * @default 0
	 */
	GroupRange: INTEGER,
	/**
	 * @default 0
	 */
	GroupRand: INTEGER,
	/**
	 * @default 0
	 */
	ResourceUsage: INTEGER,
	/**
	 * @default false
	 */
	PresentOnAllValidPlots: BOOLEAN,
	/**
	 * @default false
	 */
	Area: BOOLEAN,
	/**
	 * @default false
	 */
	Hills: BOOLEAN,
	/**
	 * @default false
	 */
	Flatlands: BOOLEAN,
	/**
	 * @default false
	 */
	NoRiverSide: BOOLEAN,
	/**
	 * @default false
	 */
	Normalize: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyMinorCivs: BOOLEAN,
	/**
	 */
	IconString: TEXT,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Resource_YieldChanges = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Resource_Flavors = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * @default 0
	 */
	Flavor: INTEGER,
}

declare type BNW_Resource_TerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
}

declare type BNW_Resource_FeatureBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
}

declare type BNW_Resource_FeatureTerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
}

declare type BNW_Resource_QuantityTypes = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

declare type BNW_Terrains = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_TerrainsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * @default false
	 */
	Found: BOOLEAN,
	/**
	 * @default false
	 */
	FoundCoast: BOOLEAN,
	/**
	 * @default false
	 */
	FoundFreshWater: BOOLEAN,
	/**
	 * @default 1
	 */
	Movement: INTEGER,
	/**
	 * @default 1
	 */
	SeeFrom: INTEGER,
	/**
	 * @default 1
	 */
	SeeThrough: INTEGER,
	/**
	 * @default 0
	 */
	BuildModifier: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	InfluenceCost: INTEGER,
	/**
	 */
	Button: TEXT,
	/**
	 */
	WorldSoundscapeAudioScript: TEXT,
	/**
	 * @default false
	 */
	GraphicalOnly: BOOLEAN,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 */
	EffectTypeTag: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Terrain_Yields = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Terrain_RiverYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Terrain_HillsYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Yields = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_YieldsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	IconString: TEXT,
	/**
	 * @default 0
	 */
	HillsChange: INTEGER,
	/**
	 * @default 0
	 */
	MountainChange: INTEGER,
	/**
	 * @default 0
	 */
	LakeChange: INTEGER,
	/**
	 * @default 0
	 */
	CityChange: INTEGER,
	/**
	 * @default 0
	 */
	PopulationChangeOffset: INTEGER,
	/**
	 * @default 0
	 */
	PopulationChangeDivisor: INTEGER,
	/**
	 */
	MinCity: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeYield: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeYieldThreshold: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeYieldMod: INTEGER,
	/**
	 */
	AIWeightPercent: INTEGER,
}

declare type BNW_Automates = {
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
	 * @default 
	 */
	Help: TEXT,
	/**
	 * @default 
	 */
	DisabledHelp: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default false
	 */
	ConfirmCommand: BOOLEAN,
	/**
	 */
	Automate: TEXT,
	/**
	 */
	Command: TEXT,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Builds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_BuildsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 
	 */
	Help: TEXT,
	/**
	 * @default 
	 */
	DisabledHelp: TEXT,
	/**
	 * @default 
	 */
	Recommendation: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 */
	Time: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	CostIncreasePerImprovement: INTEGER,
	/**
	 * @default false
	 */
	Kill: BOOLEAN,
	/**
	 * @default false
	 */
	Repair: BOOLEAN,
	/**
	 * @default false
	 */
	RemoveRoute: BOOLEAN,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	CanBeEmbarked: BOOLEAN,
	/**
	 * @default NULL
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 */
	ImprovementType: TEXT,
	/**
	 * @default NULL
	 */
	RouteType: TEXT,
	/**
	 * @default NULL
	 */
	EntityEvent: TEXT,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default true
	 */
	ShowInPedia: BOOLEAN,
	/**
	 * @default true
	 */
	ShowInTechTree: BOOLEAN,
}

declare type BNW_BuildFeatures = {
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: BNW_BuildsType,
	/**
	 */
	FeatureType: TEXT,
	/**
	 */
	PrereqTech: TEXT,
	/**
	 */
	Time: INTEGER,
	/**
	 * @default 0
	 */
	Production: INTEGER,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default false
	 */
	Remove: BOOLEAN,
}

declare type BNW_Build_TechTimeChanges = {
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: BNW_BuildsType,
	/**
	 */
	TechType: TEXT,
	/**
	 * @default 0
	 */
	TimeChange: INTEGER,
}

declare type BNW_Commands = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CommandsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 
	 */
	Help: TEXT,
	/**
	 * @default 
	 */
	DisabledHelp: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default false
	 */
	All: BOOLEAN,
	/**
	 * @default false
	 */
	ConfirmCommand: BOOLEAN,
	/**
	 */
	Automate: TEXT,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_Controls = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ControlsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 
	 */
	Help: TEXT,
	/**
	 * @default 
	 */
	DisabledHelp: TEXT,
	/**
	 */
	Button: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
}

declare type BNW_Missions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MissionsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default 
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default 
	 * Reference: Language_en_US(Tag)
	 */
	DisabledHelp: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	Visible: BOOLEAN,
	/**
	 * @default NULL
	 */
	Waypoint: TEXT,
	/**
	 */
	Time: INTEGER,
	/**
	 */
	Target: BOOLEAN,
	/**
	 */
	Build: BOOLEAN,
	/**
	 */
	Sound: BOOLEAN,
	/**
	 */
	EntityEventType: TEXT,
	/**
	 * @default -1
	 */
	IconIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_MultiUnitPositions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MultiUnitPositionsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Name: TEXT,
}

declare type BNW_MultiUnitFormations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_MultiUnitFormationsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Name: TEXT,
	/**
	 * @default false
	 */
	RequiresNavalUnitConsistency: BOOLEAN,
}

declare type BNW_MultiUnitFormation_SlotEntries = {
	/**
	 * Reference: MultiUnitFormations(Type)
	 */
	MultiUnitFormationType: BNW_MultiUnitFormationsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	PrimaryUnitType: BNW_UnitAIInfosType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	SecondaryUnitType: BNW_UnitAIInfosType,
	/**
	 * Reference: MultiUnitPositions(Type)
	 */
	MultiUnitPositionType: BNW_MultiUnitPositionsType,
	/**
	 */
	RequiredSlot: BOOLEAN,
}

declare type BNW_SpecialUnits = {
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

declare type BNW_SpecialUnit_CarrierUnitAI = {
	/**
	 * Reference: SpecialUnits(Type)
	 */
	SpecialUnitType: TEXT,
	/**
	 */
	UnitAIType: TEXT,
}

declare type BNW_SpecialUnit_ProductionTraits = {
	/**
	 * Reference: SpecialUnits(Type)
	 */
	SpecialUnitType: TEXT,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 */
	Trait: INTEGER,
}

declare type BNW_UnitClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_UnitClassesType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default -1
	 */
	MaxGlobalInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxTeamInstances: INTEGER,
	/**
	 * @default -1
	 */
	MaxPlayerInstances: INTEGER,
	/**
	 * @default 0
	 */
	InstanceCostModifier: INTEGER,
	/**
	 */
	DefaultUnit: TEXT,
}

declare type BNW_MovementRates = {
	/**
	 * Not Null
	 */
	Type: TEXT,
	/**
	 * Not Null
	 */
	NumHexes: INTEGER,
	/**
	 */
	TotalTime: FLOAT,
	/**
	 */
	EaseIn: FLOAT,
	/**
	 */
	EaseOut: FLOAT,
	/**
	 */
	IndividualOffset: FLOAT,
	/**
	 */
	RowOffset: FLOAT,
	/**
	 */
	CurveRoll: FLOAT,
	/**
	 */
	PathSubdivision: INTEGER,
}

declare type BNW_UnitPromotions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_UnitPromotionsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default 
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default 
	 */
	DisabledHelp: TEXT,
	/**
	 */
	Button: TEXT,
	/**
	 * @default 9
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default ABILITY_ATLAS
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 */
	Sound: TEXT,
	/**
	 * @default false
	 */
	CannotBeChosen: BOOLEAN,
	/**
	 * @default false
	 */
	LostWithUpgrade: BOOLEAN,
	/**
	 * @default false
	 */
	NotWithUpgrade: BOOLEAN,
	/**
	 * @default false
	 */
	InstaHeal: BOOLEAN,
	/**
	 * @default false
	 */
	Leader: BOOLEAN,
	/**
	 * @default false
	 */
	Blitz: BOOLEAN,
	/**
	 * @default false
	 */
	Amphib: BOOLEAN,
	/**
	 * @default false
	 */
	River: BOOLEAN,
	/**
	 * @default false
	 */
	EnemyRoute: BOOLEAN,
	/**
	 * @default false
	 */
	RivalTerritory: BOOLEAN,
	/**
	 * @default false
	 */
	MustSetUpToRangedAttack: BOOLEAN,
	/**
	 * @default false
	 */
	RangedSupportFire: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveAfterAttacking: BOOLEAN,
	/**
	 * @default false
	 */
	AlwaysHeal: BOOLEAN,
	/**
	 * @default false
	 */
	HealOutsideFriendly: BOOLEAN,
	/**
	 * @default false
	 */
	HillsDoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	RoughTerrainEndsTurn: BOOLEAN,
	/**
	 * @default false
	 */
	IgnoreTerrainCost: BOOLEAN,
	/**
	 * @default false
	 */
	HoveringUnit: BOOLEAN,
	/**
	 * @default false
	 */
	FlatMovementCost: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveImpassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCapture: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyDefensive: BOOLEAN,
	/**
	 * @default false
	 */
	NoDefensiveBonus: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	HiddenNationality: BOOLEAN,
	/**
	 * @default false
	 */
	AlwaysHostile: BOOLEAN,
	/**
	 * @default false
	 */
	NoRevealMap: BOOLEAN,
	/**
	 * @default false
	 */
	Recon: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveAllTerrain: BOOLEAN,
	/**
	 * @default false
	 */
	FreePillageMoves: BOOLEAN,
	/**
	 * @default false
	 */
	AirSweepCapable: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsEmbarkation: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedAllWater: BOOLEAN,
	/**
	 * @default false
	 */
	HealIfDestroyExcludesBarbarians: BOOLEAN,
	/**
	 * @default false
	 */
	RangeAttackIgnoreLOS: BOOLEAN,
	/**
	 * @default false
	 */
	CityAttackOnly: BOOLEAN,
	/**
	 * @default false
	 */
	CaptureDefeatedEnemy: BOOLEAN,
	/**
	 * @default false
	 */
	HealOnPillage: BOOLEAN,
	/**
	 * @default false
	 */
	IgnoreGreatGeneralBenefit: BOOLEAN,
	/**
	 * @default false
	 */
	IgnoreZOC: BOOLEAN,
	/**
	 * @default false
	 */
	HasPostCombatPromotions: BOOLEAN,
	/**
	 * @default false
	 */
	PostCombatPromotionsExclusive: BOOLEAN,
	/**
	 * @default 0
	 */
	RangedAttackModifier: INTEGER,
	/**
	 * @default 0
	 */
	InterceptionCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	InterceptionDefenseDamageModifier: INTEGER,
	/**
	 * @default 0
	 */
	AirSweepCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraAttacks: INTEGER,
	/**
	 * @default 0
	 */
	ExtraNavalMovement: INTEGER,
	/**
	 * @default 0
	 */
	VisibilityChange: INTEGER,
	/**
	 * @default 0
	 */
	MovesChange: INTEGER,
	/**
	 * @default 0
	 */
	MoveDiscountChange: INTEGER,
	/**
	 * @default 0
	 */
	RangeChange: INTEGER,
	/**
	 * @default 0
	 */
	InterceptChanceChange: INTEGER,
	/**
	 * @default 0
	 */
	NumInterceptionChange: INTEGER,
	/**
	 * @default 0
	 */
	EvasionChange: INTEGER,
	/**
	 * @default 0
	 */
	CargoChange: INTEGER,
	/**
	 * @default 0
	 */
	EnemyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	NeutralHealChange: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	SameTileHealChange: INTEGER,
	/**
	 * @default 0
	 */
	AdjacentTileHealChange: INTEGER,
	/**
	 * @default 0
	 */
	EnemyDamageChance: INTEGER,
	/**
	 * @default 0
	 */
	NeutralDamageChance: INTEGER,
	/**
	 * @default 0
	 */
	EnemyDamage: INTEGER,
	/**
	 * @default 0
	 */
	NeutralDamage: INTEGER,
	/**
	 * @default 0
	 */
	CombatPercent: INTEGER,
	/**
	 * @default 0
	 */
	CityAttack: INTEGER,
	/**
	 * @default 0
	 */
	CityDefense: INTEGER,
	/**
	 * @default 0
	 */
	RangedDefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	HillsAttack: INTEGER,
	/**
	 * @default 0
	 */
	HillsDefense: INTEGER,
	/**
	 * @default 0
	 */
	OpenAttack: INTEGER,
	/**
	 * @default 0
	 */
	OpenRangedAttackMod: INTEGER,
	/**
	 * @default 0
	 */
	OpenDefense: INTEGER,
	/**
	 * @default 0
	 */
	RoughAttack: INTEGER,
	/**
	 * @default 0
	 */
	RoughRangedAttackMod: INTEGER,
	/**
	 * @default 0
	 */
	RoughDefense: INTEGER,
	/**
	 * @default 0
	 */
	AttackFortifiedMod: INTEGER,
	/**
	 * @default 0
	 */
	AttackWoundedMod: INTEGER,
	/**
	 * @default 0
	 */
	FlankAttackModifier: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyCombatMod: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyCombatRange: INTEGER,
	/**
	 * @default 0
	 */
	UpgradeDiscount: INTEGER,
	/**
	 * @default 0
	 */
	ExperiencePercent: INTEGER,
	/**
	 * @default 0
	 */
	AdjacentMod: INTEGER,
	/**
	 * @default 0
	 */
	AttackMod: INTEGER,
	/**
	 * @default 0
	 */
	DefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	DropRange: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneral: BOOLEAN,
	/**
	 * @default 0
	 */
	GreatAdmiral: BOOLEAN,
	/**
	 * @default 0
	 */
	GreatGeneralModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralReceivesMovement: BOOLEAN,
	/**
	 * @default 0
	 */
	GreatGeneralCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyLandsModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyLandsAttackModifier: INTEGER,
	/**
	 * @default 0
	 */
	OutsideFriendlyLandsModifier: INTEGER,
	/**
	 * @default 0
	 */
	HPHealedIfDestroyEnemy: INTEGER,
	/**
	 * @default 0
	 */
	ExtraWithdrawal: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkExtraVisibility: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkDefenseModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalDefenseModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalDefenseFalloff: INTEGER,
	/**
	 * @default 0
	 */
	CityAttackPlunderModifier: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousStrengthLossRivalTerritory: INTEGER,
	/**
	 * @default 0
	 */
	TradeMissionInfluenceModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeMissionGoldModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeValueFromKills: INTEGER,
	/**
	 * @default false
	 */
	Sapper: BOOLEAN,
	/**
	 * @default false
	 */
	HeavyCharge: BOOLEAN,
	/**
	 * @default NULL
	 */
	LayerAnimationPath: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	Invisible: BNW_InvisibleInfosType,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	SeeInvisible: BNW_InvisibleInfosType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereq: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr1: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr2: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr3: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr4: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr5: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr6: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr7: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr8: BNW_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr9: BNW_UnitPromotionsType,
	/**
	 */
	PediaType: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	PediaEntry: TEXT,
}

declare type BNW_UnitPromotions_Terrains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * @default 0
	 */
	Attack: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default false
	 */
	DoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * Reference: Technologies(Type)
	 */
	PassableTech: BNW_TechnologiesType,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_Features = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * @default 0
	 */
	Attack: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default false
	 */
	DoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * Reference: Technologies(Type)
	 */
	PassableTech: BNW_TechnologiesType,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_UnitClasses = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	Attack: INTEGER,
	/**
	 */
	Defense: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_Domains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: BNW_DomainsType,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_UnitCombatMods = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_UnitCombats = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: BNW_UnitCombatInfosType,
	/**
	 */
	PediaType: TEXT,
}

declare type BNW_UnitPromotions_CivilianUnitType = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
}

declare type BNW_UnitPromotions_PostCombatRandomPromotion = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	NewPromotion: BNW_UnitPromotionsType,
}

declare type BNW_CivilianAttackPriorities = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_CivilianAttackPrioritiesType,
}

declare type BNW_Units = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_UnitsType,
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
	Class: BNW_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: SpecialUnits(Type)
	 */
	Special: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	Capture: BNW_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: UnitCombatInfos(Type)
	 */
	CombatClass: BNW_UnitCombatInfosType,
	/**
	 * @default NULL
	 * Reference: Domains(Type)
	 */
	Domain: BNW_DomainsType,
	/**
	 * @default NULL
	 */
	CivilianAttackPriority: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitAIInfos(Type)
	 */
	DefaultUnitAI: BNW_UnitAIInfosType,
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
	PillagePrereqTech: BNW_TechnologiesType,
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
	PrereqTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: BNW_TechnologiesType,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	GoodyHutUpgradeUnitClass: BNW_UnitClassesType,
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
	PolicyType: BNW_PoliciesType,
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
	DomainCargo: BNW_DomainsType,
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
	ProjectPrereq: BNW_ProjectsType,
	/**
	 * @default NULL
	 * Reference: Projects(Type)
	 */
	SpaceshipProject: BNW_ProjectsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	LeaderPromotion: BNW_UnitPromotionsType,
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

declare type BNW_Unit_AITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: BNW_UnitAIInfosType,
}

declare type BNW_Unit_Buildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
}

declare type BNW_Unit_BuildingClassRequireds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
}

declare type BNW_Unit_ProductionModifierBuildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: BNW_BuildingsType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type BNW_Unit_Builds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: BNW_BuildsType,
}

declare type BNW_Unit_ClassUpgrades = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: BNW_UnitClassesType,
}

declare type BNW_Unit_FreePromotions = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: BNW_UnitPromotionsType,
}

declare type BNW_Unit_Flavors = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: BNW_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Unit_GreatPersons = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Specialists(Type)
	 */
	GreatPersonType: BNW_SpecialistsType,
}

declare type BNW_Unit_ResourceQuantityRequirements = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * @default 1
	 */
	Cost: INTEGER,
}

declare type BNW_Unit_UniqueNames = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
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

declare type BNW_Unit_YieldFromKills = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Unit_NotAITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: BNW_UnitAIInfosType,
}

declare type BNW_Unit_ProductionTraits = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: BNW_TraitsType,
	/**
	 */
	Trait: INTEGER,
}

declare type BNW_Unit_TechTypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: BNW_UnitsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: BNW_TechnologiesType,
}

declare type BNW_AnimationCategories = {
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
	DefaultTo: TEXT,
	/**
	 * @default -1
	 */
	BaseID: INTEGER,
}

declare type BNW_AnimationPaths = {
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
	MissionPath: BOOLEAN,
}

declare type BNW_AnimationPath_Entries = {
	/**
	 * Reference: AnimationPaths(Type)
	 */
	AnimationPathType: TEXT,
	/**
	 */
	Category: TEXT,
	/**
	 */
	Operator: TEXT,
	/**
	 * @default 0
	 */
	Parameter: FLOAT,
}

declare type BNW_EntityEvents = {
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

declare type BNW_EntityEvent_AnimationPaths = {
	/**
	 * Reference: EntityEvents(Type)
	 */
	EntityEventType: TEXT,
	/**
	 * Reference: AnimationPaths(Type)
	 */
	AnimationPathType: TEXT,
}

declare type BNW_GreatWorkSlots = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GreatWorkSlotsType,
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

declare type BNW_GreatWorkClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GreatWorkClassesType,
	/**
	 * Reference: GreatWorkSlots(Type)
	 */
	SlotType: BNW_GreatWorkSlotsType,
}

declare type BNW_GreatWorks = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GreatWorksType,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: GreatWorkClasses(Type)
	 */
	GreatWorkClassType: BNW_GreatWorkClassesType,
	/**
	 * Reference: GreatWorkArtifactClasses(Type)
	 */
	ArtifactClassType: BNW_GreatWorkArtifactClassesType,
	/**
	 * Reference: Eras(Type)
	 */
	EraType: BNW_ErasType,
	/**
	 * @default 
	 */
	Image: TEXT,
	/**
	 * @default 
	 */
	Audio: TEXT,
	/**
	 * @default 
	 */
	Quote: TEXT,
	/**
	 * @default false
	 */
	ArchaeologyOnly: BOOLEAN,
}

declare type BNW_GreatWorkArtifactClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_GreatWorkArtifactClassesType,
	/**
	 * Unique
	 */
	Value: INTEGER,
}

declare type BNW_LeagueSpecialSessions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_LeagueSpecialSessionsType,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 */
	SessionSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraTrigger: BNW_ErasType,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	ImmediateProposal: BNW_ResolutionsType,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	RecurringProposal: BNW_ResolutionsType,
	/**
	 * @default 0
	 */
	TurnsBetweenSessions: INTEGER,
	/**
	 * @default 0
	 */
	CivDelegates: INTEGER,
	/**
	 * @default 0
	 */
	HostDelegates: INTEGER,
	/**
	 * @default 0
	 */
	CityStateDelegates: INTEGER,
	/**
	 * @default false
	 */
	UnitedNations: BOOLEAN,
}

declare type BNW_LeagueNames = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_LeagueNamesType,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	NameKey: TEXT,
}

declare type BNW_LeagueProjectRewards = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_LeagueProjectRewardsType,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	Building: BNW_BuildingsType,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	FreeSocialPolicies: INTEGER,
	/**
	 * @default 0
	 */
	CultureBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	TourismBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgePoints: INTEGER,
	/**
	 * @default 0
	 */
	CityStateInfluenceBoost: INTEGER,
	/**
	 * @default 0
	 */
	BaseBeakersTurnsToCount: INTEGER,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	FreeUnitClass: BNW_UnitClassesType,
}

declare type BNW_LeagueProjects = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_LeagueProjectsType,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 */
	ProjectSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Processes(Type)
	 */
	Process: BNW_ProcessesType,
	/**
	 * @default 0
	 */
	CostPerPlayer: INTEGER,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier1: BNW_LeagueProjectRewardsType,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier2: BNW_LeagueProjectRewardsType,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier3: BNW_LeagueProjectRewardsType,
	/**
	 * @default 0
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type BNW_ResolutionDecisions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ResolutionDecisionsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
}

declare type BNW_Resolutions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ResolutionsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: ResolutionDecisions(Type)
	 */
	VoterDecision: BNW_ResolutionDecisionsType,
	/**
	 * @default NULL
	 * Reference: ResolutionDecisions(Type)
	 */
	ProposerDecision: BNW_ResolutionDecisionsType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereqAnyMember: BNW_TechnologiesType,
	/**
	 * @default false
	 */
	AutomaticProposal: BOOLEAN,
	/**
	 * @default false
	 */
	UniqueType: BOOLEAN,
	/**
	 * @default false
	 */
	NoProposalByPlayer: BOOLEAN,
	/**
	 * @default 0
	 */
	QuorumPercent: INTEGER,
	/**
	 * @default 0
	 */
	LeadersVoteBonusOnFail: INTEGER,
	/**
	 * @default false
	 */
	DiplomaticVictory: BOOLEAN,
	/**
	 * @default false
	 */
	ChangeLeagueHost: BOOLEAN,
	/**
	 * @default 0
	 */
	OneTimeGold: INTEGER,
	/**
	 * @default 0
	 */
	OneTimeGoldPercent: INTEGER,
	/**
	 * @default false
	 */
	RaiseCityStateInfluenceToNeutral: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: LeagueProjects(Type)
	 */
	LeagueProjectEnabled: BNW_LeagueProjectsType,
	/**
	 * @default 0
	 */
	GoldPerTurn: INTEGER,
	/**
	 * @default 0
	 */
	ResourceQuantity: INTEGER,
	/**
	 * @default false
	 */
	EmbargoCityStates: BOOLEAN,
	/**
	 * @default false
	 */
	EmbargoPlayer: BOOLEAN,
	/**
	 * @default false
	 */
	NoResourceHappiness: BOOLEAN,
	/**
	 * @default 0
	 */
	UnitMaintenanceGoldPercent: INTEGER,
	/**
	 * @default 0
	 */
	MemberDiscoveredTechMod: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerWonder: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerNaturalWonder: INTEGER,
	/**
	 * @default false
	 */
	NoTrainingNuclearWeapons: BOOLEAN,
	/**
	 * @default 0
	 */
	VotesForFollowingReligion: INTEGER,
	/**
	 * @default 0
	 */
	HolyCityTourism: INTEGER,
	/**
	 * @default 0
	 */
	ReligionSpreadStrengthMod: INTEGER,
	/**
	 * @default 0
	 */
	VotesForFollowingIdeology: INTEGER,
	/**
	 * @default 0
	 */
	OtherIdeologyRebellionMod: INTEGER,
	/**
	 * @default 0
	 */
	ArtsyGreatPersonRateMod: INTEGER,
	/**
	 * @default 0
	 */
	ScienceyGreatPersonRateMod: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonTileImprovementCulture: INTEGER,
	/**
	 * @default 0
	 */
	LandmarkCulture: INTEGER,
}

declare type BNW_Beliefs = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_BeliefsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	ShortDescription: TEXT,
	/**
	 * @default false
	 */
	Pantheon: BOOLEAN,
	/**
	 * @default false
	 */
	Founder: BOOLEAN,
	/**
	 * @default false
	 */
	Follower: BOOLEAN,
	/**
	 * @default false
	 */
	Enhancer: BOOLEAN,
	/**
	 * @default false
	 */
	Reformation: BOOLEAN,
	/**
	 * @default false
	 */
	RequiresPeace: BOOLEAN,
	/**
	 * @default false
	 */
	ConvertsBarbarians: BOOLEAN,
	/**
	 * @default false
	 */
	FaithPurchaseAllGreatPeople: BOOLEAN,
	/**
	 * @default 0
	 */
	MinPopulation: INTEGER,
	/**
	 * @default 0
	 */
	MinFollowers: INTEGER,
	/**
	 * @default 0
	 */
	MaxDistance: INTEGER,
	/**
	 * @default 0
	 */
	CityGrowthModifier: INTEGER,
	/**
	 * @default 0
	 */
	FaithFromKills: INTEGER,
	/**
	 * @default 0
	 */
	FaithFromDyingUnits: INTEGER,
	/**
	 * @default 0
	 */
	RiverHappiness: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerCity: INTEGER,
	/**
	 * @default 0.0
	 */
	HappinessPerFollowingCity: FLOAT,
	/**
	 * @default 0
	 */
	HappinessPerXPeacefulForeignFollowers: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityRangeStrikeModifier: INTEGER,
	/**
	 * @default 0
	 */
	CombatModifierEnemyCities: INTEGER,
	/**
	 * @default 0
	 */
	CombatModifierFriendlyCities: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	CityStateFriendshipModifier: INTEGER,
	/**
	 * @default 0
	 */
	LandBarbarianConversionPercent: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlayerHappiness: INTEGER,
	/**
	 * @default 0
	 */
	PlayerCultureModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerFollowingCity: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerXFollowers: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerFirstCityConversion: INTEGER,
	/**
	 * @default 0
	 */
	SciencePerOtherReligionFollower: INTEGER,
	/**
	 * @default 0
	 */
	SpreadDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpreadStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	ProphetStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	ProphetCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	MissionaryStrengthModifier: INTEGER,
	/**
	 * @default 0
	 */
	MissionaryCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyCityStateSpreadModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonExpendedFaith: INTEGER,
	/**
	 * @default 0
	 */
	CityStateMinimumInfluence: INTEGER,
	/**
	 * @default 0
	 */
	CityStateInfluenceModifier: INTEGER,
	/**
	 * @default 0
	 */
	OtherReligionPressureErosion: INTEGER,
	/**
	 * @default 0
	 */
	SpyPressure: INTEGER,
	/**
	 * @default 0
	 */
	InquisitorPressureRetention: INTEGER,
	/**
	 * @default 0
	 */
	FaithBuildingTourism: INTEGER,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	ObsoleteEra: BNW_ErasType,
	/**
	 * @default NULL
	 * Reference: Resources(Type)
	 */
	ResourceRevealed: BNW_ResourcesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	SpreadModifierDoublingTech: BNW_TechnologiesType,
}

declare type BNW_Belief_BuildingClassYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type BNW_Belief_BuildingClassHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 */
	Happiness: INTEGER,
}

declare type BNW_Belief_BuildingClassTourism = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
	/**
	 * @default 0
	 */
	Tourism: INTEGER,
}

declare type BNW_Belief_BuildingClassFaithPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: BNW_BuildingClassesType,
}

declare type BNW_Belief_CityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_HolyCityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_EraFaithUnitPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Eras(Type)
	 */
	EraType: BNW_ErasType,
}

declare type BNW_Belief_FeatureYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: BNW_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_ImprovementYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: BNW_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_MaxYieldModifierPerFollower = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Max: INTEGER,
}

declare type BNW_Belief_ResourceQuantityModifiers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type BNW_Belief_ResourceHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * @default 0
	 */
	HappinessChange: INTEGER,
}

declare type BNW_Belief_ResourceYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: BNW_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_TerrainYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: BNW_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeAnySpecialist = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangePerForeignCity = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangePerXForeignFollowers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	ForeignFollowers: INTEGER,
}

declare type BNW_Belief_YieldChangeTradeRoute = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeWorldWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldModifierNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: BNW_BeliefsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: BNW_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Religions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: BNW_ReligionsType,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * @default -1
	 */
	EarliestFoundDate: INTEGER,
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
	 */
	IconString: TEXT,
}

declare type BNW_CivilizationsType =
	| "CIVILIZATION_MONGOL"
	| "CIVILIZATION_INCA"
	| "CIVILIZATION_SPAIN"
	| "CIVILIZATION_POLYNESIA"
	| "CIVILIZATION_DENMARK"
	| "CIVILIZATION_KOREA"
	| "CIVILIZATION_BABYLON"
	| "CIVILIZATION_AMERICA"
	| "CIVILIZATION_ARABIA"
	| "CIVILIZATION_AZTEC"
	| "CIVILIZATION_CHINA"
	| "CIVILIZATION_EGYPT"
	| "CIVILIZATION_ENGLAND"
	| "CIVILIZATION_FRANCE"
	| "CIVILIZATION_GERMANY"
	| "CIVILIZATION_GREECE"
	| "CIVILIZATION_INDIA"
	| "CIVILIZATION_IROQUOIS"
	| "CIVILIZATION_JAPAN"
	| "CIVILIZATION_OTTOMAN"
	| "CIVILIZATION_PERSIA"
	| "CIVILIZATION_ROME"
	| "CIVILIZATION_RUSSIA"
	| "CIVILIZATION_SIAM"
	| "CIVILIZATION_SONGHAI"
	| "CIVILIZATION_MINOR"
	| "CIVILIZATION_BARBARIAN"
	| "CIVILIZATION_ASSYRIA"
	| "CIVILIZATION_BRAZIL"
	| "CIVILIZATION_INDONESIA"
	| "CIVILIZATION_MOROCCO"
	| "CIVILIZATION_POLAND"
	| "CIVILIZATION_PORTUGAL"
	| "CIVILIZATION_SHOSHONE"
	| "CIVILIZATION_VENICE"
	| "CIVILIZATION_ZULU"
	| "CIVILIZATION_ETHIOPIA";

declare type BNW_ColorsType =
	| "COLOR_PLAYER_MONGOL_ICON"
	| "COLOR_PLAYER_MONGOL_BACKGROUND"
	| "COLOR_PLAYER_INCA_ICON"
	| "COLOR_PLAYER_INCA_BACKGROUND"
	| "COLOR_PLAYER_SPAIN_ICON"
	| "COLOR_PLAYER_SPAIN_BACKGROUND"
	| "COLOR_PLAYER_POLYNESIA_ICON"
	| "COLOR_PLAYER_POLYNESIA_BACKGROUND"
	| "COLOR_PLAYER_DENMARK_ICON"
	| "COLOR_PLAYER_DENMARK_BACKGROUND"
	| "COLOR_PLAYER_KOREA_ICON"
	| "COLOR_PLAYER_KOREA_BACKGROUND"
	| "COLOR_PLAYER_NEBUCHADNEZZAR_ICON"
	| "COLOR_PLAYER_NEBUCHADNEZZAR_BACKGROUND"
	| "COLOR_CLEAR"
	| "COLOR_ALPHA_GREY"
	| "COLOR_WHITE"
	| "COLOR_BLACK"
	| "COLOR_DARK_GREY"
	| "COLOR_GREY"
	| "COLOR_LIGHT_GREY"
	| "COLOR_GREEN"
	| "COLOR_BLUE"
	| "COLOR_XP_BLUE"
	| "COLOR_CYAN"
	| "COLOR_YELLOW"
	| "COLOR_MAGENTA"
	| "COLOR_YIELD_FOOD"
	| "COLOR_YIELD_PRODUCTION"
	| "COLOR_YIELD_GOLD"
	| "COLOR_CITY_BLUE"
	| "COLOR_CITY_GREY"
	| "COLOR_CITY_BROWN"
	| "COLOR_CITY_GREEN"
	| "COLOR_FONT_RED"
	| "COLOR_FONT_GREEN"
	| "COLOR_RESEARCH_STORED"
	| "COLOR_RESEARCH_RATE"
	| "COLOR_CULTURE_STORED"
	| "COLOR_CULTURE_RATE"
	| "COLOR_GREAT_PEOPLE_STORED"
	| "COLOR_GREAT_PEOPLE_RATE"
	| "COLOR_NEGATIVE_RATE"
	| "COLOR_EMPTY"
	| "COLOR_POPUP_TEXT"
	| "COLOR_POPUP_SELECTED"
	| "COLOR_TECH_TEXT"
	| "COLOR_UNIT_TEXT"
	| "COLOR_BUILDING_TEXT"
	| "COLOR_PROJECT_TEXT"
	| "COLOR_HIGHLIGHT_TEXT"
	| "COLOR_ALT_HIGHLIGHT_TEXT"
	| "COLOR_WARNING_TEXT"
	| "COLOR_POSITIVE_TEXT"
	| "COLOR_NEGATIVE_TEXT"
	| "COLOR_BROWN_TEXT"
	| "COLOR_SELECTED_TEXT"
	| "COLOR_WATER_TEXT"
	| "COLOR_MENU_BLUE"
	| "COLOR_DAWN_OF_MAN_TEXT"
	| "COLOR_ADVISOR_HIGHLIGHT_TEXT"
	| "COLOR_TECH_GREEN"
	| "COLOR_TECH_BLUE"
	| "COLOR_TECH_WORKING"
	| "COLOR_TECH_BLACK"
	| "COLOR_TECH_RED"
	| "COLOR_RED"
	| "COLOR_PLAYER_BLACK"
	| "COLOR_PLAYER_BLACK_TEXT"
	| "COLOR_PLAYER_BLUE"
	| "COLOR_PLAYER_LIGHT_BLUE_TEXT"
	| "COLOR_PLAYER_BROWN"
	| "COLOR_PLAYER_BROWN_TEXT"
	| "COLOR_PLAYER_CYAN"
	| "COLOR_PLAYER_CYAN_TEXT"
	| "COLOR_PLAYER_DARK_BLUE"
	| "COLOR_PLAYER_DARK_BLUE_TEXT"
	| "COLOR_PLAYER_DARK_CYAN"
	| "COLOR_PLAYER_DARK_CYAN_TEXT"
	| "COLOR_PLAYER_DARK_GREEN"
	| "COLOR_PLAYER_DARK_DARK_GREEN"
	| "COLOR_PLAYER_DARK_GREEN_TEXT"
	| "COLOR_PLAYER_DARK_PINK"
	| "COLOR_PLAYER_DARK_PINK_TEXT"
	| "COLOR_PLAYER_DARK_PURPLE"
	| "COLOR_PLAYER_DARK_PURPLE_TEXT"
	| "COLOR_PLAYER_DARK_RED"
	| "COLOR_PLAYER_DARK_RED_TEXT"
	| "COLOR_PLAYER_DARK_YELLOW"
	| "COLOR_PLAYER_DARK_YELLOW_TEXT"
	| "COLOR_PLAYER_GRAY"
	| "COLOR_PLAYER_GRAY_TEXT"
	| "COLOR_PLAYER_GREEN"
	| "COLOR_PLAYER_GREEN_TEXT"
	| "COLOR_PLAYER_ORANGE"
	| "COLOR_PLAYER_ORANGE_TEXT"
	| "COLOR_PLAYER_PEACH"
	| "COLOR_PLAYER_PEACH_TEXT"
	| "COLOR_PLAYER_PINK"
	| "COLOR_PLAYER_PINK_TEXT"
	| "COLOR_PLAYER_PURPLE"
	| "COLOR_PLAYER_PURPLE_TEXT"
	| "COLOR_PLAYER_RED"
	| "COLOR_PLAYER_RED_TEXT"
	| "COLOR_PLAYER_WHITE"
	| "COLOR_PLAYER_WHITE_TEXT"
	| "COLOR_PLAYER_YELLOW"
	| "COLOR_PLAYER_YELLOW_TEXT"
	| "COLOR_PLAYER_LIGHT_GREEN"
	| "COLOR_PLAYER_LIGHT_GREEN_TEXT"
	| "COLOR_PLAYER_LIGHT_BLUE"
	| "COLOR_PLAYER_BLUE_TEXT"
	| "COLOR_PLAYER_LIGHT_YELLOW"
	| "COLOR_PLAYER_LIGHT_YELLOW_TEXT"
	| "COLOR_PLAYER_LIGHT_PURPLE"
	| "COLOR_PLAYER_LIGHT_PURPLE_TEXT"
	| "COLOR_PLAYER_LIGHT_ORANGE"
	| "COLOR_PLAYER_LIGHT_ORANGE_TEXT"
	| "COLOR_PLAYER_MIDDLE_PURPLE"
	| "COLOR_PLAYER_MIDDLE_PURPLE_TEXT"
	| "COLOR_PLAYER_GOLDENROD"
	| "COLOR_PLAYER_DARK_GRAY"
	| "COLOR_PLAYER_DARK_GRAY_TEXT"
	| "COLOR_PLAYER_MIDDLE_GREEN"
	| "COLOR_PLAYER_MIDDLE_GREEN_TEXT"
	| "COLOR_PLAYER_DARK_LEMON"
	| "COLOR_PLAYER_DARK_LEMON_TEXT"
	| "COLOR_PLAYER_MIDDLE_BLUE"
	| "COLOR_PLAYER_MIDDLE_BLUE_TEXT"
	| "COLOR_PLAYER_MIDDLE_CYAN"
	| "COLOR_PLAYER_MIDDLE_CYAN_TEXT"
	| "COLOR_PLAYER_MAROON"
	| "COLOR_PLAYER_LIGHT_BROWN"
	| "COLOR_PLAYER_LIGHT_BROWN_TEXT"
	| "COLOR_PLAYER_DARK_ORANGE"
	| "COLOR_PLAYER_DARK_ORANGE_TEXT"
	| "COLOR_PLAYER_DARK_DARK_GREEN_TEXT"
	| "COLOR_PLAYER_PALE_RED"
	| "COLOR_PLAYER_DARK_INDIGO"
	| "COLOR_PLAYER_DARK_INDIGO_TEXT"
	| "COLOR_PLAYER_PALE_ORANGE"
	| "COLOR_PLAYER_LIGHT_BLACK"
	| "COLOR_PLAYER_LIGHT_BLACK_TEXT"
	| "COLOR_PLAYER_MINOR_ICON"
	| "COLOR_PLAYER_BARBARIAN_ICON"
	| "COLOR_PLAYER_AMERICA_ICON"
	| "COLOR_PLAYER_ARABIA_ICON"
	| "COLOR_PLAYER_AZTEC_ICON"
	| "COLOR_PLAYER_CHINA_ICON"
	| "COLOR_PLAYER_EGYPT_ICON"
	| "COLOR_PLAYER_ENGLAND_ICON"
	| "COLOR_PLAYER_FRANCE_ICON"
	| "COLOR_PLAYER_GERMANY_ICON"
	| "COLOR_PLAYER_GREECE_ICON"
	| "COLOR_PLAYER_INDIA_ICON"
	| "COLOR_PLAYER_IROQUOIS_ICON"
	| "COLOR_PLAYER_JAPAN_ICON"
	| "COLOR_PLAYER_OTTOMAN_ICON"
	| "COLOR_PLAYER_PERSIA_ICON"
	| "COLOR_PLAYER_ROME_ICON"
	| "COLOR_PLAYER_RUSSIA_ICON"
	| "COLOR_PLAYER_SIAM_ICON"
	| "COLOR_PLAYER_SONGHAI_ICON"
	| "COLOR_PLAYER_BARBARIAN_BACKGROUND"
	| "COLOR_PLAYER_AMERICA_BACKGROUND"
	| "COLOR_PLAYER_ARABIA_BACKGROUND"
	| "COLOR_PLAYER_AZTEC_BACKGROUND"
	| "COLOR_PLAYER_CHINA_BACKGROUND"
	| "COLOR_PLAYER_EGYPT_BACKGROUND"
	| "COLOR_PLAYER_ENGLAND_BACKGROUND"
	| "COLOR_PLAYER_FRANCE_BACKGROUND"
	| "COLOR_PLAYER_GERMANY_BACKGROUND"
	| "COLOR_PLAYER_GREECE_BACKGROUND"
	| "COLOR_PLAYER_INDIA_BACKGROUND"
	| "COLOR_PLAYER_IROQUOIS_BACKGROUND"
	| "COLOR_PLAYER_JAPAN_BACKGROUND"
	| "COLOR_PLAYER_OTTOMAN_BACKGROUND"
	| "COLOR_PLAYER_PERSIA_BACKGROUND"
	| "COLOR_PLAYER_ROME_BACKGROUND"
	| "COLOR_PLAYER_RUSSIA_BACKGROUND"
	| "COLOR_PLAYER_SIAM_BACKGROUND"
	| "COLOR_PLAYER_SONGHAI_BACKGROUND"
	| "COLOR_PLAYER_ASSYRIA_ICON"
	| "COLOR_PLAYER_ASSYRIA_BACKGROUND"
	| "COLOR_PLAYER_BRAZIL_ICON"
	| "COLOR_PLAYER_BRAZIL_BACKGROUND"
	| "COLOR_PLAYER_INDONESIA_ICON"
	| "COLOR_PLAYER_INDONESIA_BACKGROUND"
	| "COLOR_PLAYER_MOROCCO_ICON"
	| "COLOR_PLAYER_MOROCCO_BACKGROUND"
	| "COLOR_PLAYER_POLAND_ICON"
	| "COLOR_PLAYER_POLAND_BACKGROUND"
	| "COLOR_PLAYER_PORTUGAL_ICON"
	| "COLOR_PLAYER_PORTUGAL_BACKGROUND"
	| "COLOR_PLAYER_SHOSHONE_ICON"
	| "COLOR_PLAYER_SHOSHONE_BACKGROUND"
	| "COLOR_PLAYER_VENICE_ICON"
	| "COLOR_PLAYER_VENICE_BACKGROUND"
	| "COLOR_PLAYER_ZULU_ICON"
	| "COLOR_PLAYER_ZULU_BACKGROUND"
	| "COLOR_PLAYER_ETHIOPIA_ICON"
	| "COLOR_PLAYER_ETHIOPIA_BACKGROUND"
	| "COLOR_FADING_POSITIVE_TEXT"
	| "COLOR_FADING_NEGATIVE_TEXT";

declare type BNW_PlayerColorsType =
	| "PLAYERCOLOR_MONGOL"
	| "PLAYERCOLOR_INCA"
	| "PLAYERCOLOR_SPAIN"
	| "PLAYERCOLOR_POLYNESIA"
	| "PLAYERCOLOR_DENMARK"
	| "PLAYERCOLOR_KOREA"
	| "PLAYERCOLOR_BABYLON"
	| "PLAYERCOLOR_BLACK"
	| "PLAYERCOLOR_BLUE"
	| "PLAYERCOLOR_BROWN"
	| "PLAYERCOLOR_CYAN"
	| "PLAYERCOLOR_DARK_BLUE"
	| "PLAYERCOLOR_DARK_CYAN"
	| "PLAYERCOLOR_DARK_GREEN"
	| "PLAYERCOLOR_DARK_PINK"
	| "PLAYERCOLOR_DARK_PURPLE"
	| "PLAYERCOLOR_DARK_RED"
	| "PLAYERCOLOR_DARK_YELLOW"
	| "PLAYERCOLOR_GRAY"
	| "PLAYERCOLOR_GREEN"
	| "PLAYERCOLOR_ORANGE"
	| "PLAYERCOLOR_PEACH"
	| "PLAYERCOLOR_PINK"
	| "PLAYERCOLOR_PURPLE"
	| "PLAYERCOLOR_RED"
	| "PLAYERCOLOR_WHITE"
	| "PLAYERCOLOR_YELLOW"
	| "PLAYERCOLOR_LIGHT_GREEN"
	| "PLAYERCOLOR_LIGHT_BLUE"
	| "PLAYERCOLOR_LIGHT_YELLOW"
	| "PLAYERCOLOR_LIGHT_PURPLE"
	| "PLAYERCOLOR_LIGHT_ORANGE"
	| "PLAYERCOLOR_MIDDLE_PURPLE"
	| "PLAYERCOLOR_DARK_GRAY"
	| "PLAYERCOLOR_MIDDLE_GREEN"
	| "PLAYERCOLOR_DARK_LEMON"
	| "PLAYERCOLOR_MIDDLE_BLUE"
	| "PLAYERCOLOR_MIDDLE_CYAN"
	| "PLAYERCOLOR_LIGHT_BROWN"
	| "PLAYERCOLOR_DARK_ORANGE"
	| "PLAYERCOLOR_DARK_DARK_GREEN"
	| "PLAYERCOLOR_DARK_INDIGO"
	| "PLAYERCOLOR_RED_AND_GOLD"
	| "PLAYERCOLOR_GOLD_AND_BLACK"
	| "PLAYERCOLOR_GREEN_AND_BLACK"
	| "PLAYERCOLOR_DARK_CYAN_AND_LEMON"
	| "PLAYERCOLOR_BLACK_AND_GREEN"
	| "PLAYERCOLOR_GREEN_AND_WHITE"
	| "PLAYERCOLOR_CYAN_AND_GRAY"
	| "PLAYERCOLOR_DARK_INDIGO_AND_WHITE"
	| "PLAYERCOLOR_ORANGE_AND_GREEN"
	| "PLAYERCOLOR_BARBARIAN"
	| "PLAYERCOLOR_MINOR_WHITE"
	| "PLAYERCOLOR_MINOR_GRAY"
	| "PLAYERCOLOR_MINOR_BLUE"
	| "PLAYERCOLOR_MINOR_MIDDLE_BLUE"
	| "PLAYERCOLOR_MINOR_CYAN"
	| "PLAYERCOLOR_MINOR_MIDDLE_CYAN"
	| "PLAYERCOLOR_MINOR_PEACH"
	| "PLAYERCOLOR_MINOR_GREEN"
	| "PLAYERCOLOR_MINOR_LIGHT_GREEN"
	| "PLAYERCOLOR_MINOR_LIGHT_BLUE"
	| "PLAYERCOLOR_MINOR_PURPLE"
	| "PLAYERCOLOR_MINOR_MIDDLE_PURPLE"
	| "PLAYERCOLOR_MINOR_LIGHT_PURPLE"
	| "PLAYERCOLOR_MINOR_LIGHT_ORANGE"
	| "PLAYERCOLOR_MINOR_YELLOW"
	| "PLAYERCOLOR_MINOR_LIGHT_YELLOW"
	| "PLAYERCOLOR_MINOR_GOLDENROD"
	| "PLAYERCOLOR_MINOR_DARK_LEMON"
	| "PLAYERCOLOR_AMERICA"
	| "PLAYERCOLOR_ARABIA"
	| "PLAYERCOLOR_AZTEC"
	| "PLAYERCOLOR_CHINA"
	| "PLAYERCOLOR_EGYPT"
	| "PLAYERCOLOR_ENGLAND"
	| "PLAYERCOLOR_FRANCE"
	| "PLAYERCOLOR_GERMANY"
	| "PLAYERCOLOR_GREECE"
	| "PLAYERCOLOR_INDIA"
	| "PLAYERCOLOR_IROQUOIS"
	| "PLAYERCOLOR_JAPAN"
	| "PLAYERCOLOR_OTTOMAN"
	| "PLAYERCOLOR_PERSIA"
	| "PLAYERCOLOR_ROME"
	| "PLAYERCOLOR_RUSSIA"
	| "PLAYERCOLOR_SIAM"
	| "PLAYERCOLOR_SONGHAI"
	| "PLAYERCOLOR_ASSYRIA"
	| "PLAYERCOLOR_BRAZIL"
	| "PLAYERCOLOR_INDONESIA"
	| "PLAYERCOLOR_MOROCCO"
	| "PLAYERCOLOR_POLAND"
	| "PLAYERCOLOR_PORTUGAL"
	| "PLAYERCOLOR_SHOSHONE"
	| "PLAYERCOLOR_VENICE"
	| "PLAYERCOLOR_ZULU"
	| "PLAYERCOLOR_ETHIOPIA";

declare type BNW_LeadersType =
	| "LEADER_GENGHIS_KHAN"
	| "LEADER_ISABELLA"
	| "LEADER_PACHACUTI"
	| "LEADER_KAMEHAMEHA"
	| "LEADER_HARALD"
	| "LEADER_SEJONG"
	| "LEADER_NEBUCHADNEZZAR"
	| "LEADER_ALEXANDER"
	| "LEADER_ASKIA"
	| "LEADER_AUGUSTUS"
	| "LEADER_BARBARIAN"
	| "LEADER_BISMARCK"
	| "LEADER_CATHERINE"
	| "LEADER_DARIUS"
	| "LEADER_ELIZABETH"
	| "LEADER_GANDHI"
	| "LEADER_HARUN_AL_RASHID"
	| "LEADER_HIAWATHA"
	| "LEADER_MONTEZUMA"
	| "LEADER_NAPOLEON"
	| "LEADER_ODA_NOBUNAGA"
	| "LEADER_RAMESSES"
	| "LEADER_RAMKHAMHAENG"
	| "LEADER_SULEIMAN"
	| "LEADER_WASHINGTON"
	| "LEADER_WU_ZETIAN"
	| "LEADER_AHMAD_ALMANSUR"
	| "LEADER_ASHURBANIPAL"
	| "LEADER_CASIMIR"
	| "LEADER_ENRICO_DANDOLO"
	| "LEADER_GAJAH_MADA"
	| "LEADER_MARIA_I"
	| "LEADER_PEDRO"
	| "LEADER_POCATELLO"
	| "LEADER_SHAKA"
	| "LEADER_SELASSIE";

declare type BNW_TraitsType =
	| "TRAIT_TERROR"
	| "TRAIT_SEVEN_CITIES"
	| "TRAIT_GREAT_ANDEAN_ROAD"
	| "TRAIT_WAYFINDING"
	| "TRAIT_VIKING_FURY"
	| "TRAIT_SCHOLARS_JADE_HALL"
	| "TRAIT_INGENIOUS"
	| "TRAIT_PHILOSOPHICAL"
	| "TRAIT_INDUSTRIOUS"
	| "TRAIT_CREATIVE"
	| "TRAIT_FINANCIAL"
	| "TRAIT_CHARISMATIC"
	| "TRAIT_ART_OF_WAR"
	| "TRAIT_POPULATION_GROWTH"
	| "TRAIT_STRATEGIC_RICHES"
	| "TRAIT_OCEAN_MOVEMENT"
	| "TRAIT_CITY_STATE_BONUSES"
	| "TRAIT_CITY_STATE_FRIENDSHIP"
	| "TRAIT_FIGHT_WELL_DAMAGED"
	| "TRAIT_CONVERTS_LAND_BARBARIANS"
	| "TRAIT_CONVERTS_SEA_BARBARIANS"
	| "TRAIT_IGNORE_TERRAIN_IN_FOREST"
	| "TRAIT_CAPITAL_BUILDINGS_CHEAPER"
	| "TRAIT_RIVER_EXPANSION"
	| "TRAIT_CULTURE_FROM_KILLS"
	| "TRAIT_ENHANCED_CULTURE"
	| "TRAIT_LAND_TRADE_GOLD"
	| "TRAIT_WONDER_BUILDER"
	| "TRAIT_AMPHIB_WARLORD"
	| "TRAIT_ENHANCED_GOLDEN_AGES"
	| "TRAIT_SUPER_CITY_STATE"
	| "TRAIT_BUFFALO_HORNS"
	| "TRAIT_SLAYER_OF_TIAMAT"
	| "TRAIT_SOLIDARITY"
	| "TRAIT_CARNIVAL"
	| "TRAIT_SPICE"
	| "TRAIT_EXTRA_TRADE"
	| "TRAIT_GREAT_EXPANSE"
	| "TRAIT_GATEWAY_AFRICA"
	| "TRAIT_BONUS_AGAINST_TECH";

declare type BNW_UnitPromotionsType =
	| "PROMOTION_MEDIC_GENERAL"
	| "PROMOTION_GAIN_EXPERIENCE"
	| "PROMOTION_WITHDRAW_BEFORE_MELEE"
	| "PROMOTION_HAKA_WAR_DANCE"
	| "PROMOTION_SKI_INFANTRY"
	| "PROMOTION_STATUE_ZEUS"
	| "PROMOTION_INSTA_HEAL"
	| "PROMOTION_SHOCK_1"
	| "PROMOTION_SHOCK_2"
	| "PROMOTION_SHOCK_3"
	| "PROMOTION_DRILL_1"
	| "PROMOTION_DRILL_2"
	| "PROMOTION_DRILL_3"
	| "PROMOTION_ACCURACY_1"
	| "PROMOTION_ACCURACY_2"
	| "PROMOTION_ACCURACY_3"
	| "PROMOTION_BARRAGE_1"
	| "PROMOTION_BARRAGE_2"
	| "PROMOTION_BARRAGE_3"
	| "PROMOTION_TARGETING_1"
	| "PROMOTION_TARGETING_2"
	| "PROMOTION_TARGETING_3"
	| "PROMOTION_SENTRY"
	| "PROMOTION_SIEGE"
	| "PROMOTION_VOLLEY"
	| "PROMOTION_MEDIC"
	| "PROMOTION_MEDIC_II"
	| "PROMOTION_AMPHIBIOUS"
	| "PROMOTION_COVER_1"
	| "PROMOTION_COVER_2"
	| "PROMOTION_INDIRECT_FIRE"
	| "PROMOTION_CHARGE"
	| "PROMOTION_FORMATION_1"
	| "PROMOTION_FORMATION_2"
	| "PROMOTION_AMBUSH_1"
	| "PROMOTION_AMBUSH_2"
	| "PROMOTION_SUPPLY"
	| "PROMOTION_MARCH"
	| "PROMOTION_BLITZ"
	| "PROMOTION_WOODSMAN"
	| "PROMOTION_LOGISTICS"
	| "PROMOTION_RANGE"
	| "PROMOTION_MOBILITY"
	| "PROMOTION_INTERCEPTION_1"
	| "PROMOTION_INTERCEPTION_2"
	| "PROMOTION_INTERCEPTION_3"
	| "PROMOTION_DOGFIGHTING_1"
	| "PROMOTION_DOGFIGHTING_2"
	| "PROMOTION_DOGFIGHTING_3"
	| "PROMOTION_AIR_SIEGE_1"
	| "PROMOTION_AIR_SIEGE_2"
	| "PROMOTION_AIR_SIEGE_3"
	| "PROMOTION_BOMBARDMENT_1"
	| "PROMOTION_BOMBARDMENT_2"
	| "PROMOTION_BOMBARDMENT_3"
	| "PROMOTION_AIR_TARGETING_1"
	| "PROMOTION_AIR_TARGETING_2"
	| "PROMOTION_AIR_AMBUSH_1"
	| "PROMOTION_AIR_AMBUSH_2"
	| "PROMOTION_AIR_RANGE"
	| "PROMOTION_SORTIE"
	| "PROMOTION_REPAIR"
	| "PROMOTION_AIR_REPAIR"
	| "PROMOTION_AIR_LOGISTICS"
	| "PROMOTION_EVASION"
	| "PROMOTION_SCOUTING_1"
	| "PROMOTION_SCOUTING_2"
	| "PROMOTION_SCOUTING_3"
	| "PROMOTION_SURVIVALISM_1"
	| "PROMOTION_SURVIVALISM_2"
	| "PROMOTION_SURVIVALISM_3"
	| "PROMOTION_HELI_AMBUSH_1"
	| "PROMOTION_HELI_AMBUSH_2"
	| "PROMOTION_HELI_MOBILITY_1"
	| "PROMOTION_HELI_MOBILITY_2"
	| "PROMOTION_HELI_REPAIR"
	| "PROMOTION_COASTAL_RAIDER_1"
	| "PROMOTION_COASTAL_RAIDER_2"
	| "PROMOTION_COASTAL_RAIDER_3"
	| "PROMOTION_BOARDING_PARTY_1"
	| "PROMOTION_BOARDING_PARTY_2"
	| "PROMOTION_BOARDING_PARTY_3"
	| "PROMOTION_WOLFPACK_1"
	| "PROMOTION_WOLFPACK_2"
	| "PROMOTION_WOLFPACK_3"
	| "PROMOTION_FLIGHT_DECK_1"
	| "PROMOTION_FLIGHT_DECK_2"
	| "PROMOTION_FLIGHT_DECK_3"
	| "PROMOTION_ARMOR_PLATING_1"
	| "PROMOTION_ARMOR_PLATING_2"
	| "PROMOTION_ARMOR_PLATING_3"
	| "PROMOTION_MORALE"
	| "PROMOTION_ADJACENT_BONUS"
	| "PROMOTION_HIMEJI_CASTLE"
	| "PROMOTION_NAVAL_TRADITION"
	| "PROMOTION_GREAT_LIGHTHOUSE"
	| "PROMOTION_NATIONALISM"
	| "PROMOTION_FAST_GENERAL"
	| "PROMOTION_FAST_ADMIRAL"
	| "PROMOTION_EMBARKATION"
	| "PROMOTION_DEFENSIVE_EMBARKATION"
	| "PROMOTION_ALLWATER_EMBARKATION"
	| "PROMOTION_EXTRA_MOVES_I"
	| "PROMOTION_EXTRA_SIGHT_I"
	| "PROMOTION_EXTRA_SIGHT_II"
	| "PROMOTION_EXTRA_SIGHT_III"
	| "PROMOTION_EXTRA_SIGHT_IV"
	| "PROMOTION_SIGHT_PENALTY"
	| "PROMOTION_AIR_RECON"
	| "PROMOTION_ANTI_MOUNTED_I"
	| "PROMOTION_ANTI_MOUNTED_II"
	| "PROMOTION_CITY_SIEGE"
	| "PROMOTION_CITY_ASSAULT"
	| "PROMOTION_DEFENSE_PENALTY"
	| "PROMOTION_MOUNTED_PENALTY"
	| "PROMOTION_CITY_PENALTY"
	| "PROMOTION_SMALL_CITY_PENALTY"
	| "PROMOTION_INTERCEPTION_I"
	| "PROMOTION_INTERCEPTION_II"
	| "PROMOTION_INTERCEPTION_III"
	| "PROMOTION_INTERCEPTION_IV"
	| "PROMOTION_AIR_SWEEP"
	| "PROMOTION_WEAK_RANGED"
	| "PROMOTION_ANTI_AIR"
	| "PROMOTION_ANTI_AIR_II"
	| "PROMOTION_ANTI_HELICOPTER"
	| "PROMOTION_ANTI_FIGHTER"
	| "PROMOTION_ANTI_SUBMARINE_I"
	| "PROMOTION_ANTI_SUBMARINE_II"
	| "PROMOTION_ANTI_TANK"
	| "PROMOTION_EVASION_I"
	| "PROMOTION_EVASION_II"
	| "PROMOTION_NAVAL_PENALTY"
	| "PROMOTION_HEAVY_PAYLOAD"
	| "PROMOTION_FIRE_SUPPORT"
	| "PROMOTION_SILENT_HUNTER"
	| "PROMOTION_RIVAL_TERRITORY"
	| "PROMOTION_CARGO_I"
	| "PROMOTION_CARGO_II"
	| "PROMOTION_CARGO_III"
	| "PROMOTION_CARGO_IV"
	| "PROMOTION_FOLIAGE_IMPASSABLE"
	| "PROMOTION_ROUGH_TERRAIN_ENDS_TURN"
	| "PROMOTION_OCEAN_IMPASSABLE_UNTIL_ASTRONOMY"
	| "PROMOTION_OCEAN_IMPASSABLE"
	| "PROMOTION_STEAM_POWERED"
	| "PROMOTION_INVISIBLE_SUBMARINE"
	| "PROMOTION_SEE_INVISIBLE_SUBMARINE"
	| "PROMOTION_IGNORE_TERRAIN_COST"
	| "PROMOTION_HOVERING_UNIT"
	| "PROMOTION_FLAT_MOVEMENT_COST"
	| "PROMOTION_CAN_MOVE_IMPASSABLE"
	| "PROMOTION_NO_CAPTURE"
	| "PROMOTION_ONLY_DEFENSIVE"
	| "PROMOTION_NO_DEFENSIVE_BONUSES"
	| "PROMOTION_PARADROP"
	| "PROMOTION_MUST_SET_UP"
	| "PROMOTION_RANGED_SUPPORT_FIRE"
	| "PROMOTION_CAN_MOVE_AFTER_ATTACKING"
	| "PROMOTION_OPEN_TERRAIN"
	| "PROMOTION_SECOND_ATTACK"
	| "PROMOTION_OCEAN_MOVEMENT"
	| "PROMOTION_GREAT_GENERAL"
	| "PROMOTION_SPAWN_GENERALS_I"
	| "PROMOTION_SPAWN_GENERALS_II"
	| "PROMOTION_FREE_PILLAGE_MOVES"
	| "PROMOTION_HEAL_IF_DESTROY_ENEMY"
	| "PROMOTION_PARTIAL_HEAL_IF_DESTROY_ENEMY"
	| "PROMOTION_ATTACK_BONUS"
	| "PROMOTION_MOHAWK"
	| "PROMOTION_JAGUAR"
	| "PROMOTION_FOREIGN_LANDS"
	| "PROMOTION_FASTER_HEAL"
	| "PROMOTION_STRONGER_VS_DAMAGED"
	| "PROMOTION_BUFFALO_CHEST"
	| "PROMOTION_BUFFALO_LOINS"
	| "PROMOTION_BUFFALO_HORNS"
	| "PROMOTION_ANTI_GUNPOWDER"
	| "PROMOTION_TRADE_MISSION_BONUS"
	| "PROMOTION_HEAVY_CHARGE"
	| "PROMOTION_CITY_SIEGE_II"
	| "PROMOTION_SAPPER"
	| "PROMOTION_GOLDEN_AGE_POINTS"
	| "PROMOTION_HOMELAND_GUARDIAN"
	| "PROMOTION_HOMELAND_GUARDIAN_BOOGALOO"
	| "PROMOTION_DESERT_WARRIOR"
	| "PROMOTION_GOODY_HUT_PICKER"
	| "PROMOTION_MOON_STRIKER"
	| "PROMOTION_ALTITUDE_TRAINING"
	| "PROMOTION_MYSTIC_BLADE"
	| "PROMOTION_INVULNERABIILITY"
	| "PROMOTION_SNEAK_ATTACK"
	| "PROMOTION_HEROISM"
	| "PROMOTION_AMBITION"
	| "PROMOTION_RESTLESSNESS"
	| "PROMOTION_RECRUITMENT"
	| "PROMOTION_ENEMY_BLADE"
	| "PROMOTION_EVIL_SPIRITS"
	| "PROMOTION_EXTENDED_PARADROP"
	| "PROMOTION_LIGHTNING_WARFARE"
	| "PROMOTION_SELL_EXOTIC_GOODS"
	| "PROMOTION_DOUBLE_PLUNDER"
	| "PROMOTION_NAVAL_BONUS"
	| "PROMOTION_FEARED_ELEPHANT"
	| "PROMOTION_FLANK_ATTACK_BONUS"
	| "PROMOTION_DEFEND_NEAR_CAPITAL"
	| "PROMOTION_EMBARKED_SIGHT"
	| "PROMOTION_MOVEMENT_TO_GENERAL"
	| "PROMOTION_GENERAL_STACKING"
	| "PROMOTION_ONLY_ATTACKS_CITIES"
	| "PROMOTION_WAR_CANOES"
	| "PROMOTION_PRIZE_SHIPS"
	| "PROMOTION_GREAT_ADMIRAL"
	| "PROMOTION_UNWELCOME_EVANGELIST";

declare type BNW_UnitsType =
	| "UNIT_MONGOLIAN_KESHIK"
	| "UNIT_MONGOLIAN_KHAN"
	| "UNIT_INCAN_SLINGER"
	| "UNIT_SPANISH_TERCIO"
	| "UNIT_SPANISH_CONQUISTADOR"
	| "UNIT_POLYNESIAN_MAORI_WARRIOR"
	| "UNIT_DANISH_BERSERKER"
	| "UNIT_DANISH_SKI_INFANTRY"
	| "UNIT_KOREAN_TURTLE_SHIP"
	| "UNIT_KOREAN_HWACHA"
	| "UNIT_BABYLONIAN_BOWMAN"
	| "UNIT_SETTLER"
	| "UNIT_WORKER"
	| "UNIT_WORKBOAT"
	| "UNIT_ARTIST"
	| "UNIT_SCIENTIST"
	| "UNIT_MERCHANT"
	| "UNIT_ENGINEER"
	| "UNIT_GREAT_GENERAL"
	| "UNIT_SS_STASIS_CHAMBER"
	| "UNIT_SS_ENGINE"
	| "UNIT_SS_COCKPIT"
	| "UNIT_SS_BOOSTER"
	| "UNIT_MISSILE_CRUISER"
	| "UNIT_NUCLEAR_SUBMARINE"
	| "UNIT_CARRIER"
	| "UNIT_BATTLESHIP"
	| "UNIT_SUBMARINE"
	| "UNIT_DESTROYER"
	| "UNIT_IRONCLAD"
	| "UNIT_FRIGATE"
	| "UNIT_ENGLISH_SHIPOFTHELINE"
	| "UNIT_CARAVEL"
	| "UNIT_TRIREME"
	| "UNIT_MECH"
	| "UNIT_NUCLEAR_MISSILE"
	| "UNIT_STEALTH_BOMBER"
	| "UNIT_JET_FIGHTER"
	| "UNIT_GUIDED_MISSILE"
	| "UNIT_MODERN_ARMOR"
	| "UNIT_HELICOPTER_GUNSHIP"
	| "UNIT_MOBILE_SAM"
	| "UNIT_ROCKET_ARTILLERY"
	| "UNIT_MECHANIZED_INFANTRY"
	| "UNIT_ATOMIC_BOMB"
	| "UNIT_BOMBER"
	| "UNIT_AMERICAN_B17"
	| "UNIT_FIGHTER"
	| "UNIT_JAPANESE_ZERO"
	| "UNIT_PARATROOPER"
	| "UNIT_TANK"
	| "UNIT_GERMAN_PANZER"
	| "UNIT_ARTILLERY"
	| "UNIT_ANTI_AIRCRAFT_GUN"
	| "UNIT_ANTI_TANK_GUN"
	| "UNIT_INFANTRY"
	| "UNIT_FRENCH_FOREIGNLEGION"
	| "UNIT_CAVALRY"
	| "UNIT_RUSSIAN_COSSACK"
	| "UNIT_RIFLEMAN"
	| "UNIT_LANCER"
	| "UNIT_OTTOMAN_SIPAHI"
	| "UNIT_CANNON"
	| "UNIT_MUSKETMAN"
	| "UNIT_AMERICAN_MINUTEMAN"
	| "UNIT_FRENCH_MUSKETEER"
	| "UNIT_OTTOMAN_JANISSARY"
	| "UNIT_LONGSWORDSMAN"
	| "UNIT_JAPANESE_SAMURAI"
	| "UNIT_TREBUCHET"
	| "UNIT_KNIGHT"
	| "UNIT_ARABIAN_CAMELARCHER"
	| "UNIT_SIAMESE_WARELEPHANT"
	| "UNIT_SONGHAI_MUSLIMCAVALRY"
	| "UNIT_CROSSBOWMAN"
	| "UNIT_CHINESE_CHUKONU"
	| "UNIT_ENGLISH_LONGBOWMAN"
	| "UNIT_PIKEMAN"
	| "UNIT_GERMAN_LANDSKNECHT"
	| "UNIT_CATAPULT"
	| "UNIT_ROMAN_BALLISTA"
	| "UNIT_HORSEMAN"
	| "UNIT_GREEK_COMPANIONCAVALRY"
	| "UNIT_SWORDSMAN"
	| "UNIT_IROQUOIAN_MOHAWKWARRIOR"
	| "UNIT_ROMAN_LEGION"
	| "UNIT_CHARIOT_ARCHER"
	| "UNIT_EGYPTIAN_WARCHARIOT"
	| "UNIT_INDIAN_WARELEPHANT"
	| "UNIT_SPEARMAN"
	| "UNIT_GREEK_HOPLITE"
	| "UNIT_PERSIAN_IMMORTAL"
	| "UNIT_ARCHER"
	| "UNIT_SCOUT"
	| "UNIT_WARRIOR"
	| "UNIT_AZTEC_JAGUAR"
	| "UNIT_BARBARIAN_WARRIOR"
	| "UNIT_GALLEY"
	| "UNIT_BARBARIAN_ARCHER"
	| "UNIT_BARBARIAN_SPEARMAN"
	| "UNIT_BARBARIAN_SWORDSMAN"
	| "UNIT_ZULU_IMPI"
	| "UNIT_VENETIAN_MERCHANT"
	| "UNIT_POLISH_WINGED_HUSSAR"
	| "UNIT_CARGO_SHIP"
	| "UNIT_CARAVAN"
	| "UNIT_WRITER"
	| "UNIT_MUSICIAN"
	| "UNIT_ARCHAEOLOGIST"
	| "UNIT_ASSYRIAN_SIEGE_TOWER"
	| "UNIT_BRAZILIAN_PRACINHA"
	| "UNIT_PORTUGUESE_NAU"
	| "UNIT_BERBER_CAVALRY"
	| "UNIT_VENETIAN_GALLEASS"
	| "UNIT_SHOSHONE_PATHFINDER"
	| "UNIT_SHOSHONE_COMANCHE_RIDERS"
	| "UNIT_BAZOOKA"
	| "UNIT_KRIS_SWORDSMAN"
	| "UNIT_BARBARIAN_HORSEMAN"
	| "UNIT_BARBARIAN_AXMAN"
	| "UNIT_XCOM_SQUAD"
	| "UNIT_PROPHET"
	| "UNIT_MISSIONARY"
	| "UNIT_COMPOSITE_BOWMAN"
	| "UNIT_GALLEASS"
	| "UNIT_GREAT_WAR_INFANTRY"
	| "UNIT_MARINE"
	| "UNIT_TRIPLANE"
	| "UNIT_WWI_BOMBER"
	| "UNIT_WWI_TANK"
	| "UNIT_MACHINE_GUN"
	| "UNIT_PRIVATEER"
	| "UNIT_INQUISITOR"
	| "UNIT_GREAT_ADMIRAL"
	| "UNIT_GATLINGGUN"
	| "UNIT_ETHIOPIAN_MEHAL_SEFARI";

declare type BNW_BuildsType =
	| "BUILD_TERRACE_FARM"
	| "BUILD_MOAI"
	| "BUILD_ROAD"
	| "BUILD_RAILROAD"
	| "BUILD_FARM"
	| "BUILD_MINE"
	| "BUILD_TRADING_POST"
	| "BUILD_LUMBERMILL"
	| "BUILD_PASTURE"
	| "BUILD_CAMP"
	| "BUILD_PLANTATION"
	| "BUILD_QUARRY"
	| "BUILD_WELL"
	| "BUILD_OFFSHORE_PLATFORM"
	| "BUILD_FISHING_BOATS"
	| "BUILD_FORT"
	| "BUILD_REMOVE_JUNGLE"
	| "BUILD_REMOVE_FOREST"
	| "BUILD_REMOVE_MARSH"
	| "BUILD_SCRUB_FALLOUT"
	| "BUILD_REPAIR"
	| "BUILD_REMOVE_ROUTE"
	| "BUILD_LANDMARK"
	| "BUILD_ACADEMY"
	| "BUILD_CUSTOMS_HOUSE"
	| "BUILD_MANUFACTORY"
	| "BUILD_CITADEL"
	| "BUILD_ARCHAEOLOGY_DIG"
	| "BUILD_BRAZILWOOD_CAMP"
	| "BUILD_KASBAH"
	| "BUILD_FEITORIA"
	| "BUILD_CHATEAU"
	| "BUILD_FISHING_BOATS_NO_KILL"
	| "BUILD_HOLY_SITE";

declare type BNW_ImprovementsType =
	| "IMPROVEMENT_TERRACE_FARM"
	| "IMPROVEMENT_MOAI"
	| "IMPROVEMENT_CITY_RUINS"
	| "IMPROVEMENT_BARBARIAN_CAMP"
	| "IMPROVEMENT_GOODY_HUT"
	| "IMPROVEMENT_FARM"
	| "IMPROVEMENT_MINE"
	| "IMPROVEMENT_QUARRY"
	| "IMPROVEMENT_TRADING_POST"
	| "IMPROVEMENT_LUMBERMILL"
	| "IMPROVEMENT_PASTURE"
	| "IMPROVEMENT_FISHING_BOATS"
	| "IMPROVEMENT_PLANTATION"
	| "IMPROVEMENT_CAMP"
	| "IMPROVEMENT_WELL"
	| "IMPROVEMENT_OFFSHORE_PLATFORM"
	| "IMPROVEMENT_FORT"
	| "IMPROVEMENT_LANDMARK"
	| "IMPROVEMENT_ACADEMY"
	| "IMPROVEMENT_CUSTOMS_HOUSE"
	| "IMPROVEMENT_MANUFACTORY"
	| "IMPROVEMENT_CITADEL"
	| "IMPROVEMENT_ARCHAEOLOGICAL_DIG"
	| "IMPROVEMENT_BRAZILWOOD_CAMP"
	| "IMPROVEMENT_KASBAH"
	| "IMPROVEMENT_FEITORIA"
	| "IMPROVEMENT_CHATEAU"
	| "IMPROVEMENT_HOLY_SITE";

declare type BNW_BuildingClassesType =
	| "BUILDINGCLASS_STATUE_ZEUS"
	| "BUILDINGCLASS_TEMPLE_ARTEMIS"
	| "BUILDINGCLASS_MAUSOLEUM_HALICARNASSUS"
	| "BUILDINGCLASS_COURTHOUSE"
	| "BUILDINGCLASS_SEAPORT"
	| "BUILDINGCLASS_STABLE"
	| "BUILDINGCLASS_WATERMILL"
	| "BUILDINGCLASS_CIRCUS"
	| "BUILDINGCLASS_FORGE"
	| "BUILDINGCLASS_WINDMILL"
	| "BUILDINGCLASS_HYDRO_PLANT"
	| "BUILDINGCLASS_SOLAR_PLANT"
	| "BUILDINGCLASS_MINT"
	| "BUILDINGCLASS_OBSERVATORY"
	| "BUILDINGCLASS_MONASTERY"
	| "BUILDINGCLASS_GARDEN"
	| "BUILDINGCLASS_LIGHTHOUSE"
	| "BUILDINGCLASS_HARBOR"
	| "BUILDINGCLASS_COLOSSEUM"
	| "BUILDINGCLASS_THEATRE"
	| "BUILDINGCLASS_STADIUM"
	| "BUILDINGCLASS_MONUMENT"
	| "BUILDINGCLASS_AMPHITHEATER"
	| "BUILDINGCLASS_OPERA_HOUSE"
	| "BUILDINGCLASS_MUSEUM"
	| "BUILDINGCLASS_BROADCAST_TOWER"
	| "BUILDINGCLASS_SHRINE"
	| "BUILDINGCLASS_TEMPLE"
	| "BUILDINGCLASS_BARRACKS"
	| "BUILDINGCLASS_ARMORY"
	| "BUILDINGCLASS_MILITARY_ACADEMY"
	| "BUILDINGCLASS_ARSENAL"
	| "BUILDINGCLASS_WALLS"
	| "BUILDINGCLASS_CASTLE"
	| "BUILDINGCLASS_MILITARY_BASE"
	| "BUILDINGCLASS_GRANARY"
	| "BUILDINGCLASS_HOSPITAL"
	| "BUILDINGCLASS_MEDICAL_LAB"
	| "BUILDINGCLASS_WORKSHOP"
	| "BUILDINGCLASS_FACTORY"
	| "BUILDINGCLASS_NUCLEAR_PLANT"
	| "BUILDINGCLASS_SPACESHIP_FACTORY"
	| "BUILDINGCLASS_MARKET"
	| "BUILDINGCLASS_BANK"
	| "BUILDINGCLASS_STOCK_EXCHANGE"
	| "BUILDINGCLASS_LIBRARY"
	| "BUILDINGCLASS_UNIVERSITY"
	| "BUILDINGCLASS_PUBLIC_SCHOOL"
	| "BUILDINGCLASS_LABORATORY"
	| "BUILDINGCLASS_PALACE"
	| "BUILDINGCLASS_HEROIC_EPIC"
	| "BUILDINGCLASS_NATIONAL_EPIC"
	| "BUILDINGCLASS_CIRCUS_MAXIMUS"
	| "BUILDINGCLASS_NATIONAL_TREASURY"
	| "BUILDINGCLASS_NATIONAL_COLLEGE"
	| "BUILDINGCLASS_IRONWORKS"
	| "BUILDINGCLASS_OXFORD_UNIVERSITY"
	| "BUILDINGCLASS_HERMITAGE"
	| "BUILDINGCLASS_PYRAMID"
	| "BUILDINGCLASS_GREAT_LIBRARY"
	| "BUILDINGCLASS_STONEHENGE"
	| "BUILDINGCLASS_HANGING_GARDEN"
	| "BUILDINGCLASS_COLOSSUS"
	| "BUILDINGCLASS_GREAT_LIGHTHOUSE"
	| "BUILDINGCLASS_ORACLE"
	| "BUILDINGCLASS_GREAT_WALL"
	| "BUILDINGCLASS_HAGIA_SOPHIA"
	| "BUILDINGCLASS_ANGKOR_WAT"
	| "BUILDINGCLASS_NOTRE_DAME"
	| "BUILDINGCLASS_MACHU_PICHU"
	| "BUILDINGCLASS_CHICHEN_ITZA"
	| "BUILDINGCLASS_KREMLIN"
	| "BUILDINGCLASS_FORBIDDEN_PALACE"
	| "BUILDINGCLASS_SISTINE_CHAPEL"
	| "BUILDINGCLASS_HIMEJI_CASTLE"
	| "BUILDINGCLASS_PORCELAIN_TOWER"
	| "BUILDINGCLASS_TAJ_MAHAL"
	| "BUILDINGCLASS_BIG_BEN"
	| "BUILDINGCLASS_BRANDENBURG_GATE"
	| "BUILDINGCLASS_LOUVRE"
	| "BUILDINGCLASS_EIFFEL_TOWER"
	| "BUILDINGCLASS_STATUE_OF_LIBERTY"
	| "BUILDINGCLASS_CRISTO_REDENTOR"
	| "BUILDINGCLASS_PENTAGON"
	| "BUILDINGCLASS_SYDNEY_OPERA_HOUSE"
	| "BUILDINGCLASS_AQUEDUCT"
	| "BUILDINGCLASS_STONE_WORKS"
	| "BUILDINGCLASS_TOURIST_CENTER"
	| "BUILDINGCLASS_WRITERS_GUILD"
	| "BUILDINGCLASS_ARTISTS_GUILD"
	| "BUILDINGCLASS_MUSICIANS_GUILD"
	| "BUILDINGCLASS_HOTEL"
	| "BUILDINGCLASS_CARAVANSARY"
	| "BUILDINGCLASS_AIRPORT"
	| "BUILDINGCLASS_UFFIZI"
	| "BUILDINGCLASS_GLOBE_THEATER"
	| "BUILDINGCLASS_BROADWAY"
	| "BUILDINGCLASS_RED_FORT"
	| "BUILDINGCLASS_PRORA_RESORT"
	| "BUILDINGCLASS_BOROBUDUR"
	| "BUILDINGCLASS_PARTHENON"
	| "BUILDINGCLASS_INTERNATIONAL_SPACE_STATION"
	| "BUILDINGCLASS_CATHEDRAL"
	| "BUILDINGCLASS_MOSQUE"
	| "BUILDINGCLASS_PAGODA"
	| "BUILDINGCLASS_RECYCLING_CENTER"
	| "BUILDINGCLASS_BOMB_SHELTER"
	| "BUILDINGCLASS_CONSTABLE"
	| "BUILDINGCLASS_POLICE_STATION"
	| "BUILDINGCLASS_INTELLIGENCE_AGENCY"
	| "BUILDINGCLASS_GRAND_TEMPLE"
	| "BUILDINGCLASS_ALHAMBRA"
	| "BUILDINGCLASS_CN_TOWER"
	| "BUILDINGCLASS_HUBBLE"
	| "BUILDINGCLASS_LEANING_TOWER"
	| "BUILDINGCLASS_MOSQUE_OF_DJENNE"
	| "BUILDINGCLASS_NEUSCHWANSTEIN"
	| "BUILDINGCLASS_PETRA"
	| "BUILDINGCLASS_TERRACOTTA_ARMY"
	| "BUILDINGCLASS_GREAT_FIREWALL";

declare type BNW_BuildingsType =
	| "BUILDING_STATUE_ZEUS"
	| "BUILDING_TEMPLE_ARTEMIS"
	| "BUILDING_MAUSOLEUM_HALICARNASSUS"
	| "BUILDING_WALLS_OF_BABYLON"
	| "BUILDING_COURTHOUSE"
	| "BUILDING_FLOATING_GARDENS"
	| "BUILDING_MUGHAL_FORT"
	| "BUILDING_KREPOST"
	| "BUILDING_LONGHOUSE"
	| "BUILDING_BAZAAR"
	| "BUILDING_SATRAPS_COURT"
	| "BUILDING_PAPER_MAKER"
	| "BUILDING_WAT"
	| "BUILDING_MUD_PYRAMID_MOSQUE"
	| "BUILDING_BURIAL_TOMB"
	| "BUILDING_SEAPORT"
	| "BUILDING_STABLE"
	| "BUILDING_WATERMILL"
	| "BUILDING_CIRCUS"
	| "BUILDING_FORGE"
	| "BUILDING_WINDMILL"
	| "BUILDING_HYDRO_PLANT"
	| "BUILDING_SOLAR_PLANT"
	| "BUILDING_MINT"
	| "BUILDING_OBSERVATORY"
	| "BUILDING_MONASTERY"
	| "BUILDING_GARDEN"
	| "BUILDING_LIGHTHOUSE"
	| "BUILDING_HARBOR"
	| "BUILDING_COLOSSEUM"
	| "BUILDING_THEATRE"
	| "BUILDING_STADIUM"
	| "BUILDING_MONUMENT"
	| "BUILDING_TEMPLE"
	| "BUILDING_OPERA_HOUSE"
	| "BUILDING_MUSEUM"
	| "BUILDING_BROADCAST_TOWER"
	| "BUILDING_BARRACKS"
	| "BUILDING_ARMORY"
	| "BUILDING_MILITARY_ACADEMY"
	| "BUILDING_ARSENAL"
	| "BUILDING_WALLS"
	| "BUILDING_CASTLE"
	| "BUILDING_MILITARY_BASE"
	| "BUILDING_GRANARY"
	| "BUILDING_HOSPITAL"
	| "BUILDING_MEDICAL_LAB"
	| "BUILDING_WORKSHOP"
	| "BUILDING_FACTORY"
	| "BUILDING_NUCLEAR_PLANT"
	| "BUILDING_SPACESHIP_FACTORY"
	| "BUILDING_MARKET"
	| "BUILDING_BANK"
	| "BUILDING_STOCK_EXCHANGE"
	| "BUILDING_LIBRARY"
	| "BUILDING_UNIVERSITY"
	| "BUILDING_PUBLIC_SCHOOL"
	| "BUILDING_LABORATORY"
	| "BUILDING_PALACE"
	| "BUILDING_HEROIC_EPIC"
	| "BUILDING_NATIONAL_COLLEGE"
	| "BUILDING_NATIONAL_EPIC"
	| "BUILDING_CIRCUS_MAXIMUS"
	| "BUILDING_NATIONAL_TREASURY"
	| "BUILDING_IRONWORKS"
	| "BUILDING_OXFORD_UNIVERSITY"
	| "BUILDING_HERMITAGE"
	| "BUILDING_GREAT_LIGHTHOUSE"
	| "BUILDING_STONEHENGE"
	| "BUILDING_GREAT_LIBRARY"
	| "BUILDING_PYRAMID"
	| "BUILDING_COLOSSUS"
	| "BUILDING_ORACLE"
	| "BUILDING_HANGING_GARDEN"
	| "BUILDING_GREAT_WALL"
	| "BUILDING_ANGKOR_WAT"
	| "BUILDING_HAGIA_SOPHIA"
	| "BUILDING_CHICHEN_ITZA"
	| "BUILDING_MACHU_PICHU"
	| "BUILDING_NOTRE_DAME"
	| "BUILDING_PORCELAIN_TOWER"
	| "BUILDING_HIMEJI_CASTLE"
	| "BUILDING_SISTINE_CHAPEL"
	| "BUILDING_KREMLIN"
	| "BUILDING_FORBIDDEN_PALACE"
	| "BUILDING_TAJ_MAHAL"
	| "BUILDING_BIG_BEN"
	| "BUILDING_LOUVRE"
	| "BUILDING_BRANDENBURG_GATE"
	| "BUILDING_STATUE_OF_LIBERTY"
	| "BUILDING_CRISTO_REDENTOR"
	| "BUILDING_EIFFEL_TOWER"
	| "BUILDING_PENTAGON"
	| "BUILDING_SYDNEY_OPERA_HOUSE"
	| "BUILDING_AQUEDUCT"
	| "BUILDING_STONE_WORKS"
	| "BUILDING_TOURIST_CENTER"
	| "BUILDING_IKANDA"
	| "BUILDING_DUCAL_STABLE"
	| "BUILDING_ROYAL_LIBRARY"
	| "BUILDING_CANDI"
	| "BUILDING_HANSE"
	| "BUILDING_WRITERS_GUILD"
	| "BUILDING_ARTISTS_GUILD"
	| "BUILDING_MUSICIANS_GUILD"
	| "BUILDING_HOTEL"
	| "BUILDING_CARAVANSARY"
	| "BUILDING_AIRPORT"
	| "BUILDING_UFFIZI"
	| "BUILDING_GLOBE_THEATER"
	| "BUILDING_BROADWAY"
	| "BUILDING_RED_FORT"
	| "BUILDING_PRORA_RESORT"
	| "BUILDING_BOROBUDUR"
	| "BUILDING_PARTHENON"
	| "BUILDING_INTERNATIONAL_SPACE_STATION"
	| "BUILDING_AMPHITHEATER"
	| "BUILDING_SHRINE"
	| "BUILDING_RECYCLING_CENTER"
	| "BUILDING_BOMB_SHELTER"
	| "BUILDING_CONSTABLE"
	| "BUILDING_POLICE_STATION"
	| "BUILDING_INTELLIGENCE_AGENCY"
	| "BUILDING_ALHAMBRA"
	| "BUILDING_CN_TOWER"
	| "BUILDING_HUBBLE"
	| "BUILDING_LEANING_TOWER"
	| "BUILDING_MOSQUE_OF_DJENNE"
	| "BUILDING_NEUSCHWANSTEIN"
	| "BUILDING_PETRA"
	| "BUILDING_TERRACOTTA_ARMY"
	| "BUILDING_GREAT_FIREWALL"
	| "BUILDING_CATHEDRAL"
	| "BUILDING_MOSQUE"
	| "BUILDING_PAGODA"
	| "BUILDING_STELE"
	| "BUILDING_GRAND_TEMPLE";

declare type BNW_AICityStrategiesType =
	| "AICITYSTRATEGY_SMALL_CITY"
	| "AICITYSTRATEGY_MEDIUM_CITY"
	| "AICITYSTRATEGY_LARGE_CITY"
	| "AICITYSTRATEGY_LANDLOCKED"
	| "AICITYSTRATEGY_NEED_TILE_IMPROVERS"
	| "AICITYSTRATEGY_WANT_TILE_IMPROVERS"
	| "AICITYSTRATEGY_ENOUGH_TILE_IMPROVERS"
	| "AICITYSTRATEGY_NEED_NAVAL_GROWTH"
	| "AICITYSTRATEGY_NEED_NAVAL_TILE_IMPROVEMENT"
	| "AICITYSTRATEGY_ENOUGH_NAVAL_TILE_IMPROVEMENT"
	| "AICITYSTRATEGY_NEED_IMPROVEMENT_FOOD"
	| "AICITYSTRATEGY_NEED_IMPROVEMENT_PRODUCTION"
	| "AICITYSTRATEGY_HAVE_TRAINING_FACILITY"
	| "AICITYSTRATEGY_CAPITAL_NEED_SETTLER"
	| "AICITYSTRATEGY_CAPITAL_UNDER_THREAT"
	| "AICITYSTRATEGY_FIRST_CULTURE_BUILDING"
	| "AICITYSTRATEGY_FIRST_CULTURE_BUILDING_EMERGENCY"
	| "AICITYSTRATEGY_UNDER_BLOCKADE"
	| "AICITYSTRATEGY_IS_PUPPET"
	| "AICITYSTRATEGY_MEDIUM_CITY_HIGH_DIFFICULTY"
	| "AICITYSTRATEGY_ORIGINAL_CAPITAL"
	| "AICITYSTRATEGY_FIRST_SCIENCE_BUILDING"
	| "AICITYSTRATEGY_FIRST_GOLD_BUILDING"
	| "AICITYSTRATEGY_FIRST_FAITH_BUILDING"
	| "AICITYSTRATEGY_FIRST_PRODUCTION_BUILDING"
	| "AICITYSTRATEGY_RIVER_CITY"
	| "AICITYSTRATEGY_MOUNTAIN_CITY"
	| "AICITYSTRATEGY_FOREST_CITY"
	| "AICITYSTRATEGY_HILL_CITY"
	| "AICITYSTRATEGY_JUNGLE_CITY"
	| "AICITYSTRATEGY_COAST_CITY"
	| "AICITYSTRATEGY_TINY_CITY"
	| "AICITYSTRATEGY_MANY_TECHS_STOLEN"
	| "AICITYSTRATEGY_KEY_SCIENCE_CITY"
	| "AICITYSTRATEGY_GOOD_GP_CITY"
	| "AICITYSTRATEGY_NEED_INTERNATIONAL_LAND_TRADE_ROUTE"
	| "AICITYSTRATEGY_NO_NEED_INTERNATIONAL_LAND_TRADE_ROUTE"
	| "AICITYSTRATEGY_NEED_INTERNATIONAL_SEA_TRADE_ROUTE"
	| "AICITYSTRATEGY_NO_NEED_INTERNATIONAL_SEA_TRADE_ROUTE"
	| "AICITYSTRATEGY_INTERNATIONAL_TRADE_DESTINATION"
	| "AICITYSTRATEGY_INTERNATIONAL_TRADE_ORIGIN"
	| "AICITYSTRATEGY_NEED_CULTURE_BUILDING"
	| "AICITYSTRATEGY_NEED_TOURISM_BUILDING"
	| "AICITYSTRATEGY_GOOD_AIRLIFT_CITY";

declare type BNW_AIEconomicStrategiesType =
	| "ECONOMICAISTRATEGY_NEED_RECON"
	| "ECONOMICAISTRATEGY_ENOUGH_RECON"
	| "ECONOMICAISTRATEGY_NEED_RECON_SEA"
	| "ECONOMICAISTRATEGY_ENOUGH_RECON_SEA"
	| "ECONOMICAISTRATEGY_EARLY_EXPANSION"
	| "ECONOMICAISTRATEGY_ENOUGH_EXPANSION"
	| "ECONOMICAISTRATEGY_NEED_HAPPINESS"
	| "ECONOMICAISTRATEGY_NEED_HAPPINESS_CRITICAL"
	| "ECONOMICAISTRATEGY_CITIES_NEED_NAVAL_GROWTH"
	| "ECONOMICAISTRATEGY_CITIES_NEED_NAVAL_TILE_IMPROVEMENT"
	| "ECONOMICAISTRATEGY_FOUND_CITY"
	| "ECONOMICAISTRATEGY_TRADE_WITH_CITY_STATE"
	| "ECONOMICAISTRATEGY_NEED_IMPROVEMENT_FOOD"
	| "ECONOMICAISTRATEGY_NEED_IMPROVEMENT_PRODUCTION"
	| "ECONOMICAISTRATEGY_ONE_OR_FEWER_COASTAL_CITIES"
	| "ECONOMICAISTRATEGY_LOSING_MONEY"
	| "ECONOMICAISTRATEGY_HALT_GROWTH_BUILDINGS"
	| "ECONOMICAISTRATEGY_TOO_MANY_UNITS"
	| "ECONOMICAISTRATEGY_ISLAND_START"
	| "ECONOMICAISTRATEGY_EXPAND_TO_OTHER_CONTINENTS"
	| "ECONOMICAISTRATEGY_REALLY_EXPAND_TO_OTHER_CONTINENTS"
	| "ECONOMICAISTRATEGY_EXPAND_LIKE_CRAZY"
	| "ECONOMICAISTRATEGY_GROW_LIKE_CRAZY"
	| "ECONOMICAISTRATEGY_GS_CULTURE"
	| "ECONOMICAISTRATEGY_GS_CONQUEST"
	| "ECONOMICAISTRATEGY_GS_DIPLOMACY"
	| "ECONOMICAISTRATEGY_GS_SPACESHIP"
	| "ECONOMICAISTRATEGY_GS_SPACESHIP_HOMESTRETCH"
	| "ECONOMICAISTRATEGY_REALLY_NEED_RECON_SEA"
	| "ECONOMICAISTRATEGY_MOSTLY_ON_THE_COAST"
	| "ECONOMICAISTRATEGY_NAVAL_MAP"
	| "ECONOMICAISTRATEGY_OFFSHORE_EXPANSION_MAP"
	| "ECONOMICAISTRATEGY_DEVELOPING_RELIGION"
	| "ECONOMICAISTRATEGY_TECH_LEADER"
	| "ECONOMICAISTRATEGY_NEED_ARCHAEOLOGISTS"
	| "ECONOMICAISTRATEGY_ENOUGH_ARCHAEOLOGISTS"
	| "ECONOMICAISTRATEGY_NEED_MUSEUMS"
	| "ECONOMICAISTRATEGY_NEED_GUILDS"
	| "ECONOMICAISTRATEGY_CONCERT_TOUR"
	| "ECONOMICAISTRATEGY_STARTED_PIETY";

declare type BNW_AIGrandStrategiesType =
	| "AIGRANDSTRATEGY_CULTURE"
	| "AIGRANDSTRATEGY_UNITED_NATIONS"
	| "AIGRANDSTRATEGY_SPACESHIP"
	| "AIGRANDSTRATEGY_CONQUEST";

declare type BNW_AIMilitaryStrategiesType =
	| "MILITARYAISTRATEGY_NEED_RANGED"
	| "MILITARYAISTRATEGY_ENOUGH_MILITARY_UNITS"
	| "MILITARYAISTRATEGY_EMPIRE_DEFENSE"
	| "MILITARYAISTRATEGY_EMPIRE_DEFENSE_CRITICAL"
	| "MILITARYAISTRATEGY_ENOUGH_NAVAL_UNITS"
	| "MILITARYAISTRATEGY_NEED_NAVAL_UNITS"
	| "MILITARYAISTRATEGY_NEED_NAVAL_UNITS_CRITICAL"
	| "MILITARYAISTRATEGY_AT_WAR"
	| "MILITARYAISTRATEGY_WAR_MOBILIZATION"
	| "MILITARYAISTRATEGY_NEED_RANGED_EARLY"
	| "MILITARYAISTRATEGY_ENOUGH_RANGED"
	| "MILITARYAISTRATEGY_MINOR_CIV_GENERAL_DEFENSE"
	| "MILITARYAISTRATEGY_MINOR_CIV_THREAT_ELEVATED"
	| "MILITARYAISTRATEGY_MINOR_CIV_THREAT_CRITICAL"
	| "MILITARYAISTRATEGY_ERADICATE_BARBARIANS"
	| "MILITARYAISTRATEGY_WINNING_WARS"
	| "MILITARYAISTRATEGY_LOSING_WARS"
	| "MILITARYAISTRATEGY_NEED_MOBILE"
	| "MILITARYAISTRATEGY_ENOUGH_MOBILE"
	| "MILITARYAISTRATEGY_NEED_AIR"
	| "MILITARYAISTRATEGY_NEED_NUKE"
	| "MILITARYAISTRATEGY_ENOUGH_AIR"
	| "MILITARYAISTRATEGY_NEED_ANTIAIR"
	| "MILITARYAISTRATEGY_ENOUGH_ANTIAIR"
	| "MILITARYAISTRATEGY_NEED_AIR_CARRIER";

declare type BNW_CitySpecializationsType =
	| "CITYSPECIALIZATION_SETTLER_PUMP"
	| "CITYSPECIALIZATION_MILITARY_TRAINING"
	| "CITYSPECIALIZATION_EMERGENCY_UNITS"
	| "CITYSPECIALIZATION_MILITARY_NAVAL"
	| "CITYSPECIALIZATION_PRODUCTION_WONDER"
	| "CITYSPECIALIZATION_PRODUCTION_SPACESHIP"
	| "CITYSPECIALIZATION_COMMERCE"
	| "CITYSPECIALIZATION_SCIENCE"
	| "CITYSPECIALIZATION_GENERAL_ECONOMIC";

declare type BNW_TacticalMovesType =
	| "TACTICAL_UNASSIGNED"
	| "TACTICAL_MOVE_NONCOMBATANTS_TO_SAFETY"
	| "TACTICAL_CAPTURE_CITY"
	| "TACTICAL_DAMAGE_CITY"
	| "TACTICAL_DESTROY_HIGH_UNIT"
	| "TACTICAL_DESTROY_MEDIUM_UNIT"
	| "TACTICAL_DESTROY_LOW_UNIT"
	| "TACTICAL_TO_SAFETY"
	| "TACTICAL_ATTRIT_HIGH_UNIT"
	| "TACTICAL_ATTRIT_MEDIUM_UNIT"
	| "TACTICAL_ATTRIT_LOW_UNIT"
	| "TACTICAL_REPOSITION"
	| "TACTICAL_BARBARIAN_CAMP"
	| "TACTICAL_PILLAGE"
	| "TACTICAL_SAFE_BOMBARDS"
	| "TACTICAL_HEAL"
	| "TACTICAL_ANCIENT_RUINS"
	| "TACTICAL_GARRISON_TO_ALLOW_BOMBARD"
	| "TACTICAL_BASTION_ALREADY_THERE"
	| "TACTICAL_GARRISON_ALREADY_THERE"
	| "TACTICAL_GUARD_IMPROVEMENT_ALREADY_THERE"
	| "TACTICAL_BASTION_1_TURN"
	| "TACTICAL_GARRISON_1_TURN"
	| "TACTICAL_GUARD_IMPROVEMENT_1_TURN"
	| "TACTICAL_AIR_SWEEP"
	| "TACTICAL_AIR_INTERCEPT"
	| "TACTICAL_AIR_REBASE"
	| "TACTICAL_POSTURE_WITHDRAW"
	| "TACTICAL_POSTURE_HEDGEHOG"
	| "TACTICAL_POSTURE_SHORE_BOMBARDMENT"
	| "TACTICAL_CLOSE_ON_TARGET"
	| "TACTICAL_MOVE_OPERATIONS"
	| "TACTICAL_EMERGENCY_PURCHASES"
	| "TACTICAL_ATTACK_VERY_HIGH_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_HIGH_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_MEDIUM_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_LOW_PRIORITY_CIVILIAN"
	| "TACTICAL_ESCORT_EMBARKED_UNIT"
	| "TACTICAL_PLUNDER_TRADE_UNIT"
	| "TACTICAL_PARK_ON_TRADE_ROUTE"
	| "TACTICAL_OFFENSIVE_POSTURE_MOVES"
	| "TACTICAL_POSTURE_SIT_AND_BOMBARD"
	| "TACTICAL_POSTURE_ATTRIT_FROM_RANGE"
	| "TACTICAL_POSTURE_EXPLOIT_FLANKS"
	| "TACTICAL_POSTURE_STEAMROLL"
	| "TACTICAL_POSTURE_SURGICAL_CITY_STRIKE"
	| "TACTICAL_POSTURE_COUNTERATTACK"
	| "TACTICAL_DEFENSIVE_AIRLIFT"
	| "TACTICAL_PILLAGE_CITADEL"
	| "TACTICAL_PILLAGE_RESOURCE"
	| "TACTICAL_PILLAGE_CITADEL_NEXT_TURN"
	| "TACTICAL_PILLAGE_RESOURCE_NEXT_TURN"
	| "TACTICAL_PILLAGE_NEXT_TURN";

declare type BNW_AttitudesType =
	| "ATTITUDE_FURIOUS"
	| "ATTITUDE_ANNOYED"
	| "ATTITUDE_CAUTIOUS"
	| "ATTITUDE_PLEASED"
	| "ATTITUDE_FRIENDLY";

declare type BNW_CitySizesType =
	| "CITYSIZE_SMALL"
	| "CITYSIZE_MEDIUM"
	| "CITYSIZE_LARGE";

declare type BNW_ConceptsType =
	| "CONCEPT_CITIES"
	| "CONCEPT_FOUNDING_CITIES"
	| "CONCEPT_WHERE_TO_FOUND_CITIES"
	| "CONCEPT_CITY_BANNER"
	| "CONCEPT_CITY_SCREEN"
	| "CONCEPT_CITY_COMBATUNITS"
	| "CONCEPT_CITY_CONSTRUCTION"
	| "CONCEPT_CITY_BUILD"
	| "CONCEPT_CITY_CHANGE_BUILD"
	| "CONCEPT_CITY_PURCHASEITEM"
	| "CONCEPT_CITY_CONSTRUCTING_UNITS"
	| "CONCEPT_CITY_CONSTRUCTING_BUILDINGS"
	| "CONCEPT_CITY_CONSTRUCTING_WONDERS"
	| "CONCEPT_CITY_WORKINGLAND"
	| "CONCEPT_CITY_ASSIGNINGCITIZENS"
	| "CONCEPT_CITY_IMPROVINGLAND"
	| "CONCEPT_CITY_SPECIALISTS"
	| "CONCEPT_CITY_SPECIALISTS_NOTWORKTILE"
	| "CONCEPT_CITY_SPECIALISTS_BENEFIT"
	| "CONCEPT_CITY_UNEMPLOYED_CITIZENS"
	| "CONCEPT_CITY_COMBAT"
	| "CONCEPT_CITY_ATTACKING_MELEE"
	| "CONCEPT_CITY_ATTACKING_RANGED"
	| "CONCEPT_CITY_DEFENDING"
	| "CONCEPT_CITY_CONQUERING"
	| "CONCEPT_CITY_DESTROY"
	| "CONCEPT_CITY_INDESTRUCTABLE"
	| "CONCEPT_CITY_ANNEX"
	| "CONCEPT_CITY_PUPPET"
	| "CONCEPT_COMBAT"
	| "CONCEPT_COMBAT_DECLARE_WAR"
	| "CONCEPT_COMBAT_DECLARE_WAR_DIPLOMATICALLY"
	| "CONCEPT_COMBAT_DECLARE_WAR_ATTACK_UNIT"
	| "CONCEPT_COMBAT_DECLARE_WAR_ENTER_TERRITORY"
	| "CONCEPT_COMBAT_DECLARE_WAR_RECEIVED"
	| "CONCEPT_COMBAT_END_WAR"
	| "CONCEPT_COMBAT_WHICH_UNITS_CAN_FIGHT"
	| "CONCEPT_COMBAT_UNIT_STATS"
	| "CONCEPT_COMBAT_UNIT_STATS_RANGED_COMBAT_STRENGTH"
	| "CONCEPT_COMBAT_UNIT_STATS_RANGE"
	| "CONCEPT_COMBAT_UNIT_STATS_COMBAT_STRENGTH"
	| "CONCEPT_COMBAT_UNIT_STATS_HIT_POINTS"
	| "CONCEPT_COMBAT_MELEE_COMBAT"
	| "CONCEPT_COMBAT_MELEE_COMBAT_RESOLVE"
	| "CONCEPT_COMBAT_MELEE_MULTIPLE_UNITS"
	| "CONCEPT_COMBAT_COMBAT_INFORMATION_TABLE"
	| "CONCEPT_COMBAT_MELEE_INITIATING_COMBAT"
	| "CONCEPT_COMBAT_MELEE_RESULTS"
	| "CONCEPT_COMBAT_RANGED_COMBAT"
	| "CONCEPT_COMBAT_RANGED_COMBAT_STRENGTH"
	| "CONCEPT_COMBAT_RANGED_COMBAT_RANGE"
	| "CONCEPT_COMBAT_RANGED_LINE_OF_SIGHT"
	| "CONCEPT_COMBAT_RANGED_INITIATING_COMBAT"
	| "CONCEPT_COMBAT_RANGED_RESULTS"
	| "CONCEPT_COMBAT_BONUSES"
	| "CONCEPT_COMBAT_BONUSES_TERRAIN"
	| "CONCEPT_COMBAT_BONUSES_FORT"
	| "CONCEPT_COMBAT_FORTIFICATION_EXPLANATION"
	| "CONCEPT_COMBAT_FORTIFICATION_WHICH_UNITS_CAN_FORTIFY"
	| "CONCEPT_COMBAT_BONUSES_FORTIFICATION"
	| "CONCEPT_COMBAT_ALERT"
	| "CONCEPT_COMBAT_NAVAL"
	| "CONCEPT_COMBAT_CITY_COMBAT_STRENGTH"
	| "CONCEPT_COMBAT_CITY_HIT_POINTS"
	| "CONCEPT_COMBAT_CITY_ATTACKING_WITH_RANGED_UNITS"
	| "CONCEPT_COMBAT_CITY_ATTACKING_WITH_MELEE_UNITS"
	| "CONCEPT_COMBAT_CITY_GARRISON"
	| "CONCEPT_COMBAT_CITY_BOMBARD"
	| "CONCEPT_COMBAT_CITY_HEALING_DAMAGE"
	| "CONCEPT_COMBAT_CITY_CAPTURE"
	| "CONCEPT_COMBAT_CITY_CAPTURE_MORE"
	| "CONCEPT_COMBAT_SIEGE"
	| "CONCEPT_COMBAT_GREAT_GENERAL"
	| "CONCEPT_COMBAT_UNIT_COMBAT_DAMAGE"
	| "CONCEPT_COMBAT_UNIT_GROUND_HEALING_DAMAGE"
	| "CONCEPT_COMBAT_UNIT_NAVAL_HEALING_DAMAGE"
	| "CONCEPT_COMBAT_FORTIFY_UNTIL_HEALED"
	| "CONCEPT_COMBAT_EXPERIENCE_AND_PROMOTIONS"
	| "CONCEPT_COMBAT_EXPERIENCE_ACCUMULATING_COMBAT"
	| "CONCEPT_COMBAT_EXPERIENCE_ACCUMULATING_OTHER"
	| "CONCEPT_COMBAT_EXPERIENCE_SPENDING"
	| "CONCEPT_COMBAT_PROMOTIONS"
	| "CONCEPT_TERRAIN"
	| "CONCEPT_TERRAIN_RESOURCES"
	| "CONCEPT_TERRAIN_TABLES"
	| "CONCEPT_TERRAIN_TYPES"
	| "CONCEPT_TERRAIN_VALUES"
	| "CONCEPT_TERRAIN_COAST"
	| "CONCEPT_TERRAIN_DESERT"
	| "CONCEPT_TERRAIN_GRASSLAND"
	| "CONCEPT_TERRAIN_HILLS"
	| "CONCEPT_TERRAIN_MOUNTAINS"
	| "CONCEPT_TERRAIN_OCEANS"
	| "CONCEPT_TERRAIN_PLAINS"
	| "CONCEPT_TERRAIN_SNOW"
	| "CONCEPT_TERRAIN_TUNDRA"
	| "CONCEPT_TERRAIN_FEATURES"
	| "CONCEPT_TERRAIN_FEATURE_VALUES"
	| "CONCEPT_TERRAIN_FEATURE_FALLOUT"
	| "CONCEPT_TERRAIN_FEATURE_FLOOD_PLAINS"
	| "CONCEPT_TERRAIN_FEATURE_FORESTS"
	| "CONCEPT_TERRAIN_FEATURE_ICE"
	| "CONCEPT_TERRAIN_FEATURE_JUNGLE"
	| "CONCEPT_TERRAIN_FEATURE_MARSH"
	| "CONCEPT_TERRAIN_FEATURE_NATURAL_WONDER"
	| "CONCEPT_TERRAIN_FEATURE_OASIS"
	| "CONCEPT_TERRAIN_RIVERS"
	| "CONCEPT_TERRAIN_RIVERS_TILES"
	| "CONCEPT_TERRAIN_RIVERS_YIELD"
	| "CONCEPT_TERRAIN_RIVERS_COMBAT"
	| "CONCEPT_TERRAIN_RIVERS_MOVEMENT"
	| "CONCEPT_RESOURCES"
	| "CONCEPT_RESOURCES_BONUS"
	| "CONCEPT_RESOURCES_LUXURY"
	| "CONCEPT_RESOURCES_CITY_REQUESTS"
	| "CONCEPT_RESOURCES_STRATEGIC"
	| "CONCEPT_WORKERS"
	| "CONCEPT_WORKERS_CREATING"
	| "CONCEPT_WORKERS_COMBAT"
	| "CONCEPT_WORKERS_ACTION_PANEL"
	| "CONCEPT_WORKERS_CLEARINGLAND"
	| "CONCEPT_WORKERS_CLEARINGLAND_TIME"
	| "CONCEPT_WORKERS_ROADS"
	| "CONCEPT_WORKERS_ROADS_TIME"
	| "CONCEPT_WORKERS_ROADS_TRADE_ROUTES"
	| "CONCEPT_WORKERS_IMPROVEMENTS"
	| "CONCEPT_WORKERS_IMPROVEMENTS_WHERE"
	| "CONCEPT_WORKERS_IMPROVEMENTS_TIME"
	| "CONCEPT_WORKERS_IMPROVEMENTS_TIME_LEFT"
	| "CONCEPT_WORKERS_IMPROVEMENTS_LEAVING"
	| "CONCEPT_WORKERS_IMPROVEMENTS_FARM"
	| "CONCEPT_WORKERS_IMPROVEMENTS_MINE"
	| "CONCEPT_WORKERS_IMPROVEMENTS_FORT"
	| "CONCEPT_WORKERS_WORKBOATS"
	| "CONCEPT_WORKERS_PILLAGE"
	| "CONCEPT_WORKERS_REPAIR"
	| "CONCEPT_WORKERS_REPAIR_WATER"
	| "CONCEPT_WORKERS_GREAT_PEOPLE"
	| "CONCEPT_FOOD_AND_CITY_GROWTH"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_MECHANICS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_GETTING_MORE_FOOD"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_BEST_FOOD_TILES"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_BONUS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_OASIS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_FLOOD_PLAINS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_GRASSLAND_AND_JUNGLE"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_IMPROVEMENTS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_BUILDINGS_WONDERS_SOCIAL_POLICIES"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_MARITIME_CITY_STATES"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_WE_LOVE_THE_KING_DAY"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_UNHAPPINESS"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_GROWTH"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_GROWTH_BUCKET"
	| "CONCEPT_FOOD_AND_CITY_GROWTH_SETTLERS"
	| "CONCEPT_TECHNOLOGY"
	| "CONCEPT_TECHNOLOGY_TECH_AND_BEAKERS"
	| "CONCEPT_TECHNOLOGY_BEAKERS"
	| "CONCEPT_TECHNOLOGY_SPEEDING_UP_RESEARCH"
	| "CONCEPT_TECHNOLOGY_ANCIENT_RUINS"
	| "CONCEPT_TECHNOLOGY_TRADE"
	| "CONCEPT_TECHNOLOGY_BUILDINGS"
	| "CONCEPT_TECHNOLOGY_WONDERS"
	| "CONCEPT_TECHNOLOGY_GREAT_SCIENTIST"
	| "CONCEPT_TECHNOLOGY_SOCIAL_POLICIES"
	| "CONCEPT_TECHNOLOGY_CHOOSING_TECH"
	| "CONCEPT_TECHNOLOGY_CHOOSE_RESEARCH_MENU"
	| "CONCEPT_TECHNOLOGY_CHANGE_RESEARCH"
	| "CONCEPT_TECHNOLOGY_AVAILABLE"
	| "CONCEPT_TECHNOLOGY_TECH_TREE"
	| "CONCEPT_TECHNOLOGY_VICTORY"
	| "CONCEPT_VICTORY"
	| "CONCEPT_VICTORY_CITY_STATES"
	| "CONCEPT_VICTORY_DEFEAT"
	| "CONCEPT_VICTORY_DEFEAT_LOSING_LAST_CITY"
	| "CONCEPT_VICTORY_DEFEAT_ANOTHER_WINNER"
	| "CONCEPT_VICTORY_DEFEAT_TIME_OUT"
	| "CONCEPT_VICTORY_VICTORY"
	| "CONCEPT_VICTORY_VICTORY_DOMINATION"
	| "CONCEPT_VICTORY_RAZING_ORIGINAL_CAPITAL"
	| "CONCEPT_VICTORY_CAPITAL_AND_ORIGINAL_CAPITAL"
	| "CONCEPT_VICTORY_VICTORY_SCIENCE"
	| "CONCEPT_VICTORY_SPACESHIP_PARTS"
	| "CONCEPT_VICTORY_VICTORY_CULTURAL"
	| "CONCEPT_VICTORY_VICTORY_DIPLOMATIC"
	| "CONCEPT_VICTORY_DIPLOMATIC_VOTING"
	| "CONCEPT_VICTORY_MINOR_CIV_LIBERATION"
	| "CONCEPT_VICTORY_END_OF_TIME"
	| "CONCEPT_VICTORY_POINTS"
	| "CONCEPT_CULTURE"
	| "CONCEPT_CULTURE_GAINING"
	| "CONCEPT_CULTURE_EXPANDING_TERRITORY"
	| "CONCEPT_CULTURE_ACQUIRING_SOCIAL_POLICY"
	| "CONCEPT_CULTURE_VICTORY"
	| "CONCEPT_DIPLOMACY"
	| "CONCEPT_DIPLOMACY_WHO_CAN_CONDUCT"
	| "CONCEPT_DIPLOMACY_INITIATING"
	| "CONCEPT_DIPLOMACY_WITH_CIVS"
	| "CONCEPT_DIPLOMACY_DECLARE_WAR"
	| "CONCEPT_DIPLOMACY_PEACE"
	| "CONCEPT_DIPLOMACY_TRADE"
	| "CONCEPT_DIPLOMACY_DEMAND"
	| "CONCEPT_DIPLOMACY_DISCUSS"
	| "CONCEPT_DIPLOMACY_DENOUNCE"
	| "CONCEPT_DIPLOMACY_FRIENDSHIP"
	| "CONCEPT_DIPLOMACY_EXIT"
	| "CONCEPT_DIPLOMACY_TRADE_SCREEN"
	| "CONCEPT_DIPLOMACY_OPEN_BORDERS"
	| "CONCEPT_DIPLOMACY_DEFENSIVE_PACT"
	| "CONCEPT_DIPLOMACY_RESEARCH_AGREEMENT"
	| "CONCEPT_DIPLOMACY_TRADE_CITIES"
	| "CONCEPT_DIPLOMACY_OTHER_PLAYERS"
	| "CONCEPT_DIPLOMACY_RESOURCES"
	| "CONCEPT_DIPLOMACY_CITY_STATE"
	| "CONCEPT_DIPLOMACY_DECLARING_WAR"
	| "CONCEPT_DIPLOMACY_NEGOTIATE_PEACE"
	| "CONCEPT_HAPPINESS"
	| "CONCEPT_HAPPINESS_STARTING"
	| "CONCEPT_HAPPINESS_CAUSES_UNHAPPINESS"
	| "CONCEPT_HAPPINESS_CAUSES_HAPPINESS"
	| "CONCEPT_HAPPINESS_HAPPINESS_LEVELS"
	| "CONCEPT_HAPPINESS_UNHAHPPY"
	| "CONCEPT_HAPPINESS_VERY_UNHAPPY"
	| "CONCEPT_FOG_OF_WAR"
	| "CONCEPT_FOG_OF_WAR_THREE_STATES"
	| "CONCEPT_FOG_OF_WAR_STATE_VISIBLE"
	| "CONCEPT_FOG_OF_WAR_STATE_REVEALED"
	| "CONCEPT_FOG_OF_WAR_STATE_FOG_OF_WAR"
	| "CONCEPT_FOG_OF_WAR_SEEN"
	| "CONCEPT_FOG_OF_WAR_OBSCURING_TERRAIN"
	| "CONCEPT_FOG_OF_WAR_INDIRECT_FIRE"
	| "CONCEPT_SOCIAL_POLICY"
	| "CONCEPT_SOCIAL_POLICY_GAINING"
	| "CONCEPT_SOCIAL_POLICY_BRANCHES"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_TRADITION"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_LIBERTY"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_HONOR"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_PIETY"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_PATRONAGE"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_COMMERCE"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_RATIONALISM"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_FREEDOM"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_ORDER"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_AUTOCRACY"
	| "CONCEPT_SOCIAL_POLICY_VICTORY"
	| "CONCEPT_GOLD"
	| "CONCEPT_GOLD_WHERE_TO_GET"
	| "CONCEPT_GOLD_TERRAIN"
	| "CONCEPT_GOLD_RESOURCES"
	| "CONCEPT_GOLD_TRADING_POST"
	| "CONCEPT_GOLD_BUILDINGS"
	| "CONCEPT_GOLD_WONDERS"
	| "CONCEPT_GOLD_TRADE_ROUTES"
	| "CONCEPT_GOLD_TRADE_ROUTES_BLOCKADE"
	| "CONCEPT_GOLD_BARBARIAN_CAMPS"
	| "CONCEPT_GOLD_ANCIENT_RUINS"
	| "CONCEPT_GOLD_CITY_STATES"
	| "CONCEPT_GOLD_PILLAGE_IMPROVEMENTS"
	| "CONCEPT_GOLD_CITY_CAPTURE"
	| "CONCEPT_GOLD_DIPLOMACY"
	| "CONCEPT_GOLD_TRADE_MISSION"
	| "CONCEPT_GOLD_SPENDING"
	| "CONCEPT_GOLD_UNIT_BUILDING_MAINTENANCE"
	| "CONCEPT_GOLD_ROAD_MAINTENANCE"
	| "CONCEPT_GOLD_PURCHASE_TILES"
	| "CONCEPT_GOLD_PURCHASE_UNITS_BUILDINGS_WONDERS"
	| "CONCEPT_GOLD_BUY_CITY_STATE_INFLUENCE"
	| "CONCEPT_GOLD_UPGRADE_UNITS"
	| "CONCEPT_GOLD_SPENDING_ON_DIPLOMACY"
	| "CONCEPT_GOLD_DIPLOMACY_FLAT_FEE"
	| "CONCEPT_GOLD_DIPLOMACY_PER_TURN"
	| "CONCEPT_GOLD_CITY_CAPTURED_BY_BARBARIANS"
	| "CONCEPT_GOLD_CITY_CAPTURED_BY_CIV"
	| "CONCEPT_GOLD_RUNNING_DEFICIT"
	| "CONCEPT_ADVISORS"
	| "CONCEPT_ADVISORS_ECONOMIC"
	| "CONCEPT_ADVISORS_MILITARY"
	| "CONCEPT_ADVISORS_FOREIGN"
	| "CONCEPT_ADVISORS_SCIENCE"
	| "CONCEPT_ADVISORS_CONTACTING"
	| "CONCEPT_ADVISORS_TURNINGOFF"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE"
	| "CONCEPT_BUILDINGS_SPECIALISTS"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_ARTIST"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_ENGINEER"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_MERCHANT"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_SCIENTIST"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_ASSIGNING"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_EFFECT"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GENERATING"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_ABILITIES"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_SPECIAL_IMPROVEMENT"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_SPECIAL_ABILITY"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_MOVING_GREAT_PEOPLE"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_ARTIST"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_LANDMARK"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_CULTURE_BOMB"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_ENGINEER"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_MANUFACTORY"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_HURRY_PRODUCTION"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_MERCHANT"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_CUSTOMS_HOUSE"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_TRADE_MISSION"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_SCIENTIST"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_ACADEMY"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_LEARN_NEW_TECH"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_GENERAL"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_CITADEL"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_COMBAT_BONUS"
	| "CONCEPT_CITY_STATE"
	| "CONCEPT_CITY_STATE_TYPES"
	| "CONCEPT_CITY_STATE_TYPES_CULTURED"
	| "CONCEPT_CITY_STATE_TYPES_MARITIME"
	| "CONCEPT_CITY_STATE_TYPES_MILITARISTIC"
	| "CONCEPT_CITY_STATE_COMMUNICATION"
	| "CONCEPT_CITY_STATE_INFLUENCE"
	| "CONCEPT_CITY_STATE_INFLUENCE_GIVE_GOLD"
	| "CONCEPT_CITY_STATE_INFLUENCE_GIVE_UNITS"
	| "CONCEPT_CITY_STATE_INFLUENCE_DO_NOTHING"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS_PERMANENT_WAR"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS_WAR"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS_NEUTRAL"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS_FRIENDS"
	| "CONCEPT_CITY_STATE_INFLUENCE_LEVELS_ALLIES"
	| "CONCEPT_CITY_STATE_MISSIONS"
	| "CONCEPT_CITY_STATE_WAR"
	| "CONCEPT_CITY_STATE_LIBERATING"
	| "CONCEPT_CITY_STATE_DIPLOMACY_VICTORY"
	| "CONCEPT_MOVEMENT"
	| "CONCEPT_MOVEMENT_HOW_TO_ORDER"
	| "CONCEPT_MOVEMENT_RIGHT_CLICK"
	| "CONCEPT_MOVEMENT_MOVE_MODE"
	| "CONCEPT_MOVEMENT_LEGAL_MOVES"
	| "CONCEPT_MOVEMENT_ILLEGAL_MOVES"
	| "CONCEPT_MOVEMENT_MULTIPLE_TURN_MOVES"
	| "CONCEPT_MOVEMENT_MOVEMENT_POINTS"
	| "CONCEPT_MOVEMENT_EXPENDING_MOVEMENT_POINTS"
	| "CONCEPT_MOVEMENT_ROADS_AND_RAILROADS"
	| "CONCEPT_MOVEMENT_ROADS_AND_RAILROADS_AND_RIVERS"
	| "CONCEPT_MOVEMENT_STACKING_LIMITS"
	| "CONCEPT_MOVEMENT_COMBAT"
	| "CONCEPT_MOVEMENT_COMBAT_ATTACK_ORDERS"
	| "CONCEPT_MOVEMENT_COMBAT_ZONES_OF_CONTROL"
	| "CONCEPT_MOVEMENT_NAVAL"
	| "CONCEPT_MOVEMENT_EMBARKING"
	| "CONCEPT_SCORE"
	| "CONCEPT_SCORE_ELIMINATION"
	| "CONCEPT_SCORE_TIME_TO_VICTORY"
	| "CONCEPT_SCORE_VICTORY_POINTS"
	| "CONCEPT_SCORE_MAP_SIZE"
	| "CONCEPT_SCORE_CURRENT_SCORE"
	| "CONCEPT_AIR_POWER"
	| "CONCEPT_AIR_POWER_AIR_UNITS"
	| "CONCEPT_AIR_POWER_HELICOPTER_GUNSHIPS"
	| "CONCEPT_AIR_POWER_HELICOPTER_GUNSHIPS_MOVEMENT"
	| "CONCEPT_AIR_POWER_HELICOPTER_GUNSHIPS_ANTI_TANK"
	| "CONCEPT_AIR_POWER_BASES"
	| "CONCEPT_AIR_POWER_BASES_LOCATION"
	| "CONCEPT_AIR_POWER_BASES_FIGHTERS"
	| "CONCEPT_AIR_POWER_BASES_BOMBERS"
	| "CONCEPT_AIR_POWER_BASES_STEALTH"
	| "CONCEPT_AIR_POWER_BASES_ATOMIC"
	| "CONCEPT_AIR_POWER_BASES_MISSILES"
	| "CONCEPT_AIR_POWER_BASES_NAVAL_UNIT"
	| "CONCEPT_AIR_POWER_BASES_NAVAL_UNIT_CARRIER"
	| "CONCEPT_AIR_POWER_BASES_NAVAL_UNIT_MISSLE_CRUISER"
	| "CONCEPT_AIR_POWER_BASES_NAVAL_UNIT_NUCLEAR_SUBMARINE"
	| "CONCEPT_AIR_POWER_STACKING"
	| "CONCEPT_AIR_POWER_RANGE"
	| "CONCEPT_AIR_POWER_RECON"
	| "CONCEPT_AIR_POWER_MISSIONS"
	| "CONCEPT_AIR_POWER_REBASE"
	| "CONCEPT_AIR_POWER_AIR_STRIKE"
	| "CONCEPT_AIR_POWER_AIR_SWEEP"
	| "CONCEPT_AIR_POWER_INTERCEPTION"
	| "CONCEPT_AIR_POWER_AIR_STRIKE_RULES"
	| "CONCEPT_AIR_POWER_INTERCEPTION_RULES"
	| "CONCEPT_AIR_POWER_AIR_SWEEPS_RULES"
	| "CONCEPT_AIR_POWER_MISSILES_RULES"
	| "CONCEPT_AIR_POWER_ATOMIC_BOMBS_RULES"
	| "CONCEPT_AIR_POWER_NUCLEAR_MISSILES_RULES"
	| "CONCEPT_BUILDINGS"
	| "CONCEPT_BUILDINGS_CONSTRUCTION"
	| "CONCEPT_BUILDINGS_PURCHASING"
	| "CONCEPT_BUILDINGS_PREREQUISITES"
	| "CONCEPT_BUILDINGS_MAINTENANCE"
	| "CONCEPT_BUILDINGS_PALACE"
	| "CONCEPT_BUILDINGS_CAPTURED_CITIES"
	| "CONCEPT_BARBARIANS_AND_ANCIENT_RUINS"
	| "CONCEPT_ANCIENT_RUINS"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_FREE_TECHNOLOGY"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_MAP"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_WEAPONS"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_SURVIVORS"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_TREASURE"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_CULTURE"
	| "CONCEPT_ANCIENT_RUINS_BENEFITS_SETTLERS_AND_WORKERS"
	| "CONCEPT_BARBARIANS"
	| "CONCEPT_BARBARIANS_ENCAMPMENTS"
	| "CONCEPT_BARBARIANS_ENCAMPMENTS_DESTROYING"
	| "CONCEPT_BARBARIANS_ENCAMPMENTS_NEW"
	| "CONCEPT_BARBARIANS_UNITS"
	| "CONCEPT_BARBARIANS_UNITS_NAVAL"
	| "CONCEPT_BARBARIANS_CAPTURING_CIVILIANS"
	| "CONCEPT_BARBARIANS_EXPERIENCE_POINT_LIMITS"
	| "CONCEPT_BARBARIANS_THE_END"
	| "CONCEPT_UNITS"
	| "CONCEPT_UNITS_CONSTRUCTING"
	| "CONCEPT_UNITS_CHARACTERISTICS"
	| "CONCEPT_UNITS_MOVEMENT_SPEED"
	| "CONCEPT_UNITS_COMBAT_STRENGTH"
	| "CONCEPT_UNITS_SPECIAL_ABILITIES"
	| "CONCEPT_UNITS_NATIONAL_UNITS"
	| "CONCEPT_UNITS_MOVEMENT"
	| "CONCEPT_UNITS_COMBAT"
	| "CONCEPT_UNITS_NON_COMBAT_UNITS"
	| "CONCEPT_UNITS_COMBAT_UNITS"
	| "CONCEPT_UNITS_NAVAL_UNITS"
	| "CONCEPT_UNITS_AIR_UNITS"
	| "CONCEPT_HAPPINESS_REVOLT"
	| "CONCEPT_CULTURE_TOURISM"
	| "CONCEPT_CULTURE_TOURISM_AND_CULTURE"
	| "CONCEPT_CULTURE_TOURISM_BENEFITS"
	| "CONCEPT_CULTURE_GREAT_WORKS"
	| "CONCEPT_CULTURE_GREAT_WORK_ART"
	| "CONCEPT_CULTURE_GREAT_WORK_WRITING"
	| "CONCEPT_CULTURE_GREAT_WORK_MUSIC"
	| "CONCEPT_CULTURE_MANAGE_GREAT_WORKS"
	| "CONCEPT_CULTURE_ARCH"
	| "CONCEPT_CULTURE_ANTIQUITY"
	| "CONCEPT_CULTURE_ARTIFACTS"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_AESTHETICS"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_EXPLORATION"
	| "CONCEPT_SOCIAL_POLICY_BRANCH_IDEOLOGY"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_WRITER"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_SPECIALISTS_MUSICIAN"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_ART_CREATEGW"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_WRITER"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_WRITER_CREATEGW"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_TREATISE"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GREAT_MUSICIAN"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_MUSICIAN_CREATEGW"
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_CONCERT_TOUR"
	| "CONCEPT_TRADE_ROUTES"
	| "CONCEPT_TRADE_CARAVAN"
	| "CONCEPT_TRADE_CARGO"
	| "CONCEPT_TRADE_EXTENDING"
	| "CONCEPT_TRADE_BOOST"
	| "CONCEPT_TRADE_WAR"
	| "CONCEPT_TRADE_PILLAGE"
	| "CONCEPT_TRADE_RELIGION"
	| "CONCEPT_TRADE_SCIENCE"
	| "CONCEPT_CONGRESS"
	| "CONCEPT_CONGRESS_SESSIONS"
	| "CONCEPT_CONGRESS_RESOLUTIONS"
	| "CONCEPT_CONGRESS_PROJECTS"
	| "CONCEPT_CONGRESS_DELEGATES"
	| "CONCEPT_CONGRESS_TRADING"
	| "CONCEPT_CONGRESS_INTRIGUE"
	| "CONCEPT_CONGRESS_UN"
	| "CONCEPT_CONGRESS_VICTORY"
	| "CONCEPT_ESPIONAGE_SPIES"
	| "CONCEPT_ESPIONAGE_MOVING_SPIES"
	| "CONCEPT_ESPIONAGE_MORE"
	| "CONCEPT_ESPIONAGE_STEALING_TECHS"
	| "CONCEPT_ESPIONAGE_CANT_STEAL_ANYMORE"
	| "CONCEPT_ESPIONAGE_RIG_ELECTION"
	| "CONCEPT_ESPIONAGE_SURVEILLANCE"
	| "CONCEPT_ESPIONAGE_COUNTER_INTEL"
	| "CONCEPT_ESPIONAGE_POLICE_STATION"
	| "CONCEPT_ESPIONAGE_NATIONAL_INTELLIGENCE"
	| "CONCEPT_ESPIONAGE_GREAT_FIREWALL"
	| "CONCEPT_ESPIONAGE_PROMOTIONS"
	| "CONCEPT_ESPIONAGE_GETTING_CAUGHT"
	| "CONCEPT_RELIGION_FAITH_EARNING"
	| "CONCEPT_RELIGION_PANTHEONS"
	| "CONCEPT_RELIGION_BELIEFS"
	| "CONCEPT_RELIGION_PANTHEON_BELIEFS"
	| "CONCEPT_RELIGION_FOUNDER"
	| "CONCEPT_RELIGION_FOLLOWER"
	| "CONCEPT_RELIGION_ENHANCER"
	| "CONCEPT_RELIGION_FAITH_SPENDING"
	| "CONCEPT_RELIGION_FOUNDING_RELIGION"
	| "CONCEPT_RELIGION_ENHANCING_RELIGION"
	| "CONCEPT_RELIGION_SPREADING_RELIGION"
	| "CONCEPT_RELIGION_BUILDINGS"
	| "CONCEPT_RELIGION_UNITS"
	| "CONCEPT_RELIGION_MAJORITY"
	| "CONCEPT_RELIGION_DEFENDING"
	| "CONCEPT_CITY_STATE_RELIGIOUS"
	| "CONCEPT_CITY_STATE_MERCANTILE"
	| "CONCEPT_GREAT_ADMIRAL"
	| "CONCEPT_GREAT_ADMIRAL_ABILITY"
	| "CONCEPT_GREAT_ADMIRAL_ABILITY2"
	| "CONCEPT_GREAT_PROPHET"
	| "CONCEPT_GREAT_PROPHET_IMPROVEMENT"
	| "CONCEPT_GREAT_PROPHET_ABILITY"
	| "CONCEPT_CITY_STATE_BULLYING"
	| "CONCEPT_CITY_STATE_SPREAD_RELIGION"
	| "CONCEPT_RELIGION_CITY_STATE_SPREAD_RELIGION"
	| "CONCEPT_DIPLOMACY_EMBASSY";

declare type BNW_ContactsType =
	| "CONTACT_POLICY_PRESSURE"
	| "CONTACT_JOIN_WAR"
	| "CONTACT_STOP_TRADING"
	| "CONTACT_GIVE_HELP"
	| "CONTACT_ASK_FOR_HELP"
	| "CONTACT_DEMAND_TRIBUTE"
	| "CONTACT_OPEN_BORDERS"
	| "CONTACT_DEFENSIVE_PACT"
	| "CONTACT_PERMANENT_ALLIANCE"
	| "CONTACT_PEACE_TREATY"
	| "CONTACT_TRADE_TECH"
	| "CONTACT_TRADE_RESOURCE"
	| "CONTACT_TRADE_MAP";

declare type BNW_DomainsType =
	| "DOMAIN_SEA"
	| "DOMAIN_AIR"
	| "DOMAIN_LAND"
	| "DOMAIN_IMMOBILE"
	| "DOMAIN_HOVER";

declare type BNW_InvisibleInfosType =
	| "INVISIBLE_SUBMARINE";

declare type BNW_MajorCivApproachTypesType =
	| "MAJOR_CIV_APPROACH_WAR"
	| "MAJOR_CIV_APPROACH_HOSTILE"
	| "MAJOR_CIV_APPROACH_DECEPTIVE"
	| "MAJOR_CIV_APPROACH_GUARDED"
	| "MAJOR_CIV_APPROACH_AFRAID"
	| "MAJOR_CIV_APPROACH_FRIENDLY"
	| "MAJOR_CIV_APPROACH_NEUTRAL";

declare type BNW_MinorCivApproachTypesType =
	| "MINOR_CIV_APPROACH_IGNORE"
	| "MINOR_CIV_APPROACH_FRIENDLY"
	| "MINOR_CIV_APPROACH_PROTECTIVE"
	| "MINOR_CIV_APPROACH_CONQUEST"
	| "MINOR_CIV_APPROACH_BULLY";

declare type BNW_MinorCivTraitsType =
	| "MINOR_TRAIT_CULTURED"
	| "MINOR_TRAIT_MILITARISTIC"
	| "MINOR_TRAIT_MARITIME"
	| "MINOR_TRAIT_MERCANTILE"
	| "MINOR_TRAIT_RELIGIOUS";

declare type BNW_MonthsType =
	| "MONTH_JANUARY"
	| "MONTH_FEBRUARY"
	| "MONTH_MARCH"
	| "MONTH_APRIL"
	| "MONTH_MAY"
	| "MONTH_JUNE"
	| "MONTH_JULY"
	| "MONTH_AUGUST"
	| "MONTH_SEPTEMBER"
	| "MONTH_OCTOBER"
	| "MONTH_NOVEMBER"
	| "MONTH_DECEMBER";

declare type BNW_SeasonsType =
	| "SEASON_WINTER"
	| "SEASON_SPRING"
	| "SEASON_SUMMER"
	| "SEASON_FALL";

declare type BNW_UnitAIInfosType =
	| "UNITAI_UNKNOWN"
	| "UNITAI_SETTLE"
	| "UNITAI_WORKER"
	| "UNITAI_ATTACK"
	| "UNITAI_CITY_BOMBARD"
	| "UNITAI_FAST_ATTACK"
	| "UNITAI_DEFENSE"
	| "UNITAI_COUNTER"
	| "UNITAI_RANGED"
	| "UNITAI_CITY_SPECIAL"
	| "UNITAI_EXPLORE"
	| "UNITAI_ARTIST"
	| "UNITAI_SCIENTIST"
	| "UNITAI_GENERAL"
	| "UNITAI_MERCHANT"
	| "UNITAI_ENGINEER"
	| "UNITAI_ICBM"
	| "UNITAI_WORKER_SEA"
	| "UNITAI_ATTACK_SEA"
	| "UNITAI_RESERVE_SEA"
	| "UNITAI_ESCORT_SEA"
	| "UNITAI_EXPLORE_SEA"
	| "UNITAI_ASSAULT_SEA"
	| "UNITAI_SETTLER_SEA"
	| "UNITAI_CARRIER_SEA"
	| "UNITAI_MISSILE_CARRIER_SEA"
	| "UNITAI_PIRATE_SEA"
	| "UNITAI_ATTACK_AIR"
	| "UNITAI_DEFENSE_AIR"
	| "UNITAI_CARRIER_AIR"
	| "UNITAI_MISSILE_AIR"
	| "UNITAI_PARADROP"
	| "UNITAI_SPACESHIP_PART"
	| "UNITAI_TREASURE"
	| "UNITAI_PROPHET"
	| "UNITAI_MISSIONARY"
	| "UNITAI_INQUISITOR"
	| "UNITAI_ADMIRAL"
	| "UNITAI_TRADE_UNIT"
	| "UNITAI_ARCHAEOLOGIST"
	| "UNITAI_WRITER"
	| "UNITAI_MUSICIAN";

declare type BNW_UnitCombatInfosType =
	| "UNITCOMBAT_RECON"
	| "UNITCOMBAT_ARCHER"
	| "UNITCOMBAT_MOUNTED"
	| "UNITCOMBAT_MELEE"
	| "UNITCOMBAT_SIEGE"
	| "UNITCOMBAT_GUN"
	| "UNITCOMBAT_ARMOR"
	| "UNITCOMBAT_HELICOPTER"
	| "UNITCOMBAT_NAVALRANGED"
	| "UNITCOMBAT_FIGHTER"
	| "UNITCOMBAT_BOMBER"
	| "UNITCOMBAT_NAVALMELEE"
	| "UNITCOMBAT_SUBMARINE"
	| "UNITCOMBAT_CARRIER";

declare type BNW_MinorCivilizationsType =
	| "MINOR_CIV_BRATISLAVA"
	| "MINOR_CIV_BUDAPEST"
	| "MINOR_CIV_GENEVA"
	| "MINOR_CIV_RIGA"
	| "MINOR_CIV_GENOA"
	| "MINOR_CIV_FLORENCE"
	| "MINOR_CIV_RAGUSA"
	| "MINOR_CIV_SYDNEY"
	| "MINOR_CIV_QUEBEC_CITY"
	| "MINOR_CIV_BUCHAREST"
	| "MINOR_CIV_BELGRADE"
	| "MINOR_CIV_BRUSSELS"
	| "MINOR_CIV_MONACO"
	| "MINOR_CIV_KATHMANDU"
	| "MINOR_CIV_HANOI"
	| "MINOR_CIV_LHASA"
	| "MINOR_CIV_ALMATY"
	| "MINOR_CIV_KUALA_LUMPUR"
	| "MINOR_CIV_SINGAPORE"
	| "MINOR_CIV_PANAMA_CITY"
	| "MINOR_CIV_CAPE_TOWN"
	| "MINOR_CIV_SIDON"
	| "MINOR_CIV_TYRE"
	| "MINOR_CIV_ANTWERP"
	| "MINOR_CIV_CAHOKIA"
	| "MINOR_CIV_COLOMBO"
	| "MINOR_CIV_HONG_KONG"
	| "MINOR_CIV_ORMUS"
	| "MINOR_CIV_JERUSALEM"
	| "MINOR_CIV_LA_VENTA"
	| "MINOR_CIV_VANCOUVER"
	| "MINOR_CIV_MANILA"
	| "MINOR_CIV_ANTANANARIVO"
	| "MINOR_CIV_MILAN"
	| "MINOR_CIV_MOMBASA"
	| "MINOR_CIV_PRAGUE"
	| "MINOR_CIV_VALLETTA"
	| "MINOR_CIV_VATICAN_CITY"
	| "MINOR_CIV_WITTENBERG"
	| "MINOR_CIV_YEREVAN"
	| "MINOR_CIV_ZANZIBAR"
	| "MINOR_CIV_ZURICH"
	| "MINOR_CIV_SAMARKAND"
	| "MINOR_CIV_MALACCA"
	| "MINOR_CIV_MOGADISHU"
	| "MINOR_CIV_BYBLOS"
	| "MINOR_CIV_KYZYL"
	| "MINOR_CIV_IFE"
	| "MINOR_CIV_KIEV"
	| "MINOR_CIV_BUENOS_AIRES"
	| "MINOR_CIV_MBANZA_KONGO"
	| "MINOR_CIV_KABUL"
	| "MINOR_CIV_SOFIA"
	| "MINOR_CIV_UR"
	| "MINOR_CIV_MELBOURNE"
	| "MINOR_CIV_BOGOTA"
	| "MINOR_CIV_VILNIUS"
	| "MINOR_CIV_WELLINGTON";

declare type BNW_RegionsType =
	| "REGION_UNDEFINED"
	| "REGION_TUNDRA"
	| "REGION_JUNGLE"
	| "REGION_FOREST"
	| "REGION_DESERT"
	| "REGION_HILLS"
	| "REGION_PLAINS"
	| "REGION_GRASS"
	| "REGION_HYBRID";

declare type BNW_ArtStyleTypesType =
	| "ARTSTYLE_SOUTH_AMERICA"
	| "ARTSTYLE_ASIAN"
	| "ARTSTYLE_MIDDLE_EAST"
	| "ARTSTYLE_EUROPEAN"
	| "ARTSTYLE_GRECO_ROMAN"
	| "ARTSTYLE_POLYNESIAN"
	| "ARTSTYLE_BARBARIAN";

declare type BNW_ClimatesType =
	| "CLIMATE_TEMPERATE"
	| "CLIMATE_TROPICAL"
	| "CLIMATE_ARID"
	| "CLIMATE_ROCKY"
	| "CLIMATE_COLD";

declare type BNW_CultureLevelsType =
	| "CULTURELEVEL_NONE"
	| "CULTURELEVEL_POOR"
	| "CULTURELEVEL_FLEDGLING"
	| "CULTURELEVEL_DEVELOPING"
	| "CULTURELEVEL_REFINED"
	| "CULTURELEVEL_INFLUENTIAL"
	| "CULTURELEVEL_LEGENDARY";

declare type BNW_CursorsType =
	| "CURSOR_DEFAULT"
	| "CURSOR_BUSY"
	| "CURSOR_PING"
	| "CURSOR_GO_TO"
	| "CURSOR_ROUTE_TO"
	| "CURSOR_AIRLIFT"
	| "CURSOR_NUKE"
	| "CURSOR_AIRSTRIKE"
	| "CURSOR_RECON"
	| "CURSOR_PARADROP"
	| "CURSOR_AIRBOMB"
	| "CURSOR_REBASE"
	| "CURSOR_MOVE"
	| "CURSOR_SPLITV"
	| "CURSOR_SPLITH"
	| "CURSOR_SIZEV"
	| "CURSOR_SIZEH"
	| "CURSOR_SIZENE"
	| "CURSOR_SIZENW"
	| "CURSOR_SIZEALL"
	| "CURSOR_LINK"
	| "CURSOR_GRIP"
	| "CURSOR_EDIT"
	| "CURSOR_GOLD"
	| "CURSOR_GIFT";

declare type BNW_EmphasizeInfosType =
	| "EMPHASIZE_FOOD"
	| "EMPHASIZE_PRODUCTION"
	| "EMPHASIZE_RESEARCH"
	| "EMPHASIZE_GREAT_PEOPLE"
	| "EMPHASIZE_AVOID_GROWTH";

declare type BNW_ErasType =
	| "ERA_ANCIENT"
	| "ERA_CLASSICAL"
	| "ERA_MEDIEVAL"
	| "ERA_RENAISSANCE"
	| "ERA_INDUSTRIAL"
	| "ERA_MODERN"
	| "ERA_POSTMODERN"
	| "ERA_FUTURE";

declare type BNW_FlavorsType =
	| "FLAVOR_OFFENSE"
	| "FLAVOR_DEFENSE"
	| "FLAVOR_CITY_DEFENSE"
	| "FLAVOR_MILITARY_TRAINING"
	| "FLAVOR_RECON"
	| "FLAVOR_RANGED"
	| "FLAVOR_MOBILE"
	| "FLAVOR_NAVAL"
	| "FLAVOR_NAVAL_RECON"
	| "FLAVOR_NAVAL_GROWTH"
	| "FLAVOR_NAVAL_TILE_IMPROVEMENT"
	| "FLAVOR_AIR"
	| "FLAVOR_EXPANSION"
	| "FLAVOR_GROWTH"
	| "FLAVOR_TILE_IMPROVEMENT"
	| "FLAVOR_INFRASTRUCTURE"
	| "FLAVOR_PRODUCTION"
	| "FLAVOR_GOLD"
	| "FLAVOR_SCIENCE"
	| "FLAVOR_CULTURE"
	| "FLAVOR_HAPPINESS"
	| "FLAVOR_GREAT_PEOPLE"
	| "FLAVOR_WONDER"
	| "FLAVOR_RELIGION"
	| "FLAVOR_DIPLOMACY"
	| "FLAVOR_SPACESHIP"
	| "FLAVOR_WATER_CONNECTION"
	| "FLAVOR_NUKE"
	| "FLAVOR_ANTIAIR"
	| "FLAVOR_USE_NUKE"
	| "FLAVOR_ESPIONAGE"
	| "FLAVOR_AIR_CARRIER"
	| "FLAVOR_I_LAND_TRADE_ROUTE"
	| "FLAVOR_I_SEA_TRADE_ROUTE"
	| "FLAVOR_ARCHAEOLOGY"
	| "FLAVOR_I_TRADE_ORIGIN"
	| "FLAVOR_I_TRADE_DESTINATION"
	| "FLAVOR_AIRLIFT";

declare type BNW_GameOptionsType =
	| "GAMEOPTION_NO_CITY_RAZING"
	| "GAMEOPTION_NO_BARBARIANS"
	| "GAMEOPTION_RAGING_BARBARIANS"
	| "GAMEOPTION_ALWAYS_WAR"
	| "GAMEOPTION_ALWAYS_PEACE"
	| "GAMEOPTION_ONE_CITY_CHALLENGE"
	| "GAMEOPTION_NO_CHANGING_WAR_PEACE"
	| "GAMEOPTION_NEW_RANDOM_SEED"
	| "GAMEOPTION_LOCK_MODS"
	| "GAMEOPTION_COMPLETE_KILLS"
	| "GAMEOPTION_NO_GOODY_HUTS"
	| "GAMEOPTION_RANDOM_PERSONALITIES"
	| "GAMEOPTION_POLICY_SAVING"
	| "GAMEOPTION_PROMOTION_SAVING"
	| "GAMEOPTION_END_TURN_TIMER_ENABLED"
	| "GAMEOPTION_SIMULTANEOUS_TURNS"
	| "GAMEOPTION_DYNAMIC_TURNS"
	| "GAMEOPTION_PITBOSS"
	| "GAMEOPTION_QUICK_COMBAT"
	| "GAMEOPTION_DISABLE_START_BIAS"
	| "GAMEOPTION_NO_SCIENCE"
	| "GAMEOPTION_NO_POLICIES"
	| "GAMEOPTION_NO_HAPPINESS"
	| "GAMEOPTION_NO_TUTORIAL"
	| "GAMEOPTION_QUICK_MOVEMENT"
	| "GAMEOPTION_NO_LEAGUES"
	| "GAMEOPTION_NO_CULTURE_OVERVIEW_UI"
	| "GAMEOPTION_NO_RELIGION"
	| "GAMEOPTION_NO_ESPIONAGE";

declare type BNW_GameSpeedsType =
	| "GAMESPEED_MARATHON"
	| "GAMESPEED_EPIC"
	| "GAMESPEED_STANDARD"
	| "GAMESPEED_QUICK";

declare type BNW_HandicapInfosType =
	| "HANDICAP_SETTLER"
	| "HANDICAP_CHIEFTAIN"
	| "HANDICAP_WARLORD"
	| "HANDICAP_PRINCE"
	| "HANDICAP_KING"
	| "HANDICAP_EMPEROR"
	| "HANDICAP_IMMORTAL"
	| "HANDICAP_DEITY"
	| "HANDICAP_AI_DEFAULT";

declare type BNW_HurryInfosType =
	| "HURRY_POPULATION"
	| "HURRY_GOLD";

declare type BNW_MultiplayerOptionsType =
	| "MPOPTION_TAKEOVER_AI"
	| "MPOPTION_SHUFFLE_TEAMS"
	| "MPOPTION_ANONYMOUS"
	| "MPOPTION_TURN_TIMER";

declare type BNW_PlayerOptionsType =
	| "PLAYEROPTION_WAIT_END_TURN"
	| "PLAYEROPTION_SHOW_FRIENDLY_MOVES"
	| "PLAYEROPTION_SHOW_ENEMY_MOVES"
	| "PLAYEROPTION_QUICK_MOVES"
	| "PLAYEROPTION_START_AUTOMATED"
	| "PLAYEROPTION_SAFE_AUTOMATION"
	| "PLAYEROPTION_NO_UNIT_CYCLING"
	| "PLAYEROPTION_LEAVE_FORESTS"
	| "PLAYEROPTION_MODDER_1"
	| "PLAYEROPTION_MODDER_2"
	| "PLAYEROPTION_MODDER_3"
	| "PLAYEROPTION_QUICK_SELECTION_ADVANCE";

declare type BNW_PoliciesType =
	| "POLICY_LIBERTY"
	| "POLICY_COLLECTIVE_RULE"
	| "POLICY_CITIZENSHIP"
	| "POLICY_REPUBLIC"
	| "POLICY_REPRESENTATION"
	| "POLICY_MERITOCRACY"
	| "POLICY_TRADITION"
	| "POLICY_ARISTOCRACY"
	| "POLICY_OLIGARCHY"
	| "POLICY_LEGALISM"
	| "POLICY_LANDED_ELITE"
	| "POLICY_MONARCHY"
	| "POLICY_HONOR"
	| "POLICY_WARRIOR_CODE"
	| "POLICY_DISCIPLINE"
	| "POLICY_MILITARY_TRADITION"
	| "POLICY_MILITARY_CASTE"
	| "POLICY_PROFESSIONAL_ARMY"
	| "POLICY_PIETY"
	| "POLICY_ORGANIZED_RELIGION"
	| "POLICY_MANDATE_OF_HEAVEN"
	| "POLICY_THEOCRACY"
	| "POLICY_REFORMATION"
	| "POLICY_FREE_RELIGION"
	| "POLICY_PATRONAGE"
	| "POLICY_PHILANTHROPY"
	| "POLICY_CONSULATES"
	| "POLICY_SCHOLASTICISM"
	| "POLICY_CULTURAL_DIPLOMACY"
	| "POLICY_MERCHANT_CONFEDERACY"
	| "POLICY_COMMERCE"
	| "POLICY_TRADE_UNIONS"
	| "POLICY_ENTREPRENEURSHIP"
	| "POLICY_MERCANTILISM"
	| "POLICY_CARAVANS"
	| "POLICY_PROTECTIONISM"
	| "POLICY_RATIONALISM"
	| "POLICY_SECULARISM"
	| "POLICY_HUMANISM"
	| "POLICY_FREE_THOUGHT"
	| "POLICY_SOVEREIGNTY"
	| "POLICY_SCIENTIFIC_REVOLUTION"
	| "POLICY_TRADITION_FINISHER"
	| "POLICY_LIBERTY_FINISHER"
	| "POLICY_HONOR_FINISHER"
	| "POLICY_PIETY_FINISHER"
	| "POLICY_PATRONAGE_FINISHER"
	| "POLICY_COMMERCE_FINISHER"
	| "POLICY_RATIONALISM_FINISHER"
	| "POLICY_AESTHETICS"
	| "POLICY_CULTURAL_CENTERS"
	| "POLICY_FINE_ARTS"
	| "POLICY_FLOURISHING_OF_ARTS"
	| "POLICY_ARTISTIC_GENIUS"
	| "POLICY_ETHICS"
	| "POLICY_AESTHETICS_FINISHER"
	| "POLICY_EXPLORATION"
	| "POLICY_MARITIME_INFRASTRUCTURE"
	| "POLICY_NAVAL_TRADITION"
	| "POLICY_MERCHANT_NAVY"
	| "POLICY_NAVIGATION_SCHOOL"
	| "POLICY_TREASURE_FLEETS"
	| "POLICY_EXPLORATION_FINISHER"
	| "POLICY_OPEN_SOCIETY"
	| "POLICY_CREATIVE_EXPRESSION"
	| "POLICY_CIVIL_SOCIETY"
	| "POLICY_VOLUNTEER_ARMY"
	| "POLICY_COVERT_ACTION"
	| "POLICY_URBANIZATION"
	| "POLICY_CAPITALISM"
	| "POLICY_ECONOMIC_UNION"
	| "POLICY_THEIR_FINEST_HOUR"
	| "POLICY_UNIVERSAL_SUFFRAGE"
	| "POLICY_NEW_DEAL"
	| "POLICY_ARSENAL_DEMOCRACY"
	| "POLICY_MEDIA_CULTURE"
	| "POLICY_TREATY_ORGANIZATION"
	| "POLICY_SPACE_PROCUREMENTS"
	| "POLICY_HERO_OF_THE_PEOPLE"
	| "POLICY_SOCIALIST_REALISM"
	| "POLICY_SKYSCRAPERS"
	| "POLICY_PATRIOTIC_WAR"
	| "POLICY_DOUBLE_AGENTS"
	| "POLICY_YOUNG_PIONEERS"
	| "POLICY_ACADEMY_SCIENCES"
	| "POLICY_PARTY_LEADERSHIP"
	| "POLICY_RESETTLEMENT"
	| "POLICY_CULTURAL_REVOLUTION"
	| "POLICY_WORKERS_FACULTIES"
	| "POLICY_FIVE_YEAR_PLAN"
	| "POLICY_DICTATORSHIP_PROLETARIAT"
	| "POLICY_IRON_CURTAIN"
	| "POLICY_SPACEFLIGHT_PIONEERS"
	| "POLICY_ELITE_FORCES"
	| "POLICY_MOBILIZATION"
	| "POLICY_UNITED_FRONT"
	| "POLICY_FUTURISM"
	| "POLICY_INDUSTRIAL_ESPIONAGE"
	| "POLICY_MILITARISM"
	| "POLICY_FORTIFIED_BORDERS"
	| "POLICY_LIGHTNING_WARFARE"
	| "POLICY_POLICE_STATE"
	| "POLICY_NATIONALISM"
	| "POLICY_THIRD_ALTERNATIVE"
	| "POLICY_TOTAL_WAR"
	| "POLICY_CULT_PERSONALITY"
	| "POLICY_GUNBOAT_DIPLOMACY"
	| "POLICY_NEW_ORDER"
	| "POLICY_UNIVERSAL_HEALTHCARE_F"
	| "POLICY_UNIVERSAL_HEALTHCARE_O"
	| "POLICY_UNIVERSAL_HEALTHCARE_A";

declare type BNW_PolicyBranchTypesType =
	| "POLICY_BRANCH_TRADITION"
	| "POLICY_BRANCH_LIBERTY"
	| "POLICY_BRANCH_HONOR"
	| "POLICY_BRANCH_PIETY"
	| "POLICY_BRANCH_PATRONAGE"
	| "POLICY_BRANCH_AESTHETICS"
	| "POLICY_BRANCH_COMMERCE"
	| "POLICY_BRANCH_EXPLORATION"
	| "POLICY_BRANCH_RATIONALISM"
	| "POLICY_BRANCH_FREEDOM"
	| "POLICY_BRANCH_ORDER"
	| "POLICY_BRANCH_AUTOCRACY";

declare type BNW_ProcessesType =
	| "PROCESS_WEALTH"
	| "PROCESS_RESEARCH"
	| "PROCESS_WORLD_FAIR"
	| "PROCESS_WORLD_GAMES"
	| "PROCESS_INTERNATIONAL_SPACE_STATION";

declare type BNW_ProjectsType =
	| "PROJECT_MANHATTAN_PROJECT"
	| "PROJECT_APOLLO_PROGRAM"
	| "PROJECT_SS_COCKPIT"
	| "PROJECT_SS_STASIS_CHAMBER"
	| "PROJECT_SS_ENGINE"
	| "PROJECT_SS_BOOSTER";

declare type BNW_ReplayDataSetsType =
	| "REPLAYDATASET_SCORE"
	| "REPLAYDATASET_PRODUCTIONPERTURN"
	| "REPLAYDATASET_TOTALGOLD"
	| "REPLAYDATASET_GOLDPERTURN"
	| "REPLAYDATASET_CITYCOUNT"
	| "REPLAYDATASET_TECHSKNOWN"
	| "REPLAYDATASET_SCIENCEPERTURN"
	| "REPLAYDATASET_TOTALCULTURE"
	| "REPLAYDATASET_CULTUREPERTURN"
	| "REPLAYDATASET_EXCESSHAPINESS"
	| "REPLAYDATASET_HAPPINESS"
	| "REPLAYDATASET_UNHAPPINESS"
	| "REPLAYDATASET_GOLDENAGETURNS"
	| "REPLAYDATASET_POPULATION"
	| "REPLAYDATASET_FOODPERTURN"
	| "REPLAYDATASET_TOTALLAND"
	| "REPLAYDATASET_GPTCITYCONNECTIONS"
	| "REPLAYDATASET_GPTDEALS"
	| "REPLAYDATASET_UNITMAINTENANCE"
	| "REPLAYDATASET_BUILDINGMAINTENANCE"
	| "REPLAYDATASET_IMPROVEMENTMAINTENANCE"
	| "REPLAYDATASET_NUMBEROFPOLICIES"
	| "REPLAYDATASET_NUMBEROFWORKERS"
	| "REPLAYDATASET_IMPROVEDTILES"
	| "REPLAYDATASET_WORKEDTILES"
	| "REPLAYDATASET_MILITARYMIGHT";

declare type BNW_SeaLevelsType =
	| "SEALEVEL_LOW"
	| "SEALEVEL_MEDIUM"
	| "SEALEVEL_HIGH";

declare type BNW_SpecialistsType =
	| "SPECIALIST_CITIZEN"
	| "SPECIALIST_WRITER"
	| "SPECIALIST_ARTIST"
	| "SPECIALIST_MUSICIAN"
	| "SPECIALIST_SCIENTIST"
	| "SPECIALIST_MERCHANT"
	| "SPECIALIST_ENGINEER";

declare type BNW_TradesType =
	| "TRADE_GOLD"
	| "TRADE_RESEARCH"
	| "TRADE_CULTURE";

declare type BNW_TurnTimersType =
	| "TURNTIMER_STATIC"
	| "TURNTIMER_SNAIL"
	| "TURNTIMER_SLOW"
	| "TURNTIMER_MEDIUM"
	| "TURNTIMER_FAST"
	| "TURNTIMER_BLAZING";

declare type BNW_VictoriesType =
	| "VICTORY_TIME"
	| "VICTORY_SPACE_RACE"
	| "VICTORY_DOMINATION"
	| "VICTORY_CULTURAL"
	| "VICTORY_DIPLOMATIC";

declare type BNW_VoteSourcesType =
	| "DIPLOVOTE_UN"
	| "DIPLOVOTE_POPE";

declare type BNW_VotesType =
	| "VOTE_SECRETARY_GENERAL";

declare type BNW_WorldsType =
	| "WORLDSIZE_DUEL"
	| "WORLDSIZE_TINY"
	| "WORLDSIZE_SMALL"
	| "WORLDSIZE_STANDARD"
	| "WORLDSIZE_LARGE"
	| "WORLDSIZE_HUGE";

declare type BNW_InterfaceModesType =
	| "INTERFACEMODE_DEBUG"
	| "INTERFACEMODE_SELECTION"
	| "INTERFACEMODE_PING"
	| "INTERFACEMODE_MOVE_TO"
	| "INTERFACEMODE_MOVE_TO_TYPE"
	| "INTERFACEMODE_MOVE_TO_ALL"
	| "INTERFACEMODE_ROUTE_TO"
	| "INTERFACEMODE_AIRLIFT"
	| "INTERFACEMODE_NUKE"
	| "INTERFACEMODE_PARADROP"
	| "INTERFACEMODE_ATTACK"
	| "INTERFACEMODE_RANGE_ATTACK"
	| "INTERFACEMODE_AIRSTRIKE"
	| "INTERFACEMODE_AIR_SWEEP"
	| "INTERFACEMODE_REBASE"
	| "INTERFACEMODE_PLACE_UNIT"
	| "INTERFACEMODE_EMBARK"
	| "INTERFACEMODE_DISEMBARK"
	| "INTERFACEMODE_GIFT_UNIT"
	| "INTERFACEMODE_CITY_PLOT_SELECTION"
	| "INTERFACEMODE_PURCHASE_PLOT"
	| "INTERFACEMODE_CITY_RANGE_ATTACK";

declare type BNW_RoutesType =
	| "ROUTE_ROAD"
	| "ROUTE_RAILROAD";

declare type BNW_TechnologiesType =
	| "TECH_AGRICULTURE"
	| "TECH_POTTERY"
	| "TECH_ANIMAL_HUSBANDRY"
	| "TECH_ARCHERY"
	| "TECH_MINING"
	| "TECH_SAILING"
	| "TECH_CALENDAR"
	| "TECH_WRITING"
	| "TECH_TRAPPING"
	| "TECH_THE_WHEEL"
	| "TECH_MASONRY"
	| "TECH_BRONZE_WORKING"
	| "TECH_OPTICS"
	| "TECH_HORSEBACK_RIDING"
	| "TECH_MATHEMATICS"
	| "TECH_CONSTRUCTION"
	| "TECH_PHILOSOPHY"
	| "TECH_DRAMA"
	| "TECH_CURRENCY"
	| "TECH_ENGINEERING"
	| "TECH_IRON_WORKING"
	| "TECH_THEOLOGY"
	| "TECH_CIVIL_SERVICE"
	| "TECH_GUILDS"
	| "TECH_METAL_CASTING"
	| "TECH_COMPASS"
	| "TECH_EDUCATION"
	| "TECH_CHIVALRY"
	| "TECH_MACHINERY"
	| "TECH_PHYSICS"
	| "TECH_STEEL"
	| "TECH_ASTRONOMY"
	| "TECH_ACOUSTICS"
	| "TECH_BANKING"
	| "TECH_PRINTING_PRESS"
	| "TECH_GUNPOWDER"
	| "TECH_NAVIGATION"
	| "TECH_ARCHITECTURE"
	| "TECH_ECONOMICS"
	| "TECH_METALLURGY"
	| "TECH_CHEMISTRY"
	| "TECH_ARCHAEOLOGY"
	| "TECH_SCIENTIFIC_THEORY"
	| "TECH_INDUSTRIALIZATION"
	| "TECH_RIFLING"
	| "TECH_MILITARY_SCIENCE"
	| "TECH_FERTILIZER"
	| "TECH_BIOLOGY"
	| "TECH_ELECTRICITY"
	| "TECH_STEAM_POWER"
	| "TECH_DYNAMITE"
	| "TECH_REFRIGERATION"
	| "TECH_RADIO"
	| "TECH_REPLACEABLE_PARTS"
	| "TECH_FLIGHT"
	| "TECH_RAILROAD"
	| "TECH_PLASTIC"
	| "TECH_ELECTRONICS"
	| "TECH_BALLISTICS"
	| "TECH_COMBUSTION"
	| "TECH_PENICILIN"
	| "TECH_ATOMIC_THEORY"
	| "TECH_RADAR"
	| "TECH_COMBINED_ARMS"
	| "TECH_ECOLOGY"
	| "TECH_NUCLEAR_FISSION"
	| "TECH_ROCKETRY"
	| "TECH_COMPUTERS"
	| "TECH_TELECOM"
	| "TECH_MOBILE_TACTICS"
	| "TECH_ADVANCED_BALLISTICS"
	| "TECH_SATELLITES"
	| "TECH_ROBOTICS"
	| "TECH_LASERS"
	| "TECH_INTERNET"
	| "TECH_GLOBALIZATION"
	| "TECH_PARTICLE_PHYSICS"
	| "TECH_NUCLEAR_FUSION"
	| "TECH_NANOTECHNOLOGY"
	| "TECH_STEALTH"
	| "TECH_FUTURE_TECH";

declare type BNW_FeaturesType =
	| "FEATURE_ICE"
	| "FEATURE_JUNGLE"
	| "FEATURE_MARSH"
	| "FEATURE_OASIS"
	| "FEATURE_FLOOD_PLAINS"
	| "FEATURE_FOREST"
	| "FEATURE_FALLOUT"
	| "FEATURE_CRATER"
	| "FEATURE_FUJI"
	| "FEATURE_MESA"
	| "FEATURE_REEF"
	| "FEATURE_VOLCANO"
	| "FEATURE_GIBRALTAR"
	| "FEATURE_GEYSER"
	| "FEATURE_FOUNTAIN_YOUTH"
	| "FEATURE_POTOSI"
	| "FEATURE_EL_DORADO"
	| "FEATURE_ATOLL"
	| "FEATURE_LAKE_VICTORIA"
	| "FEATURE_KILIMANJARO"
	| "FEATURE_SOLOMONS_MINES"
	| "FEATURE_SRI_PADA"
	| "FEATURE_MT_SINAI"
	| "FEATURE_MT_KAILASH"
	| "FEATURE_ULURU";

declare type BNW_FakeFeaturesType =
	| "FEATURE_LAKE"
	| "FEATURE_RIVER";

declare type BNW_Natural_Wonder_PlacementType =
	| "FEATURE_CRATER"
	| "FEATURE_FUJI"
	| "FEATURE_MESA"
	| "FEATURE_REEF"
	| "FEATURE_VOLCANO"
	| "FEATURE_GIBRALTAR"
	| "FEATURE_GEYSER"
	| "FEATURE_FOUNTAIN_YOUTH"
	| "FEATURE_POTOSI"
	| "FEATURE_EL_DORADO"
	| "FEATURE_LAKE_VICTORIA"
	| "FEATURE_KILIMANJARO"
	| "FEATURE_SOLOMONS_MINES"
	| "FEATURE_SRI_PADA"
	| "FEATURE_MT_SINAI"
	| "FEATURE_MT_KAILASH"
	| "FEATURE_ULURU";

declare type BNW_ResourceClassesType =
	| "RESOURCECLASS_BONUS"
	| "RESOURCECLASS_LUXURY"
	| "RESOURCECLASS_RUSH"
	| "RESOURCECLASS_MODERN";

declare type BNW_ResourcesType =
	| "RESOURCE_IRON"
	| "RESOURCE_HORSE"
	| "RESOURCE_COAL"
	| "RESOURCE_OIL"
	| "RESOURCE_ALUMINUM"
	| "RESOURCE_URANIUM"
	| "RESOURCE_WHEAT"
	| "RESOURCE_COW"
	| "RESOURCE_SHEEP"
	| "RESOURCE_DEER"
	| "RESOURCE_BANANA"
	| "RESOURCE_FISH"
	| "RESOURCE_STONE"
	| "RESOURCE_WHALE"
	| "RESOURCE_PEARLS"
	| "RESOURCE_GOLD"
	| "RESOURCE_SILVER"
	| "RESOURCE_GEMS"
	| "RESOURCE_MARBLE"
	| "RESOURCE_IVORY"
	| "RESOURCE_FUR"
	| "RESOURCE_DYE"
	| "RESOURCE_SPICES"
	| "RESOURCE_SILK"
	| "RESOURCE_SUGAR"
	| "RESOURCE_COTTON"
	| "RESOURCE_WINE"
	| "RESOURCE_INCENSE"
	| "RESOURCE_ARTIFACTS"
	| "RESOURCE_NUTMEG"
	| "RESOURCE_CLOVES"
	| "RESOURCE_PEPPER"
	| "RESOURCE_HIDDEN_ARTIFACTS"
	| "RESOURCE_BISON"
	| "RESOURCE_COCOA"
	| "RESOURCE_JEWELRY"
	| "RESOURCE_PORCELAIN"
	| "RESOURCE_COPPER"
	| "RESOURCE_SALT"
	| "RESOURCE_CRAB"
	| "RESOURCE_TRUFFLES"
	| "RESOURCE_CITRUS";

declare type BNW_TerrainsType =
	| "TERRAIN_GRASS"
	| "TERRAIN_PLAINS"
	| "TERRAIN_DESERT"
	| "TERRAIN_TUNDRA"
	| "TERRAIN_SNOW"
	| "TERRAIN_COAST"
	| "TERRAIN_OCEAN"
	| "TERRAIN_MOUNTAIN"
	| "TERRAIN_HILL";

declare type BNW_YieldsType =
	| "YIELD_FOOD"
	| "YIELD_PRODUCTION"
	| "YIELD_GOLD"
	| "YIELD_SCIENCE"
	| "YIELD_CULTURE"
	| "YIELD_FAITH";

declare type BNW_CommandsType =
	| "COMMAND_PROMOTION"
	| "COMMAND_UPGRADE"
	| "COMMAND_AUTOMATE"
	| "COMMAND_WAKE"
	| "COMMAND_CANCEL"
	| "COMMAND_CANCEL_ALL"
	| "COMMAND_STOP_AUTOMATION"
	| "COMMAND_DELETE"
	| "COMMAND_GIFT"
	| "COMMAND_HOTKEY";

declare type BNW_ControlsType =
	| "CONTROL_CENTERONSELECTION"
	| "CONTROL_SELECTYUNITTYPE"
	| "CONTROL_SELECTYUNITALL"
	| "CONTROL_SELECTCITY"
	| "CONTROL_SELECTCAPITAL"
	| "CONTROL_NEXTCITY"
	| "CONTROL_PREVCITY"
	| "CONTROL_NEXTUNIT"
	| "CONTROL_PREVUNIT"
	| "CONTROL_CYCLEUNIT"
	| "CONTROL_CYCLEUNIT_ALT"
	| "CONTROL_CYCLEWORKER"
	| "CONTROL_LASTUNIT"
	| "CONTROL_ENDTURN"
	| "CONTROL_ENDTURN_ALT"
	| "CONTROL_FORCEENDTURN"
	| "CONTROL_AUTOMOVES"
	| "CONTROL_PING"
	| "CONTROL_YIELDS"
	| "CONTROL_RESOURCE_ALL"
	| "CONTROL_UNIT_ICONS"
	| "CONTROL_SCORES"
	| "CONTROL_LOAD_GAME"
	| "CONTROL_OPTIONS_SCREEN"
	| "CONTROL_RETIRE"
	| "CONTROL_SAVE_GROUP"
	| "CONTROL_SAVE_NORMAL"
	| "CONTROL_QUICK_SAVE"
	| "CONTROL_QUICK_LOAD"
	| "CONTROL_CIVILOPEDIA"
	| "CONTROL_POLICIES_SCREEN"
	| "CONTROL_FOREIGN_SCREEN"
	| "CONTROL_MILITARY_SCREEN"
	| "CONTROL_TECH_CHOOSER"
	| "CONTROL_TURN_LOG"
	| "CONTROL_DOMESTIC_SCREEN"
	| "CONTROL_VICTORY_SCREEN"
	| "CONTROL_INFO"
	| "CONTROL_SELECT_HEALTHY"
	| "CONTROL_TOGGLE_STRATEGIC_VIEW"
	| "CONTROL_ADVISOR_COUNSEL"
	| "CONTROL_ESPIONAGE_OVERVIEW"
	| "CONTROL_RELIGION_OVERVIEW";

declare type BNW_MissionsType =
	| "MISSION_MOVE_TO"
	| "MISSION_ROUTE_TO"
	| "MISSION_MOVE_TO_UNIT"
	| "MISSION_SWAP_UNITS"
	| "MISSION_SKIP"
	| "MISSION_SLEEP"
	| "MISSION_ALERT"
	| "MISSION_FORTIFY"
	| "MISSION_GARRISON"
	| "MISSION_SET_UP_FOR_RANGED_ATTACK"
	| "MISSION_EMBARK"
	| "MISSION_DISEMBARK"
	| "MISSION_AIRPATROL"
	| "MISSION_HEAL"
	| "MISSION_AIRLIFT"
	| "MISSION_NUKE"
	| "MISSION_PARADROP"
	| "MISSION_AIR_SWEEP"
	| "MISSION_REBASE"
	| "MISSION_RANGE_ATTACK"
	| "MISSION_PILLAGE"
	| "MISSION_FOUND"
	| "MISSION_JOIN"
	| "MISSION_CONSTRUCT"
	| "MISSION_DISCOVER"
	| "MISSION_HURRY"
	| "MISSION_TRADE"
	| "MISSION_BUY_CITY_STATE"
	| "MISSION_REPAIR_FLEET"
	| "MISSION_SPACESHIP"
	| "MISSION_CULTURE_BOMB"
	| "MISSION_FOUND_RELIGION"
	| "MISSION_GOLDEN_AGE"
	| "MISSION_BUILD"
	| "MISSION_LEAD"
	| "MISSION_DIE_ANIMATION"
	| "MISSION_BEGIN_COMBAT"
	| "MISSION_END_COMBAT"
	| "MISSION_AIRSTRIKE"
	| "MISSION_SURRENDER"
	| "MISSION_CAPTURED"
	| "MISSION_IDLE"
	| "MISSION_DIE"
	| "MISSION_DAMAGE"
	| "MISSION_MULTI_SELECT"
	| "MISSION_MULTI_DESELECT"
	| "MISSION_WAIT_FOR"
	| "MISSION_SPREAD_RELIGION"
	| "MISSION_ENHANCE_RELIGION"
	| "MISSION_REMOVE_HERESY"
	| "MISSION_ESTABLISH_TRADE_ROUTE"
	| "MISSION_PLUNDER_TRADE_ROUTE"
	| "MISSION_ONE_SHOT_TOURISM"
	| "MISSION_CREATE_GREAT_WORK"
	| "MISSION_CHANGE_TRADE_UNIT_HOME_CITY"
	| "MISSION_SELL_EXOTIC_GOODS"
	| "MISSION_GIVE_POLICIES"
	| "MISSION_CHANGE_ADMIRAL_PORT";

declare type BNW_MultiUnitPositionsType =
	| "MUPOSITION_FRONT_LINE"
	| "MUPOSITION_BOMBARD"
	| "MUPOSITION_CIVILIAN_SUPPORT"
	| "MUPOSITION_NAVAL_ESCORT";

declare type BNW_MultiUnitFormationsType =
	| "MUFORMATION_BASIC_CITY_ATTACK_FORCE"
	| "MUFORMATION_CITY_STATE_ATTACK_FORCE"
	| "MUFORMATION_FAST_PILLAGERS"
	| "MUFORMATION_ANTI_BARBARIAN_TEAM"
	| "MUFORMATION_RAPID_RESPONSE_FORCE"
	| "MUFORMATION_CLOSE_CITY_DEFENSE"
	| "MUFORMATION_SETTLER_ESCORT"
	| "MUFORMATION_SMALL_CITY_ATTACK_FORCE"
	| "MUFORMATION_MERCHANT_ESCORT"
	| "MUFORMATION_NAVAL_SQUADRON"
	| "MUFORMATION_COLONIZATION_PARTY"
	| "MUFORMATION_QUICK_COLONY_SETTLER"
	| "MUFORMATION_NAVAL_INVASION"
	| "MUFORMATION_CITY_STATE_INVASION"
	| "MUFORMATION_NUKE_ATTACK"
	| "MUFORMATION_EARLY_RUSH"
	| "MUFORMATION_NAVAL_BOMBARDMENT"
	| "MUFORMATION_PURE_NAVAL_CITY_ATTACK"
	| "MUFORMATION_BIGGER_CITY_ATTACK_FORCE"
	| "MUFORMATION_CONCERT_TOUR";

declare type BNW_UnitClassesType =
	| "UNITCLASS_SETTLER"
	| "UNITCLASS_WORKER"
	| "UNITCLASS_WARRIOR"
	| "UNITCLASS_SCOUT"
	| "UNITCLASS_ARCHER"
	| "UNITCLASS_SPEARMAN"
	| "UNITCLASS_CHARIOT_ARCHER"
	| "UNITCLASS_SWORDSMAN"
	| "UNITCLASS_HORSEMAN"
	| "UNITCLASS_CATAPULT"
	| "UNITCLASS_KNIGHT"
	| "UNITCLASS_CROSSBOWMAN"
	| "UNITCLASS_PIKEMAN"
	| "UNITCLASS_TREBUCHET"
	| "UNITCLASS_LONGSWORDSMAN"
	| "UNITCLASS_MUSKETMAN"
	| "UNITCLASS_CANNON"
	| "UNITCLASS_LANCER"
	| "UNITCLASS_RIFLEMAN"
	| "UNITCLASS_CAVALRY"
	| "UNITCLASS_INFANTRY"
	| "UNITCLASS_ARTILLERY"
	| "UNITCLASS_TANK"
	| "UNITCLASS_ANTI_TANK_GUN"
	| "UNITCLASS_ANTI_AIRCRAFT_GUN"
	| "UNITCLASS_PARATROOPER"
	| "UNITCLASS_FIGHTER"
	| "UNITCLASS_BOMBER"
	| "UNITCLASS_ATOMIC_BOMB"
	| "UNITCLASS_ROCKET_ARTILLERY"
	| "UNITCLASS_MECHANIZED_INFANTRY"
	| "UNITCLASS_MODERN_ARMOR"
	| "UNITCLASS_HELICOPTER_GUNSHIP"
	| "UNITCLASS_MOBILE_SAM"
	| "UNITCLASS_GUIDED_MISSILE"
	| "UNITCLASS_JET_FIGHTER"
	| "UNITCLASS_STEALTH_BOMBER"
	| "UNITCLASS_NUCLEAR_MISSILE"
	| "UNITCLASS_MECH"
	| "UNITCLASS_WORKBOAT"
	| "UNITCLASS_GALLEY"
	| "UNITCLASS_TRIREME"
	| "UNITCLASS_CARAVEL"
	| "UNITCLASS_FRIGATE"
	| "UNITCLASS_IRONCLAD"
	| "UNITCLASS_DESTROYER"
	| "UNITCLASS_BATTLESHIP"
	| "UNITCLASS_SUBMARINE"
	| "UNITCLASS_CARRIER"
	| "UNITCLASS_NUCLEAR_SUBMARINE"
	| "UNITCLASS_MISSILE_CRUISER"
	| "UNITCLASS_ARTIST"
	| "UNITCLASS_SCIENTIST"
	| "UNITCLASS_MERCHANT"
	| "UNITCLASS_ENGINEER"
	| "UNITCLASS_GREAT_GENERAL"
	| "UNITCLASS_SS_COCKPIT"
	| "UNITCLASS_SS_STASIS_CHAMBER"
	| "UNITCLASS_SS_ENGINE"
	| "UNITCLASS_SS_BOOSTER"
	| "UNITCLASS_CARGO_SHIP"
	| "UNITCLASS_CARAVAN"
	| "UNITCLASS_WRITER"
	| "UNITCLASS_MUSICIAN"
	| "UNITCLASS_ARCHAEOLOGIST"
	| "UNITCLASS_BAZOOKA"
	| "UNITCLASS_XCOM_SQUAD"
	| "UNITCLASS_FOREIGNLEGION"
	| "UNITCLASS_LANDSKNECHT"
	| "UNITCLASS_PROPHET"
	| "UNITCLASS_MISSIONARY"
	| "UNITCLASS_COMPOSITE_BOWMAN"
	| "UNITCLASS_GATLINGGUN"
	| "UNITCLASS_GALLEASS"
	| "UNITCLASS_GREAT_WAR_INFANTRY"
	| "UNITCLASS_MARINE"
	| "UNITCLASS_TRIPLANE"
	| "UNITCLASS_WWI_BOMBER"
	| "UNITCLASS_WWI_TANK"
	| "UNITCLASS_MACHINE_GUN"
	| "UNITCLASS_PRIVATEER"
	| "UNITCLASS_INQUISITOR"
	| "UNITCLASS_GREAT_ADMIRAL";

declare type BNW_CivilianAttackPrioritiesType =
	| "NO_CIVILIAN_ATTACK_PRIORITY"
	| "CIVILIAN_ATTACK_PRIORITY_HIGH"
	| "CIVILIAN_ATTACK_PRIORITY_HIGH_EARLY_GAME_ONLY"
	| "CIVILIAN_ATTACK_PRIORITY_LOW";

declare type BNW_GreatWorkSlotsType =
	| "GREAT_WORK_SLOT_ART_ARTIFACT"
	| "GREAT_WORK_SLOT_LITERATURE"
	| "GREAT_WORK_SLOT_MUSIC";

declare type BNW_GreatWorkClassesType =
	| "GREAT_WORK_ART"
	| "GREAT_WORK_ARTIFACT"
	| "GREAT_WORK_LITERATURE"
	| "GREAT_WORK_MUSIC";

declare type BNW_GreatWorkArtifactClassesType =
	| "ARTIFACT_BATTLE_RANGED"
	| "ARTIFACT_BATTLE_MELEE"
	| "ARTIFACT_BARBARIAN_CAMP"
	| "ARTIFACT_ANCIENT_RUIN"
	| "ARTIFACT_RAZED_CITY"
	| "ARTIFACT_WRITING";

declare type BNW_GreatWorksType =
	| "GREAT_WORK_OTHER_ERA_ANCIENT_RUIN"
	| "GREAT_WORK_OTHER_ERA_BARBARIAN_CAMP"
	| "GREAT_WORK_OTHER_ERA_BATTLE_MELEE_1"
	| "GREAT_WORK_OTHER_ERA_BATTLE_MELEE_2"
	| "GREAT_WORK_OTHER_ERA_BATTLE_RANGED"
	| "GREAT_WORK_OTHER_ERA_RAZED_CITY"
	| "GREAT_WORK_ANCIENT_ERA_ANCIENT_RUIN"
	| "GREAT_WORK_ANCIENT_ERA_BARBARIAN_CAMP"
	| "GREAT_WORK_ANCIENT_ERA_BATTLE_MELEE_1"
	| "GREAT_WORK_ANCIENT_ERA_BATTLE_MELEE_2"
	| "GREAT_WORK_ANCIENT_ERA_BATTLE_RANGED"
	| "GREAT_WORK_ANCIENT_ERA_RAZED_CITY"
	| "GREAT_WORK_CLASSICAL_ERA_ANCIENT_RUIN"
	| "GREAT_WORK_CLASSICAL_ERA_BARBARIAN_CAMP"
	| "GREAT_WORK_CLASSICAL_ERA_BATTLE_MELEE_1"
	| "GREAT_WORK_CLASSICAL_ERA_BATTLE_MELEE_2"
	| "GREAT_WORK_CLASSICAL_ERA_BATTLE_RANGED"
	| "GREAT_WORK_CLASSICAL_ERA_RAZED_CITY"
	| "GREAT_WORK_MEDIEVAL_ERA_ANCIENT_RUIN"
	| "GREAT_WORK_MEDIEVAL_ERA_BARBARIAN_CAMP"
	| "GREAT_WORK_MEDIEVAL_ERA_BATTLE_MELEE_1"
	| "GREAT_WORK_MEDIEVAL_ERA_BATTLE_MELEE_2"
	| "GREAT_WORK_MEDIEVAL_ERA_BATTLE_RANGED"
	| "GREAT_WORK_MEDIEVAL_ERA_RAZED_CITY"
	| "GREAT_WORK_RENAISSANCE_ERA_ANCIENT_RUIN"
	| "GREAT_WORK_RENAISSANCE_ERA_BARBARIAN_CAMP"
	| "GREAT_WORK_RENAISSANCE_ERA_BATTLE_MELEE_1"
	| "GREAT_WORK_RENAISSANCE_ERA_BATTLE_MELEE_2"
	| "GREAT_WORK_RENAISSANCE_ERA_BATTLE_RANGED"
	| "GREAT_WORK_RENAISSANCE_ERA_RAZED_CITY"
	| "GREAT_WORK_ODYSSEY"
	| "GREAT_WORK_FABLES"
	| "GREAT_WORK_OEDIPUS"
	| "GREAT_WORK_LYSISTRATA"
	| "GREAT_WORK_AENEID"
	| "GREAT_WORK_METAMORPHOSES"
	| "GREAT_WORK_TRUE_STORY"
	| "GREAT_WORK_RUBAIYAT"
	| "GREAT_WORK_MASNAVI"
	| "GREAT_WORK_RAMAYAMA"
	| "GREAT_WORK_MAHABHARATA"
	| "GREAT_WORK_URUBHANGA"
	| "GREAT_WORK_ABHIJNANASAKUTALAM"
	| "GREAT_WORK_CHU_CI"
	| "GREAT_WORK_SHUIHU_ZHUAN"
	| "GREAT_WORK_JIN_PING_MEI"
	| "GREAT_WORK_HONG_LOU_MENG"
	| "GREAT_WORK_KOKIN_WAKASHU"
	| "GREAT_WORK_GENJI_MONOGATARI"
	| "GREAT_WORK_TSUREZUREGUSA"
	| "GREAT_WORK_SHINJUTEN_NO_AMIJIMA"
	| "GREAT_WORK_UGETSU_MONOGATARI"
	| "GREAT_WORK_WAGAHAI_WA_NEKO"
	| "GREAT_WORK_EL_INGENIOSO"
	| "GREAT_WORK_MARIA"
	| "GREAT_WORK_MARTIN_FIERRO"
	| "GREAT_WORK_AZUL"
	| "GREAT_WORK_GIRART_DE_VIENNE"
	| "GREAT_WORK_LA_VIE_DE_GARGANTUA"
	| "GREAT_WORK_CANDIDE_OU_LOPTIMISME"
	| "GREAT_WORK_LES_TROIS_MOUSQUETAIRES"
	| "GREAT_WORK_LES_MISERABLES"
	| "GREAT_WORK_VIGNT_MILLE_LIEUES"
	| "GREAT_WORK_A_LA_RECHERCHE"
	| "GREAT_WORK_DIVINA_COMMEDIA"
	| "GREAT_WORK_IL_CANZONIERE"
	| "GREAT_WORK_ORLANDO_FURIOSO"
	| "GREAT_WORK_SAUL"
	| "GREAT_WORK_DIE_RAUBER"
	| "GREAT_WORK_FAUST"
	| "GREAT_WORK_REVIZOR"
	| "GREAT_WORK_PRESTIPLENIYE"
	| "GREAT_WORK_VOYNA_I_MIR"
	| "GREAT_WORK_CHAYKA"
	| "GREAT_WORK_NA_DNE"
	| "GREAT_WORK_CANTERBURY_TALES"
	| "GREAT_WORK_LE_MORTE_DARTHUR"
	| "GREAT_WORK_THE_FAERIE_QUEENE"
	| "GREAT_WORK_MACBETH"
	| "GREAT_WORK_PRIDE_AND_PREJUDICE"
	| "GREAT_WORK_FRANKENSTEIN"
	| "GREAT_WORK_A_CHRISTMAS_CAROL"
	| "GREAT_WORK_ALICES_ADVANTURES"
	| "GREAT_WORK_BARRACK_ROOM_BALLADS"
	| "GREAT_WORK_THE_TIME_MACHINE"
	| "GREAT_WORK_THE_SIGN_OF_THE_FOUR"
	| "GREAT_WORK_LADY_CHATTERLEYS_LOVER"
	| "GREAT_WORK_THE_SKETCH_BOOK"
	| "GREAT_WORK_THE_LAST_OF_THE_MOHICANS"
	| "GREAT_WORK_THE_RAVEN"
	| "GREAT_WORK_TWICE_TOLD_TALE"
	| "GREAT_WORK_MOBY_DICK"
	| "GREAT_WORK_UNCLE_TOMS_CABIN"
	| "GREAT_WORK_WALDEN"
	| "GREAT_WORK_LEAVES_OF_GRASS"
	| "GREAT_WORK_ADVENTURES_OF_HUCKLEBERRY"
	| "GREAT_WORK_POEMS"
	| "GREAT_WORK_RED_BADGE_OF_COURAGE"
	| "GREAT_WORK_WONDERFUL_WIZARD_OF_OZ"
	| "GREAT_WORK_THE_GREAT_GATSBY"
	| "GREAT_WORK_NIN_ME_SCHARA"
	| "GREAT_WORK_HYMN_TO_THE_MUSE"
	| "GREAT_WORK_GUANGLING_SAN"
	| "GREAT_WORK_LAMMA_BADA_YATATHANNA"
	| "GREAT_WORK_WHIRLING_DERVISH"
	| "GREAT_WORK_UT_QUEANT_LAXIS"
	| "GREAT_WORK_MESSE_DE_NOSTRE_DAME"
	| "GREAT_WORK_NYMPHES_DES_BOIS"
	| "GREAT_WORK_PAYOJI_MAINE"
	| "GREAT_WORK_SPEM_IN_ALIUM"
	| "GREAT_WORK_MISSA_PAPAE_MARCELLI"
	| "GREAT_WORK_XICOCHI"
	| "GREAT_WORK_ROKUDAN_NO_SHIRABE"
	| "GREAT_WORK_BRANDENBERG_CONCERTOS"
	| "GREAT_WORK_GLORIA_LAUS_ET_HONOR"
	| "GREAT_WORK_SALVE_REGINA"
	| "GREAT_WORK_EINE_KLEINE_NACHTMUSIC"
	| "GREAT_WORK_SAKURAGARI"
	| "GREAT_WORK_FIFTH_SYMPHONY"
	| "GREAT_WORK_CAPRICE_NO_24"
	| "GREAT_WORK_TE_DEUM"
	| "GREAT_WORK_ETUDE_OP_10"
	| "GREAT_WORK_DIE_WALKURE"
	| "GREAT_WORK_LA_FORZA_DEL_DESTINO"
	| "GREAT_WORK_CONTRADANZAS_CUBANAS"
	| "GREAT_WORK_DIE_FLEDERMAUS"
	| "GREAT_WORK_HUNGARIAN_DANCES"
	| "GREAT_WORK_NIGHT_ON_BALD_MOUNTAIN"
	| "GREAT_WORK_1812_OVERTURE"
	| "GREAT_WORK_FROM_THE_NEW_WORLD"
	| "GREAT_WORK_DAHA"
	| "GREAT_WORK_CATHEDRALE_ENGLOUTIE"
	| "GREAT_WORK_VARIATIONS_ON_AMERICA"
	| "GREAT_WORK_LAU_DUANG_DUEN"
	| "GREAT_WORK_ANA_HAWEET"
	| "GREAT_WORK_SERMON_OF_SADNESS"
	| "GREAT_WORK_I_GOT_RHYTHM"
	| "GREAT_WORK_SENSEMAYA"
	| "GREAT_WORK_SINFONIA_INDIA"
	| "GREAT_WORK_LADRANG_SRI_DUHITO"
	| "GREAT_WORK_IN_A_LANDSCAPE"
	| "GREAT_WORK_JHAPTAL"
	| "GREAT_WORK_DIDGERIDOO"
	| "GREAT_WORK_KATCINA_DANCES"
	| "GREAT_WORK_ELECTRIC_COUNTERPOINT"
	| "GREAT_WORK_AL_CAPONE"
	| "GREAT_WORK_MORNING_STAR"
	| "GREAT_WORK_ALSO_SPRACH_ZARATHUSTRA"
	| "GREAT_WORK_SATURN"
	| "GREAT_WORK_CARAVAN"
	| "GREAT_WORK_SYMPHONY_NO_1"
	| "GREAT_WORK_MBUBE"
	| "GREAT_WORK_SHAKER_LOOPS"
	| "GREAT_WORK_AVE_MARIS"
	| "GREAT_WORK_REQUIEM_KYRIE"
	| "GREAT_WORK_SALVE_REGINA_A_4"
	| "GREAT_WORK_BONJOUR_MON_COEUR"
	| "GREAT_WORK_O_MAGNUM_MYSTERIUM"
	| "GREAT_WORK_POICHE_LAVIDA"
	| "GREAT_WORK_AGNUS_DEI"
	| "GREAT_WORK_WATER_MUSIC"
	| "GREAT_WORK_SYMPHONE_NO_93"
	| "GREAT_WORK_HUNGARIAN_RHAPSODY"
	| "GREAT_WORK_DAS_VERLASSENE"
	| "GREAT_WORK_SYMPHONY_NO_5"
	| "GREAT_WORK_SYMPHONY_NO_3"
	| "GREAT_WORK_PARADE"
	| "GREAT_WORK_LULU"
	| "GREAT_WORK_STRING_QUARTET"
	| "GREAT_WORK_YOUNG_PERSONS_GUIDE"
	| "GREAT_WORK_GIRL_WITH_PEARL_EARRING"
	| "GREAT_WORK_HENRY_VIII"
	| "GREAT_WORK_HUNTERS_IN_THE_SNOW"
	| "GREAT_WORK_LES_DEMOISELLES"
	| "GREAT_WORK_LUNCHEON"
	| "GREAT_WORK_MONA_LISA"
	| "GREAT_WORK_SUNDAY_AFTERNOON"
	| "GREAT_WORK_VIEW_OF_TOLEDO"
	| "GREAT_WORK_WATER_LILIES"
	| "GREAT_WORK_STARRY_NIGHT"
	| "GREAT_WORK_BIRTH_OF_VENUS"
	| "GREAT_WORK_BINDO_ALTOVITI"
	| "GREAT_WORK_SAINT_GEORGE_DRAGON"
	| "GREAT_WORK_CREATION_OF_ADAM"
	| "GREAT_WORK_GALLERY_OF_THE_LOUVRE"
	| "GREAT_WORK_WASHINGTON_CROSSING"
	| "GREAT_WORK_ARRANGEMENT_IN_GREY"
	| "GREAT_WORK_BREEZING_UP"
	| "GREAT_WORK_A_THOUSAND_LI"
	| "GREAT_WORK_DWELLING_IN_THE_FUCHUN"
	| "GREAT_WORK_ALONG_THE_RIVER"
	| "GREAT_WORK_LEAF_2"
	| "GREAT_WORK_EMPEROR_TAIZONG"
	| "GREAT_WORK_SPRING_MORNING"
	| "GREAT_WORK_THE_GREAT_WAVE"
	| "GREAT_WORK_EVENING_SHOWER"
	| "GREAT_WORK_L_ABSINTHE"
	| "GREAT_WORK_UPAUPA_SCHNEKLUD"
	| "GREAT_WORK_A_BAR_AT_THE_FOLIES"
	| "GREAT_WORK_BALL_AT_THE_MOULIN"
	| "GREAT_WORK_THE_KISS"
	| "GREAT_WORK_AMERICAN_GOTHIC"
	| "GREAT_WORK_SRI_SHANMUKAHA"
	| "GREAT_WORK_DAUD_RECEIVES_A_ROBE"
	| "GREAT_WORK_YUSEF_AND_ZULEYKHA"
	| "GREAT_WORK_THE_ASCENT_OF_MUHAMMAD"
	| "GREAT_WORK_LIBERTY_LEADING_THE_PEOPLE"
	| "GREAT_WORK_SAINT_JEROME_IN_HIS_STUDY"
	| "GREAT_WORK_PARTHENON_FRIEZE"
	| "GREAT_WORK_RUE_DE_PARIS"
	| "GREAT_WORK_NIGHT_WATCH"
	| "GREAT_WORK_DEATH_OF_MARAT"
	| "GREAT_WORK_ETIENNE_CHEVALIER"
	| "GREAT_WORK_SAINT_FRANCIS"
	| "GREAT_WORK_HATAORI"
	| "GREAT_WORK_JANE_GREY"
	| "GREAT_WORK_WANDERER"
	| "GREAT_WORK_BABEL"
	| "GREAT_WORK_YOUNG_LADY"
	| "GREAT_WORK_KINDRED"
	| "GREAT_WORK_BLUE_BOY"
	| "GREAT_WORK_SECOND_OF_MAY"
	| "GREAT_WORK_LAST_CART"
	| "GREAT_WORK_EARLY_AUTUMN"
	| "GREAT_WORK_APPRECIATING_LOTUSES"
	| "GREAT_WORK_EQUESTRIAN_PORTRAIT"
	| "GREAT_WORK_THE_ARMADA"
	| "GREAT_WORK_FRANCIS_I"
	| "GREAT_WORK_SELF_PORTRAIT"
	| "GREAT_WORK_VERTUMNUS"
	| "GREAT_WORK_LAST_SUPPER"
	| "GREAT_WORK_PORTRAIT_OF_A_MAN"
	| "GREAT_WORK_FRONT_OF_THE_MIRROR"
	| "GREAT_WORK_ADORATION"
	| "GREAT_WORK_RUBENS_AND_ISABELLA"
	| "GREAT_WORK_CHILDS_BATH"
	| "GREAT_WORK_THE_CARD_PLAYERS"
	| "GREAT_WORK_THE_SWING"
	| "GREAT_WORK_GIANT_MAGNOLIAS"
	| "GREAT_WORK_SAINT_GEORGE_KILLING"
	| "GREAT_WORK_JACQUES_AND_BERTHE"
	| "GREAT_WORK_DASH_FOR_TIMBER"
	| "GREAT_WORK_GEORGE_WASHINGTON_PORTRAIT"
	| "GREAT_WORK_ATTACK_ON_BEIJING"
	| "GREAT_WORK_SUMO_WRESTLER"
	| "GREAT_WORK_ROSETTA"
	| "GREAT_WORK_MAWANGDUI"
	| "GREAT_WORK_DEAD_SEA"
	| "GREAT_WORK_GILGAMESH"
	| "GREAT_WORK_NAG_HAMMADI"
	| "GREAT_WORK_LINEAR_B"
	| "GREAT_WORK_PAPYRUS_ANI"
	| "GREAT_WORK_RUNESTONE"
	| "GREAT_WORK_HAMMURABI"
	| "GREAT_WORK_BAKHSHALI"
	| "GREAT_WORK_CODEX_PEREZ"
	| "GREAT_WORK_JUSHICHIJO_KEMPO"
	| "GREAT_WORK_KELLS"
	| "GREAT_WORK_CODEX_BORGIA"
	| "GREAT_WORK_KEDUKAN_BUKRIT"
	| "GREAT_WORK_TIGER_IN_TROPICAL_STORM"
	| "GREAT_WORK_THE_HOME_GUARD"
	| "GREAT_WORK_CEREMONIAL_SITTING"
	| "GREAT_WORK_RUSSIAN_TSAR"
	| "GREAT_WORK_CRUCIFIXION_OF_SAINT_PETER"
	| "GREAT_WORK_LANDSCAPE_WITH_ANT_BEAR"
	| "GREAT_WORK_DUTCH_MEN_O_WAR"
	| "GREAT_WORK_HARBOR_IN_BALAKLAVA"
	| "GREAT_WORK_PEACEMAKERS"
	| "GREAT_WORK_PORTRAIT_OF_CHITASEI"
	| "GREAT_WORK_PORTRAIT_OF_LOUIS"
	| "GREAT_WORK_PORTRAIT_OF_NASSER"
	| "GREAT_WORK_FIELD_WITH_SHEAFS"
	| "GREAT_WORK_AT_THE_EDGE_OF_THE_BROOK"
	| "GREAT_WORK_THE_KISS_ALT"
	| "GREAT_WORK_MOVING_HOUSE"
	| "GREAT_WORK_MEXICAN_EXPEDITION"
	| "GREAT_WORK_LAST_DAY_OF_POMPEII"
	| "GREAT_WORK_THE_ACCOLADE";

declare type BNW_LeagueSpecialSessionsType =
	| "LEAGUE_SPECIAL_SESSION_START_WORLD_CONGRESS"
	| "LEAGUE_SPECIAL_SESSION_WELCOME_CITY_STATES"
	| "LEAGUE_SPECIAL_SESSION_LEADERSHIP_COUNCIL"
	| "LEAGUE_SPECIAL_SESSION_START_UNITED_NATIONS";

declare type BNW_LeagueNamesType =
	| "LEAGUE_NAME_CONGRESS"
	| "LEAGUE_NAME_CONFERENCE"
	| "LEAGUE_NAME_COUNCIL";

declare type BNW_LeagueProjectRewardsType =
	| "LEAGUE_PROJECT_REWARD_ISS_1"
	| "LEAGUE_PROJECT_REWARD_ISS_2"
	| "LEAGUE_PROJECT_REWARD_ISS_3"
	| "LEAGUE_PROJECT_REWARD_WORLD_FAIR_1"
	| "LEAGUE_PROJECT_REWARD_WORLD_FAIR_2"
	| "LEAGUE_PROJECT_REWARD_WORLD_FAIR_3"
	| "LEAGUE_PROJECT_REWARD_WORLD_GAMES_1"
	| "LEAGUE_PROJECT_REWARD_WORLD_GAMES_2"
	| "LEAGUE_PROJECT_REWARD_WORLD_GAMES_3";

declare type BNW_LeagueProjectsType =
	| "LEAGUE_PROJECT_INTERNATIONAL_SPACE_STATION"
	| "LEAGUE_PROJECT_WORLD_FAIR"
	| "LEAGUE_PROJECT_WORLD_GAMES";

declare type BNW_ResolutionDecisionsType =
	| "RESOLUTION_DECISION_NONE"
	| "RESOLUTION_DECISION_YES_OR_NO"
	| "RESOLUTION_DECISION_ANY_MEMBER"
	| "RESOLUTION_DECISION_CITY"
	| "RESOLUTION_DECISION_ANY_LUXURY_RESOURCE"
	| "RESOLUTION_DECISION_REPEAL"
	| "RESOLUTION_DECISION_MAJOR_CIV_MEMBER"
	| "RESOLUTION_DECISION_OTHER_MAJOR_CIV_MEMBER"
	| "RESOLUTION_DECISION_RELIGION"
	| "RESOLUTION_DECISION_IDEOLOGY";

declare type BNW_ResolutionsType =
	| "RESOLUTION_DIPLOMATIC_VICTORY"
	| "RESOLUTION_CHANGE_LEAGUE_HOST"
	| "RESOLUTION_ALL_CITY_STATES_EMBARGO"
	| "RESOLUTION_PLAYER_EMBARGO"
	| "RESOLUTION_BAN_LUXURY_HAPPINESS"
	| "RESOLUTION_STANDING_ARMY_TAX"
	| "RESOLUTION_MEMBER_DISCOVERED_TECH_DISCOUNT"
	| "RESOLUTION_WORLD_FAIR"
	| "RESOLUTION_WORLD_GAMES"
	| "RESOLUTION_INTERNATIONAL_SPACE_STATION"
	| "RESOLUTION_CULTURAL_HERITAGE_SITES"
	| "RESOLUTION_NATURAL_HERITAGE_SITES"
	| "RESOLUTION_NUCLEAR_NON_PROLIFERATION"
	| "RESOLUTION_WORLD_RELIGION"
	| "RESOLUTION_WORLD_IDEOLOGY"
	| "RESOLUTION_ARTS_FUNDING"
	| "RESOLUTION_SCIENCES_FUNDING"
	| "RESOLUTION_HISTORICAL_LANDMARKS";

declare type BNW_BeliefsType =
	| "BELIEF_GODDESS_HUNT"
	| "BELIEF_FERTILITY_RITES"
	| "BELIEF_GOD_CRAFTSMEN"
	| "BELIEF_GOD_SEA"
	| "BELIEF_OPEN_SKY"
	| "BELIEF_MESSENGER_GODS"
	| "BELIEF_ONE_WITH_NATURE"
	| "BELIEF_FEED_WORLD"
	| "BELIEF_FORMAL_LITURGY"
	| "BELIEF_STONE_CIRCLES"
	| "BELIEF_GOD_WAR"
	| "BELIEF_SWORD_PLOWSHARES"
	| "BELIEF_GURUSHIP"
	| "BELIEF_HOLY_WARRIORS"
	| "BELIEF_SACRED_WATERS"
	| "BELIEF_GODDESS_LOVE"
	| "BELIEF_RELIGIOUS_SETTLEMENTS"
	| "BELIEF_GOD_FESTIVALS"
	| "BELIEF_ORAL_TRADITION"
	| "BELIEF_ANCESTOR_WORSHIP"
	| "BELIEF_DESERT_FOLKLORE"
	| "BELIEF_SACRED_PATH"
	| "BELIEF_GODDESS_STRATEGY"
	| "BELIEF_FAITH_HEALERS"
	| "BELIEF_MONUMENT_GODS"
	| "BELIEF_RELIGIOUS_TEXTS"
	| "BELIEF_RELIQUARY"
	| "BELIEF_PEACE_LOVING"
	| "BELIEF_INTERFAITH_DIALOGUE"
	| "BELIEF_CEREMONIAL_BURIAL"
	| "BELIEF_CHURCH_PROPERTY"
	| "BELIEF_TITHE"
	| "BELIEF_INITIATION_RITES"
	| "BELIEF_JUST_WAR"
	| "BELIEF_DEFENDER_FAITH"
	| "BELIEF_ITINERANT_PREACHERS"
	| "BELIEF_MESSIAH"
	| "BELIEF_MISSIONARY_ZEAL"
	| "BELIEF_HOLY_ORDER"
	| "BELIEF_RELIGIOUS_UNITY"
	| "BELIEF_CATHEDRALS"
	| "BELIEF_MOSQUES"
	| "BELIEF_PAGODAS"
	| "BELIEF_MONASTERIES"
	| "BELIEF_PEACE_GARDENS"
	| "BELIEF_CHORAL_MUSIC"
	| "BELIEF_RELIGIOUS_ART"
	| "BELIEF_LITURGICAL_DRAMA"
	| "BELIEF_ASCETISM"
	| "BELIEF_RELIGIOUS_CENTER"
	| "BELIEF_PAPAL_PRIMACY"
	| "BELIEF_DANCE_AURORA"
	| "BELIEF_RELIGIOUS_COMMUNITY"
	| "BELIEF_DIVINE_INSPIRATION"
	| "BELIEF_PILGRIMAGE"
	| "BELIEF_WORLD_CHURCH"
	| "BELIEF_CHARITABLE_MISSIONS"
	| "BELIEF_EVANGELISM"
	| "BELIEF_HEATHEN_CONVERSION"
	| "BELIEF_JESUIT_EDUCATION"
	| "BELIEF_RELIGIOUS_FERVOR"
	| "BELIEF_SACRED_SITES"
	| "BELIEF_TO_GLORY_OF_GOD"
	| "BELIEF_UNDERGROUND_SECT"
	| "BELIEF_UNITY_OF_PROPHETS"
	| "BELIEF_TEARS_OF_GODS"
	| "BELIEF_EARTH_MOTHER"
	| "BELIEF_GOD_KING"
	| "BELIEF_SUN_GOD";

declare type BNW_ReligionsType =
	| "RELIGION_PANTHEON"
	| "RELIGION_BUDDHISM"
	| "RELIGION_CHRISTIANITY"
	| "RELIGION_CONFUCIANISM"
	| "RELIGION_HINDUISM"
	| "RELIGION_ISLAM"
	| "RELIGION_JUDAISM"
	| "RELIGION_SHINTO"
	| "RELIGION_SIKHISM"
	| "RELIGION_TAOISM"
	| "RELIGION_TENGRIISM"
	| "RELIGION_ZOROASTRIANISM"
	| "RELIGION_ORTHODOXY"
	| "RELIGION_PROTESTANTISM";

declare interface BNW_DataSet {
	tables: {
		AICityStrategies: BNW_AICityStrategies,
		AICityStrategy_Flavors: BNW_AICityStrategy_Flavors,
		AICityStrategy_PersonalityFlavorThresholdMods: BNW_AICityStrategy_PersonalityFlavorThresholdMods,
		AIEconomicStrategies: BNW_AIEconomicStrategies,
		AIEconomicStrategy_Player_Flavors: BNW_AIEconomicStrategy_Player_Flavors,
		AIEconomicStrategy_City_Flavors: BNW_AIEconomicStrategy_City_Flavors,
		AIEconomicStrategy_PersonalityFlavorThresholdMods: BNW_AIEconomicStrategy_PersonalityFlavorThresholdMods,
		AIGrandStrategies: BNW_AIGrandStrategies,
		AIGrandStrategy_Flavors: BNW_AIGrandStrategy_Flavors,
		AIGrandStrategy_Yields: BNW_AIGrandStrategy_Yields,
		AIGrandStrategy_FlavorMods: BNW_AIGrandStrategy_FlavorMods,
		AIMilitaryStrategies: BNW_AIMilitaryStrategies,
		AIMilitaryStrategy_Player_Flavors: BNW_AIMilitaryStrategy_Player_Flavors,
		AIMilitaryStrategy_City_Flavors: BNW_AIMilitaryStrategy_City_Flavors,
		AIMilitaryStrategy_PersonalityFlavorThresholdMods: BNW_AIMilitaryStrategy_PersonalityFlavorThresholdMods,
		CitySpecializations: BNW_CitySpecializations,
		CitySpecialization_Flavors: BNW_CitySpecialization_Flavors,
		CitySpecialization_TargetYields: BNW_CitySpecialization_TargetYields,
		TacticalMoves: BNW_TacticalMoves,
		Attitudes: BNW_Attitudes,
		Calendars: BNW_Calendars,
		CitySizes: BNW_CitySizes,
		Concepts: BNW_Concepts,
		Concepts_RelatedConcept: BNW_Concepts_RelatedConcept,
		Contacts: BNW_Contacts,
		DenialInfos: BNW_DenialInfos,
		Domains: BNW_Domains,
		InvisibleInfos: BNW_InvisibleInfos,
		MajorCivApproachTypes: BNW_MajorCivApproachTypes,
		MemoryInfos: BNW_MemoryInfos,
		MinorCivApproachTypes: BNW_MinorCivApproachTypes,
		MinorCivTraits: BNW_MinorCivTraits,
		MinorCivTraits_Status: BNW_MinorCivTraits_Status,
		Months: BNW_Months,
		Seasons: BNW_Seasons,
		UnitAIInfos: BNW_UnitAIInfos,
		UnitCombatInfos: BNW_UnitCombatInfos,
		BuildingClasses: BNW_BuildingClasses,
		BuildingClass_VictoryThresholds: BNW_BuildingClass_VictoryThresholds,
		Buildings: BNW_Buildings,
		Building_AreaYieldModifiers: BNW_Building_AreaYieldModifiers,
		Building_BuildingClassHappiness: BNW_Building_BuildingClassHappiness,
		Building_BuildingClassYieldChanges: BNW_Building_BuildingClassYieldChanges,
		Building_ClassesNeededInCity: BNW_Building_ClassesNeededInCity,
		Building_FreeUnits: BNW_Building_FreeUnits,
		Building_DomainFreeExperiences: BNW_Building_DomainFreeExperiences,
		Building_DomainFreeExperiencePerGreatWork: BNW_Building_DomainFreeExperiencePerGreatWork,
		Building_DomainProductionModifiers: BNW_Building_DomainProductionModifiers,
		Building_FreeSpecialistCounts: BNW_Building_FreeSpecialistCounts,
		Building_Flavors: BNW_Building_Flavors,
		Building_GlobalYieldModifiers: BNW_Building_GlobalYieldModifiers,
		Building_HurryModifiers: BNW_Building_HurryModifiers,
		Building_LocalResourceAnds: BNW_Building_LocalResourceAnds,
		Building_LocalResourceOrs: BNW_Building_LocalResourceOrs,
		Building_LockedBuildingClasses: BNW_Building_LockedBuildingClasses,
		Building_PrereqBuildingClasses: BNW_Building_PrereqBuildingClasses,
		Building_ResourceQuantity: BNW_Building_ResourceQuantity,
		Building_ResourceQuantityRequirements: BNW_Building_ResourceQuantityRequirements,
		Building_ResourceYieldModifiers: BNW_Building_ResourceYieldModifiers,
		Building_ResourceCultureChanges: BNW_Building_ResourceCultureChanges,
		Building_ResourceFaithChanges: BNW_Building_ResourceFaithChanges,
		Building_RiverPlotYieldChanges: BNW_Building_RiverPlotYieldChanges,
		Building_SeaPlotYieldChanges: BNW_Building_SeaPlotYieldChanges,
		Building_LakePlotYieldChanges: BNW_Building_LakePlotYieldChanges,
		Building_SeaResourceYieldChanges: BNW_Building_SeaResourceYieldChanges,
		Building_ResourceYieldChanges: BNW_Building_ResourceYieldChanges,
		Building_FeatureYieldChanges: BNW_Building_FeatureYieldChanges,
		Building_TerrainYieldChanges: BNW_Building_TerrainYieldChanges,
		Building_SpecialistYieldChanges: BNW_Building_SpecialistYieldChanges,
		Building_UnitCombatFreeExperiences: BNW_Building_UnitCombatFreeExperiences,
		Building_UnitCombatProductionModifiers: BNW_Building_UnitCombatProductionModifiers,
		Building_TechAndPrereqs: BNW_Building_TechAndPrereqs,
		Building_YieldChanges: BNW_Building_YieldChanges,
		Building_YieldChangesPerPop: BNW_Building_YieldChangesPerPop,
		Building_YieldChangesPerReligion: BNW_Building_YieldChangesPerReligion,
		Building_TechEnhancedYieldChanges: BNW_Building_TechEnhancedYieldChanges,
		Building_YieldModifiers: BNW_Building_YieldModifiers,
		Building_ThemingBonuses: BNW_Building_ThemingBonuses,
		Civilizations: BNW_Civilizations,
		Civilization_BuildingClassOverrides: BNW_Civilization_BuildingClassOverrides,
		Civilization_CityNames: BNW_Civilization_CityNames,
		Civilization_DisableTechs: BNW_Civilization_DisableTechs,
		Civilization_FreeBuildingClasses: BNW_Civilization_FreeBuildingClasses,
		Civilization_FreeTechs: BNW_Civilization_FreeTechs,
		Civilization_FreeUnits: BNW_Civilization_FreeUnits,
		Civilization_Leaders: BNW_Civilization_Leaders,
		Civilization_Religions: BNW_Civilization_Religions,
		Civilization_SpyNames: BNW_Civilization_SpyNames,
		Civilization_UnitClassOverrides: BNW_Civilization_UnitClassOverrides,
		Civilization_Start_Along_Ocean: BNW_Civilization_Start_Along_Ocean,
		Civilization_Start_Along_River: BNW_Civilization_Start_Along_River,
		Civilization_Start_Region_Priority: BNW_Civilization_Start_Region_Priority,
		Civilization_Start_Region_Avoid: BNW_Civilization_Start_Region_Avoid,
		Civilization_Start_Place_First_Along_Ocean: BNW_Civilization_Start_Place_First_Along_Ocean,
		MinorCivilizations: BNW_MinorCivilizations,
		MinorCivilization_Flavors: BNW_MinorCivilization_Flavors,
		MinorCivilization_CityNames: BNW_MinorCivilization_CityNames,
		Regions: BNW_Regions,
		Traits: BNW_Traits,
		Trait_ExtraYieldThresholds: BNW_Trait_ExtraYieldThresholds,
		Trait_YieldChanges: BNW_Trait_YieldChanges,
		Trait_YieldChangesStrategicResources: BNW_Trait_YieldChangesStrategicResources,
		Trait_YieldChangesNaturalWonder: BNW_Trait_YieldChangesNaturalWonder,
		Trait_YieldChangesPerTradePartner: BNW_Trait_YieldChangesPerTradePartner,
		Trait_YieldChangesIncomingTradeRoute: BNW_Trait_YieldChangesIncomingTradeRoute,
		Trait_YieldModifiers: BNW_Trait_YieldModifiers,
		Trait_FreePromotions: BNW_Trait_FreePromotions,
		Trait_FreePromotionUnitCombats: BNW_Trait_FreePromotionUnitCombats,
		Trait_MovesChangeUnitCombats: BNW_Trait_MovesChangeUnitCombats,
		Trait_MaintenanceModifierUnitCombats: BNW_Trait_MaintenanceModifierUnitCombats,
		Trait_Terrains: BNW_Trait_Terrains,
		Trait_ResourceQuantityModifiers: BNW_Trait_ResourceQuantityModifiers,
		Trait_FreeResourceFirstXCities: BNW_Trait_FreeResourceFirstXCities,
		Trait_ImprovementYieldChanges: BNW_Trait_ImprovementYieldChanges,
		Trait_SpecialistYieldChanges: BNW_Trait_SpecialistYieldChanges,
		Trait_UnimprovedFeatureYieldChanges: BNW_Trait_UnimprovedFeatureYieldChanges,
		Trait_NoTrain: BNW_Trait_NoTrain,
		Diplomacy_Responses: BNW_Diplomacy_Responses,
		ArtStyleTypes: BNW_ArtStyleTypes,
		Climates: BNW_Climates,
		CultureLevels: BNW_CultureLevels,
		CultureLevel_SpeedThresholds: BNW_CultureLevel_SpeedThresholds,
		Cursors: BNW_Cursors,
		EmphasizeInfos: BNW_EmphasizeInfos,
		EmphasizeInfo_Yields: BNW_EmphasizeInfo_Yields,
		Eras: BNW_Eras,
		Era_Soundtracks: BNW_Era_Soundtracks,
		Era_CitySoundscapes: BNW_Era_CitySoundscapes,
		Era_NewEraVOs: BNW_Era_NewEraVOs,
		Flavors: BNW_Flavors,
		GameOptions: BNW_GameOptions,
		GameSpeeds: BNW_GameSpeeds,
		GameSpeed_Turns: BNW_GameSpeed_Turns,
		GoodyHuts: BNW_GoodyHuts,
		HandicapInfos: BNW_HandicapInfos,
		HandicapInfo_Goodies: BNW_HandicapInfo_Goodies,
		HandicapInfo_FreeTechs: BNW_HandicapInfo_FreeTechs,
		HandicapInfo_AIFreeTechs: BNW_HandicapInfo_AIFreeTechs,
		HurryInfos: BNW_HurryInfos,
		IconFontTextures: BNW_IconFontTextures,
		IconFontMapping: BNW_IconFontMapping,
		IconTextureAtlases: BNW_IconTextureAtlases,
		MultiplayerOptions: BNW_MultiplayerOptions,
		PlayerOptions: BNW_PlayerOptions,
		Policies: BNW_Policies,
		Policy_CityYieldChanges: BNW_Policy_CityYieldChanges,
		Policy_CoastalCityYieldChanges: BNW_Policy_CoastalCityYieldChanges,
		Policy_CapitalYieldChanges: BNW_Policy_CapitalYieldChanges,
		Policy_CapitalYieldPerPopChanges: BNW_Policy_CapitalYieldPerPopChanges,
		Policy_CapitalYieldModifiers: BNW_Policy_CapitalYieldModifiers,
		Policy_Disables: BNW_Policy_Disables,
		Policy_Flavors: BNW_Policy_Flavors,
		Policy_GreatWorkYieldChanges: BNW_Policy_GreatWorkYieldChanges,
		Policy_HurryModifiers: BNW_Policy_HurryModifiers,
		Policy_PrereqPolicies: BNW_Policy_PrereqPolicies,
		Policy_PrereqORPolicies: BNW_Policy_PrereqORPolicies,
		Policy_SpecialistExtraYields: BNW_Policy_SpecialistExtraYields,
		Policy_BuildingClassYieldModifiers: BNW_Policy_BuildingClassYieldModifiers,
		Policy_BuildingClassYieldChanges: BNW_Policy_BuildingClassYieldChanges,
		Policy_BuildingClassCultureChanges: BNW_Policy_BuildingClassCultureChanges,
		Policy_BuildingClassProductionModifiers: BNW_Policy_BuildingClassProductionModifiers,
		Policy_BuildingClassTourismModifiers: BNW_Policy_BuildingClassTourismModifiers,
		Policy_BuildingClassHappiness: BNW_Policy_BuildingClassHappiness,
		Policy_ImprovementYieldChanges: BNW_Policy_ImprovementYieldChanges,
		Policy_ImprovementCultureChanges: BNW_Policy_ImprovementCultureChanges,
		Policy_ValidSpecialists: BNW_Policy_ValidSpecialists,
		Policy_YieldModifiers: BNW_Policy_YieldModifiers,
		Policy_FreePromotions: BNW_Policy_FreePromotions,
		Policy_UnitCombatFreeExperiences: BNW_Policy_UnitCombatFreeExperiences,
		Policy_FreePromotionUnitCombats: BNW_Policy_FreePromotionUnitCombats,
		Policy_UnitCombatProductionModifiers: BNW_Policy_UnitCombatProductionModifiers,
		Policy_FreeUnitClasses: BNW_Policy_FreeUnitClasses,
		Policy_TourismOnUnitCreation: BNW_Policy_TourismOnUnitCreation,
		Policy_FreeItems: BNW_Policy_FreeItems,
		PolicyBranchTypes: BNW_PolicyBranchTypes,
		PolicyBranch_Disables: BNW_PolicyBranch_Disables,
		Processes: BNW_Processes,
		Process_Flavors: BNW_Process_Flavors,
		Process_ProductionYields: BNW_Process_ProductionYields,
		Projects: BNW_Projects,
		Project_Flavors: BNW_Project_Flavors,
		Project_Prereqs: BNW_Project_Prereqs,
		Project_VictoryThresholds: BNW_Project_VictoryThresholds,
		Project_ResourceQuantityRequirements: BNW_Project_ResourceQuantityRequirements,
		ReplayDataSets: BNW_ReplayDataSets,
		SeaLevels: BNW_SeaLevels,
		SmallAwards: BNW_SmallAwards,
		Specialists: BNW_Specialists,
		SpecialistFlavors: BNW_SpecialistFlavors,
		SpecialistYields: BNW_SpecialistYields,
		Trades: BNW_Trades,
		TurnTimers: BNW_TurnTimers,
		Victories: BNW_Victories,
		VictoryPointAwards: BNW_VictoryPointAwards,
		HistoricRankings: BNW_HistoricRankings,
		VoteSources: BNW_VoteSources,
		Votes: BNW_Votes,
		Vote_DiploVotes: BNW_Vote_DiploVotes,
		Worlds: BNW_Worlds,
		Defines: BNW_Defines,
		PostDefines: BNW_PostDefines,
		Colors: BNW_Colors,
		InterfaceModes: BNW_InterfaceModes,
		PlayerColors: BNW_PlayerColors,
		Leaders: BNW_Leaders,
		Leader_MajorCivApproachBiases: BNW_Leader_MajorCivApproachBiases,
		Leader_MinorCivApproachBiases: BNW_Leader_MinorCivApproachBiases,
		Leader_Flavors: BNW_Leader_Flavors,
		Leader_Traits: BNW_Leader_Traits,
		Routes: BNW_Routes,
		Route_Yields: BNW_Route_Yields,
		Route_TechMovementChanges: BNW_Route_TechMovementChanges,
		Route_ResourceQuantityRequirements: BNW_Route_ResourceQuantityRequirements,
		Notifications: BNW_Notifications,
		Technologies: BNW_Technologies,
		Technology_DomainExtraMoves: BNW_Technology_DomainExtraMoves,
		Technology_TradeRouteDomainExtraRange: BNW_Technology_TradeRouteDomainExtraRange,
		Technology_Flavors: BNW_Technology_Flavors,
		Technology_ORPrereqTechs: BNW_Technology_ORPrereqTechs,
		Technology_PrereqTechs: BNW_Technology_PrereqTechs,
		Technology_FreePromotions: BNW_Technology_FreePromotions,
		Features: BNW_Features,
		FakeFeatures: BNW_FakeFeatures,
		Feature_YieldChanges: BNW_Feature_YieldChanges,
		Feature_RiverYieldChanges: BNW_Feature_RiverYieldChanges,
		Feature_HillsYieldChanges: BNW_Feature_HillsYieldChanges,
		Feature_TerrainBooleans: BNW_Feature_TerrainBooleans,
		Natural_Wonder_Placement: BNW_Natural_Wonder_Placement,
		Improvements: BNW_Improvements,
		Improvement_Flavors: BNW_Improvement_Flavors,
		Improvement_Yields: BNW_Improvement_Yields,
		Improvement_YieldPerEra: BNW_Improvement_YieldPerEra,
		Improvement_AdjacentCityYields: BNW_Improvement_AdjacentCityYields,
		Improvement_CoastalLandYields: BNW_Improvement_CoastalLandYields,
		Improvement_FreshWaterYields: BNW_Improvement_FreshWaterYields,
		Improvement_HillsYields: BNW_Improvement_HillsYields,
		Improvement_AdjacentMountainYieldChanges: BNW_Improvement_AdjacentMountainYieldChanges,
		Improvement_PrereqNatureYields: BNW_Improvement_PrereqNatureYields,
		Improvement_RiverSideYields: BNW_Improvement_RiverSideYields,
		Improvement_ValidTerrains: BNW_Improvement_ValidTerrains,
		Improvement_ValidFeatures: BNW_Improvement_ValidFeatures,
		Improvement_ValidImprovements: BNW_Improvement_ValidImprovements,
		Improvement_ResourceTypes: BNW_Improvement_ResourceTypes,
		Improvement_ResourceType_Yields: BNW_Improvement_ResourceType_Yields,
		Improvement_RouteYieldChanges: BNW_Improvement_RouteYieldChanges,
		Improvement_TechYieldChanges: BNW_Improvement_TechYieldChanges,
		Improvement_TechNoFreshWaterYieldChanges: BNW_Improvement_TechNoFreshWaterYieldChanges,
		Improvement_TechFreshWaterYieldChanges: BNW_Improvement_TechFreshWaterYieldChanges,
		ResourceClasses: BNW_ResourceClasses,
		Resources: BNW_Resources,
		Resource_YieldChanges: BNW_Resource_YieldChanges,
		Resource_Flavors: BNW_Resource_Flavors,
		Resource_TerrainBooleans: BNW_Resource_TerrainBooleans,
		Resource_FeatureBooleans: BNW_Resource_FeatureBooleans,
		Resource_FeatureTerrainBooleans: BNW_Resource_FeatureTerrainBooleans,
		Resource_QuantityTypes: BNW_Resource_QuantityTypes,
		Terrains: BNW_Terrains,
		Terrain_Yields: BNW_Terrain_Yields,
		Terrain_RiverYieldChanges: BNW_Terrain_RiverYieldChanges,
		Terrain_HillsYieldChanges: BNW_Terrain_HillsYieldChanges,
		Yields: BNW_Yields,
		Automates: BNW_Automates,
		Builds: BNW_Builds,
		BuildFeatures: BNW_BuildFeatures,
		Build_TechTimeChanges: BNW_Build_TechTimeChanges,
		Commands: BNW_Commands,
		Controls: BNW_Controls,
		Missions: BNW_Missions,
		MultiUnitPositions: BNW_MultiUnitPositions,
		MultiUnitFormations: BNW_MultiUnitFormations,
		MultiUnitFormation_SlotEntries: BNW_MultiUnitFormation_SlotEntries,
		SpecialUnits: BNW_SpecialUnits,
		SpecialUnit_CarrierUnitAI: BNW_SpecialUnit_CarrierUnitAI,
		SpecialUnit_ProductionTraits: BNW_SpecialUnit_ProductionTraits,
		UnitClasses: BNW_UnitClasses,
		MovementRates: BNW_MovementRates,
		UnitPromotions: BNW_UnitPromotions,
		UnitPromotions_Terrains: BNW_UnitPromotions_Terrains,
		UnitPromotions_Features: BNW_UnitPromotions_Features,
		UnitPromotions_UnitClasses: BNW_UnitPromotions_UnitClasses,
		UnitPromotions_Domains: BNW_UnitPromotions_Domains,
		UnitPromotions_UnitCombatMods: BNW_UnitPromotions_UnitCombatMods,
		UnitPromotions_UnitCombats: BNW_UnitPromotions_UnitCombats,
		UnitPromotions_CivilianUnitType: BNW_UnitPromotions_CivilianUnitType,
		UnitPromotions_PostCombatRandomPromotion: BNW_UnitPromotions_PostCombatRandomPromotion,
		CivilianAttackPriorities: BNW_CivilianAttackPriorities,
		Units: BNW_Units,
		Unit_AITypes: BNW_Unit_AITypes,
		Unit_Buildings: BNW_Unit_Buildings,
		Unit_BuildingClassRequireds: BNW_Unit_BuildingClassRequireds,
		Unit_ProductionModifierBuildings: BNW_Unit_ProductionModifierBuildings,
		Unit_Builds: BNW_Unit_Builds,
		Unit_ClassUpgrades: BNW_Unit_ClassUpgrades,
		Unit_FreePromotions: BNW_Unit_FreePromotions,
		Unit_Flavors: BNW_Unit_Flavors,
		Unit_GreatPersons: BNW_Unit_GreatPersons,
		Unit_ResourceQuantityRequirements: BNW_Unit_ResourceQuantityRequirements,
		Unit_UniqueNames: BNW_Unit_UniqueNames,
		Unit_YieldFromKills: BNW_Unit_YieldFromKills,
		Unit_NotAITypes: BNW_Unit_NotAITypes,
		Unit_ProductionTraits: BNW_Unit_ProductionTraits,
		Unit_TechTypes: BNW_Unit_TechTypes,
		AnimationCategories: BNW_AnimationCategories,
		AnimationPaths: BNW_AnimationPaths,
		AnimationPath_Entries: BNW_AnimationPath_Entries,
		EntityEvents: BNW_EntityEvents,
		EntityEvent_AnimationPaths: BNW_EntityEvent_AnimationPaths,
		GreatWorkSlots: BNW_GreatWorkSlots,
		GreatWorkClasses: BNW_GreatWorkClasses,
		GreatWorks: BNW_GreatWorks,
		GreatWorkArtifactClasses: BNW_GreatWorkArtifactClasses,
		LeagueSpecialSessions: BNW_LeagueSpecialSessions,
		LeagueNames: BNW_LeagueNames,
		LeagueProjectRewards: BNW_LeagueProjectRewards,
		LeagueProjects: BNW_LeagueProjects,
		ResolutionDecisions: BNW_ResolutionDecisions,
		Resolutions: BNW_Resolutions,
		Beliefs: BNW_Beliefs,
		Belief_BuildingClassYieldChanges: BNW_Belief_BuildingClassYieldChanges,
		Belief_BuildingClassHappiness: BNW_Belief_BuildingClassHappiness,
		Belief_BuildingClassTourism: BNW_Belief_BuildingClassTourism,
		Belief_BuildingClassFaithPurchase: BNW_Belief_BuildingClassFaithPurchase,
		Belief_CityYieldChanges: BNW_Belief_CityYieldChanges,
		Belief_HolyCityYieldChanges: BNW_Belief_HolyCityYieldChanges,
		Belief_EraFaithUnitPurchase: BNW_Belief_EraFaithUnitPurchase,
		Belief_FeatureYieldChanges: BNW_Belief_FeatureYieldChanges,
		Belief_ImprovementYieldChanges: BNW_Belief_ImprovementYieldChanges,
		Belief_MaxYieldModifierPerFollower: BNW_Belief_MaxYieldModifierPerFollower,
		Belief_ResourceQuantityModifiers: BNW_Belief_ResourceQuantityModifiers,
		Belief_ResourceHappiness: BNW_Belief_ResourceHappiness,
		Belief_ResourceYieldChanges: BNW_Belief_ResourceYieldChanges,
		Belief_TerrainYieldChanges: BNW_Belief_TerrainYieldChanges,
		Belief_YieldChangeAnySpecialist: BNW_Belief_YieldChangeAnySpecialist,
		Belief_YieldChangePerForeignCity: BNW_Belief_YieldChangePerForeignCity,
		Belief_YieldChangePerXForeignFollowers: BNW_Belief_YieldChangePerXForeignFollowers,
		Belief_YieldChangeTradeRoute: BNW_Belief_YieldChangeTradeRoute,
		Belief_YieldChangeNaturalWonder: BNW_Belief_YieldChangeNaturalWonder,
		Belief_YieldChangeWorldWonder: BNW_Belief_YieldChangeWorldWonder,
		Belief_YieldModifierNaturalWonder: BNW_Belief_YieldModifierNaturalWonder,
		Religions: BNW_Religions,
	},
	keys: {
		Civilizations: BNW_CivilizationsType,
		Colors: BNW_ColorsType,
		PlayerColors: BNW_PlayerColorsType,
		Leaders: BNW_LeadersType,
		Traits: BNW_TraitsType,
		UnitPromotions: BNW_UnitPromotionsType,
		Units: BNW_UnitsType,
		Builds: BNW_BuildsType,
		Improvements: BNW_ImprovementsType,
		BuildingClasses: BNW_BuildingClassesType,
		Buildings: BNW_BuildingsType,
		AICityStrategies: BNW_AICityStrategiesType,
		AIEconomicStrategies: BNW_AIEconomicStrategiesType,
		AIGrandStrategies: BNW_AIGrandStrategiesType,
		AIMilitaryStrategies: BNW_AIMilitaryStrategiesType,
		CitySpecializations: BNW_CitySpecializationsType,
		TacticalMoves: BNW_TacticalMovesType,
		Attitudes: BNW_AttitudesType,
		CitySizes: BNW_CitySizesType,
		Concepts: BNW_ConceptsType,
		Contacts: BNW_ContactsType,
		Domains: BNW_DomainsType,
		InvisibleInfos: BNW_InvisibleInfosType,
		MajorCivApproachTypes: BNW_MajorCivApproachTypesType,
		MinorCivApproachTypes: BNW_MinorCivApproachTypesType,
		MinorCivTraits: BNW_MinorCivTraitsType,
		Months: BNW_MonthsType,
		Seasons: BNW_SeasonsType,
		UnitAIInfos: BNW_UnitAIInfosType,
		UnitCombatInfos: BNW_UnitCombatInfosType,
		MinorCivilizations: BNW_MinorCivilizationsType,
		Regions: BNW_RegionsType,
		ArtStyleTypes: BNW_ArtStyleTypesType,
		Climates: BNW_ClimatesType,
		CultureLevels: BNW_CultureLevelsType,
		Cursors: BNW_CursorsType,
		EmphasizeInfos: BNW_EmphasizeInfosType,
		Eras: BNW_ErasType,
		Flavors: BNW_FlavorsType,
		GameOptions: BNW_GameOptionsType,
		GameSpeeds: BNW_GameSpeedsType,
		HandicapInfos: BNW_HandicapInfosType,
		HurryInfos: BNW_HurryInfosType,
		MultiplayerOptions: BNW_MultiplayerOptionsType,
		PlayerOptions: BNW_PlayerOptionsType,
		Policies: BNW_PoliciesType,
		PolicyBranchTypes: BNW_PolicyBranchTypesType,
		Processes: BNW_ProcessesType,
		Projects: BNW_ProjectsType,
		ReplayDataSets: BNW_ReplayDataSetsType,
		SeaLevels: BNW_SeaLevelsType,
		Specialists: BNW_SpecialistsType,
		Trades: BNW_TradesType,
		TurnTimers: BNW_TurnTimersType,
		Victories: BNW_VictoriesType,
		VoteSources: BNW_VoteSourcesType,
		Votes: BNW_VotesType,
		Worlds: BNW_WorldsType,
		InterfaceModes: BNW_InterfaceModesType,
		Routes: BNW_RoutesType,
		Technologies: BNW_TechnologiesType,
		Features: BNW_FeaturesType,
		FakeFeatures: BNW_FakeFeaturesType,
		Natural_Wonder_Placement: BNW_Natural_Wonder_PlacementType,
		ResourceClasses: BNW_ResourceClassesType,
		Resources: BNW_ResourcesType,
		Terrains: BNW_TerrainsType,
		Yields: BNW_YieldsType,
		Commands: BNW_CommandsType,
		Controls: BNW_ControlsType,
		Missions: BNW_MissionsType,
		MultiUnitPositions: BNW_MultiUnitPositionsType,
		MultiUnitFormations: BNW_MultiUnitFormationsType,
		UnitClasses: BNW_UnitClassesType,
		CivilianAttackPriorities: BNW_CivilianAttackPrioritiesType,
		GreatWorkSlots: BNW_GreatWorkSlotsType,
		GreatWorkClasses: BNW_GreatWorkClassesType,
		GreatWorkArtifactClasses: BNW_GreatWorkArtifactClassesType,
		GreatWorks: BNW_GreatWorksType,
		LeagueSpecialSessions: BNW_LeagueSpecialSessionsType,
		LeagueNames: BNW_LeagueNamesType,
		LeagueProjectRewards: BNW_LeagueProjectRewardsType,
		LeagueProjects: BNW_LeagueProjectsType,
		ResolutionDecisions: BNW_ResolutionDecisionsType,
		Resolutions: BNW_ResolutionsType,
		Beliefs: BNW_BeliefsType,
		Religions: BNW_ReligionsType,
	},
}
