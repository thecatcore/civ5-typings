declare type AICityStrategies<D extends DLCs> = TableType<D, Vanilla_AICityStrategies, GnK_AICityStrategies, BNW_AICityStrategies>;

declare type AICityStrategy_Flavors<D extends DLCs> = TableType<D, Vanilla_AICityStrategy_Flavors, GnK_AICityStrategy_Flavors, BNW_AICityStrategy_Flavors>;

declare type AICityStrategy_PersonalityFlavorThresholdMods<D extends DLCs> = TableType<D, Vanilla_AICityStrategy_PersonalityFlavorThresholdMods, GnK_AICityStrategy_PersonalityFlavorThresholdMods, BNW_AICityStrategy_PersonalityFlavorThresholdMods>;

declare type AIEconomicStrategies<D extends DLCs> = TableType<D, Vanilla_AIEconomicStrategies, GnK_AIEconomicStrategies, BNW_AIEconomicStrategies>;

declare type AIEconomicStrategy_Player_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_AIEconomicStrategy_Player_Flavors, BNW_AIEconomicStrategy_Player_Flavors>;

declare type AIEconomicStrategy_City_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_AIEconomicStrategy_City_Flavors, BNW_AIEconomicStrategy_City_Flavors>;

declare type AIEconomicStrategy_PersonalityFlavorThresholdMods<D extends DLCs> = TableType<D, Vanilla_AIEconomicStrategy_PersonalityFlavorThresholdMods, GnK_AIEconomicStrategy_PersonalityFlavorThresholdMods, BNW_AIEconomicStrategy_PersonalityFlavorThresholdMods>;

declare type AIMilitaryStrategies<D extends DLCs> = TableType<D, Vanilla_AIMilitaryStrategies, GnK_AIMilitaryStrategies, BNW_AIMilitaryStrategies>;

declare type AIMilitaryStrategy_Player_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_AIMilitaryStrategy_Player_Flavors, BNW_AIMilitaryStrategy_Player_Flavors>;

declare type AIMilitaryStrategy_City_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_AIMilitaryStrategy_City_Flavors, BNW_AIMilitaryStrategy_City_Flavors>;

declare type AIMilitaryStrategy_PersonalityFlavorThresholdMods<D extends DLCs> = TableType<D, Vanilla_AIMilitaryStrategy_PersonalityFlavorThresholdMods, GnK_AIMilitaryStrategy_PersonalityFlavorThresholdMods, BNW_AIMilitaryStrategy_PersonalityFlavorThresholdMods>;

declare type CitySpecializations<D extends DLCs> = TableType<D, Vanilla_CitySpecializations, GnK_CitySpecializations, BNW_CitySpecializations>;

declare type CitySpecialization_Flavors<D extends DLCs> = TableType<D, Vanilla_CitySpecialization_Flavors, GnK_CitySpecialization_Flavors, BNW_CitySpecialization_Flavors>;

declare type CitySpecialization_TargetYields<D extends DLCs> = TableType<D, Vanilla_CitySpecialization_TargetYields, GnK_CitySpecialization_TargetYields, BNW_CitySpecialization_TargetYields>;

declare type MinorCivTraits<D extends DLCs> = TableType<D, Vanilla_MinorCivTraits, GnK_MinorCivTraits, BNW_MinorCivTraits>;

declare type MinorCivTraits_Status<D extends DLCs> = TableType<D, Vanilla_MinorCivTraits_Status, GnK_MinorCivTraits_Status, BNW_MinorCivTraits_Status>;

declare type BuildingClasses<D extends DLCs> = TableType<D, Vanilla_BuildingClasses, GnK_BuildingClasses, BNW_BuildingClasses>;

declare type BuildingClass_VictoryThresholds<D extends DLCs> = TableType<D, Vanilla_BuildingClass_VictoryThresholds, GnK_BuildingClass_VictoryThresholds, BNW_BuildingClass_VictoryThresholds>;

declare type Buildings<D extends DLCs> = TableType<D, Vanilla_Buildings, GnK_Buildings, BNW_Buildings>;

declare type Building_AreaYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_AreaYieldModifiers, GnK_Building_AreaYieldModifiers, BNW_Building_AreaYieldModifiers>;

declare type Building_BuildingClassHappiness<D extends DLCs> = TableTypeGnK<D, GnK_Building_BuildingClassHappiness, BNW_Building_BuildingClassHappiness>;

declare type Building_BuildingClassYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_BuildingClassYieldChanges, BNW_Building_BuildingClassYieldChanges>;

declare type Building_ClassesNeededInCity<D extends DLCs> = TableType<D, Vanilla_Building_ClassesNeededInCity, GnK_Building_ClassesNeededInCity, BNW_Building_ClassesNeededInCity>;

declare type Building_FreeUnits<D extends DLCs> = TableType<D, Vanilla_Building_FreeUnits, GnK_Building_FreeUnits, BNW_Building_FreeUnits>;

declare type Building_DomainFreeExperiences<D extends DLCs> = TableType<D, Vanilla_Building_DomainFreeExperiences, GnK_Building_DomainFreeExperiences, BNW_Building_DomainFreeExperiences>;

declare type Building_DomainProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Building_DomainProductionModifiers, GnK_Building_DomainProductionModifiers, BNW_Building_DomainProductionModifiers>;

declare type Building_FreeSpecialistCounts<D extends DLCs> = TableType<D, Vanilla_Building_FreeSpecialistCounts, GnK_Building_FreeSpecialistCounts, BNW_Building_FreeSpecialistCounts>;

declare type Building_Flavors<D extends DLCs> = TableType<D, Vanilla_Building_Flavors, GnK_Building_Flavors, BNW_Building_Flavors>;

declare type Building_GlobalYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_GlobalYieldModifiers, GnK_Building_GlobalYieldModifiers, BNW_Building_GlobalYieldModifiers>;

declare type Building_HurryModifiers<D extends DLCs> = TableType<D, Vanilla_Building_HurryModifiers, GnK_Building_HurryModifiers, BNW_Building_HurryModifiers>;

declare type Building_LocalResourceAnds<D extends DLCs> = TableType<D, Vanilla_Building_LocalResourceAnds, GnK_Building_LocalResourceAnds, BNW_Building_LocalResourceAnds>;

declare type Building_LocalResourceOrs<D extends DLCs> = TableType<D, Vanilla_Building_LocalResourceOrs, GnK_Building_LocalResourceOrs, BNW_Building_LocalResourceOrs>;

