declare enum DLCs {
    VANILLA,
    GODS_AND_KINGS,
    BRAVE_NEW_WORLD
}

type TableType<D extends DLCs, V, G, B> = D extends DLCs.BRAVE_NEW_WORLD ? B : D extends DLCs.GODS_AND_KINGS ? G : V;

type MinorCivTraits_Status<D extends DLCs> = TableType<D, Vanilla_MinorCivTraits_Status, dlc_expansion_gameplay_xml_basicinfos_civ5minorcivtraits_MinorCivTraits_Status, dlc_expansion2_gameplay_xml_basicinfos_civ5minorcivtraits_MinorCivTraits_Status>