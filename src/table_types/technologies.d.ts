declare type Technologies<D extends DLCs> = TableType<D, Vanilla_Technologies, GnK_Technologies, BNW_Technologies>

declare type Technology_DomainExtraMoves<D extends DLCs> = TableType<D, Vanilla_Technology_DomainExtraMoves, GnK_Technology_DomainExtraMoves, BNW_Technology_DomainExtraMoves>

declare type Technology_TradeRouteDomainExtraRange<D extends DLCs> = TableTypeBNW<D, BNW_Technology_TradeRouteDomainExtraRange>

declare type Technology_Flavors<D extends DLCs> = TableType<D, Vanilla_Technology_Flavors, GnK_Technology_Flavors, BNW_Technology_Flavors>

declare type Technology_ORPrereqTechs<D extends DLCs> = TableType<D, Vanilla_Technology_ORPrereqTechs, GnK_Technology_ORPrereqTechs, BNW_Technology_ORPrereqTechs>

declare type Technology_PrereqTechs<D extends DLCs> = TableType<D, Vanilla_Technology_PrereqTechs, GnK_Technology_PrereqTechs, BNW_Technology_PrereqTechs>

declare type Technology_FreePromotions<D extends DLCs> = TableTypeGnK<D,  GnK_Technology_FreePromotions, BNW_Technology_FreePromotions>