declare type Building_LockedBuildingClasses<D extends DLCs> = TableType<D, Vanilla_Building_LockedBuildingClasses, GnK_Building_LockedBuildingClasses, BNW_Building_LockedBuildingClasses>;

declare type Building_PrereqBuildingClasses<D extends DLCs> = TableType<D, Vanilla_Building_PrereqBuildingClasses, GnK_Building_PrereqBuildingClasses, BNW_Building_PrereqBuildingClasses>;

declare type Building_ResourceQuantity<D extends DLCs> = TableTypeGnK<D, GnK_Building_ResourceQuantity, BNW_Building_ResourceQuantity>;

declare type Building_ResourceQuantityRequirements<D extends DLCs> = TableType<D, Vanilla_Building_ResourceQuantityRequirements, GnK_Building_ResourceQuantityRequirements, BNW_Building_ResourceQuantityRequirements>;

declare type Building_ResourceYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_ResourceYieldModifiers, GnK_Building_ResourceYieldModifiers, BNW_Building_ResourceYieldModifiers>;

declare type Building_ResourceCultureChanges<D extends DLCs> = TableType<D, Vanilla_Building_ResourceCultureChanges, GnK_Building_ResourceCultureChanges, BNW_Building_ResourceCultureChanges>;

declare type Building_ResourceFaithChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_ResourceFaithChanges, BNW_Building_ResourceFaithChanges>;

declare type Building_RiverPlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_RiverPlotYieldChanges, GnK_Building_RiverPlotYieldChanges, BNW_Building_RiverPlotYieldChanges>;

declare type Building_SeaPlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SeaPlotYieldChanges, GnK_Building_SeaPlotYieldChanges, BNW_Building_SeaPlotYieldChanges>;

declare type Building_LakePlotYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_LakePlotYieldChanges, GnK_Building_LakePlotYieldChanges, BNW_Building_LakePlotYieldChanges>;

declare type Building_SeaResourceYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SeaResourceYieldChanges, GnK_Building_SeaResourceYieldChanges, BNW_Building_SeaResourceYieldChanges>;

declare type Building_ResourceYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_ResourceYieldChanges, GnK_Building_ResourceYieldChanges, BNW_Building_ResourceYieldChanges>;

declare type Building_FeatureYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_FeatureYieldChanges, GnK_Building_FeatureYieldChanges, BNW_Building_FeatureYieldChanges>;

declare type Building_TerrainYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Building_TerrainYieldChanges, BNW_Building_TerrainYieldChanges>;

declare type Building_SpecialistYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_SpecialistYieldChanges, GnK_Building_SpecialistYieldChanges, BNW_Building_SpecialistYieldChanges>;

declare type Building_UnitCombatFreeExperiences<D extends DLCs> = TableType<D, Vanilla_Building_UnitCombatFreeExperiences, GnK_Building_UnitCombatFreeExperiences, BNW_Building_UnitCombatFreeExperiences>;

declare type Building_UnitCombatProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Building_UnitCombatProductionModifiers, GnK_Building_UnitCombatProductionModifiers, BNW_Building_UnitCombatProductionModifiers>;

declare type Building_TechAndPrereqs<D extends DLCs> = TableType<D, Vanilla_Building_TechAndPrereqs, GnK_Building_TechAndPrereqs, BNW_Building_TechAndPrereqs>;

declare type Building_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_YieldChanges, GnK_Building_YieldChanges, BNW_Building_YieldChanges>;

declare type Building_YieldChangesPerPop<D extends DLCs> = TableType<D, Vanilla_Building_YieldChangesPerPop, GnK_Building_YieldChangesPerPop, BNW_Building_YieldChangesPerPop>;

declare type Building_TechEnhancedYieldChanges<D extends DLCs> = TableType<D, Vanilla_Building_TechEnhancedYieldChanges, GnK_Building_TechEnhancedYieldChanges, BNW_Building_TechEnhancedYieldChanges>;

declare type Building_YieldModifiers<D extends DLCs> = TableType<D, Vanilla_Building_YieldModifiers, GnK_Building_YieldModifiers, BNW_Building_YieldModifiers>;

declare type Civilizations<D extends DLCs> = TableType<D, Vanilla_Civilizations, GnK_Civilizations, BNW_Civilizations>;

declare type Civilization_BuildingClassOverrides<D extends DLCs> = TableType<D, Vanilla_Civilization_BuildingClassOverrides, GnK_Civilization_BuildingClassOverrides, BNW_Civilization_BuildingClassOverrides>;

declare type Civilization_CityNames<D extends DLCs> = TableType<D, Vanilla_Civilization_CityNames, GnK_Civilization_CityNames, BNW_Civilization_CityNames>;

declare type Civilization_DisableTechs<D extends DLCs> = TableType<D, Vanilla_Civilization_DisableTechs, GnK_Civilization_DisableTechs, BNW_Civilization_DisableTechs>;

declare type Civilization_FreeBuildingClasses<D extends DLCs> = TableType<D, Vanilla_Civilization_FreeBuildingClasses, GnK_Civilization_FreeBuildingClasses, BNW_Civilization_FreeBuildingClasses>;

declare type Civilization_FreeTechs<D extends DLCs> = TableType<D, Vanilla_Civilization_FreeTechs, GnK_Civilization_FreeTechs, BNW_Civilization_FreeTechs>;

declare type Civilization_FreeUnits<D extends DLCs> = TableType<D, Vanilla_Civilization_FreeUnits, GnK_Civilization_FreeUnits, BNW_Civilization_FreeUnits>;

declare type Civilization_Leaders<D extends DLCs> = TableType<D, Vanilla_Civilization_Leaders, GnK_Civilization_Leaders, BNW_Civilization_Leaders>;

declare type Civilization_Religions<D extends DLCs> = TableTypeGnK<D, GnK_Civilization_Religions, BNW_Civilization_Religions>;

declare type Civilization_SpyNames<D extends DLCs> = TableTypeGnK<D, GnK_Civilization_SpyNames, BNW_Civilization_SpyNames>;

declare type Civilization_UnitClassOverrides<D extends DLCs> = TableType<D, Vanilla_Civilization_UnitClassOverrides, GnK_Civilization_UnitClassOverrides, BNW_Civilization_UnitClassOverrides>;

declare type Civilization_Start_Along_Ocean<D extends DLCs> = TableType<D, Vanilla_Civilization_Start_Along_Ocean, GnK_Civilization_Start_Along_Ocean, BNW_Civilization_Start_Along_Ocean>;

