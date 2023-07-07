declare type Traits<D extends DLCs> = TableType<D, Vanilla_Traits, GnK_Traits, BNW_Traits>

declare type Trait_ExtraYieldThresholds<D extends DLCs> = TableType<D, Vanilla_Trait_ExtraYieldThresholds, GnK_Trait_ExtraYieldThresholds, BNW_Trait_ExtraYieldThresholds>

declare type Trait_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_YieldChanges, GnK_Trait_YieldChanges, BNW_Trait_YieldChanges>

declare type Trait_YieldChangesStrategicResources<D extends DLCs> = TableType<D, Vanilla_Trait_YieldChangesStrategicResources, GnK_Trait_YieldChangesStrategicResources, BNW_Trait_YieldChangesStrategicResources>

declare type Trait_YieldChangesNaturalWonder<D extends DLCs> = TableTypeGnK<D, GnK_Trait_YieldChangesNaturalWonder, BNW_Trait_YieldChangesNaturalWonder>

declare type Trait_YieldChangesPerTradePartner<D extends DLCs> = TableTypeBNW<D, BNW_Trait_YieldChangesPerTradePartner>

declare type Trait_YieldChangesIncomingTradeRoute<D extends DLCs> = TableTypeBNW<D, BNW_Trait_YieldChangesIncomingTradeRoute>

declare type Trait_YieldModifiers<D extends DLCs> = TableType<D, Vanilla_Trait_YieldModifiers, GnK_Trait_YieldModifiers, BNW_Trait_YieldModifiers>

declare type Trait_FreePromotions<D extends DLCs> = TableType<D, Vanilla_Trait_FreePromotions, GnK_Trait_FreePromotions, BNW_Trait_FreePromotions>

declare type Trait_FreePromotionUnitCombats<D extends DLCs> = TableType<D, Vanilla_Trait_FreePromotionUnitCombats, GnK_Trait_FreePromotionUnitCombats, BNW_Trait_FreePromotionUnitCombats>

declare type Trait_MovesChangeUnitCombats<D extends DLCs> = TableType<D, Vanilla_Trait_MovesChangeUnitCombats, GnK_Trait_MovesChangeUnitCombats, BNW_Trait_MovesChangeUnitCombats>

declare type Trait_MaintenanceModifierUnitCombats<D extends DLCs> = TableTypeBNW<D, BNW_Trait_MaintenanceModifierUnitCombats>

declare type Trait_Terrains<D extends DLCs> = TableType<D, Vanilla_Trait_Terrains, GnK_Trait_Terrains, BNW_Trait_Terrains>

declare type Trait_ResourceQuantityModifiers<D extends DLCs> = TableType<D, Vanilla_Trait_ResourceQuantityModifiers, GnK_Trait_ResourceQuantityModifiers, BNW_Trait_ResourceQuantityModifiers>

declare type Trait_FreeResourceFirstXCities<D extends DLCs> = TableTypeGnK<D, GnK_Trait_FreeResourceFirstXCities, BNW_Trait_FreeResourceFirstXCities>

declare type Trait_ImprovementYieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_ImprovementYieldChanges, GnK_Trait_ImprovementYieldChanges, BNW_Trait_ImprovementYieldChanges>

declare type Trait_SpecialistYieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_SpecialistYieldChanges, GnK_Trait_SpecialistYieldChanges, BNW_Trait_SpecialistYieldChanges>

declare type Trait_UnimprovedFeatureYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Trait_UnimprovedFeatureYieldChanges, BNW_Trait_UnimprovedFeatureYieldChanges>

declare type Trait_NoTrain<D extends DLCs> = TableTypeBNW<D, BNW_Trait_NoTrain>