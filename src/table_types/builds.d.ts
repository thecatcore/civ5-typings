declare type Builds<D extends DLCs> = TableType<D, Vanilla_Builds, GnK_Builds, BNW_Builds>

declare type BuildFeatures<D extends DLCs> = TableType<D, Vanilla_BuildFeatures, GnK_BuildFeatures, BNW_BuildFeatures>

declare type Build_TechTimeChanges<D extends DLCs> = TableTypeGnK<D, GnK_Build_TechTimeChanges, BNW_Build_TechTimeChanges>