declare type Civilization_Start_Along_River<D extends DLCs> = TableType<D, Vanilla_Civilization_Start_Along_River, GnK_Civilization_Start_Along_River, BNW_Civilization_Start_Along_River>;

declare type Civilization_Start_Region_Priority<D extends DLCs> = TableType<D, Vanilla_Civilization_Start_Region_Priority, GnK_Civilization_Start_Region_Priority, BNW_Civilization_Start_Region_Priority>;

declare type Civilization_Start_Region_Avoid<D extends DLCs> = TableType<D, Vanilla_Civilization_Start_Region_Avoid, GnK_Civilization_Start_Region_Avoid, BNW_Civilization_Start_Region_Avoid>;

declare type MinorCivilizations<D extends DLCs> = TableType<D, Vanilla_MinorCivilizations, GnK_MinorCivilizations, BNW_MinorCivilizations>;

declare type MinorCivilization_Flavors<D extends DLCs> = TableType<D, Vanilla_MinorCivilization_Flavors, GnK_MinorCivilization_Flavors, BNW_MinorCivilization_Flavors>;

declare type MinorCivilization_CityNames<D extends DLCs> = TableType<D, Vanilla_MinorCivilization_CityNames, GnK_MinorCivilization_CityNames, BNW_MinorCivilization_CityNames>;

declare type Traits<D extends DLCs> = TableType<D, Vanilla_Traits, GnK_Traits, BNW_Traits>;

declare type Trait_ExtraYieldThresholds<D extends DLCs> = TableType<D, Vanilla_Trait_ExtraYieldThresholds, GnK_Trait_ExtraYieldThresholds, BNW_Trait_ExtraYieldThresholds>;

declare type Trait_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_YieldChanges, GnK_Trait_YieldChanges, BNW_Trait_YieldChanges>;

declare type Trait_YieldChangesStrategicResources<D extends DLCs> = TableType<D, Vanilla_Trait_YieldChangesStrategicResources, GnK_Trait_YieldChangesStrategicResources, BNW_Trait_YieldChangesStrategicResources>;

declare type Trait_YieldChangesNaturalWonder<D extends DLCs> = TableTypeGnK<D, GnK_Trait_YieldChangesNaturalWonder, BNW_Trait_YieldChangesNaturalWonder>;

declare type Trait_YieldModifiers<D extends DLCs> = TableType<D, Vanilla_Trait_YieldModifiers, GnK_Trait_YieldModifiers, BNW_Trait_YieldModifiers>;

declare type Trait_FreePromotions<D extends DLCs> = TableType<D, Vanilla_Trait_FreePromotions, GnK_Trait_FreePromotions, BNW_Trait_FreePromotions>;

declare type Trait_FreePromotionUnitCombats<D extends DLCs> = TableType<D, Vanilla_Trait_FreePromotionUnitCombats, GnK_Trait_FreePromotionUnitCombats, BNW_Trait_FreePromotionUnitCombats>;

declare type Trait_MovesChangeUnitCombats<D extends DLCs> = TableType<D, Vanilla_Trait_MovesChangeUnitCombats, GnK_Trait_MovesChangeUnitCombats, BNW_Trait_MovesChangeUnitCombats>;

declare type Trait_Terrains<D extends DLCs> = TableType<D, Vanilla_Trait_Terrains, GnK_Trait_Terrains, BNW_Trait_Terrains>;

declare type Trait_ResourceQuantityModifiers<D extends DLCs> = TableType<D, Vanilla_Trait_ResourceQuantityModifiers, GnK_Trait_ResourceQuantityModifiers, BNW_Trait_ResourceQuantityModifiers>;

declare type Trait_FreeResourceFirstXCities<D extends DLCs> = TableTypeGnK<D, GnK_Trait_FreeResourceFirstXCities, BNW_Trait_FreeResourceFirstXCities>;

declare type Trait_ImprovementYieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_ImprovementYieldChanges, GnK_Trait_ImprovementYieldChanges, BNW_Trait_ImprovementYieldChanges>;

declare type Trait_SpecialistYieldChanges<D extends DLCs> = TableType<D, Vanilla_Trait_SpecialistYieldChanges, GnK_Trait_SpecialistYieldChanges, BNW_Trait_SpecialistYieldChanges>;

declare type Trait_UnimprovedFeatureYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Trait_UnimprovedFeatureYieldChanges, BNW_Trait_UnimprovedFeatureYieldChanges>;

declare type Eras<D extends DLCs> = TableType<D, Vanilla_Eras, GnK_Eras, BNW_Eras>;

declare type Era_Soundtracks<D extends DLCs> = TableType<D, Vanilla_Era_Soundtracks, GnK_Era_Soundtracks, BNW_Era_Soundtracks>;

declare type Era_CitySoundscapes<D extends DLCs> = TableType<D, Vanilla_Era_CitySoundscapes, GnK_Era_CitySoundscapes, BNW_Era_CitySoundscapes>;

declare type Era_NewEraVOs<D extends DLCs> = TableType<D, Vanilla_Era_NewEraVOs, GnK_Era_NewEraVOs, BNW_Era_NewEraVOs>;

declare type GameSpeeds<D extends DLCs> = TableType<D, Vanilla_GameSpeeds, GnK_GameSpeeds, BNW_GameSpeeds>;

declare type GameSpeed_Turns<D extends DLCs> = TableType<D, Vanilla_GameSpeed_Turns, GnK_GameSpeed_Turns, BNW_GameSpeed_Turns>;

declare type HandicapInfos<D extends DLCs> = TableType<D, Vanilla_HandicapInfos, GnK_HandicapInfos, BNW_HandicapInfos>;

declare type HandicapInfo_Goodies<D extends DLCs> = TableType<D, Vanilla_HandicapInfo_Goodies, GnK_HandicapInfo_Goodies, BNW_HandicapInfo_Goodies>;

declare type HandicapInfo_FreeTechs<D extends DLCs> = TableType<D, Vanilla_HandicapInfo_FreeTechs, GnK_HandicapInfo_FreeTechs, BNW_HandicapInfo_FreeTechs>;

declare type HandicapInfo_AIFreeTechs<D extends DLCs> = TableType<D, Vanilla_HandicapInfo_AIFreeTechs, GnK_HandicapInfo_AIFreeTechs, BNW_HandicapInfo_AIFreeTechs>;

declare type Policies<D extends DLCs> = TableType<D, Vanilla_Policies, GnK_Policies, BNW_Policies>;

declare type Policy_CityYieldChanges<D extends DLCs> = TableType<D, Vanilla_Policy_CityYieldChanges, GnK_Policy_CityYieldChanges, BNW_Policy_CityYieldChanges>;

