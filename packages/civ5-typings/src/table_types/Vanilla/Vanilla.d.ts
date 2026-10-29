/// <reference path="../../sql_types.d.ts" />

declare type Vanilla_AICityStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_AICityStrategiesType,
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
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: TEXT,
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

declare type Vanilla_AICityStrategy_Flavors = {
	/**
	 * Reference: AICityStrategies(Type)
	 */
	AICityStrategyType: Vanilla_AICityStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AICityStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AICityStrategies(Type)
	 */
	AICityStrategyType: Vanilla_AICityStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIEconomicStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_AIEconomicStrategiesType,
	/**
	 * @default false
	 */
	DontUpdateCityFlavors: BOOLEAN,
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
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: TEXT,
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

declare type Vanilla_AIEconomicStrategy_Flavors = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: Vanilla_AIEconomicStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIEconomicStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: Vanilla_AIEconomicStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIGrandStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_AIGrandStrategiesType,
}

declare type Vanilla_AIGrandStrategy_Flavors = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: Vanilla_AIGrandStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIGrandStrategy_Yields = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: Vanilla_AIGrandStrategiesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_AIGrandStrategy_FlavorMods = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: Vanilla_AIGrandStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIMilitaryStrategies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_AIMilitaryStrategiesType,
	/**
	 * @default false
	 */
	DontUpdateCityFlavors: BOOLEAN,
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
	TechObsolete: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
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

declare type Vanilla_AIMilitaryStrategy_Flavors = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: Vanilla_AIMilitaryStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIMilitaryStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: Vanilla_AIMilitaryStrategiesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_CitySpecializations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CitySpecializationsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
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

declare type Vanilla_CitySpecialization_Flavors = {
	/**
	 * Reference: CitySpecializations(Type)
	 */
	CitySpecializationType: Vanilla_CitySpecializationsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_CitySpecialization_TargetYields = {
	/**
	 * Reference: CitySpecializations(Type)
	 */
	CitySpecializationType: Vanilla_CitySpecializationsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_TacticalMoves = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_TacticalMovesType,
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

declare type Vanilla_Attitudes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_AttitudesType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_Calendars = {
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

declare type Vanilla_CitySizes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CitySizesType,
}

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
	Type: Vanilla_ConceptsType,
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
	InsertAfter: Vanilla_ConceptsType,
	/**
	 * Reference: Concepts(Type)
	 */
	InsertBefore: Vanilla_ConceptsType,
}

declare type Vanilla_Concepts_RelatedConcept = {
	/**
	 * Reference: Concepts(Type)
	 */
	ConceptType: Vanilla_ConceptsType,
	/**
	 * Reference: Concepts(Type)
	 */
	RelatedConcept: Vanilla_ConceptsType,
}

declare type Vanilla_Contacts = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ContactsType,
}

declare type Vanilla_DenialInfos = {
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

declare type Vanilla_Domains = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_DomainsType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_InvisibleInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_InvisibleInfosType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_MajorCivApproachTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MajorCivApproachTypesType,
}

declare type Vanilla_MemoryInfos = {
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

declare type Vanilla_MinorCivApproachTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MinorCivApproachTypesType,
}

declare type Vanilla_MinorCivTraits = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MinorCivTraitsType,
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

declare type Vanilla_MinorCivTraits_Status = {
	/**
	 */
	Type: TEXT,
	/**
	 */
	StatusIcon: TEXT,
	/**
	 */
	StatusMeter: TEXT,
}

declare type Vanilla_Months = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MonthsType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_Seasons = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_SeasonsType,
	/**
	 * Not Null
	 */
	Description: TEXT,
}

declare type Vanilla_UnitAIInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_UnitAIInfosType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_UnitCombatInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_UnitCombatInfosType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_BuildingClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_BuildingClassesType,
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

declare type Vanilla_BuildingClass_VictoryThresholds = {
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: Vanilla_VictoriesType,
	/**
	 */
	Threshold: INTEGER,
}

declare type Vanilla_Buildings = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_BuildingsType,
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
	 * @default 0
	 */
	Cost: INTEGER,
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
	Culture: INTEGER,
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
	Airlift: INTEGER,
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
	BuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteModifier: INTEGER,
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
	 * @default 0
	 */
	Defense: INTEGER,
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
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClass: Vanilla_BuildingClassesType,
	/**
	 * @default NULL
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	NearbyTerrainRequired: Vanilla_TerrainsType,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	ProhibitedCityTerrain: Vanilla_TerrainsType,
	/**
	 * @default NULL
	 * Reference: Victories(Type)
	 */
	VictoryPrereq: Vanilla_VictoriesType,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	FreeStartEra: Vanilla_ErasType,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	MaxStartEra: Vanilla_ErasType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	EnhancedYieldTech: TEXT,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuilding: Vanilla_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuildingThisCity: Vanilla_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotion: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	TrainedFreePromotion: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotionRemoved: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	ReplacementBuildingClass: Vanilla_BuildingClassesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 * @default 0
	 */
	SpecialistCount: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistExtraCulture: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateChange: INTEGER,
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

declare type Vanilla_Building_AreaYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ClassesNeededInCity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
}

declare type Vanilla_Building_FreeUnits = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 */
	NumUnits: INTEGER,
}

declare type Vanilla_Building_DomainFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: Vanilla_DomainsType,
	/**
	 */
	Experience: INTEGER,
}

declare type Vanilla_Building_DomainProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: Vanilla_DomainsType,
	/**
	 */
	Modifier: INTEGER,
}

declare type Vanilla_Building_FreeSpecialistCounts = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 */
	Count: INTEGER,
}

declare type Vanilla_Building_Flavors = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Building_GlobalYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_HurryModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: Vanilla_HurryInfosType,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type Vanilla_Building_LocalResourceAnds = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
}

declare type Vanilla_Building_LocalResourceOrs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
}

declare type Vanilla_Building_LockedBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
}

declare type Vanilla_Building_PrereqBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 */
	NumBuildingNeeded: INTEGER,
}

declare type Vanilla_Building_ResourceQuantityRequirements = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 */
	Cost: INTEGER,
}

declare type Vanilla_Building_ResourceYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ResourceCultureChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Building_RiverPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SeaPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_LakePlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SeaResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_FeatureYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SpecialistYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_UnitCombatFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	Experience: INTEGER,
}

declare type Vanilla_Building_UnitCombatProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	Modifier: INTEGER,
}

declare type Vanilla_Building_TechAndPrereqs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Building_YieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_YieldChangesPerPop = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_TechEnhancedYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_YieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Civilizations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CivilizationsType,
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
	 */
	DefaultPlayerColor: TEXT,
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

declare type Vanilla_Civilization_BuildingClassOverrides = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Not Null
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
}

declare type Vanilla_Civilization_CityNames = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	CityName: TEXT,
}

declare type Vanilla_Civilization_DisableTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Civilization_FreeBuildingClasses = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
}

declare type Vanilla_Civilization_FreeTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Civilization_FreeUnits = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: Vanilla_UnitClassesType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: Vanilla_UnitAIInfosType,
	/**
	 */
	Count: INTEGER,
}

declare type Vanilla_Civilization_Leaders = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderheadType: Vanilla_LeadersType,
}

declare type Vanilla_Civilization_UnitClassOverrides = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Not Null
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: Vanilla_UnitClassesType,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
}

declare type Vanilla_Civilization_Start_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * @default false
	 */
	StartAlongOcean: BOOLEAN,
}

declare type Vanilla_Civilization_Start_Along_River = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * @default false
	 */
	StartAlongRiver: BOOLEAN,
}

declare type Vanilla_Civilization_Start_Region_Priority = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: Vanilla_RegionsType,
}

declare type Vanilla_Civilization_Start_Region_Avoid = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: Vanilla_RegionsType,
}

declare type Vanilla_MinorCivilizations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MinorCivilizationsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
	 */
	ShortDescription: TEXT,
	/**
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
	MinorCivTrait: Vanilla_MinorCivTraitsType,
}

declare type Vanilla_MinorCivilization_Flavors = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: Vanilla_MinorCivilizationsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type Vanilla_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: Vanilla_MinorCivilizationsType,
	/**
	 * Not Null
	 */
	CityName: TEXT,
}

declare type Vanilla_Regions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_RegionsType,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_Traits = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_TraitsType,
	/**
	 */
	Description: TEXT,
	/**
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
	CityCultureBonus: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteChange: INTEGER,
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
	EmbarkedNotCivilian: BOOLEAN,
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
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	FreeUnit: Vanilla_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	FreeUnitPrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	CombatBonusImprovement: Vanilla_ImprovementsType,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
}

declare type Vanilla_Trait_ExtraYieldThresholds = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldChangesStrategicResources = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_FreePromotions = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
}

declare type Vanilla_Trait_FreePromotionUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
}

declare type Vanilla_Trait_MovesChangeUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	MovesChange: INT,
}

declare type Vanilla_Trait_Terrains = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 */
	TerrainType: TEXT,
	/**
	 * @default 0
	 */
	StrategicResourceQuantityModifier: INTEGER,
}

declare type Vanilla_Trait_ResourceQuantityModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type Vanilla_Trait_ImprovementYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_SpecialistYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Diplomacy_Responses = {
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

declare type Vanilla_ArtStyleTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ArtStyleTypesType,
}

