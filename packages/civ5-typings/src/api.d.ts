// The Lua API of the game, as used by mods: only the parts seen in actual mods so far.
// See: http://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)

/** Index of a player in `Players`, from `0` to `GameDefines.MAX_PLAYERS - 1` */
type PlayerID = int;
/** Index of a team in `Teams` */
type TeamID = int;
/** The `ID` of a row of the game database, as found in `GameInfoTypes` or `GameInfo.Table[key].ID` */
type InfoID = int;

interface Player {
    GetName(): string;
    GetTeam(): TeamID;
    IsAlive(): bool;
    /** Era `ID`, see `GameInfo.Eras` */
    GetCurrentEra(): InfoID;

    IsMinorCiv(): bool;
    /** `MinorCivTraits` `ID`, e.g. `GameInfoTypes.MINOR_TRAIT_CULTURED` */
    GetMinorCivTrait(): InfoID;
    IsMinorCivActiveQuestForPlayer(player: PlayerID, quest: int): bool;
    GetQuestData1(player: PlayerID, quest: int): int;
    GetQuestData2(player: PlayerID, quest: int): int;
    GetQuestTurnsRemaining(player: PlayerID, quest: int, gameTurn: int): int;

    /** `for (const city of player.Cities())` */
    Cities(): LuaIterable<City>;
    GetNumCities(): int;
    /** `undefined` when the player has no city */
    GetCapitalCity(): City | undefined;
    /** Units of a `UnitClasses` `ID` the player has, plus the ones being trained */
    GetUnitClassCountPlusMaking(unitClass: InfoID): int;

    /** Shows a notification to this player, at the given plot */
    AddNotification(type: int, message: string, summary: string, x?: int, y?: int, data1?: int, data2?: int): void;
}

interface City {
    GetX(): int;
    GetY(): int;
    IsHasBuilding(building: InfoID): bool;
    /** Sets the number of a building in the city, regardless of whether it can be built */
    SetNumRealBuilding(building: InfoID, count: int): void;
}

interface Team {
    IsAlive(): bool;
    IsAtWar(team: TeamID): bool;
    CanChangeWarPeace(team: TeamID): bool;
    CanDeclareWar(team: TeamID): bool;
    DeclareWar(team: TeamID): void;
    MakePeace(team: TeamID): void;
    /** Turns before peace can be made with the team, `0` or less once possible */
    GetNumTurnsLockedIntoWar(team: TeamID): int;
}

/** Every player slot, alive or not: majors first, then minors (from `GameDefines.MAX_MAJOR_CIVS`), then the barbarians */
declare const Players: { readonly [player: PlayerID]: Player };
declare const Teams: { readonly [team: TeamID]: Team };

declare namespace Game {
    /** The player of the local user */
    function GetActivePlayer(this: void): PlayerID;
    function GetGameTurn(this: void): int;
}

/** Engine constants, and the `Name` of every row of the `Defines` table */
declare const GameDefines: {
    readonly MAX_MAJOR_CIVS: int;
    readonly MAX_CIV_PLAYERS: int;
    readonly MAX_PLAYERS: int;
} & {
    readonly [name: string]: int | undefined;
};

declare const NotificationTypes: {
    readonly NOTIFICATION_GENERIC: int;
} & {
    readonly [name: string]: int | undefined;
};

declare const MinorCivQuestTypes: {
    readonly MINOR_CIV_QUEST_BULLY_CITY_STATE: int;
} & {
    readonly [name: string]: int | undefined;
};

/** A game event, listeners are called with dot syntax: `GameEvents.PlayerDoTurn.Add(listener)` */
interface GameEvent<L extends (this: void, ...args: any[]) => any> {
    Add(this: void, listener: L): void;
    Remove(this: void, listener: L): void;
}

declare const GameEvents: {
    /** At the start of the turn of each player */
    readonly PlayerDoTurn: GameEvent<(this: void, player: PlayerID) => void>;
    /** Whether a player can train a unit (`Units` `ID`) anywhere, every listener must return `true` */
    readonly PlayerCanTrain: GameEvent<(this: void, player: PlayerID, unit: InfoID) => bool>;
    /** Whether a city (`City:GetID()`) can train a unit (`Units` `ID`), every listener must return `true` */
    readonly CityCanTrain: GameEvent<(this: void, player: PlayerID, city: int, unit: InfoID) => bool>;
};