declare type Policy_CoastalCityYieldChanges<D extends DLCs> = TableType<D, Vanilla_Policy_CoastalCityYieldChanges, GnK_Policy_CoastalCityYieldChanges, BNW_Policy_CoastalCityYieldChanges>;

declare type Policy_CapitalYieldChanges<D extends DLCs> = TableType<D, Vanilla_Policy_CapitalYieldChanges, GnK_Policy_CapitalYieldChanges, BNW_Policy_CapitalYieldChanges>;

declare type Policy_CapitalYieldPerPopChanges<D extends DLCs> = TableType<D, Vanilla_Policy_CapitalYieldPerPopChanges, GnK_Policy_CapitalYieldPerPopChanges, BNW_Policy_CapitalYieldPerPopChanges>;

declare type Policy_CapitalYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_CapitalYieldModifiers, GnK_Policy_CapitalYieldModifiers, BNW_Policy_CapitalYieldModifiers>;

declare type Policy_Disables<D extends DLCs> = TableType<D, Vanilla_Policy_Disables, GnK_Policy_Disables, BNW_Policy_Disables>;

declare type Policy_Flavors<D extends DLCs> = TableType<D, Vanilla_Policy_Flavors, GnK_Policy_Flavors, BNW_Policy_Flavors>;

declare type Policy_HurryModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_HurryModifiers, GnK_Policy_HurryModifiers, BNW_Policy_HurryModifiers>;

declare type Policy_PrereqPolicies<D extends DLCs> = TableType<D, Vanilla_Policy_PrereqPolicies, GnK_Policy_PrereqPolicies, BNW_Policy_PrereqPolicies>;

declare type Policy_PrereqORPolicies<D extends DLCs> = TableType<D, Vanilla_Policy_PrereqORPolicies, GnK_Policy_PrereqORPolicies, BNW_Policy_PrereqORPolicies>;

declare type Policy_SpecialistExtraYields<D extends DLCs> = TableType<D, Vanilla_Policy_SpecialistExtraYields, GnK_Policy_SpecialistExtraYields, BNW_Policy_SpecialistExtraYields>;

declare type Policy_BuildingClassYieldModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_BuildingClassYieldModifiers, GnK_Policy_BuildingClassYieldModifiers, BNW_Policy_BuildingClassYieldModifiers>;

declare type Policy_BuildingClassYieldChanges<D extends DLCs> = TableType<D, Vanilla_Policy_BuildingClassYieldChanges, GnK_Policy_BuildingClassYieldChanges, BNW_Policy_BuildingClassYieldChanges>;

declare type Policy_BuildingClassCultureChanges<D extends DLCs> = TableType<D, Vanilla_Policy_BuildingClassCultureChanges, GnK_Policy_BuildingClassCultureChanges, BNW_Policy_BuildingClassCultureChanges>;

declare type Policy_BuildingClassProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_BuildingClassProductionModifiers, GnK_Policy_BuildingClassProductionModifiers, BNW_Policy_BuildingClassProductionModifiers>;

declare type Policy_BuildingClassHappiness<D extends DLCs> = TableType<D, Vanilla_Policy_BuildingClassHappiness, GnK_Policy_BuildingClassHappiness, BNW_Policy_BuildingClassHappiness>;

declare type Policy_ImprovementYieldChanges<D extends DLCs> = TableType<D, Vanilla_Policy_ImprovementYieldChanges, GnK_Policy_ImprovementYieldChanges, BNW_Policy_ImprovementYieldChanges>;

declare type Policy_ImprovementCultureChanges<D extends DLCs> = TableType<D, Vanilla_Policy_ImprovementCultureChanges, GnK_Policy_ImprovementCultureChanges, BNW_Policy_ImprovementCultureChanges>;

declare type Policy_ValidSpecialists<D extends DLCs> = TableType<D, Vanilla_Policy_ValidSpecialists, GnK_Policy_ValidSpecialists, BNW_Policy_ValidSpecialists>;

declare type Policy_YieldModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_YieldModifiers, GnK_Policy_YieldModifiers, BNW_Policy_YieldModifiers>;

declare type Policy_FreePromotions<D extends DLCs> = TableType<D, Vanilla_Policy_FreePromotions, GnK_Policy_FreePromotions, BNW_Policy_FreePromotions>;

declare type Policy_UnitCombatFreeExperiences<D extends DLCs> = TableType<D, Vanilla_Policy_UnitCombatFreeExperiences, GnK_Policy_UnitCombatFreeExperiences, BNW_Policy_UnitCombatFreeExperiences>;

declare type Policy_FreePromotionUnitCombats<D extends DLCs> = TableType<D, Vanilla_Policy_FreePromotionUnitCombats, GnK_Policy_FreePromotionUnitCombats, BNW_Policy_FreePromotionUnitCombats>;

declare type Policy_UnitCombatProductionModifiers<D extends DLCs> = TableType<D, Vanilla_Policy_UnitCombatProductionModifiers, GnK_Policy_UnitCombatProductionModifiers, BNW_Policy_UnitCombatProductionModifiers>;

declare type Policy_FreeUnitClasses<D extends DLCs> = TableType<D, Vanilla_Policy_FreeUnitClasses, GnK_Policy_FreeUnitClasses, BNW_Policy_FreeUnitClasses>;

declare type Policy_FreeItems<D extends DLCs> = TableType<D, Vanilla_Policy_FreeItems, GnK_Policy_FreeItems, BNW_Policy_FreeItems>;

declare type PolicyBranchTypes<D extends DLCs> = TableType<D, Vanilla_PolicyBranchTypes, GnK_PolicyBranchTypes, BNW_PolicyBranchTypes>;

declare type PolicyBranch_Disables<D extends DLCs> = TableType<D, Vanilla_PolicyBranch_Disables, GnK_PolicyBranch_Disables, BNW_PolicyBranch_Disables>;

declare type Processes<D extends DLCs> = TableType<D, Vanilla_Processes, GnK_Processes, BNW_Processes>;

declare type Process_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_Process_Flavors, BNW_Process_Flavors>;

declare type Process_ProductionYields<D extends DLCs> = TableType<D, Vanilla_Process_ProductionYields, GnK_Process_ProductionYields, BNW_Process_ProductionYields>;

declare type Defines<D extends DLCs> = TableType<D, Vanilla_Defines, GnK_Defines, BNW_Defines>;

declare type PostDefines<D extends DLCs> = TableType<D, Vanilla_PostDefines, GnK_PostDefines, BNW_PostDefines>;