declare type Vanilla_Climates = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ClimatesType,
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

declare type Vanilla_CultureLevels = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CultureLevelsType,
	/**
	 */
	Description: TEXT,
	/**
	 * @default 0
	 */
	CityDefenseModifier: INTEGER,
}

declare type Vanilla_CultureLevel_SpeedThresholds = {
	/**
	 * Reference: CultureLevels(Type)
	 */
	CultureLevelType: Vanilla_CultureLevelsType,
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: Vanilla_GameSpeedsType,
	/**
	 * @default 0
	 */
	Threshold: INTEGER,
}

declare type Vanilla_Cursors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CursorsType,
	/**
	 */
	CursorPath: TEXT,
}

declare type Vanilla_EmphasizeInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_EmphasizeInfosType,
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

declare type Vanilla_EmphasizeInfo_Yields = {
	/**
	 * Reference: EmphasizeInfos(Type)
	 */
	EmphasizeType: Vanilla_EmphasizeInfosType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Eras = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ErasType,
	/**
	 */
	Description: TEXT,
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
	NoBarbCities: BOOLEAN,
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
	EventChancePerTurn: INTEGER,
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

declare type Vanilla_Era_Soundtracks = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: Vanilla_ErasType,
	/**
	 */
	SoundTrack: TEXT,
}

declare type Vanilla_Era_CitySoundscapes = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: Vanilla_ErasType,
	/**
	 * Reference: CitySizes(Type)
	 */
	CitySizeType: Vanilla_CitySizesType,
	/**
	 */
	SoundscapeScript: TEXT,
}

declare type Vanilla_Era_NewEraVOs = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: Vanilla_ErasType,
	/**
	 */
	VOScript: TEXT,
}

declare type Vanilla_Flavors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_FlavorsType,
}

declare type Vanilla_GameOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_GameOptionsType,
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

declare type Vanilla_GameSpeeds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_GameSpeedsType,
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
	VictoryDelayPercent: INTEGER,
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

declare type Vanilla_GameSpeed_Turns = {
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: Vanilla_GameSpeedsType,
	/**
	 */
	MonthIncrement: INTEGER,
	/**
	 */
	TurnsPerIncrement: INTEGER,
}

declare type Vanilla_GoodyHuts = {
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

declare type Vanilla_HandicapInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_HandicapInfosType,
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
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
}

declare type Vanilla_HandicapInfo_Goodies = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: Vanilla_HandicapInfosType,
	/**
	 * Reference: GoodyHuts(Type)
	 */
	GoodyType: TEXT,
}

declare type Vanilla_HandicapInfo_FreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: Vanilla_HandicapInfosType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_HandicapInfo_AIFreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: Vanilla_HandicapInfosType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_HurryInfos = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_HurryInfosType,
	/**
	 */
	Description: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyPrereq: Vanilla_PoliciesType,
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

declare type Vanilla_IconFontTextures = {
	/**
	 * Primary Key
	 */
	IconFontTexture: TEXT,
	/**
	 */
	IconFontTextureFile: TEXT,
}

declare type Vanilla_IconFontMapping = {
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

declare type Vanilla_IconTextureAtlases = {
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

declare type Vanilla_MultiplayerOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MultiplayerOptionsType,
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

declare type Vanilla_PlayerOptions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_PlayerOptionsType,
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

declare type Vanilla_Policies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_PoliciesType,
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
	PolicyBranchType: Vanilla_PolicyBranchTypesType,
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
	ReligionProductionModifier: INTEGER,
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
	TradeRouteGoldModifier: INTEGER,
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
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
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

declare type Vanilla_Policy_CityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CoastalCityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldPerPopChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_Disables = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyDisable: Vanilla_PoliciesType,
}

declare type Vanilla_Policy_Flavors = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Policy_HurryModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: Vanilla_HurryInfosType,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type Vanilla_Policy_PrereqPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: Vanilla_PoliciesType,
}

declare type Vanilla_Policy_PrereqORPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: Vanilla_PoliciesType,
}

declare type Vanilla_Policy_SpecialistExtraYields = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	YieldMod: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	YieldChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_BuildingClassHappiness = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
	/**
	 */
	Happiness: INTEGER,
}

declare type Vanilla_Policy_ImprovementYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_ImprovementCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_ValidSpecialists = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
}

declare type Vanilla_Policy_YieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_FreePromotions = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
}

declare type Vanilla_Policy_UnitCombatFreeExperiences = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	FreeExperience: INTEGER,
}

declare type Vanilla_Policy_FreePromotionUnitCombats = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
}

declare type Vanilla_Policy_UnitCombatProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_FreeUnitClasses = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: Vanilla_UnitClassesType,
	/**
	 * Not Null
	 */
	Count: INTEGER,
}

declare type Vanilla_Policy_FreeItems = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: Vanilla_PoliciesType,
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

declare type Vanilla_PolicyBranchTypes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_PolicyBranchTypesType,
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
	EraPrereq: Vanilla_ErasType,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreePolicy: Vanilla_PoliciesType,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreeFinishingPolicy: Vanilla_PoliciesType,
	/**
	 * @default false
	 */
	AIMutuallyExclusive: BOOLEAN,
}

declare type Vanilla_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: Vanilla_PolicyBranchTypesType,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: Vanilla_PolicyBranchTypesType,
}

declare type Vanilla_Processes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ProcessesType,
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
	TechPrereq: TEXT,
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

declare type Vanilla_Process_ProductionYields = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: Vanilla_ProcessesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Projects = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ProjectsType,
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

declare type Vanilla_Project_Flavors = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: Vanilla_ProjectsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Project_Prereqs = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: Vanilla_ProjectsType,
	/**
	 * Reference: Projects(Type)
	 */
	PrereqProjectType: Vanilla_ProjectsType,
	/**
	 * @default 1
	 */
	AmountNeeded: INTEGER,
}

declare type Vanilla_Project_VictoryThresholds = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: Vanilla_ProjectsType,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: Vanilla_VictoriesType,
	/**
	 * Not Null
	 */
	Threshold: INTEGER,
	/**
	 * @default 0
	 */
	MinThreshold: INTEGER,
}

declare type Vanilla_Project_ResourceQuantityRequirements = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: Vanilla_ProjectsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

declare type Vanilla_ReplayDataSets = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ReplayDataSetsType,
	/**
	 */
	Name: TEXT,
	/**
	 */
	Description: TEXT,
}

declare type Vanilla_SeaLevels = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_SeaLevelsType,
	/**
	 */
	Description: TEXT,
	/**
	 * Not Null
	 */
	SeaLevelChange: INTEGER,
}

declare type Vanilla_SmallAwards = {
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

declare type Vanilla_Specialists = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_SpecialistsType,
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

declare type Vanilla_SpecialistFlavors = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_SpecialistYields = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: Vanilla_SpecialistsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trades = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_TradesType,
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

declare type Vanilla_TurnTimers = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_TurnTimersType,
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

declare type Vanilla_Victories = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_VictoriesType,
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

declare type Vanilla_VictoryPointAwards = {
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: Vanilla_VictoriesType,
	/**
	 * Not Null
	 */
	VictoryPoints: INTEGER,
}

declare type Vanilla_HistoricRankings = {
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

declare type Vanilla_VoteSources = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_VoteSourcesType,
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

declare type Vanilla_Votes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_VotesType,
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

declare type Vanilla_Vote_DiploVotes = {
	/**
	 * Reference: Votes(Type)
	 */
	VoteType: Vanilla_VotesType,
	/**
	 */
	DiploVoteType: TEXT,
}

declare type Vanilla_Worlds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_WorldsType,
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
	AdvancedStartPointsMod: INTEGER,
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

declare type Vanilla_Defines = {
	/**
	 * Primary Key
	 */
	Name: TEXT,
	/**
	 */
	Value: VARIANT,
}

declare type Vanilla_PostDefines = {
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

declare type Vanilla_Colors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ColorsType,
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

declare type Vanilla_InterfaceModes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_InterfaceModesType,
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

declare type Vanilla_PlayerColors = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_PlayerColorsType,
	/**
	 * Not Null
	 * Reference: Colors(type)
	 */
	PrimaryColor: TEXT,
	/**
	 * Not Null
	 * Reference: Colors(Type)
	 */
	SecondaryColor: Vanilla_ColorsType,
	/**
	 * Not Null
	 * Reference: Colors(Type)
	 */
	TextColor: Vanilla_ColorsType,
}

declare type Vanilla_Leaders = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_LeadersType,
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

declare type Vanilla_Leader_MajorCivApproachBiases = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: Vanilla_LeadersType,
	/**
	 * Reference: MajorCivApproachTypes(Type)
	 */
	MajorCivApproachType: Vanilla_MajorCivApproachTypesType,
	/**
	 */
	Bias: INTEGER,
}

declare type Vanilla_Leader_MinorCivApproachBiases = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: Vanilla_LeadersType,
	/**
	 * Reference: MinorCivApproachTypes(Type)
	 */
	MinorCivApproachType: Vanilla_MinorCivApproachTypesType,
	/**
	 */
	Bias: INTEGER,
}

declare type Vanilla_Leader_Flavors = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: Vanilla_LeadersType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Leader_Traits = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: Vanilla_LeadersType,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
}

declare type Vanilla_Routes = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_RoutesType,
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

