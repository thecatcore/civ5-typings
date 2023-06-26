// gameplay/xml/units/civ5unitpromotions

declare type Vanilla_UnitPromotions = {
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
	 * @default null
	 * Reference: Language_en_US(Tag)
	 */
	Help: TEXT,
	/**
	 * @default null
	 */
	DisabledHelp: TEXT,
	/**
	 */
	Button: TEXT,
	/**
	 * @default 9
	 */
	PortraitIndex: INTEGER,
	/**
	 * @default ABILITY_ATLAS
	 * Reference: IconTextureAtlases(Atlas)
	 */
	IconAtlas: TEXT,
	/**
	 */
	HotKey: TEXT,
	/**
	 */
	HotKeyAlt: TEXT,
	/**
	 * @default 0
	 */
	HotKeyPriority: INTEGER,
	/**
	 * @default 0
	 */
	HotKeyPriorityAlt: INTEGER,
	/**
	 * @default 0
	 */
	OrderPriority: INTEGER,
	/**
	 * @default false
	 */
	AltDown: BOOLEAN,
	/**
	 * @default false
	 */
	AltDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDown: BOOLEAN,
	/**
	 * @default false
	 */
	ShiftDownAlt: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDown: BOOLEAN,
	/**
	 * @default false
	 */
	CtrlDownAlt: BOOLEAN,
	/**
	 */
	Sound: TEXT,
	/**
	 * @default false
	 */
	CannotBeChosen: BOOLEAN,
	/**
	 * @default false
	 */
	LostWithUpgrade: BOOLEAN,
	/**
	 * @default false
	 */
	InstaHeal: BOOLEAN,
	/**
	 * @default false
	 */
	Leader: BOOLEAN,
	/**
	 * @default false
	 */
	Blitz: BOOLEAN,
	/**
	 * @default false
	 */
	Amphib: BOOLEAN,
	/**
	 * @default false
	 */
	River: BOOLEAN,
	/**
	 * @default false
	 */
	EnemyRoute: BOOLEAN,
	/**
	 * @default false
	 */
	RivalTerritory: BOOLEAN,
	/**
	 * @default false
	 */
	MustSetUpToRangedAttack: BOOLEAN,
	/**
	 * @default false
	 */
	RangedSupportFire: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveAfterAttacking: BOOLEAN,
	/**
	 * @default false
	 */
	AlwaysHeal: BOOLEAN,
	/**
	 * @default false
	 */
	HealOutsideFriendly: BOOLEAN,
	/**
	 * @default false
	 */
	HillsDoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	RoughTerrainEndsTurn: BOOLEAN,
	/**
	 * @default false
	 */
	IgnoreTerrainCost: BOOLEAN,
	/**
	 * @default false
	 */
	HoveringUnit: BOOLEAN,
	/**
	 * @default false
	 */
	FlatMovementCost: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveImpassable: BOOLEAN,
	/**
	 * @default false
	 */
	NoCapture: BOOLEAN,
	/**
	 * @default false
	 */
	OnlyDefensive: BOOLEAN,
	/**
	 * @default false
	 */
	NoDefensiveBonus: BOOLEAN,
	/**
	 * @default false
	 */
	NukeImmune: BOOLEAN,
	/**
	 * @default false
	 */
	HiddenNationality: BOOLEAN,
	/**
	 * @default false
	 */
	AlwaysHostile: BOOLEAN,
	/**
	 * @default false
	 */
	NoRevealMap: BOOLEAN,
	/**
	 * @default false
	 */
	Recon: BOOLEAN,
	/**
	 * @default false
	 */
	CanMoveAllTerrain: BOOLEAN,
	/**
	 * @default false
	 */
	FreePillageMoves: BOOLEAN,
	/**
	 * @default false
	 */
	AirSweepCapable: BOOLEAN,
	/**
	 * @default false
	 */
	AllowsEmbarkation: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedNotCivilian: BOOLEAN,
	/**
	 * @default false
	 */
	EmbarkedAllWater: BOOLEAN,
	/**
	 * @default false
	 */
	HealIfDestroyExcludesBarbarians: BOOLEAN,
	/**
	 * @default false
	 */
	RangeAttackIgnoreLOS: BOOLEAN,
	/**
	 * @default 0
	 */
	RangedAttackModifier: INTEGER,
	/**
	 * @default 0
	 */
	InterceptionCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	InterceptionDefenseDamageModifier: INTEGER,
	/**
	 * @default 0
	 */
	AirSweepCombatModifier: INTEGER,
	/**
	 * @default 0
	 */
	ExtraAttacks: INTEGER,
	/**
	 * @default 0
	 */
	ExtraNavalMovement: INTEGER,
	/**
	 * @default 0
	 */
	VisibilityChange: INTEGER,
	/**
	 * @default 0
	 */
	MovesChange: INTEGER,
	/**
	 * @default 0
	 */
	MoveDiscountChange: INTEGER,
	/**
	 * @default 0
	 */
	RangeChange: INTEGER,
	/**
	 * @default 0
	 */
	InterceptChanceChange: INTEGER,
	/**
	 * @default 0
	 */
	NumInterceptionChange: INTEGER,
	/**
	 * @default 0
	 */
	EvasionChange: INTEGER,
	/**
	 * @default 0
	 */
	CargoChange: INTEGER,
	/**
	 * @default 0
	 */
	EnemyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	NeutralHealChange: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyHealChange: INTEGER,
	/**
	 * @default 0
	 */
	SameTileHealChange: INTEGER,
	/**
	 * @default 0
	 */
	AdjacentTileHealChange: INTEGER,
	/**
	 * @default 0
	 */
	EnemyDamageChance: INTEGER,
	/**
	 * @default 0
	 */
	NeutralDamageChance: INTEGER,
	/**
	 * @default 0
	 */
	CombatPercent: INTEGER,
	/**
	 * @default 0
	 */
	CityAttack: INTEGER,
	/**
	 * @default 0
	 */
	CityDefense: INTEGER,
	/**
	 * @default 0
	 */
	RangedDefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	HillsAttack: INTEGER,
	/**
	 * @default 0
	 */
	HillsDefense: INTEGER,
	/**
	 * @default 0
	 */
	OpenAttack: INTEGER,
	/**
	 * @default 0
	 */
	OpenRangedAttackMod: INTEGER,
	/**
	 * @default 0
	 */
	OpenDefense: INTEGER,
	/**
	 * @default 0
	 */
	RoughAttack: INTEGER,
	/**
	 * @default 0
	 */
	RoughRangedAttackMod: INTEGER,
	/**
	 * @default 0
	 */
	RoughDefense: INTEGER,
	/**
	 * @default 0
	 */
	AttackFortifiedMod: INTEGER,
	/**
	 * @default 0
	 */
	AttackWoundedMod: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyCombatMod: INTEGER,
	/**
	 * @default 0
	 */
	NearbyEnemyCombatRange: INTEGER,
	/**
	 * @default 0
	 */
	UpgradeDiscount: INTEGER,
	/**
	 * @default 0
	 */
	ExperiencePercent: INTEGER,
	/**
	 * @default 0
	 */
	AdjacentMod: INTEGER,
	/**
	 * @default 0
	 */
	AttackMod: INTEGER,
	/**
	 * @default 0
	 */
	DefenseMod: INTEGER,
	/**
	 * @default 0
	 */
	DropRange: INTEGER,
	/**
	 * @default 0
	 */
	GreatGeneral: BOOLEAN,
	/**
	 * @default 0
	 */
	GreatGeneralModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyLandsModifier: INTEGER,
	/**
	 * @default 0
	 */
	FriendlyLandsAttackModifier: INTEGER,
	/**
	 * @default 0
	 */
	OutsideFriendlyLandsModifier: INTEGER,
	/**
	 * @default 0
	 */
	HPHealedIfDestroyEnemy: INTEGER,
	/**
	 * @default 0
	 */
	ExtraWithdrawal: INTEGER,
	/**
	 * @default 0
	 */
	EmbarkExtraVisibility: INTEGER,
	/**
	 * @default NULL
	 */
	LayerAnimationPath: TEXT,
	/**
	 * @default NULL
	 * Reference: Technologies(Type)
	 */
	TechPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	Invisible: TEXT,
	/**
	 * @default NULL
	 * Reference: InvisibleInfos(Type)
	 */
	SeeInvisible: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereq: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr1: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr2: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr3: TEXT,
	/**
	 * @default NULL
	 * Reference: UnitPromotions(Type)
	 */
	PromotionPrereqOr4: TEXT,
	/**
	 */
	PediaType: TEXT,
	/**
	 * Reference: Language_en_US(Tag)
	 */
	PediaEntry: TEXT,
}

