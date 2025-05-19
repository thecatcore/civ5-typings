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

declare type BNW_AICityStrategy_Flavors = {
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

declare type BNW_AICityStrategy_PersonalityFlavorThresholdMods = {
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
	Type: TEXT,
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

declare type BNW_AIEconomicStrategy_Player_Flavors = {
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

declare type BNW_AIEconomicStrategy_City_Flavors = {
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

declare type BNW_AIEconomicStrategy_PersonalityFlavorThresholdMods = {
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
	Type: TEXT,
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

declare type BNW_AIMilitaryStrategy_Player_Flavors = {
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

declare type BNW_AIMilitaryStrategy_City_Flavors = {
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

declare type BNW_AIMilitaryStrategy_PersonalityFlavorThresholdMods = {
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

declare type BNW_CitySpecialization_Flavors = {
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

declare type BNW_CitySpecialization_TargetYields = {
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

declare type BNW_BuildingClass_VictoryThresholds = {
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
	 * @default 0
	 */
	TechEnhancedTourism: INTEGER,
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
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
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
	 * @default NULL
	 * Reference: GreatWorkSlots(Type)
	 */
	GreatWorkSlotType: TEXT,
	/**
	 * @default NULL
	 * Reference: GreatWorks(Type)
	 */
	FreeGreatWork: TEXT,
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
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_BuildingClassHappiness = {
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
	Happiness: INTEGER,
}

declare type BNW_Building_BuildingClassYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type BNW_Building_ClassesNeededInCity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Building_FreeUnits = {
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

declare type BNW_Building_DomainFreeExperiences = {
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

declare type BNW_Building_DomainFreeExperiencePerGreatWork = {
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

declare type BNW_Building_DomainProductionModifiers = {
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

declare type BNW_Building_FreeSpecialistCounts = {
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

declare type BNW_Building_Flavors = {
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

declare type BNW_Building_GlobalYieldModifiers = {
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

declare type BNW_Building_HurryModifiers = {
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

declare type BNW_Building_LocalResourceAnds = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type BNW_Building_LocalResourceOrs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type BNW_Building_LockedBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Building_PrereqBuildingClasses = {
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

declare type BNW_Building_ResourceQuantity = {
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
	Quantity: INTEGER,
}

declare type BNW_Building_ResourceQuantityRequirements = {
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

declare type BNW_Building_ResourceYieldModifiers = {
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

declare type BNW_Building_ResourceCultureChanges = {
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

declare type BNW_Building_ResourceFaithChanges = {
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
	FaithChange: INTEGER,
}

declare type BNW_Building_RiverPlotYieldChanges = {
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

declare type BNW_Building_SeaPlotYieldChanges = {
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

declare type BNW_Building_LakePlotYieldChanges = {
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

declare type BNW_Building_SeaResourceYieldChanges = {
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

declare type BNW_Building_ResourceYieldChanges = {
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

declare type BNW_Building_FeatureYieldChanges = {
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

declare type BNW_Building_TerrainYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SpecialistYieldChanges = {
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

declare type BNW_Building_UnitCombatFreeExperiences = {
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

declare type BNW_Building_UnitCombatProductionModifiers = {
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

declare type BNW_Building_TechAndPrereqs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type BNW_Building_YieldChanges = {
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

declare type BNW_Building_YieldChangesPerPop = {
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

declare type BNW_Building_YieldChangesPerReligion = {
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

declare type BNW_Building_TechEnhancedYieldChanges = {
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

declare type BNW_Building_YieldModifiers = {
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

declare type BNW_Building_ThemingBonuses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
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
	 * Reference: PlayerColors(Type)
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

declare type BNW_Civilization_BuildingClassOverrides = {
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

declare type BNW_Civilization_CityNames = {
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

declare type BNW_Civilization_DisableTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type BNW_Civilization_FreeBuildingClasses = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Civilization_FreeTechs = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type BNW_Civilization_FreeUnits = {
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

declare type BNW_Civilization_Leaders = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Leaders(Type)
	 */
	LeaderheadType: TEXT,
}

declare type BNW_Civilization_Religions = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Religions(Type)
	 */
	ReligionType: TEXT,
}

declare type BNW_Civilization_SpyNames = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
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

declare type BNW_Civilization_Start_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default false
	 */
	StartAlongOcean: BOOLEAN,
}

declare type BNW_Civilization_Start_Along_River = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * @default false
	 */
	StartAlongRiver: BOOLEAN,
}

declare type BNW_Civilization_Start_Region_Priority = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: TEXT,
}

declare type BNW_Civilization_Start_Region_Avoid = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
	/**
	 * Reference: Regions(Type)
	 */
	RegionType: TEXT,
}

declare type BNW_Civilization_Start_Place_First_Along_Ocean = {
	/**
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
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
	MinorCivTrait: TEXT,
}

declare type BNW_MinorCivilization_Flavors = {
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

declare type BNW_MinorCivilization_CityNames = {
	/**
	 * Reference: MinorCivilizations(Type)
	 */
	MinorCivType: TEXT,
	/**
	 * Not Null
	 */
	CityName: TEXT,
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
	Type: TEXT,
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
	 * Reference: Buildings(Type)
	 */
	FreeBuilding: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	FreeBuildingOnConquest: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type BNW_Trait_ExtraYieldThresholds = {
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

declare type BNW_Trait_YieldChanges = {
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

declare type BNW_Trait_YieldChangesStrategicResources = {
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

declare type BNW_Trait_YieldChangesNaturalWonder = {
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

declare type BNW_Trait_YieldChangesPerTradePartner = {
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

declare type BNW_Trait_YieldChangesIncomingTradeRoute = {
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

declare type BNW_Trait_YieldModifiers = {
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

declare type BNW_Trait_FreePromotions = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type BNW_Trait_FreePromotionUnitCombats = {
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

declare type BNW_Trait_MovesChangeUnitCombats = {
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

declare type BNW_Trait_MaintenanceModifierUnitCombats = {
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
	MaintenanceModifier: INT,
}

declare type BNW_Trait_Terrains = {
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

declare type BNW_Trait_ResourceQuantityModifiers = {
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

declare type BNW_Trait_FreeResourceFirstXCities = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
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

declare type BNW_Trait_SpecialistYieldChanges = {
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

declare type BNW_Trait_UnimprovedFeatureYieldChanges = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
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

declare type BNW_Trait_NoTrain = {
	/**
	 * Reference: Traits(Type)
	 */
	TraitType: TEXT,
	/**
	 * Not Null
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
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

declare type BNW_Era_Soundtracks = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 */
	SoundTrack: TEXT,
}

declare type BNW_Era_CitySoundscapes = {
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

declare type BNW_Era_NewEraVOs = {
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
	/**
	 */
	VOScript: TEXT,
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
	GameSpeedType: TEXT,
	/**
	 */
	MonthIncrement: INTEGER,
	/**
	 */
	TurnsPerIncrement: INTEGER,
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
	Type: TEXT,
	/**
	 * Reference: GreatWorkSlots(Type)
	 */
	SlotType: TEXT,
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
	Type: TEXT,
	/**
	 * Unique
	 */
	Value: INTEGER,
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
	HandicapType: TEXT,
	/**
	 * Reference: GoodyHuts(Type)
	 */
	GoodyType: TEXT,
}

declare type BNW_HandicapInfo_FreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type BNW_HandicapInfo_AIFreeTechs = {
	/**
	 * Reference: HandicapInfos(Type)
	 */
	HandicapType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
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
	FreeBuildingOnConquest: TEXT,
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

declare type BNW_Policy_CityYieldChanges = {
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

declare type BNW_Policy_CoastalCityYieldChanges = {
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

declare type BNW_Policy_CapitalYieldChanges = {
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

declare type BNW_Policy_CapitalYieldPerPopChanges = {
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

declare type BNW_Policy_CapitalYieldModifiers = {
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

declare type BNW_Policy_Disables = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyDisable: TEXT,
}

declare type BNW_Policy_Flavors = {
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

declare type BNW_Policy_GreatWorkYieldChanges = {
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

declare type BNW_Policy_HurryModifiers = {
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

declare type BNW_Policy_PrereqPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type BNW_Policy_PrereqORPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type BNW_Policy_SpecialistExtraYields = {
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

declare type BNW_Policy_BuildingClassYieldModifiers = {
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

declare type BNW_Policy_BuildingClassYieldChanges = {
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

declare type BNW_Policy_BuildingClassCultureChanges = {
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

declare type BNW_Policy_BuildingClassProductionModifiers = {
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

declare type BNW_Policy_BuildingClassTourismModifiers = {
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
	TourismModifier: INTEGER,
}

declare type BNW_Policy_BuildingClassHappiness = {
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

declare type BNW_Policy_ImprovementYieldChanges = {
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

declare type BNW_Policy_ImprovementCultureChanges = {
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

declare type BNW_Policy_ValidSpecialists = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
}

declare type BNW_Policy_YieldModifiers = {
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

declare type BNW_Policy_FreePromotions = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type BNW_Policy_UnitCombatFreeExperiences = {
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

declare type BNW_Policy_FreePromotionUnitCombats = {
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

declare type BNW_Policy_UnitCombatProductionModifiers = {
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

declare type BNW_Policy_FreeUnitClasses = {
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

declare type BNW_Policy_TourismOnUnitCreation = {
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
	Tourism: INTEGER,
}

declare type BNW_Policy_FreeItems = {
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
	PolicyBranchType: TEXT,
	/**
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchDisable: TEXT,
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

declare type BNW_Process_Flavors = {
	/**
	 * Reference: Processes(Type)
	 */
	ProcessType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type BNW_Process_ProductionYields = {
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

declare type BNW_Project_Flavors = {
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

declare type BNW_Project_Prereqs = {
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

declare type BNW_Project_VictoryThresholds = {
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

declare type BNW_Project_ResourceQuantityRequirements = {
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
	Help: TEXT,
	/**
	 * @default NULL
	 */
	SessionSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	EraTrigger: TEXT,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	ImmediateProposal: TEXT,
	/**
	 * @default NULL
	 * Reference: Resolutions(Type)
	 */
	RecurringProposal: TEXT,
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
	Type: TEXT,
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
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: Buildings(Type)
	 */
	Building: TEXT,
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
	FreeUnitClass: TEXT,
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
	Help: TEXT,
	/**
	 * @default NULL
	 */
	ProjectSplashImage: TEXT,
	/**
	 * @default NULL
	 * Reference: Processes(Type)
	 */
	Process: TEXT,
	/**
	 * @default 0
	 */
	CostPerPlayer: INTEGER,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier1: TEXT,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier2: TEXT,
	/**
	 * @default NULL
	 * Reference: LeagueProjectRewards(Type)
	 */
	RewardTier3: TEXT,
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
	Type: TEXT,
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
	Type: TEXT,
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
	VoterDecision: TEXT,
	/**
	 * @default NULL
	 * Reference: ResolutionDecisions(Type)
	 */
	ProposerDecision: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereqAnyMember: TEXT,
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
	LeagueProjectEnabled: TEXT,
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

declare type BNW_SpecialistFlavors = {
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

declare type BNW_SpecialistYields = {
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
	VictoryType: TEXT,
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
	Type: TEXT,
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
	ObsoleteEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Resources(Type)
	 */
	ResourceRevealed: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	SpreadModifierDoublingTech: TEXT,
}

declare type BNW_Belief_BuildingClassYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type BNW_Belief_BuildingClassHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	Happiness: INTEGER,
}

declare type BNW_Belief_BuildingClassTourism = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * @default 0
	 */
	Tourism: INTEGER,
}

declare type BNW_Belief_BuildingClassFaithPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Belief_CityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_HolyCityYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_EraFaithUnitPurchase = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Eras(Type)
	 */
	EraType: TEXT,
}

declare type BNW_Belief_FeatureYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_ImprovementYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
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

declare type BNW_Belief_MaxYieldModifierPerFollower = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Max: INTEGER,
}

declare type BNW_Belief_ResourceQuantityModifiers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	ResourceQuantityModifier: INTEGER,
}

declare type BNW_Belief_ResourceHappiness = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * @default 0
	 */
	HappinessChange: INTEGER,
}

declare type BNW_Belief_ResourceYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_TerrainYieldChanges = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeAnySpecialist = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangePerForeignCity = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangePerXForeignFollowers = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	ForeignFollowers: INTEGER,
}

declare type BNW_Belief_YieldChangeTradeRoute = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldChangeWorldWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
}

declare type BNW_Belief_YieldModifierNaturalWonder = {
	/**
	 * Reference: Beliefs(Type)
	 */
	BeliefType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	Yield: INTEGER,
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

declare type BNW_Technology_DomainExtraMoves = {
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

declare type BNW_Technology_TradeRouteDomainExtraRange = {
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

declare type BNW_Technology_Flavors = {
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

declare type BNW_Technology_ORPrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type BNW_Technology_PrereqTechs = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
}

declare type BNW_Technology_FreePromotions = {
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
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

declare type BNW_Feature_YieldChanges = {
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

declare type BNW_Feature_RiverYieldChanges = {
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

declare type BNW_Feature_HillsYieldChanges = {
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

declare type BNW_Feature_TerrainBooleans = {
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
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
	NaturalWonderType: TEXT,
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

declare type BNW_Improvement_Yields = {
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

declare type BNW_Improvement_YieldPerEra = {
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

declare type BNW_Improvement_AdjacentCityYields = {
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

declare type BNW_Improvement_CoastalLandYields = {
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

declare type BNW_Improvement_FreshWaterYields = {
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

declare type BNW_Improvement_HillsYields = {
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

declare type BNW_Improvement_AdjacentMountainYieldChanges = {
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

declare type BNW_Improvement_PrereqNatureYields = {
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

declare type BNW_Improvement_RiverSideYields = {
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

declare type BNW_Improvement_ValidTerrains = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type BNW_Improvement_ValidFeatures = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type BNW_Improvement_ValidImprovements = {
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	PrereqImprovement: TEXT,
}

declare type BNW_Improvement_ResourceTypes = {
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

declare type BNW_Improvement_ResourceType_Yields = {
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

declare type BNW_Improvement_RouteYieldChanges = {
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

declare type BNW_Improvement_TechYieldChanges = {
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

declare type BNW_Improvement_TechNoFreshWaterYieldChanges = {
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

declare type BNW_Improvement_TechFreshWaterYieldChanges = {
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
	 * Reference: Policies(Type)
	 */
	PolicyReveal: TEXT,
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
	 * @default NULL
	 * Reference: Civilizations(Type)
	 */
	CivilizationType: TEXT,
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
	WonderProductionModObsoleteEra: TEXT,
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

declare type BNW_Resource_Flavors = {
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

declare type BNW_Resource_TerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type BNW_Resource_FeatureBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
}

declare type BNW_Resource_FeatureTerrainBooleans = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
}

declare type BNW_Resource_QuantityTypes = {
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
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

declare type BNW_Terrain_RiverYieldChanges = {
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

declare type BNW_Terrain_HillsYieldChanges = {
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

declare type BNW_Build_TechTimeChanges = {
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: TEXT,
	/**
	 */
	TechType: TEXT,
	/**
	 * @default 0
	 */
	TimeChange: INTEGER,
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
	Type: TEXT,
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
	Type: TEXT,
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
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr5: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr6: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr7: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr8: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr9: TEXT,
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

declare type BNW_UnitPromotions_Features = {
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

declare type BNW_UnitPromotions_UnitClasses = {
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

declare type BNW_UnitPromotions_Domains = {
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

declare type BNW_UnitPromotions_UnitCombatMods = {
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

declare type BNW_UnitPromotions_UnitCombats = {
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

declare type BNW_UnitPromotions_CivilianUnitType = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
}

declare type BNW_UnitPromotions_PostCombatRandomPromotion = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	NewPromotion: TEXT,
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
	Type: TEXT,
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

declare type BNW_Unit_AITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type BNW_Unit_Buildings = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
}

declare type BNW_Unit_BuildingClassRequireds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Unit_ProductionModifierBuildings = {
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

declare type BNW_Unit_Builds = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Builds(Type)
	 */
	BuildType: TEXT,
}

declare type BNW_Unit_ClassUpgrades = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
}

declare type BNW_Unit_FreePromotions = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type BNW_Unit_Flavors = {
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

declare type BNW_Unit_GreatPersons = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	GreatPersonType: TEXT,
}

declare type BNW_Unit_ResourceQuantityRequirements = {
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

declare type BNW_Unit_UniqueNames = {
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

declare type BNW_Unit_YieldFromKills = {
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

declare type BNW_Unit_NotAITypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: UnitAIInfos(Type)
	 */
	UnitAIType: TEXT,
}

declare type BNW_Unit_ProductionTraits = {
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

declare type BNW_Unit_TechTypes = {
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

