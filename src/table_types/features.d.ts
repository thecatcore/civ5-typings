declare type Features<D extends DLCs> = TableType<D, Vanilla_Features, GnK_Features, BNW_Features>

declare type FakeFeatures<D extends DLCs> = TableType<D, Vanilla_FakeFeatures, GnK_FakeFeatures, BNW_FakeFeatures>

declare type Feature_YieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_YieldChanges, GnK_Feature_YieldChanges, BNW_Feature_YieldChanges>

declare type Feature_RiverYieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_RiverYieldChanges, GnK_Feature_RiverYieldChanges, BNW_Feature_RiverYieldChanges>

declare type Feature_HillsYieldChanges<D extends DLCs> = TableType<D, Vanilla_Feature_HillsYieldChanges, GnK_Feature_HillsYieldChanges, BNW_Feature_HillsYieldChanges>

declare type Feature_TerrainBooleans<D extends DLCs> = TableType<D, Vanilla_Feature_TerrainBooleans, GnK_Feature_TerrainBooleans, BNW_Feature_TerrainBooleans>

declare type Natural_Wonder_Placement<D extends DLCs> = TableTypeGnK<D, GnK_Natural_Wonder_Placement, BNW_Natural_Wonder_Placement>