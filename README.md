# civ5-typings

## !! HEAVILY WORK IN PROGRESS !!

Provides type indications to Civilization 5 Lua Modding API.\
Powered by TypeScriptToLua transpiler.

## Usage

`GameInfo` and `GameInfoTypes` are typed after a data set: the tables of the game database and the keys (usually `Type`) of their rows.
Both expansions are optional, so there are four of them: `Vanilla_DataSet`, `GnK_DataSet`, `BNW_DataSet` and `GnK_BNW_DataSet` (Brave New World overriding the Gods and Kings data), the default.
To target another one:

```ts
interface Civ5TypingsConfig { dataSet: BNW_DataSet }
```

A mod can add its tables, columns and rows to a data set:

```ts
type MyModDataSet = ExtendDataSet<GnK_BNW_DataSet, {
    tables: { Buildings: { MyColumn: INTEGER }, MyTable: { ID: INTEGER, Type: TEXT } },
    keys: { Buildings: "BUILDING_MY_WONDER", MyTable: "MY_ROW" },
}>;

interface Civ5TypingsConfig { dataSet: MyModDataSet }
```

The rows and row keys of each table are also available as `Buildings` and `BuildingsType`, from the active data set by default or from another one: `Buildings<BNW_DataSet>`.

## Development

This repository is a [pnpm](https://pnpm.io) workspace:

- `packages/civ5-typings`: the type definitions.
- `packages/civ5-scraper`: generates `packages/civ5-typings/src/table_types` from the game's XML assets.

pnpm downloads the required Node.js version (see `devEngines` in `package.json`).

```sh
pnpm install
pnpm typecheck
pnpm build
pnpm scrape # set CIV5_ASSETS_DIR to your "Sid Meier's Civilization V/Assets" folder
```

The scraper caches the table schemas and row keys of each DLC in `packages/civ5-scraper/tables.json`; delete it to re-scan the game assets.
