type int = number;
type bool = boolean;

type Registery<E, E2 extends number, T> = {
    [K in (keyof E | E2)]: T
} & Record<string | int, T>

// See: http://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)
declare const GameInfos: {
    Commands: Registery<typeof ActionType, ActionType, GameInfos_Commands>,
    ArtStyleTypes: Registery<typeof ArtStyleType, ArtStyleType, GameInfos_ArtStyleTypes>,
    Automates: Registery<typeof AutomateType, AutomateType, GameInfos_Automates>,
    Beliefs: Registery<typeof BeliefType, BeliefType, GameInfos_Beliefs>,
    Builds: Registery<typeof BuildActionType, BuildActionType, GameInfos_Builds>,
    BuildingClasses: Registery<typeof BuildingClassType, BuildingClassType, GameInfos_BuildingClasses>,
    Calendars: Registery<typeof CalendarType, CalendarType, GameInfos_Calendars>
}