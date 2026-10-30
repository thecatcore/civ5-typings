// The parts of the Lua API that the wiki does not describe, see "api.d.ts" for the rest.

/** The `ID` of a row of the game database, as found in `GameInfoTypes` or `GameInfo.Table[key].ID` */
type InfoID = int;

/**
 * A game event, listeners are called with dot syntax: `GameEvents.PlayerDoTurn.Add(listener)`.
 * Calling the event itself invokes every listener: `LuaEvents.MyEvent(arg)`.
 */
interface GameEvent<L extends (this: void, ...args: any[]) => any> {
    (this: void, ...args: Parameters<L>): void;
    Add(this: void, listener: L): void;
    Remove(this: void, listener: L): void;
    RemoveAll(this: void): void;
    /** The number of listeners */
    Count(this: void): int;
}

/** Every player slot, alive or not: majors first, then minors (from `GameDefines.MAX_MAJOR_CIVS`), then the barbarians */
declare const Players: { readonly [player: PlayerID]: Player };
declare const Teams: { readonly [team: TeamID]: Team };

/** Engine constants, and the `Name` of every row of the `Defines` table */
declare const GameDefines: {
    readonly MAX_PLAYERS: int;
    readonly MAX_CIV_PLAYERS: int;
    readonly MAX_MAJOR_CIVS: int;
    readonly MAX_MINOR_CIVS: int;
    readonly MAX_TEAMS: int;
    readonly MAX_CIV_TEAMS: int;
} & {
    readonly [name: string]: int | undefined;
};

/** Runs a Lua file of the game or of the mod (by name, without the extension) in the current context: `include("IconSupport")` */
declare function include(this: void, file: string): void;

/** The controls of the current UI context, by `ID` (as given in its XML file) */
declare const Controls: { readonly [id: string]: any };
/** The current UI context */
declare const ContextPtr: Context;