declare type Beliefs<D extends DLCs> = TableTypeGnK<D, GnK_Beliefs, BNW_Beliefs>;

declare type Belief_BuildingClassYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_BuildingClassYieldChanges, BNW_Belief_BuildingClassYieldChanges>;

declare type Belief_BuildingClassHappiness<D extends DLCs> = TableTypeGnK<D, GnK_Belief_BuildingClassHappiness, BNW_Belief_BuildingClassHappiness>;

declare type Belief_CityYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_CityYieldChanges, BNW_Belief_CityYieldChanges>;

declare type Belief_HolyCityYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_HolyCityYieldChanges, BNW_Belief_HolyCityYieldChanges>;

declare type Belief_FeatureYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_FeatureYieldChanges, BNW_Belief_FeatureYieldChanges>;

declare type Belief_ImprovementYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_ImprovementYieldChanges, BNW_Belief_ImprovementYieldChanges>;

declare type Belief_MaxYieldModifierPerFollower<D extends DLCs> = TableTypeGnK<D, GnK_Belief_MaxYieldModifierPerFollower, BNW_Belief_MaxYieldModifierPerFollower>;

declare type Belief_ResourceQuantityModifiers<D extends DLCs> = TableTypeGnK<D, GnK_Belief_ResourceQuantityModifiers, BNW_Belief_ResourceQuantityModifiers>;

declare type Belief_ResourceHappiness<D extends DLCs> = TableTypeGnK<D, GnK_Belief_ResourceHappiness, BNW_Belief_ResourceHappiness>;

declare type Belief_ResourceYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_ResourceYieldChanges, BNW_Belief_ResourceYieldChanges>;

declare type Belief_TerrainYieldChanges<D extends DLCs> = TableTypeGnK<D, GnK_Belief_TerrainYieldChanges, BNW_Belief_TerrainYieldChanges>;

declare type Belief_YieldChangeAnySpecialist<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangeAnySpecialist, BNW_Belief_YieldChangeAnySpecialist>;

declare type Belief_YieldChangePerForeignCity<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangePerForeignCity, BNW_Belief_YieldChangePerForeignCity>;

declare type Belief_YieldChangePerXForeignFollowers<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangePerXForeignFollowers, BNW_Belief_YieldChangePerXForeignFollowers>;

declare type Belief_YieldChangeTradeRoute<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangeTradeRoute, BNW_Belief_YieldChangeTradeRoute>;

declare type Belief_YieldChangeNaturalWonder<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangeNaturalWonder, BNW_Belief_YieldChangeNaturalWonder>;

declare type Belief_YieldChangeWorldWonder<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldChangeWorldWonder, BNW_Belief_YieldChangeWorldWonder>;

declare type Belief_YieldModifierNaturalWonder<D extends DLCs> = TableTypeGnK<D, GnK_Belief_YieldModifierNaturalWonder, BNW_Belief_YieldModifierNaturalWonder>;

declare type Technologies<D extends DLCs> = TableType<D, Vanilla_Technologies, GnK_Technologies, BNW_Technologies>;

declare type Technology_DomainExtraMoves<D extends DLCs> = TableType<D, Vanilla_Technology_DomainExtraMoves, GnK_Technology_DomainExtraMoves, BNW_Technology_DomainExtraMoves>;

declare type Technology_Flavors<D extends DLCs> = TableType<D, Vanilla_Technology_Flavors, GnK_Technology_Flavors, BNW_Technology_Flavors>;

declare type Technology_ORPrereqTechs<D extends DLCs> = TableType<D, Vanilla_Technology_ORPrereqTechs, GnK_Technology_ORPrereqTechs, BNW_Technology_ORPrereqTechs>;

declare type Technology_PrereqTechs<D extends DLCs> = TableType<D, Vanilla_Technology_PrereqTechs, GnK_Technology_PrereqTechs, BNW_Technology_PrereqTechs>;

declare type Technology_FreePromotions<D extends DLCs> = TableTypeGnK<D, GnK_Technology_FreePromotions, BNW_Technology_FreePromotions>;

declare type Features<D extends DLCs> = TableType<D, Vanilla_Features, GnK_Features, BNW_Features>;

declare type FakeFeatures<D extends DLCs> = TableType<D, Vanilla_FakeFeatures, GnK_FakeFeatures, BNW_FakeFeatures>;

declare type Feature_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_YieldChanges, GnK_Feature_YieldChanges, BNW_Feature_YieldChanges>;

declare type Feature_RiverYieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_RiverYieldChanges, GnK_Feature_RiverYieldChanges, BNW_Feature_RiverYieldChanges>;

declare type Feature_HillsYieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_HillsYieldChanges, GnK_Feature_HillsYieldChanges, BNW_Feature_HillsYieldChanges>;

declare type Feature_TerrainBooleans<D extends DLCs> = TableType<D, Vanilla_Feature_TerrainBooleans, GnK_Feature_TerrainBooleans, BNW_Feature_TerrainBooleans>;

declare type Natural_Wonder_Placement<D extends DLCs> = TableTypeGnK<D, GnK_Natural_Wonder_Placement, BNW_Natural_Wonder_Placement>;

declare type Improvements<D extends DLCs> = TableType<D, Vanilla_Improvements, GnK_Improvements, BNW_Improvements>;

declare type Improvement_Flavors<D extends DLCs> = TableType<D, Vanilla_Improvement_Flavors, GnK_Improvement_Flavors, BNW_Improvement_Flavors>;

declare type Improvement_Yields<D extends DLCs> = TableType<D, Vanilla_Improvement_Yields, GnK_Improvement_Yields, BNW_Improvement_Yields>;

declare type Improvement_AdjacentCityYields<D extends DLCs> = TableType<D, Vanilla_Improvement_AdjacentCityYields, GnK_Improvement_AdjacentCityYields, BNW_Improvement_AdjacentCityYields>;

declare type Improvement_CoastalLandYields<D extends DLCs> = TableType<D, Vanilla_Improvement_CoastalLandYields, GnK_Improvement_CoastalLandYields, BNW_Improvement_CoastalLandYields>;

declare type Improvement_FreshWaterYields<D extends DLCs> = TableType<D, Vanilla_Improvement_FreshWaterYields, GnK_Improvement_FreshWaterYields, BNW_Improvement_FreshWaterYields>;

declare type Improvement_HillsYields<D extends DLCs> = TableType<D, Vanilla_Improvement_HillsYields, GnK_Improvement_HillsYields, BNW_Improvement_HillsYields>;