declare type Vanilla_UnitPromotions_Terrains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: Terrains(Type)
	 */
	TerrainType: TEXT,
	/**
	 * @default 0
	 */
	Attack: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default false
	 */
	DoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * Reference: Technologies(Type)
	 */
	PassableTech: TEXT,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_Features = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: Features(Type)
	 */
	FeatureType: TEXT,
	/**
	 * @default 0
	 */
	Attack: INTEGER,
	/**
	 * @default 0
	 */
	Defense: INTEGER,
	/**
	 * @default false
	 */
	DoubleMove: BOOLEAN,
	/**
	 * @default false
	 */
	Impassable: BOOLEAN,
	/**
	 * Reference: Technologies(Type)
	 */
	PassableTech: TEXT,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitClasses = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: UnitClasses(Type)
	 */
	UnitClassType: TEXT,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	Attack: INTEGER,
	/**
	 */
	Defense: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_Domains = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: Domains(Type)
	 */
	DomainType: TEXT,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitCombatMods = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	Modifier: INTEGER,
	/**
	 */
	PediaType: TEXT,
}

declare type Vanilla_UnitPromotions_UnitCombats = {
	/**
	 * Reference: UnitPromotions(Type)
	 */
	PromotionType: TEXT,
	/**
	 * Reference: UnitCombatInfos(Type)
	 */
	UnitCombatType: TEXT,
	/**
	 */
	PediaType: TEXT,
}

