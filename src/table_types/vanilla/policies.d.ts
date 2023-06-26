// gameplay/xml/gameinfo/civ5policies

declare type Vanilla_Policies = {
	/**
	 * Primary Key
	 * Auto Increment
	 */
	ID: INTEGER,
	/**
	 * Not Null
	 * Unique
	 */
	Type: TEXT,
	/**
	 * @default write a bug on this
	 * Reference: Language_en_US(Tag)
	 */
	Description: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Civilopedia: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Strategy: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default NULL
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * @default 0
	 */
	NumExtraBranches: INTEGER,
	/**
	 * @default 0
	 */
	CultureCost: INTEGER,
	/**
	 * @default 0
	 */
	GridX: INTEGER,
	/**
	 * @default 0
	 */
	GridY: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerCity: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerWonder: INTEGER,
	/**
	 * @default 0
	 */
	CultureWonderMultiplier: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerTechResearched: INTEGER,
	/**
	 * @default 0
	 */
	CultureImprovementChange: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromKills: INTEGER,
	/**
	 * @default 0
	 */
	CultureFromBarbarianKills: INTEGER,
	/**
	 * @default 0
	 */
	GoldFromKills: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkedExtraMoves: INTEGER,
	/**
	 * @default 0
	 */
	AttackBonusTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeTurns: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeMeterMod: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeDurationMod: INTEGER,
	/**
	 * @default 0
	 */
	NumFreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	NumFreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	NumFreeGreatPeople: INTEGER,
	/**
	 * @default 0
	 */
	MedianTechPercentChange: INTEGER,
	/**
	 * @default 0
	 */
	StrategicResourceMod: INTEGER,
	/**
	 * @default 0
	 */
	ReligionProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	DomesticGreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappiness: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerCity: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	CityCountUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	OccupiedPopulationUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	CapitalUnhappinessMod: INTEGER,
	/**
	 * @default 0
	 */
	FreeExperience: INTEGER,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	AllFeatureProduction: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	ImprovementUpgradeRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistUpgradeModifier: INTEGER,
	/**
	 * @default 0
	 */
	MilitaryProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BaseFreeUnits: INTEGER,
	/**
	 * @default 0
	 */
	BaseFreeMilitaryUnits: INTEGER,
	/**
	 * @default 0
	 */
	FreeUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	FreeMilitaryUnitsPopulationPercent: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerGarrisonedUnit: INTEGER,
	/**
	 * @default 0
	 */
	CulturePerGarrisonedUnit: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerTradeRoute: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerXPopulation: INTEGER,
	/**
	 * @default 0
	 */
	ExtraHappinessPerLuxury: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessFromUnitsMod: INTEGER,
	/**
	 * @default 0
	 */
	NumExtraBuilders: INTEGER,
	/**
	 * @default 0
	 */
	PlotGoldCostMod: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureExponentModifier: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesPolicyCostDiscount: INTEGER,
	/**
	 * @default 0
	 */
	GarrisonedCityRangeStrikeModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitPurchaseCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteGoldModifier: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerUnit: INTEGER,
	/**
	 * @default 0
	 */
	GoldPerMilitaryUnit: INTEGER,
	/**
	 * @default 0
	 */
	RouteGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	BuildingGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitGoldMaintenanceMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitSupplyMod: INTEGER,
	/**
	 * @default 0
	 */
	UnitUpgradeCostMod: INTEGER,
	/**
	 * @default 0
	 */
	CityStrengthMod: INTEGER,
	/**
	 * @default 0
	 */
	CityGrowthMod: INTEGER,
	/**
	 * @default 0
	 */
	CapitalGrowthMod: INTEGER,
	/**
	 * @default 0
	 */
	SettlerProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapitalSettlerProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	NewCityExtraPopulation: INTEGER,
	/**
	 * @default 0
	 */
	FreeFoodBox: INTEGER,
	/**
	 * @default 0
	 */
	HappyPerMilitaryUnit: INTEGER,
	/**
	 * @default false
	 */
	MilitaryFoodProduction: BOOLEAN,
	/**
	 * @default 0
	 */
	HappinessToCulture: INTEGER,
	/**
	 * @default 0
	 */
	HappinessToScience: INTEGER,
	/**
	 * @default 0
	 */
	NumCitiesFreeCultureBuilding: INTEGER,
	/**
	 * @default false
	 */
	HalfSpecialistUnhappiness: BOOLEAN,
	/**
	 * @default false
	 */
	HalfSpecialistFood: BOOLEAN,
	/**
	 * @default 0
	 */
	MaxConscript: INTEGER,
	/**
	 * @default 0
	 */
	UnitSightRangeChange: INTEGER,
	/**
	 * @default 0
	 */
	WoundedUnitDamageMod: INTEGER,
	/**
	 * @default 0
	 */
	BarbarianCombatBonus: INTEGER,
	/**
	 * @default false
	 */
	AlwaysSeeBarbCamps: BOOLEAN,
	/**
	 * @default false
	 */
	RevealAllCapitals: BOOLEAN,
	/**
	 * @default 0
	 */
	FreeSpecialist: INTEGER,
	/**
	 * @default 0
	 */
	ExpModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExpInBorderModifier: INTEGER,
	/**
	 * @default 0
	 */
	MinorQuestFriendshipMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorGoldFriendshipMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipMinimum: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipDecayMod: INTEGER,
	/**
	 * @default 0
	 */
	OtherPlayersMinorFriendshipDecayMod: INTEGER,
	/**
	 * @default 0
	 */
	CityStateUnitFrequencyModifier: INTEGER,
	/**
	 * @default false
	 */
	MinorGreatPeopleAllies: BOOLEAN,
	/**
	 * @default false
	 */
	MinorScienceAllies: BOOLEAN,
	/**
	 * @default false
	 */
	MinorResourceBonus: BOOLEAN,
	/**
	 * @default false
	 */
	GarrisonFreeMaintenance: BOOLEAN,
	/**
	 * @default false
	 */
	OneShot: BOOLEAN,
	/**
	 * @default false
	 */
	IncludesOneShotFreeUnits: BOOLEAN,
	/**
	 * @default NULL
	 */
	WeLoveTheKing: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
	/**
	 * @default 0
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlasAchieved: TEXT,
}

declare type Vanilla_Policy_CityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CoastalCityYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldPerPopChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_CapitalYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_Disables = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PolicyDisable: TEXT,
}

declare type Vanilla_Policy_Flavors = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 * Not Null
	 */
	Flavor: INTEGER,
}

