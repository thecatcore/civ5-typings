/** SQLite type */
declare type TEXT = string;
/** SQLite type */
declare type INTEGER = number;
/** 
 * SQLite type
 * 
 * ---
 * - `0` — `FALSE`
 * - `1` — `TRUE`
 */
declare type BOOLEAN = 0|1;
/** SQLite type */
declare type REAL = number;
/** 
 * SQLite type
 * 
 * ---
 * `LIKE "LOC_%"` */
declare type LocalizedText = string;
/** SQLite type */
declare type float = number;

declare type GameInfos_Commands = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Notes: Not Null, Unique
     */
    Type: TEXT,
    Description: TEXT,
    Help: TEXT,
    DisabledHelp: TEXT,
    HotKey: TEXT,
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
    Automate: TEXT
}

declare type GameInfos_ArtStyleTypes = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Notes: Not Null, Unique
     */
    Type: TEXT
}

declare type GameInfos_Automates = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    Type: TEXT,
    Description: TEXT,
    Help: TEXT,
    DisabledHelp: TEXT,
    HotKey: TEXT,
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
    Automate: TEXT,
    Command: TEXT,
    /**
     * @default -1
     */
    IconIndex: INTEGER,
    /**
     * @default NULL
     * IconTextureAtlases(Atlas)
     */
    IconAtlas: TEXT
}

declare type GameInfos_Beliefs = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    Type: TEXT,
    Description: TEXT
    ShortDescription: TEXT
    Pantheon: unknown
    Founder: unknown
    Follower: unknown
    Enhancer: unknown
    Reformation: unknown
}

declare type GameInfos_Builds = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Not Null, Unique
     */
    Type: TEXT,
    Description: TEXT,
    Help: TEXT,
    DisabledHelp: TEXT,
    Recommendation: TEXT,
    HotKey: TEXT,
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
     * ImprovementTypes
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
}

declare type GameInfos_BuildFeatures = {
    /**
     * GameInfos_Builds.Type
     */
    BuildType: TEXT,
    FeatureType: TEXT,
    PrereqTech: TEXT,
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
    Remove: BOOLEAN
}

declare type GameInfos_BuildingClasses = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Not Null, Unique
     */
    Type: TEXT,
    Description: TEXT,
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
    Monument: BOOLEAN
}

declare type GameInfos_BuildingClass_VictoryThresholds = {
    BuildingClassType: TEXT,
    VictoryType: TEXT,
    Threshold: INTEGER
}

declare type GameInfos_Buildings = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Not Null, Unique
     */
    Type: TEXT,
    /**
     * Language_en_US(Tag)
     */
    Description: TEXT,
    /**
     * Language_en_US(Tag)
     */
    Civilopedia: TEXT,
    /**
     * Language_en_US(Tag)
     */
    Strategy: TEXT,
    /**
     * Language_en_US(Tag)
     */
    Help: TEXT,
    /**
     * Language_en_US(Tag)
     */
    Quote: TEXT,
    /**
     * @default 0
     * Notes: The ammout of gold the building deducts from your income each turn 
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
     * Notes: Requires that the city be built next to a river 
     */
    River: BOOLEAN,
    /**
     * @default false
     * Notes: Requires that the city be built next to a river or fresh water lake 
     */
    FreshWater: BOOLEAN,
    /**
     * @default false
     * Notes: Requires that the city be built next to a mountain 
     */
    Mountain: BOOLEAN,
    /**
     * @default false
     * Notes: Requires that a mountain be within the city's borders 
     */
    NearbyMountainRequired: BOOLEAN,
    /**
     * @default false
     * Notes: Requires that the city be built on a hill 
     */
    Hill: BOOLEAN,
    /**
     * @default false
     * Notes: Requires that the city not be built on a hill 
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
     * Notes: The owner's territory costs 1 more movement point for enemy units (global effect) 
     */
    BorderObstacle: BOOLEAN,
    /**
     * @default false
     * Notes: The Building can only be built in the capital if True
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
     * Notes: Allows trade routes over water 
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
    HappinessPerCity: INTEGER,
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
     * BuildingClasses(Type)
     */
    BuildingClass: TEXT,
    /**
     * @default NULL
     */
    ArtDefineTag: TEXT,
    /**
     * @default NULL
     * Terrains(Type)
     * Notes: The specified terrain must exist within the city's borders 
     */
    NearbyTerrainRequired: TEXT,
    /**
     * @default NULL
     * Victories(Type)
     */
    VictoryPrereq: TEXT,
    /**
     * @default NULL
     * Eras(Type)
     */
    FreeStartEra: TEXT,
    /**
     * @default NULL
     * Eras(Type)
     */
    MaxStartEra: TEXT,
    /**
     * @default NULL
     * Technologies(Type)
     */
    ObsoleteTech: TEXT,
    /**
     * @default NULL
     * Technologies(Type)
     */
    EnhancedYieldTech: TEXT,
    /**
     * @default NULL
     * BuildingClasses(Type)
     */
    FreeBuilding: TEXT,
    /**
     * @default NULL
     * UnitPromotions(Type)
     */
    FreePromotion: TEXT,
    /**
     * @default NULL
     * UnitPromotions(Type)
     */
    TrainedFreePromotion: TEXT,
    /**
     * @default NULL
     * BuildingClasses(Type)
     */
    ReplacementBuildingClass: TEXT,
    /**
     * @default NULL
     * Technologies(Type)
     */
    PrereqTech: TEXT,
    /**
     * @default NULL
     * Specialists(Type)
     */
    SpecialistType: TEXT,
    /**
     * @default 0
     */
    SpecialistCount: INTEGER,
    /**
     * @default 0
     * Attention: Seems to be broken in 1.0.1.141, @see http://forums.civfanatics.com/showthread.php?t=404816%7C
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
    WonderSplashAudio: TEXT,
    /**
     * @default NULL
     * IconTextureAtlases(Atlas)
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
    ArtInfoRandomVariation: BOOLEAN
}

declare type GameInfos_Building_AreaYieldModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_ClassesNeededInCity = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * BuildingClasses(Type)
     */
    BuildingClassType: TEXT
}

