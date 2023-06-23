type int = number;
type bool = boolean;

type PlayerID = number;
type AreaID = number;
type TeamID = number;
type SQLQuery = string;
type CityID = number;
type UnitTypeID = number;
type UnitID = number;
type LeaderID = number;
type PlayerColorID = number;
type ImprovementID = number;
type ResourceID = number;

type ImprovementTypeKeys = "IMPROVEMENT_CITY_RUINS" | "IMPROVEMENT_HOLY_SITE" | "IMPROVEMENT_BARBARIAN_CAMP" | "IMPROVEMENT_POLDER" | "IMPROVEMENT_GOODY_HUT" | "IMPROVEMENT_FARM" | "IMPROVEMENT_MINE" | "IMPROVEMENT_QUARRY" | "IMPROVEMENT_TRADING_POST" | "IMPROVEMENT_LUMBERMILL" | "IMPROVEMENT_PASTURE" | "IMPROVEMENT_FISHING_BOATS" | "IMPROVEMENT_PLANTATION" | "IMPROVEMENT_CAMP" | "IMPROVEMENT_WELL" | "IMPROVEMENT_OFFSHORE_PLATFORM" | "IMPROVEMENT_FORT" | "IMPROVEMENT_LANDMARK" | "IMPROVEMENT_ACADEMY" | "IMPROVEMENT_CUSTOMS_HOUSE" | "IMPROVEMENT_MANUFACTORY" | "IMPROVEMENT_CITADEL";

type ResourceTypeKeys = "RESOURCE_IRON" | "RESOURCE_HORSE" | "RESOURCE_COAL" | "RESOURCE_OIL" | "RESOURCE_ALUMINUM" | "RESOURCE_URANIUM" | "RESOURCE_WHEAT" | "RESOURCE_COW" | "RESOURCE_SHEEP" | "RESOURCE_DEER" | "RESOURCE_BANANA" | "RESOURCE_FISH" | "RESOURCE_STONE" | "RESOURCE_WHALE" | "RESOURCE_PEARLS" | "RESOURCE_GOLD" | "RESOURCE_SILVER" | "RESOURCE_GEMS" | "RESOURCE_MARBLE" | "RESOURCE_IVORY" | "RESOURCE_FUR" | "RESOURCE_DYE" | "RESOURCE_SPICES" | "RESOURCE_SILK" | "RESOURCE_SUGAR" | "RESOURCE_COTTON" | "RESOURCE_WINE" | "RESOURCE_INCENSE" | "RESOURCE_JEWELRY" | "RESOURCE_PORCELAIN" | "RESOURCE_COPPER" | "RESOURCE_SALT" | "RESOURCE_CRAB" | "RESOURCE_TRUFFLES" | "RESOURCE_CITRUS";

type LeaderTypeKeys = "";
type CityUpdateTypeID = number;

interface ResourceType extends GameInfoEntry<ResourceTypeKeys, ResourceID> {
}

type YieldTypeKeys = "NO_YIELD" | "YIELD_FOOD" | "YIELD_PRODUCTION" | "YIELD_GOLD" | "YIELD_SCIENCE" | "YIELD_CULTURE" | "YIELD_FAITH"
type YieldTypeID = number

interface YieldType extends GameInfoEntry<YieldTypeKeys, YieldTypeID> {}

interface ImprovementType extends GameInfoEntry<ImprovementTypeKeys, ImprovementID> {
}

interface Area {
    CalculateTotalBestNatureYield(): int
    CountCoastalLand(): int
    CountNumUniqueResourceTypes(): int
    GetCitiesPerPlayer(index: PlayerID): int
    GetFreeSpecialist(index: PlayerID): int
    GetID(): AreaID
    GetNumCities(): int
    GetNumOwnedTiles(): int
    GetNumRevealedTiles(index: TeamID): int
    GetNumRiverEdges(): int
    GetNumStartingPlots(): int
    GetNumTiles(): int
    GetNumTotalResources(): int
    GetNumUnits(): int
    GetNumUnownedTiles(): int
    GetNumUnrevealedTiles(index: TeamID): int
    GetPopulationPerPlayer(index: PlayerID): int
    GetTargetCity(index: PlayerID): any
    GetTotalPopulation(): int
    GetUnitsPerPlayer(index: PlayerID): int
    IsNone(): bool
    IsWater(): bool
}

