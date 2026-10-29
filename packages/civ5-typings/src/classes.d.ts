type int = number;
type bool = boolean;

type GameInfosRegistry<E, E2 extends number, T> = {
    [K in (keyof E | E2)]: T
} & Record<string | int, T> & ((this:void) => LuaIterable<T>)

// See: http://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)
declare const GameInfos: {
}