declare type Vanilla_Policy_HurryModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: TEXT,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type Vanilla_Policy_PrereqPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type Vanilla_Policy_PrereqORPolicies = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Policies(Type)
	 */
	PrereqPolicy: TEXT,
}

declare type Vanilla_Policy_SpecialistExtraYields = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	YieldMod: INTEGER,
}

declare type Vanilla_Policy_BuildingClassYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	YieldChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_BuildingClassProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_BuildingClassHappiness = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	Happiness: INTEGER,
}

declare type Vanilla_Policy_ImprovementYieldChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_ImprovementCultureChanges = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Improvements(Type)
	 */
	ImprovementType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type Vanilla_Policy_ValidSpecialists = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
}

declare type Vanilla_Policy_YieldModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 * Not Null
	 */
	Yield: INTEGER,
}

declare type Vanilla_Policy_FreePromotions = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Policy_UnitCombatFreeExperiences = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	FreeExperience: INTEGER,
}

declare type Vanilla_Policy_FreePromotionUnitCombats = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
}

declare type Vanilla_Policy_UnitCombatProductionModifiers = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	ProductionModifier: INTEGER,
}

declare type Vanilla_Policy_FreeUnitClasses = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
	/**
	 * Not Null
	 */
	Count: INTEGER,
}

declare type Vanilla_Policy_FreeItems = {
	/**
	 * Reference: Policies(Type)
	 */
	PolicyType: TEXT,
	/**
	 * Not Null
	 */
	SetType: TEXT,
	/**
	 * @default 1
	 */
	MinItems: INTEGER,
	/**
	 * @default 1
	 */
	MaxItems: INTEGER,
}