interface City {
    GetNameKey(): string
    GetName(): string
    SetName(name: string, bol: bool): void
    GetDamage(): int
    GetGarrisonedUnit(): unknown
    Plot(): Plot
    CanTrain(id: unknown): bool
    IsCoastal(num: int): bool
    GetMaxHitPoints(): int
    GetNumCityPlots(): int
    GetCityIndexPlot(index: int): Plot
    IsHasBuilding(buildingType: BuildingTypeID): bool
    SetNumRealBuilding(buildingType: BuildingTypeID, num: int): unknown
    GetPopulation(): int
    GetJONSCultureLevel(): int
    SetPopulation(amount: int, bol: bool): unknown
    DoJONSCultureLevelIncrease(): unknown
    SetFood(amount: int)
    GrowthThreshold(): int
    SetPuppet(bol: bool): unknown
}

// interface Deal {

// }

// interface Fractal {

// }

interface Player {
    GetCivilizationType(): int
    IsMinorCiv(): bool
    GetTeam(): TeamID
    IsBarbarian(): bool
    IsAllies(player: PlayerID): bool
    IsAlive(): bool
    CanTrain(unitType: UnitTypeID, bol1: bool, bol2: bool, bol3: bool, bol4: bool): bool
    GetStartingPlot(): Plot
    GetName(): string
    InitUnit(unitType: UnitTypeID, plotX: int, plotY: int, unitAIInfo: unknown): Unit
    GetCivilizationAdjective(): string
    GetID(): PlayerID
    AddNotification(type: unknown, text: string, title: string, plotX: int, plotY: int): unknown
    AcquireCity(city: City, bol1: bool, bol2: bool): unknown
    GetCityByID(id: CityID): City
    GetNumUnits(): int
    Units(): Unit[]
    GetNumCities(): int
    GetHappiness(): unknown
    CalculateGrossGold(): int
    CalculateGoldRate(): int
    GetJONSCulture(): int
    GetTotalJONSCulturePerTurn(): unknown
    GetNumPolicies(): unknown
    GetNumPolicyBranchesUnlocked(): unknown
    GetNumPolicyBranchesFinished(): unknown
    Cities(): City[]
    GetCivilizationDescription(): string
    SetGold(totalAmount: int): unknown
    ChangeJONSCulture(amount: int): unknown
    Disband(city: City): unknown
    InitCity(plotX: int, plotY: int): City
    GetCapitalCity(): City
    CanFound(plotX: int, plotY: int): bool
    IsEverAlive(): bool
    GetUnitClassCountPlusMaking(inUT: unknown): int
    HasPolicy(policyId: int): bool
    SetHasPolicy(policyId: int, bol: bool): unknown
    GetMinorCivTrait(): MinorTraitID

    // GNK or BNW
    GetFaith(): int
    GetTotalFaithPerTurn(): unknown
    SetFaith(totalAmount: int): unknown

    // BNW
    GetTourism(): unknown
}

interface Plot {
    GetPlotCity(): City
    IsStartingPlot(): bool
    GetUnit(num: int): unknown
    GetX(): int
    GetY(): int
    IsCoastalLand(): bool
    GetImprovementType(): int
    GetOwner(): PlayerID
    SetImprovementType(type: unknown): unknown
    GetWorkingCity(): City
    GetNumUnits(): int
    SetImprovementPillaged(bol: bool): unknown
    Area(): Area
}

interface Team {
    IsAtWar(team: TeamID): bool
    IsMinorCiv(): bool
    IsAlive(): bool
    GetTeamTechs(): TeamTechs
    UpdateEmbarkGraphics(): unknown
    MakePeace(team: TeamID): unknown
    SetPermanentWarPeace(team: TeamID, bol: bool): unknown
    IsHasMet(team: TeamID): bool
    IsAtWar(team: TeamID): bool
    DeclareWar(team: TeamID): unknown
    CanChangeWarPeace(team: TeamID): bool
    GetNumTurnsLockedIntoWar(team: TeamID): int
}

