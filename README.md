# civ5-typings

## !! HEAVILY WORK IN PROGRESS !!

Provides type indications to Civilization 5 Lua Modding API.\
Powered by TypeScriptToLua transpiler.

## Usage

Add `civ5-typings` to the `types` of your `tsconfig.json`, see `packages/civ5-example`:

```json
"types": ["lua-types/5.1", "civ5-typings"]
```

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

The Lua API of the game (`Game`, `Player`, `City`, `GameEvents`, the UI controls, the enumerations, ...) is generated in `packages/civ5-typings/src/api.d.ts` from the [modding wiki](https://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)), which covers the base game and Gods & Kings.
The few parts it does not describe (`Players`, `Teams`, `GameDefines`, `Controls`, the shape of events, ...) are written by hand in `packages/civ5-typings/src/extras.d.ts`.

The `Map` object is named `GameMap` in TypeScript, as TypeScriptToLua reserves `Map` for the JavaScript class, it is still compiled to `Map`: `GameMap.GetPlot(x, y)`.

## Development

This repository is a [pnpm](https://pnpm.io) workspace:

- `packages/civ5-typings`: the type definitions.
- `packages/civ5-scraper`: generates `packages/civ5-typings/src/table_types` from the game's XML assets (`main.ts`), and `packages/civ5-typings/src/api.d.ts` from the modding wiki (`api.ts`).
- `packages/civ5-example`: an example mod using the typings (`src`), and type tests for them (`test`).

pnpm downloads the required Node.js version (see `devEngines` in `package.json`).

```sh
pnpm install
pnpm typecheck
pnpm test # type checks packages/civ5-example/test, each `@ts-expect-error` must be an error
pnpm build
pnpm scrape # set CIV5_ASSETS_DIR to your "Sid Meier's Civilization V/Assets" folder
pnpm scrape:api
```

`CIV5_ASSETS_DIR` can be set in the environment or in `packages/civ5-scraper/.env`, see `packages/civ5-scraper/.env.example`.

The scraper caches the table schemas and row keys of each DLC in `packages/civ5-scraper/tables.json`; delete it to re-scan the game assets.

The API scraper caches the wikitext of the wiki pages in `packages/civ5-scraper/wiki`; delete a file (or the folder) to download it again.
Fixes to the wiki's signatures (wrong types, nullable returns, ...) go in the tables at the top of `packages/civ5-scraper/api.ts`.
