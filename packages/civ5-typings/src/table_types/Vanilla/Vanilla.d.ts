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
	Type: TEXT,
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
	AICityStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AICityStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AICityStrategies(Type)
	 */
	AICityStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
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
	Type: TEXT,
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
	AIEconomicStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIEconomicStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIEconomicStrategies(Type)
	 */
	AIEconomicStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
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
	Type: TEXT,
}

declare type Vanilla_AIGrandStrategy_Flavors = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIGrandStrategy_Yields = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_AIGrandStrategy_FlavorMods = {
	/**
	 * Reference: AIGrandStrategies(Type)
	 */
	AIGrandStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
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
	Type: TEXT,
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
	AIMilitaryStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_AIMilitaryStrategy_PersonalityFlavorThresholdMods = {
	/**
	 * Reference: AIMilitaryStrategies(Type)
	 */
	AIMilitaryStrategyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
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
	Type: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
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
	CitySpecializationType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_CitySpecialization_TargetYields = {
	/**
	 * Reference: CitySpecializations(Type)
	 */
	CitySpecializationType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
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
	Type: TEXT,
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
	Type: TEXT,
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
	BuildingClassType: TEXT,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: TEXT,
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
	BuildingClass: TEXT,
	/**
	 * @default NULL
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	NearbyTerrainRequired: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	ProhibitedCityTerrain: TEXT,
	/**
	 * @default NULL
	 * Reference: Victories(Type)
	 */
	VictoryPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	FreeStartEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	MaxStartEra: TEXT,
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
	FreeBuilding: TEXT,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuildingThisCity: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotion: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	TrainedFreePromotion: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotionRemoved: TEXT,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	ReplacementBuildingClass: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
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
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ClassesNeededInCity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type Vanilla_Building_FreeUnits = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 */
	NumUnits: INTEGER,
}

declare type Vanilla_Building_DomainFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Experience: INTEGER,
}

declare type Vanilla_Building_DomainProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Modifier: INTEGER,
}

declare type Vanilla_Building_FreeSpecialistCounts = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 */
	Count: INTEGER,
}

declare type Vanilla_Building_Flavors = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Building_GlobalYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_HurryModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: TEXT,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type Vanilla_Building_LocalResourceAnds = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type Vanilla_Building_LocalResourceOrs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type Vanilla_Building_LockedBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type Vanilla_Building_PrereqBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	NumBuildingNeeded: INTEGER,
}

declare type Vanilla_Building_ResourceQuantityRequirements = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	Cost: INTEGER,
}

declare type Vanilla_Building_ResourceYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ResourceCultureChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Building_RiverPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SeaPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_LakePlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SeaResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_ResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_FeatureYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_SpecialistYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_UnitCombatFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	Experience: INTEGER,
}

declare type Vanilla_Building_UnitCombatProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	Modifier: INTEGER,
}

declare type Vanilla_Building_TechAndPrereqs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Building_YieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_YieldChangesPerPop = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_TechEnhancedYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Building_YieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
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
	Type: TEXT,
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
	CivilizationType: TEXT,
	/**
	 * Not Null
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
}

declare type Vanilla_Civilization_CityNames = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
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
	CivilizationType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Civilization_FreeBuildingClasses = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type Vanilla_Civilization_FreeTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_Civilization_FreeUnits = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
	/**
	 */
	Count: INTEGER,
}

declare type Vanilla_Civilization_Leaders = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderheadType: TEXT,
}

declare type Vanilla_Civilization_UnitClassOverrides = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Not Null
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
}

declare type Vanilla_Civilization_Start_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default false
	 */
	StartAlongOcean: BOOLEAN,
}

declare type Vanilla_Civilization_Start_Along_River = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default false
	 */
	StartAlongRiver: BOOLEAN,
}

declare type Vanilla_Civilization_Start_Region_Priority = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: TEXT,
}

