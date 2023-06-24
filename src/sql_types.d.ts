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

declare type GameInfos_Civilizations = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    /**
     * Not Null,Unique, key used to reference this civilization typically in the CIVILIZATION_<name> format 
     */
    Type: TEXT,
    /**
     * Text string description of the civ, for America it is "American Empire" located in the TXT_KEY_CIV_AMERICA_DESC
     */
    Description: TEXT,
    /**
     * @default NULL
     * NOT USED
     */
    Civilopedia: TEXT,
    /**
     * starting text string for the pedia entry 
     */
    CivilopediaTag: TEXT,
    /**
     * @default Ask Paul
     * NOT USED 
     */
    Strategy: TEXT,
    /**
     * @default true
     * If true, human player can select this civ. 
     */
    Playable: BOOLEAN,
    /**
     * @default true
     * If true, the AI can select this civ. Setting both Playable and AIPlayable to false is a good way to remove a civ from a game, without actually deleting the assets (and makes other mods compatible) 
     */
    AIPlayable: BOOLEAN,
    /**
     * @default NULL
     * The short text string for this civ. For america its "America" 
     */
    ShortDescription: TEXT,
    /**
     * @default NULL
     * The text string for the qualifier to things that belong to this civ. For American, its "American" 
     */
    Adjective: TEXT,
    /**
     * @default NULL
     * The default color of this civ for borders, unit flags, etc. The color has to be specified in the CIV5PlayerColors. @see http://modiki.civfanatics.com/index.php?title=CIV5PlayerColors
     */
    DefaultPlayerColor: TEXT,
    /**
     * @default NULL
     * NOT USED 
     */
    ArtDefineTag: TEXT,
    /**
     * @default NULL
     * Defines the art style used for buildings that are used in this civilization's cities 
     */
    ArtStyleType: TEXT,
    /**
     * @default NULL
     * Used to pick different flavors of improvements and wonder art 
     */
    ArtStyleSuffix: TEXT,
    /**
     * @default NULL
     * Used to pick different flavors of improvements and wonder art 
     */
    ArtStylePrefix: TEXT,
    /**
     * @default NULL
     * NOT USED 
     */
    DerivativeCiv: TEXT,
    /**
     * @default -1
     * The number of the icon in the icon atlas used for this civ 
     */
    PortraitIndex: INTEGER,
    /**
     * @default NULL
     * IconTextureAtlases(Atlas)
     * The Icon Atlas that holds the icons for this civ 
     */
    IconAtlas: TEXT,
    /**
     * @default NULL
     * IconTextureAtlases(Atlas)
     * The Icon Atlas that has the alpha layer for this icon 
     */
    AlphaIconAtlas: TEXT,
    /**
     * @default NULL
     * The picture (as a .dds file) that is displayed when the civ is selected from the civilization selection menu. Typically this is a map of the civilization 
     */
    MapImage: TEXT,
    /**
     * @default NULL
     * The text string that is displayed on the loading (Dawn of Man) screen 
     */
    DawnOfManQuote: TEXT,
    /**
     * @default NULL
     * The picture (as a .dds file) that is shown on the loading (Dawn of Man) screen 
     */
    DawnOfManImage: TEXT,
    /**
     * @default NULL
     * The audio file that is played the loading (Dawn of Man) screen. Typically this is the reading of the Quote 
     */
    DawnOfManAudio: TEXT
}

declare type GameInfos_Civilization_BuildingClassOverrides = {
    /**
     * Civilizations(Type)
     * Name (Type) of civilization to have building defined 
     */
    CivilizationType: TEXT,
    /**
     * BuildingClasses(Type)
     * Not Null
     */
    BuildingClassType: TEXT,
    /**
     * Buildings(Type)
     * This defines a civ's Unique Buildings and can be used to block civs from building a specific building, for example a minor civ from building the Sydney Opera House, when tag is left empty: <BuildingType/> 
     */
    BuildingType: TEXT
}

/**
 * This is a list of the available city names for a civilization.
 */
declare type GameInfos_Civilization_CityNames = {
    /**
     * Civilizations(Type)
     * Name (Type) of civilization to have city name defined 
     */
    CivilizationType: TEXT,
    /**
     * Not Null, text string for available city name for a city 
     */
    CityName: TEXT
}

/**
 * Any techs set here for a specific civilization won't be available for that civilization to research
 */
declare type GameInfos_Civilization_DisableTechs = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * Technologies(Type) 
     */
    TechType: TEXT
}

/**
 * This is the free buildings available to a civilization when they found their first city. By default all civilizations get a free palace.
 */
declare type GameInfos_Civilization_FreeBuildingClasses = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * BuildingClasses(Type) 
     */
    BuildingClassType: TEXT
}

/**
 * These are the free techs a civilization starts with. By default all civilizations get agriculture.
 */
declare type GameInfos_Civilization_FreeTechs = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * Technologies(Type) 
     */
    TechType: TEXT
}

/**
 * These are the units the civilization starts with. By default all civilizations are set to start with 1 free settler (Count=1).
 */
declare type GameInfos_Civilization_FreeUnits = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * UnitClasses(Type) 
     */
    UnitClassType: TEXT,
    /**
     * UnitAIInfos(Type) 
     */
    UnitAIType: TEXT,
    Count: INTEGER
}

/**
 * This is where leaders are associated to their civilizations. In Civ5 each civilization can only have 1 leader.
 */
declare type GameInfos_Civilization_Leaders = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * Leaders(Type) 
     */
    LeaderheadType: TEXT
}

/**
 * Much like the building class overrides this is where unique units are set with the unit they replace for this civilization and civilizations are blocked from building units. 
 */
declare type GameInfos_Civilization_UnitClassOverrides = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * UnitClasses(Type) 
     * Not Null
     */
    UnitClassType: TEXT,
    /**
     * Units(Type) 
     */
    UnitType: TEXT
}

/**
 * If a civilization has this set the game will attempt to start them along a coastal tile.
 * Each civ can have ONLY one of the 4 start bias, if a civilization has more than one, the 1st one will be used, and others will be ignored
 */
declare type GameInfos_Civilization_Start_Along_Ocean = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * @default false
     */
    StartAlongOcean: BOOLEAN
}

/**
 * If a civilization has this set the game will attempt to start them along a river tile.
 * Each civ can have ONLY one of the 4 start bias, if a civilization has more than one, the 1st one will be used, and others will be ignored
 */
declare type GameInfos_Civilization_Start_Along_River = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * @default false
     */
    StartAlongRiver: BOOLEAN
}

/**
 * If a civilization has this set the game will attempt to start them in the specified region. For example Arabia has Desert set for this.
 * Each civ can have ONLY one of the 4 start bias, if a civilization has more than one, the 1st one will be used, and others will be ignored
 * Multiple entries per civ for each start priority/avoid are supported
 */
declare type GameInfos_Civilization_Start_Region_Priority = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * Regions(Type) 
     */
    RegionType: TEXT
}

/**
 * If a civilization has this set the game will attempt to avoid these regions when deciding the civilizations starting location. For example Egypt is set to avoid starts in Jungles.
 * Each civ can have ONLY one of the 4 start bias, if a civilization has more than one, the 1st one will be used, and others will be ignored. Will only be used if the first 3 bias are empty for a given civilization.
 * Multiple entries per civ for each start priority/avoid are supported
 */
declare type GameInfos_Civilization_Start_Region_Avoid = {
    /**
     * Civilizations(Type)
     */
    CivilizationType: TEXT,
    /**
     * Regions(Type) 
     */
    RegionType: TEXT
}