declare type Improvement_AdjacentMountainYieldChanges<D extends DLCs> = TableType<D, Vanilla_Improvement_AdjacentMountainYieldChanges, GnK_Improvement_AdjacentMountainYieldChanges, BNW_Improvement_AdjacentMountainYieldChanges>;

declare type Improvement_PrereqNatureYields<D extends DLCs> = TableType<D, Vanilla_Improvement_PrereqNatureYields, GnK_Improvement_PrereqNatureYields, BNW_Improvement_PrereqNatureYields>;

declare type Improvement_RiverSideYields<D extends DLCs> = TableType<D, Vanilla_Improvement_RiverSideYields, GnK_Improvement_RiverSideYields, BNW_Improvement_RiverSideYields>;

declare type Improvement_ValidTerrains<D extends DLCs> = TableType<D, Vanilla_Improvement_ValidTerrains, GnK_Improvement_ValidTerrains, BNW_Improvement_ValidTerrains>;

declare type Improvement_ValidFeatures<D extends DLCs> = TableType<D, Vanilla_Improvement_ValidFeatures, GnK_Improvement_ValidFeatures, BNW_Improvement_ValidFeatures>;

declare type Improvement_ResourceTypes<D extends DLCs> = TableType<D, Vanilla_Improvement_ResourceTypes, GnK_Improvement_ResourceTypes, BNW_Improvement_ResourceTypes>;

declare type Improvement_ResourceType_Yields<D extends DLCs> = TableType<D, Vanilla_Improvement_ResourceType_Yields, GnK_Improvement_ResourceType_Yields, BNW_Improvement_ResourceType_Yields>;

declare type Improvement_RouteYieldChanges<D extends DLCs> = TableType<D, Vanilla_Improvement_RouteYieldChanges, GnK_Improvement_RouteYieldChanges, BNW_Improvement_RouteYieldChanges>;

declare type Improvement_TechYieldChanges<D extends DLCs> = TableType<D, Vanilla_Improvement_TechYieldChanges, GnK_Improvement_TechYieldChanges, BNW_Improvement_TechYieldChanges>;

declare type Improvement_TechNoFreshWaterYieldChanges<D extends DLCs> = TableType<D, Vanilla_Improvement_TechNoFreshWaterYieldChanges, GnK_Improvement_TechNoFreshWaterYieldChanges, BNW_Improvement_TechNoFreshWaterYieldChanges>;

declare type Improvement_TechFreshWaterYieldChanges<D extends DLCs> = TableType<D, Vanilla_Improvement_TechFreshWaterYieldChanges, GnK_Improvement_TechFreshWaterYieldChanges, BNW_Improvement_TechFreshWaterYieldChanges>;

declare type Resources<D extends DLCs> = TableType<D, Vanilla_Resources, GnK_Resources, BNW_Resources>;

declare type Resource_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Resource_YieldChanges, GnK_Resource_YieldChanges, BNW_Resource_YieldChanges>;

declare type Resource_Flavors<D extends DLCs> = TableType<D, Vanilla_Resource_Flavors, GnK_Resource_Flavors, BNW_Resource_Flavors>;

declare type Resource_TerrainBooleans<D extends DLCs> = TableType<D, Vanilla_Resource_TerrainBooleans, GnK_Resource_TerrainBooleans, BNW_Resource_TerrainBooleans>;

declare type Resource_FeatureBooleans<D extends DLCs> = TableType<D, Vanilla_Resource_FeatureBooleans, GnK_Resource_FeatureBooleans, BNW_Resource_FeatureBooleans>;

declare type Resource_FeatureTerrainBooleans<D extends DLCs> = TableType<D, Vanilla_Resource_FeatureTerrainBooleans, GnK_Resource_FeatureTerrainBooleans, BNW_Resource_FeatureTerrainBooleans>;

declare type Resource_QuantityTypes<D extends DLCs> = TableType<D, Vanilla_Resource_QuantityTypes, GnK_Resource_QuantityTypes, BNW_Resource_QuantityTypes>;

declare type Builds<D extends DLCs> = TableType<D, Vanilla_Builds, GnK_Builds, BNW_Builds>;

declare type BuildFeatures<D extends DLCs> = TableType<D, Vanilla_BuildFeatures, GnK_BuildFeatures, BNW_BuildFeatures>;

declare type Build_TechTimeChanges<D extends DLCs> = TableTypeGnK<D, GnK_Build_TechTimeChanges, BNW_Build_TechTimeChanges>;

declare type MultiUnitPositions<D extends DLCs> = TableType<D, Vanilla_MultiUnitPositions, GnK_MultiUnitPositions, BNW_MultiUnitPositions>;

declare type MultiUnitFormations<D extends DLCs> = TableType<D, Vanilla_MultiUnitFormations, GnK_MultiUnitFormations, BNW_MultiUnitFormations>;

declare type MultiUnitFormation_SlotEntries<D extends DLCs> = TableType<D, Vanilla_MultiUnitFormation_SlotEntries, GnK_MultiUnitFormation_SlotEntries, BNW_MultiUnitFormation_SlotEntries>;

declare type UnitPromotions<D extends DLCs> = TableType<D, Vanilla_UnitPromotions, GnK_UnitPromotions, BNW_UnitPromotions>;

declare type UnitPromotions_Terrains<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_Terrains, GnK_UnitPromotions_Terrains, BNW_UnitPromotions_Terrains>;

declare type UnitPromotions_Features<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_Features, GnK_UnitPromotions_Features, BNW_UnitPromotions_Features>;

declare type UnitPromotions_UnitClasses<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_UnitClasses, GnK_UnitPromotions_UnitClasses, BNW_UnitPromotions_UnitClasses>;

declare type UnitPromotions_Domains<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_Domains, GnK_UnitPromotions_Domains, BNW_UnitPromotions_Domains>;

declare type UnitPromotions_UnitCombatMods<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_UnitCombatMods, GnK_UnitPromotions_UnitCombatMods, BNW_UnitPromotions_UnitCombatMods>;

declare type UnitPromotions_UnitCombats<D extends DLCs> = TableType<D, Vanilla_UnitPromotions_UnitCombats, GnK_UnitPromotions_UnitCombats, BNW_UnitPromotions_UnitCombats>;

declare type UnitPromotions_CivilianUnitType<D extends DLCs> = TableTypeGnK<D, GnK_UnitPromotions_CivilianUnitType, BNW_UnitPromotions_CivilianUnitType>;

