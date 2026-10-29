/** Both expansions are optional, Brave New World overrides the Gods and Kings data when both are enabled. */
declare enum DLCs {
    VANILLA,
    GODS_AND_KINGS,
    BRAVE_NEW_WORLD,
    GODS_AND_KINGS_BRAVE_NEW_WORLD
}

type TableType<D extends DLCs, V, G, B, GB> = (
    D extends DLCs.GODS_AND_KINGS_BRAVE_NEW_WORLD ? GB : D extends DLCs.BRAVE_NEW_WORLD ? B : D extends DLCs.GODS_AND_KINGS ? G : V
);
type TableTypeVanilla<D extends DLCs, V> = TableType<D, V, V, V, V>;
type TableTypeGnK<D extends DLCs, G, B> = TableType<D, null, G, B, B>;
type TableTypeBNW<D extends DLCs, B> = TableType<D, null, null, B, B>;
type TableTypeNoGnK<D extends DLCs, V, B> = TableType<D, V, V, B, B>;

/**
 * Augment this interface to choose the ruleset the game database is typed after, defaults to Gods and Kings with Brave New World:
 * ```ts
 * interface Civ5TypingsConfig { dlc: DLCs.BRAVE_NEW_WORLD }
 * ```
 */
interface Civ5TypingsConfig {}

type ActiveDLC = Civ5TypingsConfig extends { dlc: infer D extends DLCs } ? D : DLCs.GODS_AND_KINGS_BRAVE_NEW_WORLD;