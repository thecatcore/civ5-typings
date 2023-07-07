declare type Processes<D extends DLCs> = TableType<D, Vanilla_Processes, GnK_Processes, BNW_Processes>

declare type Process_Flavors<D extends DLCs> = TableTypeGnK<D, GnK_Process_Flavors, BNW_Process_Flavors>

declare type Process_ProductionYields<D extends DLCs> = TableType<D, Vanilla_Process_ProductionYields, GnK_Process_ProductionYields, BNW_Process_ProductionYields>