declare type Vanilla_Route_Yields = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: Vanilla_RoutesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Route_TechMovementChanges = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: Vanilla_RoutesType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Not Null
	 */
	MovementChange: INTEGER,
}

declare type Vanilla_Route_ResourceQuantityRequirements = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: Vanilla_RoutesType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Not Null
	 */
	Cost: INTEGER,
}

declare type Vanilla_Notifications = {
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

declare type Vanilla_Technologies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 */
	Type: TEXT,
	/**
	 * @default NULL
	 */
	Description: TEXT,
	/**
	 * @default NULL
	 */
	Civilopedia: TEXT,
	/**
	 * @default NULL
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

declare type Vanilla_Technology_DomainExtraMoves = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: Vanilla_DomainsType,
	/**
	 */
	Moves: INTEGER,
}

declare type Vanilla_Technology_Flavors = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Technology_ORPrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type Vanilla_Technology_PrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type Vanilla_Features = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_FeaturesType,
	/**
	 */
	Description: TEXT,
	/**
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
	GrowthTerrainType: Vanilla_TerrainsType,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	AdjacentUnitFreePromotion: Vanilla_UnitPromotionsType,
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
	Culture: INTEGER,
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

declare type Vanilla_FakeFeatures = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_FakeFeaturesType,
	/**
	 */
	Description: TEXT,
	/**
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
	GrowthTerrainType: Vanilla_TerrainsType,
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

declare type Vanilla_Feature_YieldChanges = {
	/**
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_RiverYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_HillsYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
}

declare type Vanilla_Improvements = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ImprovementsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
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
	ImprovementPillage: Vanilla_ImprovementsType,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementUpgrade: Vanilla_ImprovementsType,
	/**
	 * @default false
	 */
	SpecificCivRequired: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: Vanilla_CivilizationsType,
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
	GraphicalOnly: BOOLEAN,
	/**
	 * @default false
	 */
	CreatedByGreatPerson: BOOLEAN,
	/**
	 * @default 0
	 */
	Culture: INTEGER,
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
	GoldMaintenance: INTEGER,
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

declare type Vanilla_Improvement_Flavors = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Improvement_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_AdjacentCityYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_CoastalLandYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_FreshWaterYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_HillsYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_AdjacentMountainYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_PrereqNatureYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_RiverSideYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_ValidTerrains = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
}

declare type Vanilla_Improvement_ValidFeatures = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
}

declare type Vanilla_Improvement_ResourceTypes = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
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

declare type Vanilla_Improvement_ResourceType_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_RouteYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: Vanilla_RoutesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechNoFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: Vanilla_ImprovementsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_ResourceClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ResourceClassesType,
	/**
	 */
	UniqueRange: INTEGER,
}

declare type Vanilla_Resources = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ResourcesType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Civilopedia: TEXT,
	/**
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
	TechReveal: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechCityTrade: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechObsolete: TEXT,
	/**
	 * @default NULL
	 */
	AIStopTradingEra: TEXT,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionMod: INTEGER,
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

declare type Vanilla_Resource_YieldChanges = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Resource_Flavors = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * @default 0
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Resource_TerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
}

declare type Vanilla_Resource_FeatureBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
}

declare type Vanilla_Resource_FeatureTerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
}

declare type Vanilla_Resource_QuantityTypes = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
}

declare type Vanilla_Terrains = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_TerrainsType,
	/**
	 */
	Description: TEXT,
	/**
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

declare type Vanilla_Terrain_Yields = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Terrain_RiverYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Terrain_HillsYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: Vanilla_YieldsType,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Yields = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_YieldsType,
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

declare type Vanilla_Automates = {
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

declare type Vanilla_Builds = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_BuildsType,
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
}

declare type Vanilla_BuildFeatures = {
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: Vanilla_BuildsType,
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

declare type Vanilla_Commands = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CommandsType,
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

declare type Vanilla_Controls = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_ControlsType,
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

declare type Vanilla_Missions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MissionsType,
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

declare type Vanilla_MultiUnitPositions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MultiUnitPositionsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Name: TEXT,
}

declare type Vanilla_MultiUnitFormations = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_MultiUnitFormationsType,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Name: TEXT,
}

declare type Vanilla_MultiUnitFormation_SlotEntries = {
	/**
	 * Reference: MultiUnitFormations(Type)
	 */
	MultiUnitFormationType: Vanilla_MultiUnitFormationsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	PrimaryUnitType: Vanilla_UnitAIInfosType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	SecondaryUnitType: Vanilla_UnitAIInfosType,
	/**
	 * Reference: MultiUnitPositions(Type)
	 */
	MultiUnitPositionType: Vanilla_MultiUnitPositionsType,
	/**
	 */
	RequiredSlot: BOOLEAN,
}

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
	TraitType: Vanilla_TraitsType,
	/**
	 */
	Trait: INTEGER,
}

declare type Vanilla_UnitClasses = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_UnitClassesType,
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

declare type Vanilla_MovementRates = {
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

declare type Vanilla_UnitPromotions = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_UnitPromotionsType,
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
	EmbarkedNotCivilian: BOOLEAN,
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
	GreatGeneralModifier: INTEGER,
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
	 * @default NULL
	 */
	LayerAnimationPath: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	Invisible: Vanilla_InvisibleInfosType,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	SeeInvisible: Vanilla_InvisibleInfosType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereq: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr1: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr2: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr3: Vanilla_UnitPromotionsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr4: Vanilla_UnitPromotionsType,
	/**
	 */
	PediaType: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	PediaEntry: TEXT,
}

declare type Vanilla_UnitPromotions_Terrains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: Vanilla_TerrainsType,
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
	PassableTech: TEXT,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_Features = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: Vanilla_FeaturesType,
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
	PassableTech: TEXT,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitClasses = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: Vanilla_UnitClassesType,
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

declare type Vanilla_UnitPromotions_Domains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: Vanilla_DomainsType,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitCombatMods = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitCombats = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: Vanilla_UnitCombatInfosType,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_CivilianAttackPriorities = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_CivilianAttackPrioritiesType,
}

declare type Vanilla_Units = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: Vanilla_UnitsType,
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
	Class: Vanilla_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: SpecialUnits(Type)
	 */
	Special: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitClasses(Type)
	 */
	Capture: Vanilla_UnitClassesType,
	/**
	 * @default NULL
	 * Reference: UnitCombatInfos(Type)
	 */
	CombatClass: Vanilla_UnitCombatInfosType,
	/**
	 * @default NULL
	 * Reference: Domains(Type)
	 */
	Domain: Vanilla_DomainsType,
	/**
	 * @default NULL
	 */
	CivilianAttackPriority: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitAIInfos(Type)
	 */
	DefaultUnitAI: Vanilla_UnitAIInfosType,
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
	GoodyHutUpgradeUnitClass: Vanilla_UnitClassesType,
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
	IsReligious: BOOLEAN,
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
	DomainCargo: Vanilla_DomainsType,
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
	ProjectPrereq: Vanilla_ProjectsType,
	/**
	 * @default NULL
	 * Reference: Projects(Type)
	 */
	SpaceshipProject: Vanilla_ProjectsType,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	LeaderPromotion: Vanilla_UnitPromotionsType,
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

declare type Vanilla_Unit_AITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: Vanilla_UnitAIInfosType,
}

declare type Vanilla_Unit_Buildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
}

declare type Vanilla_Unit_BuildingClassRequireds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: Vanilla_BuildingClassesType,
}

declare type Vanilla_Unit_ProductionModifierBuildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: Vanilla_BuildingsType,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Unit_Builds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: Vanilla_BuildsType,
}

declare type Vanilla_Unit_ClassUpgrades = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: Vanilla_UnitClassesType,
}

declare type Vanilla_Unit_FreePromotions = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: Vanilla_UnitPromotionsType,
}

declare type Vanilla_Unit_Flavors = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: Vanilla_FlavorsType,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Unit_GreatPersons = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Specialists(Type)
	 */
	GreatPersonType: Vanilla_SpecialistsType,
}

declare type Vanilla_Unit_ResourceQuantityRequirements = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: Vanilla_ResourcesType,
	/**
	 * @default 1
	 */
	Cost: INTEGER,
}

declare type Vanilla_Unit_UniqueNames = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Not Null
	 * Reference: Language_en_US(Tag)
	 */
	UniqueName: TEXT,
}

declare type Vanilla_Unit_NotAITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: Vanilla_UnitAIInfosType,
}

declare type Vanilla_Unit_ProductionTraits = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: Vanilla_TraitsType,
	/**
	 */
	Trait: INTEGER,
}