interface TeamTechs {
    GetNumTechsKnown(): int
    HasTech(tech: unknown): bool
    SetHasTech(tech: unknown, bol: bool): unknown
}

interface Unit {
    SetName(name: string): unknown
    GetName(): string
    GetOwner(): PlayerID
    GetUnitType(): UnitTypeID
    IsCombatUnit(): bool
    IsRanged(): bool
    GetPlot(): Plot
    Kill(): unknown
    GetID(): UnitID
    GetUpgradeUnitType(): UnitTypeID
    GetX(): int
    GetY(): int
    IsHasPromotion(promotion: unknown): bool
    SetHasPromotion(promotion: unknown, bol: bool): unknown
    GetDomainType(): unknown
    CanNuke(plot: Plot): bool
    PushMission(missionType: unknown, nukeX: int, nukeY: int, int1: int, int2: int, int3: int)
    ChangeDamage(amount: int, player: PlayerID)
}

declare namespace Map {
    const GetPlot: (this:void, plotX: int, plotY: int) => Plot;
    const PlotDistance: (this: void, unitX: int, unitY: int, nukeX: int, nukeY: int) => int;
    const GetNumPlots: (this: void) => int
}

interface CivMap {}

interface Data {
    GetValue(this: void, name: string): unknown
    SetValue(this: void, name: string, value: unknown): unknown
}

interface Event<T> {
    Add(callback: T): unknown
}

declare const Players: Record<PlayerID, Player>;
declare const Teams: Record<TeamID, Team>;

declare namespace GameEvents {
    const CityCaptureComplete: Event<(this:void, oldPlayer: int, capital: bool, plotX: int, 
    plotY: int, newPlayer:int, oldPopulation: int, conquest: bool, greatWorkCount: int, 
    greatWorkCount2: int) => void>
    const PlayerDoTurn: Event<(this: void, playerId: PlayerID) => void>
    const PlayerCanTrain: Event<(this: void, playerId: PlayerID, unitType: UnitTypeID) => bool>
    const CityCanTrain: Event<(this: void, playerId: PlayerID, city:CityID, unitType: UnitTypeID) => bool>
    const TeamSetHasTech: Event<(this: void, team: TeamID, tech: unknown, adopted: bool) => void>
    const CityCanConstruct: Event<(this: void, playerId: PlayerID, cityId: CityID, buildingType: unknown) => bool>
    const CityCanMaintain: Event<(this: void, playerId: PlayerID, cityId: CityID, process: unknown) => bool>
}

declare namespace Modding {
    const OpenUserData: (this: void, name: string, num: int) => Data
    const GetActivatedMods: (this: void) => LuaPairsIterable<unknown, unknown>
    const OpenSaveData: (this: void) => Data
    const DeleteUserData: (this: void, name: string, num: int) => unknown
}

declare namespace Events {
    const AIProcessingStartedForPlayer: Event<(this:void, current: PlayerID) => void>
    const ActivePlayerTurnStart: Event<(this: void) => void>
    const LoadScreenClose: Event<(this: void) => void>
    const WarStateChanged: Event<(this: void, team1: TeamID, team2: TeamID, war: bool) => void>
    const SequenceGameInitComplete: Event<(this: void) => void>
    const SpecificCityInfoDirty: Event<(this: void, playerId: PlayerID, cityId: CityID, updateType: int) => void>
    const SerialEventCityCaptured: Event<(this: void, hexPos: unknown, oldOwner: PlayerID, cityId: CityID, newOwner: PlayerID) => void>
    const SerialEventImprovementCreated: Event<(this: void, hexX: int, hexY: int, continent1: int, continent2: int, player: PlayerID, createImp: unknown, createImpRR: unknown) => void>
}

declare namespace Network {
    const SendGameOptions: (this: void, options: unknown) => unknown
}

declare namespace GameDefines {
    const MAX_MAJOR_CIVS: int
    const MAX_PLAYERS: int
    const MAX_CIV_PLAYERS: int
    const MAX_CITY_HIT_POINTS: int
    const BARBARIAN_CAMP_MINIMUM_DISTANCE_CAPITAL: int
}

