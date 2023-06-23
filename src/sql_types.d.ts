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
     * IconTextureAtlases(Atlas)
     */
    IconAtlas?: TEXT
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
    PrereqTech?: TEXT,
    /**
     * ImprovementTypes
     */
    ImprovementType?: TEXT,
    RouteType?: TEXT,
    EntityEvent?: TEXT,
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

declare type GameInfos_Calendars = {
    /**
     * Notes: Primary Key, Autoincrement
     */
    ID: INTEGER,
    Type: TEXT,
    Description: TEXT,
}