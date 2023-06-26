// dlc/expansion2/gameplay/xml/buildings/civ5buildings

declare type BNW_Buildings = {
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
	 * Reference: Language_en_US(Tag)
	 */
	ThemingBonusHelp: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	Quote: TEXT,
	/**
	 * @default 0
	 */
	GoldMaintenance: INTEGER,
	/**
	 * @default -1
	 */
	MutuallyExclusiveGroup: INTEGER,
	/**
	 * @default false
	 */
	TeamShare: BOOLEAN,
	/**
	 * @default false
	 */
	Water: BOOLEAN,
	/**
	 * @default false
	 */
	River: BOOLEAN,
	/**
	 * @default false
	 */
	FreshWater: BOOLEAN,
	/**
	 * @default false
	 */
	Mountain: BOOLEAN,
	/**
	 * @default false
	 */
	NearbyMountainRequired: BOOLEAN,
	/**
	 * @default false
	 */
	Hill: BOOLEAN,
	/**
	 * @default false
	 */
	Flat: BOOLEAN,
	/**
	 * @default false
	 */
	FoundsReligion: BOOLEAN,
	/**
	 * @default false
	 */
	IsReligious: BOOLEAN,
	/**
	 * @default false
	 */
	BorderObstacle: BOOLEAN,
	/**
	 * @default false
	 */
	PlayerBorderObstacle: BOOLEAN,
	/**
	 * @default false
	 */
	Capital: BOOLEAN,
	/**
	 * @default false
	 */
	GoldenAge: BOOLEAN,
	/**
	 * @default false
	 */
	MapCentering: BOOLEAN,
	/**
	 * @default false
	 */
	NeverCapture: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsWaterRoutes: BOOLEAN,
	/**
	 * @default false
	 */
	ExtraLuxuries: BOOLEAN,
	/**
	 * @default false
	 */
	DiplomaticVoting: BOOLEAN,
	/**
	 * @default false
	 */
	AffectSpiesNow: BOOLEAN,
	/**
	 * @default false
	 */
	NullifyInfluenceModifier: BOOLEAN,
	/**
	 * @default 0
	 */
	Cost: INTEGER,
	/**
	 * @default 0
	 */
	FaithCost: INTEGER,
	/**
	 * @default 0
	 */
	LeagueCost: INTEGER,
	/**
	 * @default 0
	 */
	UnlockedByBelief: BOOLEAN,
	/**
	 * @default false
	 */
	UnlockedByLeague: BOOLEAN,
	/**
	 * @default 0
	 */
	HolyCity: BOOLEAN,
	/**
	 * @default 0
	 */
	NumCityCostMod: INTEGER,
	/**
	 * @default 0
	 */
	HurryCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	MinAreaSize: INTEGER,
	/**
	 * @default 0
	 */
	ConquestProb: INTEGER,
	/**
	 * @default 0
	 */
	CitiesPrereq: INTEGER,
	/**
	 * @default 0
	 */
	LevelPrereq: INTEGER,
	/**
	 * @default 0
	 */
	CultureRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalCultureRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalGreatPeopleRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneralRateModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatPersonExpendGold: INTEGER,
	/**
	 * @default 0
	 */
	GoldenAgeModifier: INTEGER,
	/**
	 * @default 0
	 */
	UnitUpgradeCostMod: INTEGER,
	/**
	 * @default 0
	 */
	Experience: INTEGER,
	/**
	 * @default 0
	 */
	GlobalExperience: INTEGER,
	/**
	 * @default 0
	 */
	FoodKept: INTEGER,
	/**
	 * @default 0
	 */
	Airlift: BOOLEAN,
	/**
	 * @default 0
	 */
	AirModifier: INTEGER,
	/**
	 * @default 0
	 */
	NukeModifier: INTEGER,
	/**
	 * @default 0
	 */
	NukeExplosionRand: INTEGER,
	/**
	 * @default 0
	 */
	HealRateChange: INTEGER,
	/**
	 * @default 0
	 */
	Happiness: INTEGER,
	/**
	 * @default 0
	 */
	UnmoddedHappiness: INTEGER,
	/**
	 * @default 0
	 */
	UnhappinessModifier: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerCity: INTEGER,
	/**
	 * @default 0
	 */
	HappinessPerXPolicies: INTEGER,
	/**
	 * @default 0
	 */
	CityCountUnhappinessMod: INTEGER,
	/**
	 * @default false
	 */
	NoOccupiedUnhappiness: BOOLEAN,
	/**
	 * @default 0
	 */
	WorkerSpeedModifier: INTEGER,
	/**
	 * @default 0
	 */
	MilitaryProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	SpaceProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalSpaceProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	BuildingProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	WonderProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	CityConnectionTradeRouteModifier: INTEGER,
	/**
	 * @default 0
	 */
	CapturePlunderModifier: INTEGER,
	/**
	 * @default 0
	 */
	PolicyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPlotCultureCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	PlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPlotBuyCostModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalPopulationChange: INTEGER,
	/**
	 * @default 0
	 */
	TechShare: INTEGER,
	/**
	 * @default 0
	 */
	FreeTechs: INTEGER,
	/**
	 * @default 0
	 */
	FreePolicies: INTEGER,
	/**
	 * @default 0
	 */
	FreeGreatPeople: INTEGER,
	/**
	 * @default 0
	 */
	MedianTechPercentChange: INTEGER,
	/**
	 * @default 0
	 */
	Gold: INTEGER,
	/**
	 * @default false
	 */
	AllowsRangeStrike: BOOLEAN,
	/**
	 * @default false
	 */
	Espionage: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsFoodTradeRoutes: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsProductionTradeRoutes: BOOLEAN,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default 0
	 */
	ExtraCityHitPoints: INTEGER,
	/**
	 * @default 0
	 */
	GlobalDefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	MinorFriendshipChange: INTEGER,
	/**
	 * @default 0
	 */
	VictoryPoints: INTEGER,
	/**
	 * @default 0
	 */
	ExtraMissionarySpreads: INTEGER,
	/**
	 * @default 0
	 */
	ReligiousPressureModifier: INTEGER,
	/**
	 * @default 0
	 */
	EspionageModifier: INTEGER,
	/**
	 * @default 0
	 */
	GlobalEspionageModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraSpies: INTEGER,
	/**
	 * @default 0
	 */
	SpyRankChange: INTEGER,
	/**
	 * @default 0
	 */
	InstantSpyRankChange: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteRecipientBonus: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteTargetBonus: INTEGER,
	/**
	 * @default 0
	 */
	NumTradeRouteBonus: INTEGER,
	/**
	 * @default 0
	 */
	LandmarksTourismPercent: INTEGER,
	/**
	 * @default 0
	 */
	InstantMilitaryIncrease: INTEGER,
	/**
	 * @default 0
	 */
	GreatWorksTourismModifier: INTEGER,
	/**
	 * @default 0
	 */
	XBuiltTriggersIdeologyChoice: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteSeaDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteSeaGoldBonus: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteLandDistanceModifier: INTEGER,
	/**
	 * @default 0
	 */
	TradeRouteLandGoldBonus: INTEGER,
	/**
	 * @default 0
	 */
	CityStateTradeRouteProductionModifier: INTEGER,
	/**
	 * @default 0
	 */
	GreatScientistBeakerModifier: INTEGER,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClass: TEXT,
	/**
	 * @default NULL
	 */
	ArtDefineTag: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	NearbyTerrainRequired: TEXT,
	/**
	 * @default NULL
	 * Reference: Terrains(Type)
	 */
	ProhibitedCityTerrain: TEXT,
	/**
	 * @default NULL
	 * Reference: Victories(Type)
	 */
	VictoryPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	FreeStartEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Eras(Type)
	 */
	MaxStartEra: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	ObsoleteTech: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	EnhancedYieldTech: TEXT,
	/**
	 * @default 0
	 */
	TechEnhancedTourism: INTEGER,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuilding: TEXT,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	FreeBuildingThisCity: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotion: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	TrainedFreePromotion: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	FreePromotionRemoved: TEXT,
	/**
	 * @default NULL
	 * Reference: BuildingClasses(Type)
	 */
	ReplacementBuildingClass: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	PrereqTech: TEXT,
	/**
	 * @default NULL
	 * Reference: PolicyBranchTypes(Type)
	 */
	PolicyBranchType: TEXT,
	/**
	 * @default NULL
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * @default 0
	 */
	SpecialistCount: INTEGER,
	/**
	 * @default NULL
	 * Reference: GreatWorkSlots(Type)
	 */
	GreatWorkSlotType: TEXT,
	/**
	 * @default NULL
	 * Reference: GreatWorks(Type)
	 */
	FreeGreatWork: TEXT,
	/**
	 * @default 0
	 */
	GreatWorkCount: INTEGER,
	/**
	 * @default 0
	 */
	SpecialistExtraCulture: INTEGER,
	/**
	 * @default 0
	 */
	GreatPeopleRateChange: INTEGER,
	/**
	 * @default 0
	 */
	ExtraLeagueVotes: INTEGER,
	/**
	 * @default false
	 */
	CityWall: BOOLEAN,
	/**
	 * @default 0
	 */
	DisplayPosition: INTEGER,
	/**
	 * @default -1
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default NULL
	 */
	WonderSplashImage: TEXT,
	/**
	 * @default R,T
	 */
	WonderSplashAnchor: TEXT,
	/**
	 */
	WonderSplashAudio: TEXT,
	/**
	 * @default NULL
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 * @default false
	 */
	ArtInfoCulturalVariation: BOOLEAN,
	/**
	 * @default false
	 */
	ArtInfoEraVariation: BOOLEAN,
	/**
	 * @default false
	 */
	ArtInfoRandomVariation: BOOLEAN,
}