declare type Vanilla_Civilization_Start_Region_Avoid = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: TEXT,
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
	Type: TEXT,
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
	MinorCivTrait: TEXT,
}

declare type Vanilla_MinorCivilization_Flavors = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type Vanilla_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Not Null
	 */
	CityName: TEXT,
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
	Type: TEXT,
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
	FreeUnit: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	FreeUnitPrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	CombatBonusImprovement: TEXT,
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
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldChangesStrategicResources = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_YieldModifiers = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_FreePromotions = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Trait_FreePromotionUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Trait_MovesChangeUnitCombats = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	MovesChange: INT,
}

declare type Vanilla_Trait_Terrains = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
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
	TraitType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type Vanilla_Trait_ImprovementYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Trait_SpecialistYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
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
	Type: TEXT,
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
	CultureLevelType: TEXT,
	/**
	 * Reference: GameSpeeds(Type)
	 */
	GameSpeedType: TEXT,
	/**
	 * @default 0
	 */
	Threshold: INTEGER,
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
	Type: TEXT,
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
	EmphasizeType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
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
	Type: TEXT,
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
	EraType: TEXT,
	/**
	 */
	SoundTrack: TEXT,
}

declare type Vanilla_Era_CitySoundscapes = {
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

declare type Vanilla_Era_NewEraVOs = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 */
	VOScript: TEXT,
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
	Type: TEXT,
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
	GameSpeedType: TEXT,
	/**
	 */
	MonthIncrement: INTEGER,
	/**
	 */
	TurnsPerIncrement: INTEGER,
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
	Type: TEXT,
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
	HandicapType: TEXT,
	/**
	 * Reference: GoodyHuts(Type)
	 */
	GoodyType: TEXT,
}

declare type Vanilla_HandicapInfo_FreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type Vanilla_HandicapInfo_AIFreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
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
	Type: TEXT,
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
	PolicyBranchType: TEXT,
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
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CoastalCityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldPerPopChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_Disables = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyDisable: TEXT,
}

declare type Vanilla_Policy_Flavors = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Policy_HurryModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: TEXT,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type Vanilla_Policy_PrereqPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type Vanilla_Policy_PrereqORPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type Vanilla_Policy_SpecialistExtraYields = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	YieldMod: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	YieldChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_BuildingClassHappiness = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	Happiness: INTEGER,
}

declare type Vanilla_Policy_ImprovementYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_ImprovementCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_ValidSpecialists = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
}

declare type Vanilla_Policy_YieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_FreePromotions = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Policy_UnitCombatFreeExperiences = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	FreeExperience: INTEGER,
}

declare type Vanilla_Policy_FreePromotionUnitCombats = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Policy_UnitCombatProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_FreeUnitClasses = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
	/**
	 * Not Null
	 */
	Count: INTEGER,
}

declare type Vanilla_Policy_FreeItems = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
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
	 * Reference: Language_en_US(Tag)
	 */
	Title: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreePolicy: TEXT,
	/**
	 * @default NULL
	 * Reference: Policies(Type)
	 */
	FreeFinishingPolicy: TEXT,
	/**
	 * @default false
	 */
	AIMutuallyExclusive: BOOLEAN,
}

declare type Vanilla_PolicyBranch_Disables = {
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: TEXT,
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
	Type: TEXT,
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
	ProcessType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
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
	Type: TEXT,
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
	ProjectType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Project_Prereqs = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Projects(Type)
	 */
	PrereqProjectType: TEXT,
	/**
	 * @default 1
	 */
	AmountNeeded: INTEGER,
}