declare type GameInfos_Building_FreeUnits = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Units(Type)
     */
    UnitType: TEXT,
    NumUnits: INTEGER
}

declare type GameInfos_Building_DomainFreeExperiences = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Domains(Type)
     */
    DomainType: TEXT,
    Experience: INTEGER
}

declare type GameInfos_Building_DomainProductionModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Domains(Type)
     */
    DomainType: TEXT,
    Modifier: INTEGER
}

/**
 * Attention: Seems to be not functional in 1.0.1.141, @see http://forums.civfanatics.com/showthread.php?t=404816%7C
 */
declare type GameInfos_Building_FreeSpecialistCounts = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Specialists(Type)
     */
    SpecialistType: TEXT,
    Count: INTEGER
}

declare type GameInfos_Building_Flavors = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Flavors(Type)
     */
    FlavorType: TEXT,
    Flavor: INTEGER
}

declare type GameInfos_Building_GlobalYieldModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_HurryModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * HurryInfos(Type)
     */
    HurryType: TEXT,
    HurryCostModifier: INTEGER
}

declare type GameInfos_Building_LocalResourceAnds = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT
}

declare type GameInfos_Building_LocalResourceOrs = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT
}

declare type GameInfos_Building_LockedBuildingClasses = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * BuildingClasses(Type)
     */
    BuildingClassType: TEXT
}

declare type GameInfos_Building_PrereqBuildingClasses = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * BuildingClasses(Type)
     */
    BuildingClassType: TEXT,
    NumBuildingNeeded: INTEGER
}

declare type GameInfos_Building_ResourceQuantityRequirements = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT,
    Cost: INTEGER
}

declare type GameInfos_Building_ResourceYieldModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_ResourceCultureChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT,
    CultureChange: INTEGER
}

declare type GameInfos_Building_RiverPlotYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_SeaPlotYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_LakePlotYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_SeaResourceYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_ResourceYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Resources(Type)
     */
    ResourceType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_FeatureYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Features(Type)
     */
    FeatureType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_SpecialistYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Specialists(Type)
     */
    SpecialistType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_UnitCombatFreeExperiences = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * UnitCombatInfos(Type) 
     */
    UnitCombatType: TEXT,
    Experience: INTEGER
}

declare type GameInfos_Building_UnitCombatProductionModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * UnitCombatInfos(Type) 
     */
    UnitCombatType: TEXT,
    Modifier: INTEGER
}

declare type GameInfos_Building_TechAndPrereqs = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Technologies(Type) 
     */
    TechType: TEXT
}

declare type GameInfos_Building_YieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_YieldChangesPerPop = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_TechEnhancedYieldChanges = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Building_YieldModifiers = {
    /**
     * Buildings(Type)
     */
    BuildingType: TEXT,
    /**
     * Yields(Type) 
     */
    YieldType: TEXT,
    Yield: INTEGER
}

declare type GameInfos_Calendars = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    Type: TEXT,
    Description: TEXT,
}