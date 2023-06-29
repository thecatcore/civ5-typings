declare type Buildings<D extends DLCs> = TableType<D, Vanilla_Buildings, GnK_Buildings, BNW_Buildings>

declare type Building_AreaYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_AreaYieldModifiers, GnK_Building_AreaYieldModifiers, BNW_Building_AreaYieldModifiers>

declare type Building_BuildingClassHappiness<D extends DLCs> = TableTypeGnK<D, GnK_Building_BuildingClassHappiness, BNW_Building_BuildingClassHappiness>

declare type Building_BuildingClassYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_BuildingClassYieldChanges, BNW_Building_BuildingClassYieldChanges>

declare type Building_ClassesNeededInCity<D extends DLCs> = TableType<D, Vanilla_Building_ClassesNeededInCity, GnK_Building_ClassesNeededInCity, BNW_Building_ClassesNeededInCity>

declare type Building_FreeUnits<D extends DLCs> = TableType<D, Vanilla_Building_FreeUnits, GnK_Building_FreeUnits, BNW_Building_FreeUnits>

declare type Building_DomainFreeExperiences<D extends DLCs> = TableType<D, Vanilla_Building_DomainFreeExperiences, GnK_Building_DomainFreeExperiences, BNW_Building_DomainFreeExperiences>

declare type Building_DomainFreeExperiencePerGreatWork<D extends DLCs> = TableTypeBNW<D, BNW_Building_DomainFreeExperiencePerGreatWork>

declare type Building_DomainProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Building_DomainProductionModifiers, GnK_Building_DomainProductionModifiers, BNW_Building_DomainProductionModifiers>

declare type Building_FreeSpecialistCounts<D extends DLCs> = TableType<D, Vanilla_Building_FreeSpecialistCounts, GnK_Building_FreeSpecialistCounts, BNW_Building_FreeSpecialistCounts>

declare type Building_Flavors<D extends DLCs> = TableType<D, Vanilla_Building_Flavors, GnK_Building_Flavors, BNW_Building_Flavors>

declare type Building_GlobalYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_GlobalYieldModifiers, GnK_Building_GlobalYieldModifiers, BNW_Building_GlobalYieldModifiers>

declare type Building_HurryModifiers<D extends DLCs> = TableType<D, Vanilla_Building_HurryModifiers, GnK_Building_HurryModifiers, BNW_Building_HurryModifiers>

declare type Building_LocalResourceAnds<D extends DLCs> = TableType<D, Vanilla_Building_LocalResourceAnds, GnK_Building_LocalResourceAnds, BNW_Building_LocalResourceAnds>

declare type Building_LocalResourceOrs<D extends DLCs> = TableType<D, Vanilla_Building_LocalResourceOrs, GnK_Building_LocalResourceOrs, BNW_Building_LocalResourceOrs>

declare type Building_LockedBuildingClasses<D extends DLCs> = TableType<D, Vanilla_Building_LockedBuildingClasses, GnK_Building_LockedBuildingClasses, BNW_Building_LockedBuildingClasses>

declare type Building_PrereqBuildingClasses<D extends DLCs> = TableType<D, Vanilla_Building_PrereqBuildingClasses, GnK_Building_PrereqBuildingClasses, BNW_Building_PrereqBuildingClasses>

declare type Building_ResourceQuantity<D extends DLCs> = TableTypeGnK<D, GnK_Building_ResourceQuantity, BNW_Building_ResourceQuantity>

declare type Building_ResourceQuantityRequirements<D extends DLCs> = TableType<D, Vanilla_Building_ResourceQuantityRequirements, GnK_Building_ResourceQuantityRequirements, BNW_Building_ResourceQuantityRequirements>

declare type Building_ResourceYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_ResourceYieldModifiers, GnK_Building_ResourceYieldModifiers, BNW_Building_ResourceYieldModifiers>

declare type Building_ResourceCultureChanges<D extends DLCs> = TableType<D, Vanilla_Building_ResourceCultureChanges, GnK_Building_ResourceCultureChanges, BNW_Building_ResourceCultureChanges>

declare type Building_ResourceFaithChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_ResourceFaithChanges, BNW_Building_ResourceFaithChanges>

declare type Building_RiverPlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_RiverPlotYieldChanges, GnK_Building_RiverPlotYieldChanges, BNW_Building_RiverPlotYieldChanges>

declare type Building_SeaPlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SeaPlotYieldChanges, GnK_Building_SeaPlotYieldChanges, BNW_Building_SeaPlotYieldChanges>

declare type Building_LakePlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_LakePlotYieldChanges, GnK_Building_LakePlotYieldChanges, BNW_Building_LakePlotYieldChanges>

declare type Building_SeaResourceYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SeaResourceYieldChanges, GnK_Building_SeaResourceYieldChanges, BNW_Building_SeaResourceYieldChanges>

declare type Building_ResourceYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_ResourceYieldChanges, GnK_Building_ResourceYieldChanges, BNW_Building_ResourceYieldChanges>

declare type Building_FeatureYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_FeatureYieldChanges, GnK_Building_FeatureYieldChanges, BNW_Building_FeatureYieldChanges>

declare type Building_TerrainYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_TerrainYieldChanges, BNW_Building_TerrainYieldChanges>

declare type Building_SpecialistYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SpecialistYieldChanges, GnK_Building_SpecialistYieldChanges, BNW_Building_SpecialistYieldChanges>

declare type Building_UnitCombatFreeExperiences<D extends DLCs> = TableType<D, Vanilla_Building_UnitCombatFreeExperiences, GnK_Building_UnitCombatFreeExperiences, BNW_Building_UnitCombatFreeExperiences>

declare type Building_UnitCombatProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Building_UnitCombatProductionModifiers, GnK_Building_UnitCombatProductionModifiers, BNW_Building_UnitCombatProductionModifiers>

declare type Building_TechAndPrereqs<D extends DLCs> = TableType<D, Vanilla_Building_TechAndPrereqs, GnK_Building_TechAndPrereqs, BNW_Building_TechAndPrereqs>

declare type Building_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_YieldChanges, GnK_Building_YieldChanges, BNW_Building_YieldChanges>

declare type Building_YieldChangesPerPop<D extends DLCs> = TableType<D, Vanilla_Building_YieldChangesPerPop, GnK_Building_YieldChangesPerPop, BNW_Building_YieldChangesPerPop>

declare type Building_YieldChangesPerReligion<D extends DLCs> = TableTypeBNW<D, BNW_Building_YieldChangesPerReligion>

declare type Building_TechEnhancedYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_TechEnhancedYieldChanges, GnK_Building_TechEnhancedYieldChanges, BNW_Building_TechEnhancedYieldChanges>

declare type Building_YieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_YieldModifiers, GnK_Building_YieldModifiers, BNW_Building_YieldModifiers>

declare type Building_ThemingBonuses<D extends DLCs> = TableTypeBNW<D, BNW_Building_ThemingBonuses>