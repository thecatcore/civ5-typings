declare enum DLCs {
    VANILLA,
    GODS_AND_KINGS,
    BRAVE_NEW_WORLD
}

type TableType<D extends DLCs, V, G, B> = (D extends DLCs.BRAVE_NEW_WORLD ? B : D extends DLCs.GODS_AND_KINGS ? G : V);
type TableTypeVanilla<D extends DLCs, V> = TableType<D, V, V, V>;
type TableTypeGnK<D extends DLCs, G, B> = TableType<D, null, G, B>;
type TableTypeBNW<D extends DLCs, B> = TableType<D, null, null, B>;

// declare type MinorCivTraits_Status<D extends DLCs> = TableType<D, Vanilla_MinorCivTraits_Status, GnK_MinorCivTraits_Status, BNW_MinorCivTraits_Status>