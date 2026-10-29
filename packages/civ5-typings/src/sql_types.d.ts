/** SQLite type */
declare type TEXT = string;
/** SQLite type */
declare type INTEGER = number;
declare type INT = INTEGER;
/** 
 * SQLite type
 * 
 * ---
 * - `0` — `FALSE`
 * - `1` — `TRUE`
 */
declare type BOOLEAN = 0|1;
declare type BOOL = BOOLEAN;
/** SQLite type */
declare type REAL = number;
/** 
 * SQLite type
 * 
 * ---
 * `LIKE "LOC_%"` */
declare type LocalizedText = string;
/** SQLite type */
declare type FLOAT = number;
declare type VARIANT = TEXT | INTEGER | BOOLEAN | FLOAT