declare namespace Game {
    const GetActivePlayer: (this:void) => PlayerID
    const GetActiveTeam: (this:void) => TeamID
    const GetElapsedGameTurns: (this: void) => int
    const GetCurrentEra: (this: void) => int
    const GetGameSpeedType: (this: void) => int
}

declare namespace Mouse {
    const eLClick: unknown
}

type KeyEventKeys = "KeyDown"

declare namespace KeyEvents {
}

type KeyKeys = "VK_ESCAPE"

declare namespace Keys {
}

declare namespace ContextPtr {
    const SetHide: (bol: bool) => unknown
    const SetInputHandler: (uiMsg: unknown, wParam: unknown, lParam: unknown) => bool
    const BuildInstanceForControl: (str: string, instance: unknown, rows: unknown) => unknown
}

interface Control {
    SetDisabled(bol: bool): unknown
    SetText(text: string): unknown
}

interface CheckControl extends Control {
    RegisterCheckHandler(callback: (isChecked: bool) => void): unknown
    SetCheck(bol: bool): unknown
}

interface ButtonControl extends Control {
    RegisterCallback(click: unknown, callback: () => void): unknown
    SetVoid1(val: int): unknown
    LocalizeAndSetText(key: string): unknown
    LocalizeAndSetToolTip(key: string): unknown
    SetVoids(val1: int, val2: int): unknown
}

interface SliderControl extends Control {
    SetValue(val: int): unknown
    RegisterSliderCallback(callback: (val: int) => void): unknown
}

interface InputControl extends Control {
    RegisterCallback(callback: (val: unknown, obj: unknown, fire: bool) => void): unknown
}

interface PullDownControl extends Control {
    ClearEntries(): unknown
    BuildEntry(str: string, val: unknown): unknown
    RegisterSelectionCallback(callback: (id: unknown) => void): unknown
    CalculateInternals(): unknown
}

interface IconControl extends Control {
    SetColor(vec: Vector4): unknown
}

declare namespace Controls {}

type AdditionalInformationDropdownGatherEntry = {
    text: string,
    call(this: void): void
}

declare namespace LuaEvents {
    const AdditionalInformationDropdownGatherEntries: Event<(this: void, additionalEntries: AdditionalInformationDropdownGatherEntry[]) => void>
    const RequestRefreshAdditionalInformationDropdownEntries: (this: void) => unknown
}

interface Language {
    Type: string
}

declare namespace Locale {
    const ConvertTextKey: (this: void, key: string) => string
    const GetCurrentLanguage: (this: void) => Language
    const SetCurrentLanguage: (this: void, languageKey: string) => unknown
    const Lookup: (this: void, s: string) => string
    const Compare: (this: void, key1: string, key2: string) => bool
}

declare namespace DB {
    const Query: (this: void, sql: SQLQuery) => unknown
}

type GameInfoRegistry<K extends string, T> = {
    [L in K]: T
}

type GameInfoRegistryIterable<K extends string, T extends GameInfoEntry<K, int>> = GameInfoRegistry<K, T> & (() => LuaIterable<T>)

interface LeaderType extends GameInfoEntry<LeaderTypeKeys, LeaderID> {
    Description: unknown
}

type PlayerColorKeys = "";
interface PlayerColorType extends GameInfoEntry<PlayerColorKeys, PlayerColorID> {
    PrimaryColor: ColorKey
    SecondaryColor: ColorKey
    TextColor: unknown
}

type CivilizationID = number;

type CivilizationTypeKeys = "";

interface CivilizationType extends GameInfoEntry<CivilizationTypeKeys, CivilizationID> {
    Description: unknown
    ShortDescription: unknown
    Playable: unknown
}

type HandicapInfoID = number;
type HandicapInfoKeys = ""

interface GameInfoEntry<K extends string, I> {
    Type: K
    ID: I
}

interface HandicapInfo extends GameInfoEntry<HandicapInfoKeys, HandicapInfoID> {
    Description: string
    Help: string
}

type EraKeys = "";
type EraID = number;

interface Era extends GameInfoEntry<EraKeys, EraID> {

}