declare type CivilianAttackPriorities<D extends DLCs> = TableType<D, Vanilla_CivilianAttackPriorities, GnK_CivilianAttackPriorities, BNW_CivilianAttackPriorities>;

declare type Units<D extends DLCs> = TableType<D, Vanilla_Units, GnK_Units, BNW_Units>;

declare type Unit_AITypes<D extends DLCs> = TableType<D, Vanilla_Unit_AITypes, GnK_Unit_AITypes, BNW_Unit_AITypes>;

declare type Unit_Buildings<D extends DLCs> = TableType<D, Vanilla_Unit_Buildings, GnK_Unit_Buildings, BNW_Unit_Buildings>;

declare type Unit_BuildingClassRequireds<D extends DLCs> = TableType<D, Vanilla_Unit_BuildingClassRequireds, GnK_Unit_BuildingClassRequireds, BNW_Unit_BuildingClassRequireds>;

declare type Unit_ProductionModifierBuildings<D extends DLCs> = TableType<D, Vanilla_Unit_ProductionModifierBuildings, GnK_Unit_ProductionModifierBuildings, BNW_Unit_ProductionModifierBuildings>;

declare type Unit_Builds<D extends DLCs> = TableType<D, Vanilla_Unit_Builds, GnK_Unit_Builds, BNW_Unit_Builds>;

declare type Unit_ClassUpgrades<D extends DLCs> = TableType<D, Vanilla_Unit_ClassUpgrades, GnK_Unit_ClassUpgrades, BNW_Unit_ClassUpgrades>;

declare type Unit_FreePromotions<D extends DLCs> = TableType<D, Vanilla_Unit_FreePromotions, GnK_Unit_FreePromotions, BNW_Unit_FreePromotions>;

declare type Unit_Flavors<D extends DLCs> = TableType<D, Vanilla_Unit_Flavors, GnK_Unit_Flavors, BNW_Unit_Flavors>;

declare type Unit_GreatPersons<D extends DLCs> = TableType<D, Vanilla_Unit_GreatPersons, GnK_Unit_GreatPersons, BNW_Unit_GreatPersons>;

declare type Unit_ResourceQuantityRequirements<D extends DLCs> = TableType<D, Vanilla_Unit_ResourceQuantityRequirements, GnK_Unit_ResourceQuantityRequirements, BNW_Unit_ResourceQuantityRequirements>;

declare type Unit_UniqueNames<D extends DLCs> = TableType<D, Vanilla_Unit_UniqueNames, GnK_Unit_UniqueNames, BNW_Unit_UniqueNames>;

declare type Unit_YieldFromKills<D extends DLCs> = TableTypeGnK<D, GnK_Unit_YieldFromKills, BNW_Unit_YieldFromKills>;

declare type Unit_NotAITypes<D extends DLCs> = TableType<D, Vanilla_Unit_NotAITypes, GnK_Unit_NotAITypes, BNW_Unit_NotAITypes>;

declare type Unit_ProductionTraits<D extends DLCs> = TableType<D, Vanilla_Unit_ProductionTraits, GnK_Unit_ProductionTraits, BNW_Unit_ProductionTraits>;

declare type Unit_TechTypes<D extends DLCs> = TableType<D, Vanilla_Unit_TechTypes, GnK_Unit_TechTypes, BNW_Unit_TechTypes>;

declare type Building_DomainFreeExperiencePerGreatWork<D extends DLCs> = TableTypeBNW<D, BNW_Building_DomainFreeExperiencePerGreatWork>;

declare type Building_YieldChangesPerReligion<D extends DLCs> = TableTypeBNW<D, BNW_Building_YieldChangesPerReligion>;

declare type Building_ThemingBonuses<D extends DLCs> = TableTypeBNW<D, BNW_Building_ThemingBonuses>;

declare type Civilization_Start_Place_First_Along_Ocean<D extends DLCs> = TableTypeBNW<D, BNW_Civilization_Start_Place_First_Along_Ocean>;

declare type Trait_YieldChangesPerTradePartner<D extends DLCs> = TableTypeBNW<D, BNW_Trait_YieldChangesPerTradePartner>;

declare type Trait_YieldChangesIncomingTradeRoute<D extends DLCs> = TableTypeBNW<D, BNW_Trait_YieldChangesIncomingTradeRoute>;

declare type Trait_MaintenanceModifierUnitCombats<D extends DLCs> = TableTypeBNW<D, BNW_Trait_MaintenanceModifierUnitCombats>;

declare type Trait_NoTrain<D extends DLCs> = TableTypeBNW<D, BNW_Trait_NoTrain>;

declare type GreatWorkSlots<D extends DLCs> = TableTypeBNW<D, BNW_GreatWorkSlots>;

declare type GreatWorkClasses<D extends DLCs> = TableTypeBNW<D, BNW_GreatWorkClasses>;

declare type GreatWorks<D extends DLCs> = TableTypeBNW<D, BNW_GreatWorks>;

declare type GreatWorkArtifactClasses<D extends DLCs> = TableTypeBNW<D, BNW_GreatWorkArtifactClasses>;

declare type Policy_GreatWorkYieldChanges<D extends DLCs> = TableTypeBNW<D, BNW_Policy_GreatWorkYieldChanges>;

declare type Policy_BuildingClassTourismModifiers<D extends DLCs> = TableTypeBNW<D, BNW_Policy_BuildingClassTourismModifiers>;

declare type Policy_TourismOnUnitCreation<D extends DLCs> = TableTypeBNW<D, BNW_Policy_TourismOnUnitCreation>;

declare type Projects<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Projects, BNW_Projects>;

declare type Project_Flavors<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Project_Flavors, BNW_Project_Flavors>;

declare type Project_Prereqs<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Project_Prereqs, BNW_Project_Prereqs>;

declare type Project_VictoryThresholds<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Project_VictoryThresholds, BNW_Project_VictoryThresholds>;

declare type Project_ResourceQuantityRequirements<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Project_ResourceQuantityRequirements, BNW_Project_ResourceQuantityRequirements>;

declare type LeagueSpecialSessions<D extends DLCs> = TableTypeBNW<D, BNW_LeagueSpecialSessions>;

declare type LeagueNames<D extends DLCs> = TableTypeBNW<D, BNW_LeagueNames>;

declare type LeagueProjectRewards<D extends DLCs> = TableTypeBNW<D, BNW_LeagueProjectRewards>;

declare type LeagueProjects<D extends DLCs> = TableTypeBNW<D, BNW_LeagueProjects>;