declare type BNW_Building_AreaYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_BuildingClassHappiness = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	Happiness: INTEGER,
}

declare type BNW_Building_BuildingClassYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: INTEGER,
	/**
	 * @default 0
	 */
	YieldChange: INTEGER,
}

declare type BNW_Building_ClassesNeededInCity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Building_FreeUnits = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Units(Type)
	 */
	UnitType: TEXT,
	/**
	 */
	NumUnits: INTEGER,
}

declare type BNW_Building_DomainFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_DomainFreeExperiencePerGreatWork = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_DomainProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Modifier: INTEGER,
}

declare type BNW_Building_FreeSpecialistCounts = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 */
	Count: INTEGER,
}

declare type BNW_Building_Flavors = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Flavors(Type)
	 */
	FlavorType: TEXT,
	/**
	 */
	Flavor: INTEGER,
}

declare type BNW_Building_GlobalYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_HurryModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: HurryInfos(Type)
	 */
	HurryType: TEXT,
	/**
	 */
	HurryCostModifier: INTEGER,
}

declare type BNW_Building_LocalResourceAnds = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type BNW_Building_LocalResourceOrs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
}

declare type BNW_Building_LockedBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
}

declare type BNW_Building_PrereqBuildingClasses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: BuildingClasses(Type)
	 */
	BuildingClassType: TEXT,
	/**
	 */
	NumBuildingNeeded: INTEGER,
}