type ColorKey = "";
type ColorID = number;
interface Color extends GameInfoEntry<ColorKey, ColorID> {
    Red: unknown
    Green: unknown
    Blue: unknown
    Alpha: unknown
}

interface Vector4 {}

declare const Vector4: (red: unknown, green: unknown, blue: unknown, alpha: unknown) => Vector4;

type MinorTraitKeys = "MINOR_TRAIT_CULTURED" | "MINOR_TRAIT_MILITARISTIC" | "MINOR_TRAIT_MARITIME" | "MINOR_TRAIT_MERCANTILE" | "MINOR_TRAIT_RELIGIOUS";
type MinorTraitID = number;
interface MinorTrait extends GameInfoEntry<MinorTraitKeys, MinorTraitID> {

}

type BuildingTypeKeys = "BUILDING_MONUMENT" | "BUILDING_BARRACKS" | "BUILDING_LIGHTHOUSE" | "BUILDING_MARKET" | "BUILDING_MAYA_PYRAMID";
type BuildingTypeID = number;
interface BuildingType extends GameInfoEntry<BuildingTypeKeys, BuildingTypeID> {}

declare namespace GameInfo {
    const UnitAIInfos: GameInfoRegistryIterable<unknown, unknown>
    const Units: GameInfoRegistryIterable<unknown, unknown>
    const Improvements: GameInfoRegistryIterable<ImprovementTypeKeys, ImprovementType>
    const Technologies: GameInfoRegistryIterable<unknown, unknown>
    const Leaders: GameInfoRegistryIterable<LeaderTypeKeys, LeaderType>
    const PlayerColors: GameInfoRegistryIterable<PlayerColorKeys, PlayerColorType>
    const Resources: GameInfoRegistryIterable<ResourceTypeKeys, ResourceType>
    const Civilizations: GameInfoRegistryIterable<CivilizationTypeKeys, CivilizationType>
    const HandicapInfos: GameInfoRegistryIterable<HandicapInfoKeys, HandicapInfo>
    const Eras: GameInfoRegistryIterable<EraKeys, Era>
    const Colors: GameInfoRegistryIterable<ColorKey, Color>
    const MinorTrait: GameInfoRegistryIterable<MinorTraitKeys, MinorTrait>
}

declare type GameInfoTypes = typeof GameInfo.UnitAIInfos 
    & typeof GameInfo.Units 
    & typeof GameInfo.Improvements 
    & typeof GameInfo.Technologies 
    & typeof GameInfo.Leaders 
    & typeof GameInfo.PlayerColors 
    & typeof GameInfo.Resources;

declare const ToGridFromHex: (hexX:int, hexY: int) => LuaMultiReturn<[int, int]>;

declare namespace NotificationTypes {
    const NOTIFICATION_GENERIC: unknown
}

declare namespace DomainTypes {
    const DOMAIN_LAND: unknown
    const DOMAIN_SEA: unknown
    const DOMAIN_AIR: unknown
}

declare namespace MissionTypes {
    const MISSION_NUKE: unknown
    const MISSION_FOUND: unknown
}

declare namespace UI {
    const LookAt: (this: void, plot: Plot) => unknown
}

declare namespace PreGame {
    const SetPlayerColor: (this: void, civ: int, colorId: PlayerColorID) => unknown
    const SetLeaderType: (this: void, civ: int, leaderId: LeaderID) => unknown
    const SetGameOption: (this: void, key: string, val: unknown) => unknown
    const SetCivilization: (this: void, slot: int, civ: CivilizationID) => unknown
    const SetHandicap: (this: void, num: int, val: int) => unknown
}

declare namespace ContentManager {
    const IsActive: (this: void, id: string, type: unknown) => bool
}

declare enum ContentType {
    GAMEPLAY  // DLCs ?
}

type CityUpdateTypeKeys = "CITY_UPDATE_TYPE_BANNER";

type CityUpdateTypes = GameInfoRegistry<CityUpdateTypeKeys, CityUpdateTypeID>

declare namespace UIManager {
    const DequeuePopup: (val: unknown) => unknown
    const QueuePopup: (val1: unknown, val2: unknown) => unknown
}

declare const IconHookup: (this:void, val1: int, val2: int, val3: unknown, val4: unknown) => unknown