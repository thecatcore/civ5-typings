/** SQLite type */
declare type TEXT = string;
/** SQLite type */
declare type INTEGER = number;
/** 
 * SQLite type
 * 
 * ---
 * - `0` — `FALSE`
 * - `1` — `TRUE`
 */
declare type BOOLEAN = 0|1;
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