declare type ResolutionDecisions<D extends DLCs> = TableTypeBNW<D, BNW_ResolutionDecisions>;

declare type Resolutions<D extends DLCs> = TableTypeBNW<D, BNW_Resolutions>;

declare type Specialists<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Specialists, BNW_Specialists>;

declare type SpecialistFlavors<D extends DLCs> = TableTypeNoGnK<D, Vanilla_SpecialistFlavors, BNW_SpecialistFlavors>;

declare type SpecialistYields<D extends DLCs> = TableTypeNoGnK<D, Vanilla_SpecialistYields, BNW_SpecialistYields>;

declare type Victories<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Victories, BNW_Victories>;

declare type VictoryPointAwards<D extends DLCs> = TableTypeNoGnK<D, Vanilla_VictoryPointAwards, BNW_VictoryPointAwards>;

declare type HistoricRankings<D extends DLCs> = TableTypeNoGnK<D, Vanilla_HistoricRankings, BNW_HistoricRankings>;

declare type Belief_BuildingClassTourism<D extends DLCs> = TableTypeBNW<D, BNW_Belief_BuildingClassTourism>;

declare type Belief_BuildingClassFaithPurchase<D extends DLCs> = TableTypeBNW<D, BNW_Belief_BuildingClassFaithPurchase>;

declare type Belief_EraFaithUnitPurchase<D extends DLCs> = TableTypeBNW<D, BNW_Belief_EraFaithUnitPurchase>;

declare type Technology_TradeRouteDomainExtraRange<D extends DLCs> = TableTypeBNW<D, BNW_Technology_TradeRouteDomainExtraRange>;

declare type Improvement_YieldPerEra<D extends DLCs> = TableTypeBNW<D, BNW_Improvement_YieldPerEra>;

declare type Improvement_ValidImprovements<D extends DLCs> = TableTypeBNW<D, BNW_Improvement_ValidImprovements>;

declare type Terrains<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Terrains, BNW_Terrains>;

declare type Terrain_Yields<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Terrain_Yields, BNW_Terrain_Yields>;

declare type Terrain_RiverYieldChanges<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Terrain_RiverYieldChanges, BNW_Terrain_RiverYieldChanges>;

declare type Terrain_HillsYieldChanges<D extends DLCs> = TableTypeNoGnK<D, Vanilla_Terrain_HillsYieldChanges, BNW_Terrain_HillsYieldChanges>;

declare type UnitPromotions_PostCombatRandomPromotion<D extends DLCs> = TableTypeBNW<D, BNW_UnitPromotions_PostCombatRandomPromotion>;

declare type AIEconomicStrategy_Flavors<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIEconomicStrategy_Flavors>;

declare type AIGrandStrategies<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIGrandStrategies>;

declare type AIGrandStrategy_Flavors<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIGrandStrategy_Flavors>;

declare type AIGrandStrategy_Yields<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIGrandStrategy_Yields>;

declare type AIGrandStrategy_FlavorMods<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIGrandStrategy_FlavorMods>;

declare type AIMilitaryStrategy_Flavors<D extends DLCs> = TableTypeVanilla<D, Vanilla_AIMilitaryStrategy_Flavors>;

declare type Concepts<D extends DLCs> = TableTypeVanilla<D, Vanilla_Concepts>;

declare type Concepts_RelatedConcept<D extends DLCs> = TableTypeVanilla<D, Vanilla_Concepts_RelatedConcept>;

declare type CultureLevels<D extends DLCs> = TableTypeVanilla<D, Vanilla_CultureLevels>;

declare type CultureLevel_SpeedThresholds<D extends DLCs> = TableTypeVanilla<D, Vanilla_CultureLevel_SpeedThresholds>;

declare type EmphasizeInfos<D extends DLCs> = TableTypeVanilla<D, Vanilla_EmphasizeInfos>;

declare type EmphasizeInfo_Yields<D extends DLCs> = TableTypeVanilla<D, Vanilla_EmphasizeInfo_Yields>;

declare type IconFontTextures<D extends DLCs> = TableTypeVanilla<D, Vanilla_IconFontTextures>;

declare type IconFontMapping<D extends DLCs> = TableTypeVanilla<D, Vanilla_IconFontMapping>;

declare type Votes<D extends DLCs> = TableTypeVanilla<D, Vanilla_Votes>;

declare type Vote_DiploVotes<D extends DLCs> = TableTypeVanilla<D, Vanilla_Vote_DiploVotes>;

declare type Leaders<D extends DLCs> = TableTypeVanilla<D, Vanilla_Leaders>;

declare type Leader_MajorCivApproachBiases<D extends DLCs> = TableTypeVanilla<D, Vanilla_Leader_MajorCivApproachBiases>;

declare type Leader_MinorCivApproachBiases<D extends DLCs> = TableTypeVanilla<D, Vanilla_Leader_MinorCivApproachBiases>;

declare type Leader_Flavors<D extends DLCs> = TableTypeVanilla<D, Vanilla_Leader_Flavors>;

declare type Leader_Traits<D extends DLCs> = TableTypeVanilla<D, Vanilla_Leader_Traits>;

declare type Routes<D extends DLCs> = TableTypeVanilla<D, Vanilla_Routes>;

declare type Route_Yields<D extends DLCs> = TableTypeVanilla<D, Vanilla_Route_Yields>;

declare type Route_TechMovementChanges<D extends DLCs> = TableTypeVanilla<D, Vanilla_Route_TechMovementChanges>;

declare type Route_ResourceQuantityRequirements<D extends DLCs> = TableTypeVanilla<D, Vanilla_Route_ResourceQuantityRequirements>;

declare type AnimationPaths<D extends DLCs> = TableTypeVanilla<D, Vanilla_AnimationPaths>;

declare type AnimationPath_Entries<D extends DLCs> = TableTypeVanilla<D, Vanilla_AnimationPath_Entries>;

declare type EntityEvents<D extends DLCs> = TableTypeVanilla<D, Vanilla_EntityEvents>;

declare type EntityEvent_AnimationPaths<D extends DLCs> = TableTypeVanilla<D, Vanilla_EntityEvent_AnimationPaths>;

declare type SpecialUnits<D extends DLCs> = TableTypeVanilla<D, Vanilla_SpecialUnits>;

declare type SpecialUnit_CarrierUnitAI<D extends DLCs> = TableTypeVanilla<D, Vanilla_SpecialUnit_CarrierUnitAI>;

declare type SpecialUnit_ProductionTraits<D extends DLCs> = TableTypeVanilla<D, Vanilla_SpecialUnit_ProductionTraits>;