declare type Vanilla_Unit_TechTypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: Vanilla_UnitsType,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_AnimationCategories = {
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

declare type Vanilla_AnimationPaths = {
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

declare type Vanilla_AnimationPath_Entries = {
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

declare type Vanilla_CivilizationsType =
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
	| "CIVILIZATION_BARBARIAN";

declare type Vanilla_ColorsType =
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
	| "COLOR_PLAYER_SONGHAI_BACKGROUND";

declare type Vanilla_PlayerColorsType =
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
	| "PLAYERCOLOR_SONGHAI";

declare type Vanilla_LeadersType =
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
	| "LEADER_WU_ZETIAN";

declare type Vanilla_TraitsType =
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
	| "TRAIT_ENHANCED_GOLDEN_AGES";

declare type Vanilla_UnitPromotionsType =
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
	| "PROMOTION_MORALE"
	| "PROMOTION_ADJACENT_BONUS"
	| "PROMOTION_HIMEJI_CASTLE"
	| "PROMOTION_NAVAL_TRADITION"
	| "PROMOTION_GREAT_LIGHTHOUSE"
	| "PROMOTION_NATIONALISM"
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
	| "PROMOTION_ANTI_HELICOPTER"
	| "PROMOTION_ANTI_FIGHTER"
	| "PROMOTION_ANTI_SUBMARINE_I"
	| "PROMOTION_ANTI_SUBMARINE_II"
	| "PROMOTION_ANTI_TANK"
	| "PROMOTION_EVASION_I"
	| "PROMOTION_EVASION_II"
	| "PROMOTION_NAVAL_PENALTY"
	| "PROMOTION_RIVAL_TERRITORY"
	| "PROMOTION_CARGO_I"
	| "PROMOTION_CARGO_II"
	| "PROMOTION_CARGO_III"
	| "PROMOTION_CARGO_IV"
	| "PROMOTION_FOLIAGE_IMPASSABLE"
	| "PROMOTION_ROUGH_TERRAIN_ENDS_TURN"
	| "PROMOTION_OCEAN_IMPASSABLE_UNTIL_ASTRONOMY"
	| "PROMOTION_OCEAN_IMPASSABLE"
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
	| "PROMOTION_STRONGER_VS_DAMAGED";

declare type Vanilla_UnitsType =
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
	| "UNIT_BARBARIAN_SWORDSMAN";

declare type Vanilla_BuildsType =
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
	| "BUILD_CITADEL";

declare type Vanilla_ImprovementsType =
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
	| "IMPROVEMENT_CITADEL";

declare type Vanilla_BuildingClassesType =
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
	| "BUILDINGCLASS_TEMPLE"
	| "BUILDINGCLASS_OPERA_HOUSE"
	| "BUILDINGCLASS_MUSEUM"
	| "BUILDINGCLASS_BROADCAST_TOWER"
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
	| "BUILDINGCLASS_UNITED_NATIONS"
	| "BUILDINGCLASS_SYDNEY_OPERA_HOUSE"
	| "BUILDINGCLASS_AQUEDUCT"
	| "BUILDINGCLASS_STONE_WORKS";

declare type Vanilla_BuildingsType =
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
	| "BUILDING_UNITED_NATIONS"
	| "BUILDING_SYDNEY_OPERA_HOUSE"
	| "BUILDING_AQUEDUCT"
	| "BUILDING_STONE_WORKS";

declare type Vanilla_AICityStrategiesType =
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
	| "AICITYSTRATEGY_RIVER_CITY"
	| "AICITYSTRATEGY_MOUNTAIN_CITY"
	| "AICITYSTRATEGY_FOREST_CITY"
	| "AICITYSTRATEGY_HILL_CITY"
	| "AICITYSTRATEGY_JUNGLE_CITY"
	| "AICITYSTRATEGY_COAST_CITY"
	| "AICITYSTRATEGY_TINY_CITY";

declare type Vanilla_AIEconomicStrategiesType =
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
	| "ECONOMICAISTRATEGY_EXPAND_LIKE_CRAZY"
	| "ECONOMICAISTRATEGY_GROW_LIKE_CRAZY"
	| "ECONOMICAISTRATEGY_GS_CULTURE"
	| "ECONOMICAISTRATEGY_GS_CONQUEST"
	| "ECONOMICAISTRATEGY_GS_DIPLOMACY"
	| "ECONOMICAISTRATEGY_GS_SPACESHIP"
	| "ECONOMICAISTRATEGY_GS_SPACESHIP_HOMESTRETCH"
	| "ECONOMICAISTRATEGY_REALLY_NEED_RECON_SEA"
	| "ECONOMICAISTRATEGY_MOSTLY_ON_THE_COAST"
	| "ECONOMICAISTRATEGY_NAVAL_MAP";

declare type Vanilla_AIGrandStrategiesType =
	| "AIGRANDSTRATEGY_CULTURE"
	| "AIGRANDSTRATEGY_UNITED_NATIONS"
	| "AIGRANDSTRATEGY_SPACESHIP"
	| "AIGRANDSTRATEGY_CONQUEST";

declare type Vanilla_AIMilitaryStrategiesType =
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
	| "MILITARYAISTRATEGY_ENOUGH_ANTIAIR";

declare type Vanilla_CitySpecializationsType =
	| "CITYSPECIALIZATION_SETTLER_PUMP"
	| "CITYSPECIALIZATION_MILITARY_TRAINING"
	| "CITYSPECIALIZATION_EMERGENCY_UNITS"
	| "CITYSPECIALIZATION_MILITARY_NAVAL"
	| "CITYSPECIALIZATION_PRODUCTION_WONDER"
	| "CITYSPECIALIZATION_PRODUCTION_SPACESHIP"
	| "CITYSPECIALIZATION_COMMERCE"
	| "CITYSPECIALIZATION_SCIENCE"
	| "CITYSPECIALIZATION_GENERAL_ECONOMIC";

declare type Vanilla_TacticalMovesType =
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
	| "TACTICAL_POSTURE_SIT_AND_BOMBARD"
	| "TACTICAL_POSTURE_ATTRIT_FROM_RANGE"
	| "TACTICAL_POSTURE_EXPLOIT_FLANKS"
	| "TACTICAL_POSTURE_STEAMROLL"
	| "TACTICAL_POSTURE_SURGICAL_CITY_STRIKE"
	| "TACTICAL_POSTURE_HEDGEHOG"
	| "TACTICAL_POSTURE_COUNTERATTACK"
	| "TACTICAL_POSTURE_SHORE_BOMBARDMENT"
	| "TACTICAL_CLOSE_ON_TARGET"
	| "TACTICAL_MOVE_OPERATIONS"
	| "TACTICAL_EMERGENCY_PURCHASES"
	| "TACTICAL_ATTACK_EMBARKED_MILITARY_UNIT"
	| "TACTICAL_ATTACK_EMBARKED_CIVILIAN"
	| "TACTICAL_ATTACK_VERY_HIGH_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_HIGH_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_MEDIUM_PRIORITY_CIVILIAN"
	| "TACTICAL_ATTACK_LOW_PRIORITY_CIVILIAN";

declare type Vanilla_AttitudesType =
	| "ATTITUDE_FURIOUS"
	| "ATTITUDE_ANNOYED"
	| "ATTITUDE_CAUTIOUS"
	| "ATTITUDE_PLEASED"
	| "ATTITUDE_FRIENDLY";

declare type Vanilla_CitySizesType =
	| "CITYSIZE_SMALL"
	| "CITYSIZE_MEDIUM"
	| "CITYSIZE_LARGE";

declare type Vanilla_ConceptsType =
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
	| "CONCEPT_SPECIALISTS_AND_GREAT_PEOPLE_GREAT_PEOPLE_GOLDEN_AGE"
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
	| "CONCEPT_UNITS_AIR_UNITS";

declare type Vanilla_ContactsType =
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

declare type Vanilla_DomainsType =
	| "DOMAIN_SEA"
	| "DOMAIN_AIR"
	| "DOMAIN_LAND"
	| "DOMAIN_IMMOBILE";

declare type Vanilla_InvisibleInfosType =
	| "INVISIBLE_SUBMARINE";

declare type Vanilla_MajorCivApproachTypesType =
	| "MAJOR_CIV_APPROACH_WAR"
	| "MAJOR_CIV_APPROACH_HOSTILE"
	| "MAJOR_CIV_APPROACH_DECEPTIVE"
	| "MAJOR_CIV_APPROACH_GUARDED"
	| "MAJOR_CIV_APPROACH_AFRAID"
	| "MAJOR_CIV_APPROACH_FRIENDLY"
	| "MAJOR_CIV_APPROACH_NEUTRAL";

declare type Vanilla_MinorCivApproachTypesType =
	| "MINOR_CIV_APPROACH_IGNORE"
	| "MINOR_CIV_APPROACH_FRIENDLY"
	| "MINOR_CIV_APPROACH_PROTECTIVE"
	| "MINOR_CIV_APPROACH_CONQUEST";

declare type Vanilla_MinorCivTraitsType =
	| "MINOR_TRAIT_CULTURED"
	| "MINOR_TRAIT_MILITARISTIC"
	| "MINOR_TRAIT_MARITIME";

declare type Vanilla_MonthsType =
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

declare type Vanilla_SeasonsType =
	| "SEASON_WINTER"
	| "SEASON_SPRING"
	| "SEASON_SUMMER"
	| "SEASON_FALL";

declare type Vanilla_UnitAIInfosType =
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
	| "UNITAI_TREASURE";

declare type Vanilla_UnitCombatInfosType =
	| "UNITCOMBAT_RECON"
	| "UNITCOMBAT_ARCHER"
	| "UNITCOMBAT_MOUNTED"
	| "UNITCOMBAT_MELEE"
	| "UNITCOMBAT_SIEGE"
	| "UNITCOMBAT_GUN"
	| "UNITCOMBAT_ARMOR"
	| "UNITCOMBAT_HELICOPTER"
	| "UNITCOMBAT_NAVAL"
	| "UNITCOMBAT_FIGHTER"
	| "UNITCOMBAT_BOMBER";

declare type Vanilla_MinorCivilizationsType =
	| "MINOR_CIV_WARSAW"
	| "MINOR_CIV_EDINBURGH"
	| "MINOR_CIV_DUBLIN"
	| "MINOR_CIV_GENEVA"
	| "MINOR_CIV_VENICE"
	| "MINOR_CIV_GENOA"
	| "MINOR_CIV_FLORENCE"
	| "MINOR_CIV_RAGUSA"
	| "MINOR_CIV_COPENHAGEN"
	| "MINOR_CIV_OSLO"
	| "MINOR_CIV_STOCKHOLM"
	| "MINOR_CIV_HELSINKI"
	| "MINOR_CIV_BUCHAREST"
	| "MINOR_CIV_BUDAPEST"
	| "MINOR_CIV_BELGRADE"
	| "MINOR_CIV_VIENNA"
	| "MINOR_CIV_BRUSSELS"
	| "MINOR_CIV_MONACO"
	| "MINOR_CIV_SEOUL"
	| "MINOR_CIV_HANOI"
	| "MINOR_CIV_LHASA"
	| "MINOR_CIV_ALMATY"
	| "MINOR_CIV_KUALA_LUMPUR"
	| "MINOR_CIV_SINGAPORE"
	| "MINOR_CIV_RIO_DE_JANEIRO"
	| "MINOR_CAPE_TOWN"
	| "MINOR_SIDON"
	| "MINOR_TYRE";

declare type Vanilla_RegionsType =
	| "REGION_UNDEFINED"
	| "REGION_TUNDRA"
	| "REGION_JUNGLE"
	| "REGION_FOREST"
	| "REGION_DESERT"
	| "REGION_HILLS"
	| "REGION_PLAINS"
	| "REGION_GRASS"
	| "REGION_HYBRID";

declare type Vanilla_ArtStyleTypesType =
	| "ARTSTYLE_SOUTH_AMERICA"
	| "ARTSTYLE_ASIAN"
	| "ARTSTYLE_MIDDLE_EAST"
	| "ARTSTYLE_EUROPEAN"
	| "ARTSTYLE_GRECO_ROMAN"
	| "ARTSTYLE_POLYNESIAN"
	| "ARTSTYLE_BARBARIAN";

declare type Vanilla_ClimatesType =
	| "CLIMATE_TEMPERATE"
	| "CLIMATE_TROPICAL"
	| "CLIMATE_ARID"
	| "CLIMATE_ROCKY"
	| "CLIMATE_COLD";

declare type Vanilla_CultureLevelsType =
	| "CULTURELEVEL_NONE"
	| "CULTURELEVEL_POOR"
	| "CULTURELEVEL_FLEDGLING"
	| "CULTURELEVEL_DEVELOPING"
	| "CULTURELEVEL_REFINED"
	| "CULTURELEVEL_INFLUENTIAL"
	| "CULTURELEVEL_LEGENDARY";

declare type Vanilla_CursorsType =
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

declare type Vanilla_EmphasizeInfosType =
	| "EMPHASIZE_FOOD"
	| "EMPHASIZE_PRODUCTION"
	| "EMPHASIZE_RESEARCH"
	| "EMPHASIZE_GREAT_PEOPLE"
	| "EMPHASIZE_AVOID_GROWTH";

declare type Vanilla_ErasType =
	| "ERA_ANCIENT"
	| "ERA_CLASSICAL"
	| "ERA_MEDIEVAL"
	| "ERA_RENAISSANCE"
	| "ERA_INDUSTRIAL"
	| "ERA_MODERN"
	| "ERA_FUTURE";

declare type Vanilla_FlavorsType =
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
	| "FLAVOR_AIR_CARRIER";

declare type Vanilla_GameOptionsType =
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
	| "GAMEOPTION_QUICK_MOVEMENT";

declare type Vanilla_GameSpeedsType =
	| "GAMESPEED_MARATHON"
	| "GAMESPEED_EPIC"
	| "GAMESPEED_STANDARD"
	| "GAMESPEED_QUICK";

declare type Vanilla_HandicapInfosType =
	| "HANDICAP_SETTLER"
	| "HANDICAP_CHIEFTAIN"
	| "HANDICAP_WARLORD"
	| "HANDICAP_PRINCE"
	| "HANDICAP_KING"
	| "HANDICAP_EMPEROR"
	| "HANDICAP_IMMORTAL"
	| "HANDICAP_DEITY";

declare type Vanilla_HurryInfosType =
	| "HURRY_POPULATION"
	| "HURRY_GOLD";

declare type Vanilla_MultiplayerOptionsType =
	| "MPOPTION_TAKEOVER_AI"
	| "MPOPTION_SHUFFLE_TEAMS"
	| "MPOPTION_ANONYMOUS"
	| "MPOPTION_TURN_TIMER";

declare type Vanilla_PlayerOptionsType =
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

declare type Vanilla_PoliciesType =
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
	| "POLICY_AESTHETICS"
	| "POLICY_SCHOLASTICISM"
	| "POLICY_CULTURAL_DIPLOMACY"
	| "POLICY_EDUCATED_ELITE"
	| "POLICY_COMMERCE"
	| "POLICY_TRADE_UNIONS"
	| "POLICY_NAVAL_TRADITION"
	| "POLICY_MERCANTILISM"
	| "POLICY_MERCHANT_NAVY"
	| "POLICY_PROTECTIONISM"
	| "POLICY_RATIONALISM"
	| "POLICY_SECULARISM"
	| "POLICY_HUMANISM"
	| "POLICY_FREE_THOUGHT"
	| "POLICY_SOVEREIGNTY"
	| "POLICY_SCIENTIFIC_REVOLUTION"
	| "POLICY_FREEDOM"
	| "POLICY_CONSTITUTION"
	| "POLICY_UNIVERSAL_SUFFRAGE"
	| "POLICY_CIVIL_SOCIETY"
	| "POLICY_FREE_SPEECH"
	| "POLICY_DEMOCRACY"
	| "POLICY_ORDER"
	| "POLICY_UNITED_FRONT"
	| "POLICY_SOCIALISM"
	| "POLICY_NATIONALISM"
	| "POLICY_PLANNED_ECONOMY"
	| "POLICY_COMMUNISM"
	| "POLICY_AUTOCRACY"
	| "POLICY_POPULISM"
	| "POLICY_MILITARISM"
	| "POLICY_FASCISM"
	| "POLICY_POLICE_STATE"
	| "POLICY_TOTAL_WAR"
	| "POLICY_TRADITION_FINISHER"
	| "POLICY_LIBERTY_FINISHER"
	| "POLICY_HONOR_FINISHER"
	| "POLICY_PIETY_FINISHER"
	| "POLICY_PATRONAGE_FINISHER"
	| "POLICY_COMMERCE_FINISHER"
	| "POLICY_RATIONALISM_FINISHER"
	| "POLICY_FREEDOM_FINISHER"
	| "POLICY_ORDER_FINISHER"
	| "POLICY_AUTOCRACY_FINISHER";

declare type Vanilla_PolicyBranchTypesType =
	| "POLICY_BRANCH_TRADITION"
	| "POLICY_BRANCH_LIBERTY"
	| "POLICY_BRANCH_HONOR"
	| "POLICY_BRANCH_PIETY"
	| "POLICY_BRANCH_PATRONAGE"
	| "POLICY_BRANCH_COMMERCE"
	| "POLICY_BRANCH_RATIONALISM"
	| "POLICY_BRANCH_FREEDOM"
	| "POLICY_BRANCH_ORDER"
	| "POLICY_BRANCH_AUTOCRACY";

declare type Vanilla_ProcessesType =
	| "PROCESS_WEALTH"
	| "PROCESS_RESEARCH";

declare type Vanilla_ProjectsType =
	| "PROJECT_MANHATTAN_PROJECT"
	| "PROJECT_APOLLO_PROGRAM"
	| "PROJECT_SS_COCKPIT"
	| "PROJECT_SS_STASIS_CHAMBER"
	| "PROJECT_SS_ENGINE"
	| "PROJECT_SS_BOOSTER"
	| "PROJECT_UTOPIA_PROJECT";

declare type Vanilla_ReplayDataSetsType =
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

declare type Vanilla_SeaLevelsType =
	| "SEALEVEL_LOW"
	| "SEALEVEL_MEDIUM"
	| "SEALEVEL_HIGH";

declare type Vanilla_SpecialistsType =
	| "SPECIALIST_CITIZEN"
	| "SPECIALIST_ARTIST"
	| "SPECIALIST_SCIENTIST"
	| "SPECIALIST_MERCHANT"
	| "SPECIALIST_ENGINEER";

declare type Vanilla_TradesType =
	| "TRADE_GOLD"
	| "TRADE_RESEARCH"
	| "TRADE_CULTURE";

declare type Vanilla_TurnTimersType =
	| "TURNTIMER_STATIC"
	| "TURNTIMER_SNAIL"
	| "TURNTIMER_SLOW"
	| "TURNTIMER_MEDIUM"
	| "TURNTIMER_FAST"
	| "TURNTIMER_BLAZING";

declare type Vanilla_VictoriesType =
	| "VICTORY_TIME"
	| "VICTORY_SPACE_RACE"
	| "VICTORY_DOMINATION"
	| "VICTORY_CULTURAL"
	| "VICTORY_DIPLOMATIC";

declare type Vanilla_VoteSourcesType =
	| "DIPLOVOTE_UN"
	| "DIPLOVOTE_POPE";

declare type Vanilla_VotesType =
	| "VOTE_SECRETARY_GENERAL";

declare type Vanilla_WorldsType =
	| "WORLDSIZE_DUEL"
	| "WORLDSIZE_TINY"
	| "WORLDSIZE_SMALL"
	| "WORLDSIZE_STANDARD"
	| "WORLDSIZE_LARGE"
	| "WORLDSIZE_HUGE";

declare type Vanilla_InterfaceModesType =
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

declare type Vanilla_RoutesType =
	| "ROUTE_ROAD"
	| "ROUTE_RAILROAD";

declare type Vanilla_FeaturesType =
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
	| "FEATURE_ATOLL";

declare type Vanilla_FakeFeaturesType =
	| "FEATURE_LAKE"
	| "FEATURE_RIVER";

declare type Vanilla_ResourceClassesType =
	| "RESOURCECLASS_BONUS"
	| "RESOURCECLASS_LUXURY"
	| "RESOURCECLASS_RUSH"
	| "RESOURCECLASS_MODERN";

declare type Vanilla_ResourcesType =
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
	| "RESOURCE_INCENSE";

declare type Vanilla_TerrainsType =
	| "TERRAIN_GRASS"
	| "TERRAIN_PLAINS"
	| "TERRAIN_DESERT"
	| "TERRAIN_TUNDRA"
	| "TERRAIN_SNOW"
	| "TERRAIN_COAST"
	| "TERRAIN_OCEAN"
	| "TERRAIN_MOUNTAIN"
	| "TERRAIN_HILL";

declare type Vanilla_YieldsType =
	| "YIELD_FOOD"
	| "YIELD_PRODUCTION"
	| "YIELD_GOLD"
	| "YIELD_SCIENCE";

declare type Vanilla_CommandsType =
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

declare type Vanilla_ControlsType =
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
	| "CONTROL_ADVISOR_COUNSEL";

declare type Vanilla_MissionsType =
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
	| "MISSION_SPACESHIP"
	| "MISSION_CULTURE_BOMB"
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
	| "MISSION_WAIT_FOR";

declare type Vanilla_MultiUnitPositionsType =
	| "MUPOSITION_FRONT_LINE"
	| "MUPOSITION_BOMBARD"
	| "MUPOSITION_CIVILIAN_SUPPORT"
	| "MUPOSITION_NAVAL_ESCORT";

declare type Vanilla_MultiUnitFormationsType =
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
	| "MUFORMATION_EARLY_RUSH";

declare type Vanilla_UnitClassesType =
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
	| "UNITCLASS_SS_BOOSTER";

declare type Vanilla_CivilianAttackPrioritiesType =
	| "NO_CIVILIAN_ATTACK_PRIORITY"
	| "CIVILIAN_ATTACK_PRIORITY_HIGH"
	| "CIVILIAN_ATTACK_PRIORITY_HIGH_EARLY_GAME_ONLY"
	| "CIVILIAN_ATTACK_PRIORITY_LOW";

declare interface Vanilla_DataSet {
	tables: {
		AICityStrategies: Vanilla_AICityStrategies,
		AICityStrategy_Flavors: Vanilla_AICityStrategy_Flavors,
		AICityStrategy_PersonalityFlavorThresholdMods: Vanilla_AICityStrategy_PersonalityFlavorThresholdMods,
		AIEconomicStrategies: Vanilla_AIEconomicStrategies,
		AIEconomicStrategy_Flavors: Vanilla_AIEconomicStrategy_Flavors,
		AIEconomicStrategy_PersonalityFlavorThresholdMods: Vanilla_AIEconomicStrategy_PersonalityFlavorThresholdMods,
		AIGrandStrategies: Vanilla_AIGrandStrategies,
		AIGrandStrategy_Flavors: Vanilla_AIGrandStrategy_Flavors,
		AIGrandStrategy_Yields: Vanilla_AIGrandStrategy_Yields,
		AIGrandStrategy_FlavorMods: Vanilla_AIGrandStrategy_FlavorMods,
		AIMilitaryStrategies: Vanilla_AIMilitaryStrategies,
		AIMilitaryStrategy_Flavors: Vanilla_AIMilitaryStrategy_Flavors,
		AIMilitaryStrategy_PersonalityFlavorThresholdMods: Vanilla_AIMilitaryStrategy_PersonalityFlavorThresholdMods,
		CitySpecializations: Vanilla_CitySpecializations,
		CitySpecialization_Flavors: Vanilla_CitySpecialization_Flavors,
		CitySpecialization_TargetYields: Vanilla_CitySpecialization_TargetYields,
		TacticalMoves: Vanilla_TacticalMoves,
		Attitudes: Vanilla_Attitudes,
		Calendars: Vanilla_Calendars,
		CitySizes: Vanilla_CitySizes,
		Concepts: Vanilla_Concepts,
		Concepts_RelatedConcept: Vanilla_Concepts_RelatedConcept,
		Contacts: Vanilla_Contacts,
		DenialInfos: Vanilla_DenialInfos,
		Domains: Vanilla_Domains,
		InvisibleInfos: Vanilla_InvisibleInfos,
		MajorCivApproachTypes: Vanilla_MajorCivApproachTypes,
		MemoryInfos: Vanilla_MemoryInfos,
		MinorCivApproachTypes: Vanilla_MinorCivApproachTypes,
		MinorCivTraits: Vanilla_MinorCivTraits,
		MinorCivTraits_Status: Vanilla_MinorCivTraits_Status,
		Months: Vanilla_Months,
		Seasons: Vanilla_Seasons,
		UnitAIInfos: Vanilla_UnitAIInfos,
		UnitCombatInfos: Vanilla_UnitCombatInfos,
		BuildingClasses: Vanilla_BuildingClasses,
		BuildingClass_VictoryThresholds: Vanilla_BuildingClass_VictoryThresholds,
		Buildings: Vanilla_Buildings,
		Building_AreaYieldModifiers: Vanilla_Building_AreaYieldModifiers,
		Building_ClassesNeededInCity: Vanilla_Building_ClassesNeededInCity,
		Building_FreeUnits: Vanilla_Building_FreeUnits,
		Building_DomainFreeExperiences: Vanilla_Building_DomainFreeExperiences,
		Building_DomainProductionModifiers: Vanilla_Building_DomainProductionModifiers,
		Building_FreeSpecialistCounts: Vanilla_Building_FreeSpecialistCounts,
		Building_Flavors: Vanilla_Building_Flavors,
		Building_GlobalYieldModifiers: Vanilla_Building_GlobalYieldModifiers,
		Building_HurryModifiers: Vanilla_Building_HurryModifiers,
		Building_LocalResourceAnds: Vanilla_Building_LocalResourceAnds,
		Building_LocalResourceOrs: Vanilla_Building_LocalResourceOrs,
		Building_LockedBuildingClasses: Vanilla_Building_LockedBuildingClasses,
		Building_PrereqBuildingClasses: Vanilla_Building_PrereqBuildingClasses,
		Building_ResourceQuantityRequirements: Vanilla_Building_ResourceQuantityRequirements,
		Building_ResourceYieldModifiers: Vanilla_Building_ResourceYieldModifiers,
		Building_ResourceCultureChanges: Vanilla_Building_ResourceCultureChanges,
		Building_RiverPlotYieldChanges: Vanilla_Building_RiverPlotYieldChanges,
		Building_SeaPlotYieldChanges: Vanilla_Building_SeaPlotYieldChanges,
		Building_LakePlotYieldChanges: Vanilla_Building_LakePlotYieldChanges,
		Building_SeaResourceYieldChanges: Vanilla_Building_SeaResourceYieldChanges,
		Building_ResourceYieldChanges: Vanilla_Building_ResourceYieldChanges,
		Building_FeatureYieldChanges: Vanilla_Building_FeatureYieldChanges,
		Building_SpecialistYieldChanges: Vanilla_Building_SpecialistYieldChanges,
		Building_UnitCombatFreeExperiences: Vanilla_Building_UnitCombatFreeExperiences,
		Building_UnitCombatProductionModifiers: Vanilla_Building_UnitCombatProductionModifiers,
		Building_TechAndPrereqs: Vanilla_Building_TechAndPrereqs,
		Building_YieldChanges: Vanilla_Building_YieldChanges,
		Building_YieldChangesPerPop: Vanilla_Building_YieldChangesPerPop,
		Building_TechEnhancedYieldChanges: Vanilla_Building_TechEnhancedYieldChanges,
		Building_YieldModifiers: Vanilla_Building_YieldModifiers,
		Civilizations: Vanilla_Civilizations,
		Civilization_BuildingClassOverrides: Vanilla_Civilization_BuildingClassOverrides,
		Civilization_CityNames: Vanilla_Civilization_CityNames,
		Civilization_DisableTechs: Vanilla_Civilization_DisableTechs,
		Civilization_FreeBuildingClasses: Vanilla_Civilization_FreeBuildingClasses,
		Civilization_FreeTechs: Vanilla_Civilization_FreeTechs,
		Civilization_FreeUnits: Vanilla_Civilization_FreeUnits,
		Civilization_Leaders: Vanilla_Civilization_Leaders,
		Civilization_UnitClassOverrides: Vanilla_Civilization_UnitClassOverrides,
		Civilization_Start_Along_Ocean: Vanilla_Civilization_Start_Along_Ocean,
		Civilization_Start_Along_River: Vanilla_Civilization_Start_Along_River,
		Civilization_Start_Region_Priority: Vanilla_Civilization_Start_Region_Priority,
		Civilization_Start_Region_Avoid: Vanilla_Civilization_Start_Region_Avoid,
		MinorCivilizations: Vanilla_MinorCivilizations,
		MinorCivilization_Flavors: Vanilla_MinorCivilization_Flavors,
		MinorCivilization_CityNames: Vanilla_MinorCivilization_CityNames,
		Regions: Vanilla_Regions,
		Traits: Vanilla_Traits,
		Trait_ExtraYieldThresholds: Vanilla_Trait_ExtraYieldThresholds,
		Trait_YieldChanges: Vanilla_Trait_YieldChanges,
		Trait_YieldChangesStrategicResources: Vanilla_Trait_YieldChangesStrategicResources,
		Trait_YieldModifiers: Vanilla_Trait_YieldModifiers,
		Trait_FreePromotions: Vanilla_Trait_FreePromotions,
		Trait_FreePromotionUnitCombats: Vanilla_Trait_FreePromotionUnitCombats,
		Trait_MovesChangeUnitCombats: Vanilla_Trait_MovesChangeUnitCombats,
		Trait_Terrains: Vanilla_Trait_Terrains,
		Trait_ResourceQuantityModifiers: Vanilla_Trait_ResourceQuantityModifiers,
		Trait_ImprovementYieldChanges: Vanilla_Trait_ImprovementYieldChanges,
		Trait_SpecialistYieldChanges: Vanilla_Trait_SpecialistYieldChanges,
		Diplomacy_Responses: Vanilla_Diplomacy_Responses,
		ArtStyleTypes: Vanilla_ArtStyleTypes,
		Climates: Vanilla_Climates,
		CultureLevels: Vanilla_CultureLevels,
		CultureLevel_SpeedThresholds: Vanilla_CultureLevel_SpeedThresholds,
		Cursors: Vanilla_Cursors,
		EmphasizeInfos: Vanilla_EmphasizeInfos,
		EmphasizeInfo_Yields: Vanilla_EmphasizeInfo_Yields,
		Eras: Vanilla_Eras,
		Era_Soundtracks: Vanilla_Era_Soundtracks,
		Era_CitySoundscapes: Vanilla_Era_CitySoundscapes,
		Era_NewEraVOs: Vanilla_Era_NewEraVOs,
		Flavors: Vanilla_Flavors,
		GameOptions: Vanilla_GameOptions,
		GameSpeeds: Vanilla_GameSpeeds,
		GameSpeed_Turns: Vanilla_GameSpeed_Turns,
		GoodyHuts: Vanilla_GoodyHuts,
		HandicapInfos: Vanilla_HandicapInfos,
		HandicapInfo_Goodies: Vanilla_HandicapInfo_Goodies,
		HandicapInfo_FreeTechs: Vanilla_HandicapInfo_FreeTechs,
		HandicapInfo_AIFreeTechs: Vanilla_HandicapInfo_AIFreeTechs,
		HurryInfos: Vanilla_HurryInfos,
		IconFontTextures: Vanilla_IconFontTextures,
		IconFontMapping: Vanilla_IconFontMapping,
		IconTextureAtlases: Vanilla_IconTextureAtlases,
		MultiplayerOptions: Vanilla_MultiplayerOptions,
		PlayerOptions: Vanilla_PlayerOptions,
		Policies: Vanilla_Policies,
		Policy_CityYieldChanges: Vanilla_Policy_CityYieldChanges,
		Policy_CoastalCityYieldChanges: Vanilla_Policy_CoastalCityYieldChanges,
		Policy_CapitalYieldChanges: Vanilla_Policy_CapitalYieldChanges,
		Policy_CapitalYieldPerPopChanges: Vanilla_Policy_CapitalYieldPerPopChanges,
		Policy_CapitalYieldModifiers: Vanilla_Policy_CapitalYieldModifiers,
		Policy_Disables: Vanilla_Policy_Disables,
		Policy_Flavors: Vanilla_Policy_Flavors,
		Policy_HurryModifiers: Vanilla_Policy_HurryModifiers,
		Policy_PrereqPolicies: Vanilla_Policy_PrereqPolicies,
		Policy_PrereqORPolicies: Vanilla_Policy_PrereqORPolicies,
		Policy_SpecialistExtraYields: Vanilla_Policy_SpecialistExtraYields,
		Policy_BuildingClassYieldModifiers: Vanilla_Policy_BuildingClassYieldModifiers,
		Policy_BuildingClassYieldChanges: Vanilla_Policy_BuildingClassYieldChanges,
		Policy_BuildingClassCultureChanges: Vanilla_Policy_BuildingClassCultureChanges,
		Policy_BuildingClassProductionModifiers: Vanilla_Policy_BuildingClassProductionModifiers,
		Policy_BuildingClassHappiness: Vanilla_Policy_BuildingClassHappiness,
		Policy_ImprovementYieldChanges: Vanilla_Policy_ImprovementYieldChanges,
		Policy_ImprovementCultureChanges: Vanilla_Policy_ImprovementCultureChanges,
		Policy_ValidSpecialists: Vanilla_Policy_ValidSpecialists,
		Policy_YieldModifiers: Vanilla_Policy_YieldModifiers,
		Policy_FreePromotions: Vanilla_Policy_FreePromotions,
		Policy_UnitCombatFreeExperiences: Vanilla_Policy_UnitCombatFreeExperiences,
		Policy_FreePromotionUnitCombats: Vanilla_Policy_FreePromotionUnitCombats,
		Policy_UnitCombatProductionModifiers: Vanilla_Policy_UnitCombatProductionModifiers,
		Policy_FreeUnitClasses: Vanilla_Policy_FreeUnitClasses,
		Policy_FreeItems: Vanilla_Policy_FreeItems,
		PolicyBranchTypes: Vanilla_PolicyBranchTypes,
		PolicyBranch_Disables: Vanilla_PolicyBranch_Disables,
		Processes: Vanilla_Processes,
		Process_ProductionYields: Vanilla_Process_ProductionYields,
		Projects: Vanilla_Projects,
		Project_Flavors: Vanilla_Project_Flavors,
		Project_Prereqs: Vanilla_Project_Prereqs,
		Project_VictoryThresholds: Vanilla_Project_VictoryThresholds,
		Project_ResourceQuantityRequirements: Vanilla_Project_ResourceQuantityRequirements,
		ReplayDataSets: Vanilla_ReplayDataSets,
		SeaLevels: Vanilla_SeaLevels,
		SmallAwards: Vanilla_SmallAwards,
		Specialists: Vanilla_Specialists,
		SpecialistFlavors: Vanilla_SpecialistFlavors,
		SpecialistYields: Vanilla_SpecialistYields,
		Trades: Vanilla_Trades,
		TurnTimers: Vanilla_TurnTimers,
		Victories: Vanilla_Victories,
		VictoryPointAwards: Vanilla_VictoryPointAwards,
		HistoricRankings: Vanilla_HistoricRankings,
		VoteSources: Vanilla_VoteSources,
		Votes: Vanilla_Votes,
		Vote_DiploVotes: Vanilla_Vote_DiploVotes,
		Worlds: Vanilla_Worlds,
		Defines: Vanilla_Defines,
		PostDefines: Vanilla_PostDefines,
		Colors: Vanilla_Colors,
		InterfaceModes: Vanilla_InterfaceModes,
		PlayerColors: Vanilla_PlayerColors,
		Leaders: Vanilla_Leaders,
		Leader_MajorCivApproachBiases: Vanilla_Leader_MajorCivApproachBiases,
		Leader_MinorCivApproachBiases: Vanilla_Leader_MinorCivApproachBiases,
		Leader_Flavors: Vanilla_Leader_Flavors,
		Leader_Traits: Vanilla_Leader_Traits,
		Routes: Vanilla_Routes,
		Route_Yields: Vanilla_Route_Yields,
		Route_TechMovementChanges: Vanilla_Route_TechMovementChanges,
		Route_ResourceQuantityRequirements: Vanilla_Route_ResourceQuantityRequirements,
		Notifications: Vanilla_Notifications,
		Technologies: Vanilla_Technologies,
		Technology_DomainExtraMoves: Vanilla_Technology_DomainExtraMoves,
		Technology_Flavors: Vanilla_Technology_Flavors,
		Technology_ORPrereqTechs: Vanilla_Technology_ORPrereqTechs,
		Technology_PrereqTechs: Vanilla_Technology_PrereqTechs,
		Features: Vanilla_Features,
		FakeFeatures: Vanilla_FakeFeatures,
		Feature_YieldChanges: Vanilla_Feature_YieldChanges,
		Feature_RiverYieldChanges: Vanilla_Feature_RiverYieldChanges,
		Feature_HillsYieldChanges: Vanilla_Feature_HillsYieldChanges,
		Feature_TerrainBooleans: Vanilla_Feature_TerrainBooleans,
		Improvements: Vanilla_Improvements,
		Improvement_Flavors: Vanilla_Improvement_Flavors,
		Improvement_Yields: Vanilla_Improvement_Yields,
		Improvement_AdjacentCityYields: Vanilla_Improvement_AdjacentCityYields,
		Improvement_CoastalLandYields: Vanilla_Improvement_CoastalLandYields,
		Improvement_FreshWaterYields: Vanilla_Improvement_FreshWaterYields,
		Improvement_HillsYields: Vanilla_Improvement_HillsYields,
		Improvement_AdjacentMountainYieldChanges: Vanilla_Improvement_AdjacentMountainYieldChanges,
		Improvement_PrereqNatureYields: Vanilla_Improvement_PrereqNatureYields,
		Improvement_RiverSideYields: Vanilla_Improvement_RiverSideYields,
		Improvement_ValidTerrains: Vanilla_Improvement_ValidTerrains,
		Improvement_ValidFeatures: Vanilla_Improvement_ValidFeatures,
		Improvement_ResourceTypes: Vanilla_Improvement_ResourceTypes,
		Improvement_ResourceType_Yields: Vanilla_Improvement_ResourceType_Yields,
		Improvement_RouteYieldChanges: Vanilla_Improvement_RouteYieldChanges,
		Improvement_TechYieldChanges: Vanilla_Improvement_TechYieldChanges,
		Improvement_TechNoFreshWaterYieldChanges: Vanilla_Improvement_TechNoFreshWaterYieldChanges,
		Improvement_TechFreshWaterYieldChanges: Vanilla_Improvement_TechFreshWaterYieldChanges,
		ResourceClasses: Vanilla_ResourceClasses,
		Resources: Vanilla_Resources,
		Resource_YieldChanges: Vanilla_Resource_YieldChanges,
		Resource_Flavors: Vanilla_Resource_Flavors,
		Resource_TerrainBooleans: Vanilla_Resource_TerrainBooleans,
		Resource_FeatureBooleans: Vanilla_Resource_FeatureBooleans,
		Resource_FeatureTerrainBooleans: Vanilla_Resource_FeatureTerrainBooleans,
		Resource_QuantityTypes: Vanilla_Resource_QuantityTypes,
		Terrains: Vanilla_Terrains,
		Terrain_Yields: Vanilla_Terrain_Yields,
		Terrain_RiverYieldChanges: Vanilla_Terrain_RiverYieldChanges,
		Terrain_HillsYieldChanges: Vanilla_Terrain_HillsYieldChanges,
		Yields: Vanilla_Yields,
		Automates: Vanilla_Automates,
		Builds: Vanilla_Builds,
		BuildFeatures: Vanilla_BuildFeatures,
		Commands: Vanilla_Commands,
		Controls: Vanilla_Controls,
		Missions: Vanilla_Missions,
		MultiUnitPositions: Vanilla_MultiUnitPositions,
		MultiUnitFormations: Vanilla_MultiUnitFormations,
		MultiUnitFormation_SlotEntries: Vanilla_MultiUnitFormation_SlotEntries,
		SpecialUnits: Vanilla_SpecialUnits,
		SpecialUnit_CarrierUnitAI: Vanilla_SpecialUnit_CarrierUnitAI,
		SpecialUnit_ProductionTraits: Vanilla_SpecialUnit_ProductionTraits,
		UnitClasses: Vanilla_UnitClasses,
		MovementRates: Vanilla_MovementRates,
		UnitPromotions: Vanilla_UnitPromotions,
		UnitPromotions_Terrains: Vanilla_UnitPromotions_Terrains,
		UnitPromotions_Features: Vanilla_UnitPromotions_Features,
		UnitPromotions_UnitClasses: Vanilla_UnitPromotions_UnitClasses,
		UnitPromotions_Domains: Vanilla_UnitPromotions_Domains,
		UnitPromotions_UnitCombatMods: Vanilla_UnitPromotions_UnitCombatMods,
		UnitPromotions_UnitCombats: Vanilla_UnitPromotions_UnitCombats,
		CivilianAttackPriorities: Vanilla_CivilianAttackPriorities,
		Units: Vanilla_Units,
		Unit_AITypes: Vanilla_Unit_AITypes,
		Unit_Buildings: Vanilla_Unit_Buildings,
		Unit_BuildingClassRequireds: Vanilla_Unit_BuildingClassRequireds,
		Unit_ProductionModifierBuildings: Vanilla_Unit_ProductionModifierBuildings,
		Unit_Builds: Vanilla_Unit_Builds,
		Unit_ClassUpgrades: Vanilla_Unit_ClassUpgrades,
		Unit_FreePromotions: Vanilla_Unit_FreePromotions,
		Unit_Flavors: Vanilla_Unit_Flavors,
		Unit_GreatPersons: Vanilla_Unit_GreatPersons,
		Unit_ResourceQuantityRequirements: Vanilla_Unit_ResourceQuantityRequirements,
		Unit_UniqueNames: Vanilla_Unit_UniqueNames,
		Unit_NotAITypes: Vanilla_Unit_NotAITypes,
		Unit_ProductionTraits: Vanilla_Unit_ProductionTraits,
		Unit_TechTypes: Vanilla_Unit_TechTypes,
		AnimationCategories: Vanilla_AnimationCategories,
		AnimationPaths: Vanilla_AnimationPaths,
		AnimationPath_Entries: Vanilla_AnimationPath_Entries,
		EntityEvents: Vanilla_EntityEvents,
		EntityEvent_AnimationPaths: Vanilla_EntityEvent_AnimationPaths,
	},
	keys: {
		Civilizations: Vanilla_CivilizationsType,
		Colors: Vanilla_ColorsType,
		PlayerColors: Vanilla_PlayerColorsType,
		Leaders: Vanilla_LeadersType,
		Traits: Vanilla_TraitsType,
		UnitPromotions: Vanilla_UnitPromotionsType,
		Units: Vanilla_UnitsType,
		Builds: Vanilla_BuildsType,
		Improvements: Vanilla_ImprovementsType,
		BuildingClasses: Vanilla_BuildingClassesType,
		Buildings: Vanilla_BuildingsType,
		AICityStrategies: Vanilla_AICityStrategiesType,
		AIEconomicStrategies: Vanilla_AIEconomicStrategiesType,
		AIGrandStrategies: Vanilla_AIGrandStrategiesType,
		AIMilitaryStrategies: Vanilla_AIMilitaryStrategiesType,
		CitySpecializations: Vanilla_CitySpecializationsType,
		TacticalMoves: Vanilla_TacticalMovesType,
		Attitudes: Vanilla_AttitudesType,
		CitySizes: Vanilla_CitySizesType,
		Concepts: Vanilla_ConceptsType,
		Contacts: Vanilla_ContactsType,
		Domains: Vanilla_DomainsType,
		InvisibleInfos: Vanilla_InvisibleInfosType,
		MajorCivApproachTypes: Vanilla_MajorCivApproachTypesType,
		MinorCivApproachTypes: Vanilla_MinorCivApproachTypesType,
		MinorCivTraits: Vanilla_MinorCivTraitsType,
		Months: Vanilla_MonthsType,
		Seasons: Vanilla_SeasonsType,
		UnitAIInfos: Vanilla_UnitAIInfosType,
		UnitCombatInfos: Vanilla_UnitCombatInfosType,
		MinorCivilizations: Vanilla_MinorCivilizationsType,
		Regions: Vanilla_RegionsType,
		ArtStyleTypes: Vanilla_ArtStyleTypesType,
		Climates: Vanilla_ClimatesType,
		CultureLevels: Vanilla_CultureLevelsType,
		Cursors: Vanilla_CursorsType,
		EmphasizeInfos: Vanilla_EmphasizeInfosType,
		Eras: Vanilla_ErasType,
		Flavors: Vanilla_FlavorsType,
		GameOptions: Vanilla_GameOptionsType,
		GameSpeeds: Vanilla_GameSpeedsType,
		HandicapInfos: Vanilla_HandicapInfosType,
		HurryInfos: Vanilla_HurryInfosType,
		MultiplayerOptions: Vanilla_MultiplayerOptionsType,
		PlayerOptions: Vanilla_PlayerOptionsType,
		Policies: Vanilla_PoliciesType,
		PolicyBranchTypes: Vanilla_PolicyBranchTypesType,
		Processes: Vanilla_ProcessesType,
		Projects: Vanilla_ProjectsType,
		ReplayDataSets: Vanilla_ReplayDataSetsType,
		SeaLevels: Vanilla_SeaLevelsType,
		Specialists: Vanilla_SpecialistsType,
		Trades: Vanilla_TradesType,
		TurnTimers: Vanilla_TurnTimersType,
		Victories: Vanilla_VictoriesType,
		VoteSources: Vanilla_VoteSourcesType,
		Votes: Vanilla_VotesType,
		Worlds: Vanilla_WorldsType,
		InterfaceModes: Vanilla_InterfaceModesType,
		Routes: Vanilla_RoutesType,
		Features: Vanilla_FeaturesType,
		FakeFeatures: Vanilla_FakeFeaturesType,
		ResourceClasses: Vanilla_ResourceClassesType,
		Resources: Vanilla_ResourcesType,
		Terrains: Vanilla_TerrainsType,
		Yields: Vanilla_YieldsType,
		Commands: Vanilla_CommandsType,
		Controls: Vanilla_ControlsType,
		Missions: Vanilla_MissionsType,
		MultiUnitPositions: Vanilla_MultiUnitPositionsType,
		MultiUnitFormations: Vanilla_MultiUnitFormationsType,
		UnitClasses: Vanilla_UnitClassesType,
		CivilianAttackPriorities: Vanilla_CivilianAttackPrioritiesType,
	},
}
