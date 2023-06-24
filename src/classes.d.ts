type int = number;
type bool = boolean;

type GameInfosRegistry<E, E2 extends number, T> = {
    [K in (keyof E | E2)]: T
} & Record<string | int, T> & ((this:void) => LuaIterable<T>)

// See: http://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)
declare const GameInfos: {
    Commands: GameInfosRegistry<typeof ActionType, ActionType, GameInfos_Commands>,
    ArtStyleTypes: GameInfosRegistry<typeof ArtStyleType, ArtStyleType, GameInfos_ArtStyleTypes>,
    Automates: GameInfosRegistry<typeof AutomateType, AutomateType, GameInfos_Automates>,
    Beliefs: GameInfosRegistry<typeof BeliefType, BeliefType, GameInfos_Beliefs>,
    Builds: GameInfosRegistry<typeof BuildActionType, BuildActionType, GameInfos_Builds>,
    BuildingClasses: GameInfosRegistry<typeof BuildingClassType, BuildingClassType, GameInfos_BuildingClasses>,
    Buildings: GameInfosRegistry<typeof BuildingType, BuildingType, GameInfos_Buildings>,
    Calendars: GameInfosRegistry<typeof CalendarType, CalendarType, GameInfos_Calendars>,
    Civilizations: GameInfosRegistry<typeof CivilizationType, CivilizationType, GameInfos_Civilizations>
}