declare type Vanilla_Project_VictoryThresholds = {
	/**
	 * Reference: Projects(Type)
	 */
	ProjectType: TEXT,
	/**
	 * Reference: Victories(Type)
	 */
	VictoryType: TEXT,
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
	ProjectType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Not Null
	 */
	Quantity: INTEGER,
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
	Type: TEXT,
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
	SpecialistType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type Vanilla_SpecialistYields = {
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
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
	Type: TEXT,
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
	VictoryType: TEXT,
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
	Type: TEXT,
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
	VoteType: TEXT,
	/**
	 */
	DiploVoteType: TEXT,
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
	Type: TEXT,
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
	LeaderType: TEXT,
	/**
	 * Reference: MajorCivApproachTypes(Type)
	 */
	MajorCivApproachType: TEXT,
	/**
	 */
	Bias: INTEGER,
}

declare type Vanilla_Leader_MinorCivApproachBiases = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: TEXT,
	/**
	 * Reference: MinorCivApproachTypes(Type)
	 */
	MinorCivApproachType: TEXT,
	/**
	 */
	Bias: INTEGER,
}

declare type Vanilla_Leader_Flavors = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * @default -1
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Leader_Traits = {
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderType: TEXT,
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
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
	Type: TEXT,
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
	RouteType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Route_TechMovementChanges = {
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
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
	RouteType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Not Null
	 */
	Cost: INTEGER,
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
	DomainType: TEXT,
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
	FlavorType: TEXT,
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
	Type: TEXT,
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
	GrowthTerrainType: TEXT,
	/**
	 * @default 0
	 */
	TurnDamage: INTEGER,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	AdjacentUnitFreePromotion: TEXT,
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
	Type: TEXT,
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
	GrowthTerrainType: TEXT,
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
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_RiverYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_HillsYieldChanges = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
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
	Type: TEXT,
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
	ImprovementPillage: TEXT,
	/**
	 * @default NULL
	 * Reference: Improvements(Type)
	 */
	ImprovementUpgrade: TEXT,
	/**
	 * @default false
	 */
	SpecificCivRequired: BOOLEAN,
	/**
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
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
	ImprovementType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Improvement_Yields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_AdjacentCityYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_CoastalLandYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_FreshWaterYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_HillsYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_AdjacentMountainYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_PrereqNatureYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_RiverSideYields = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_ValidTerrains = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type Vanilla_Improvement_ValidFeatures = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type Vanilla_Improvement_ResourceTypes = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
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
	ImprovementType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_RouteYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Routes(Type)
	 */
	RouteType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechNoFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Improvement_TechFreshWaterYieldChanges = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
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
	Type: TEXT,
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
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Resource_Flavors = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * @default 0
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Resource_TerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type Vanilla_Resource_FeatureBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type Vanilla_Resource_FeatureTerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type Vanilla_Resource_QuantityTypes = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
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
	Type: TEXT,
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
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Terrain_RiverYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type Vanilla_Terrain_HillsYieldChanges = {
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
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
	BuildType: TEXT,
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
	Type: TEXT,
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
	Type: TEXT,
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
	MultiUnitFormationType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	PrimaryUnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	SecondaryUnitType: TEXT,
	/**
	 * Reference: MultiUnitPositions(Type)
	 */
	MultiUnitPositionType: TEXT,
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
	TraitType: TEXT,
	/**
	 */
	Trait: INTEGER,
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
	Type: TEXT,
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
	Invisible: TEXT,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	SeeInvisible: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr1: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr2: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr3: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr4: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
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
	PromotionType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
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
	Type: TEXT,
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

declare type Vanilla_Unit_AITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type Vanilla_Unit_Buildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
}

declare type Vanilla_Unit_BuildingClassRequireds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type Vanilla_Unit_ProductionModifierBuildings = {
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

declare type Vanilla_Unit_Builds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: TEXT,
}

declare type Vanilla_Unit_ClassUpgrades = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
}

declare type Vanilla_Unit_FreePromotions = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Unit_Flavors = {
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

declare type Vanilla_Unit_GreatPersons = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	GreatPersonType: TEXT,
}

declare type Vanilla_Unit_ResourceQuantityRequirements = {
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

declare type Vanilla_Unit_UniqueNames = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
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
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type Vanilla_Unit_ProductionTraits = {
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

declare type Vanilla_Unit_TechTypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