declare type BNW_Building_ResourceQuantity = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	Quantity: INTEGER,
}

declare type BNW_Building_ResourceQuantityRequirements = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	Cost: INTEGER,
}

declare type BNW_Building_ResourceYieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ResourceCultureChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	CultureChange: INTEGER,
}

declare type BNW_Building_ResourceFaithChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 */
	FaithChange: INTEGER,
}

declare type BNW_Building_RiverPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SeaPlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_LakePlotYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SeaResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ResourceYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Resources(Type)
	 */
	ResourceType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_FeatureYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_TerrainYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_SpecialistYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Specialists(Type)
	 */
	SpecialistType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_UnitCombatFreeExperiences = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	Experience: INTEGER,
}

declare type BNW_Building_UnitCombatProductionModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	Modifier: INTEGER,
}

declare type BNW_Building_TechAndPrereqs = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Technologies(Type)
	 */
	TechType: TEXT,
}

declare type BNW_Building_YieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldChangesPerPop = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldChangesPerReligion = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_TechEnhancedYieldChanges = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_YieldModifiers = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 * Reference: Yields(Type)
	 */
	YieldType: TEXT,
	/**
	 */
	Yield: INTEGER,
}

declare type BNW_Building_ThemingBonuses = {
	/**
	 * Reference: Buildings(Type)
	 */
	BuildingType: TEXT,
	/**
	 */
	Description: TEXT,
	/**
	 */
	Bonus: INTEGER,
	/**
	 */
	SameEra: BOOLEAN,
	/**
	 */
	UniqueEras: BOOLEAN,
	/**
	 */
	MustBeArt: BOOLEAN,
	/**
	 */
	MustBeArtifact: BOOLEAN,
	/**
	 */
	MustBeEqualArtArtifact: BOOLEAN,
	/**
	 */
	RequiresOwner: BOOLEAN,
	/**
	 */
	RequiresAnyButOwner: BOOLEAN,
	/**
	 */
	RequiresSamePlayer: BOOLEAN,
	/**
	 */
	RequiresUniquePlayers: BOOLEAN,
	/**
	 */
	AIPriority: INTEGER,
}

