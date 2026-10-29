# civ5-typings

## !! HEAVILY WORK IN PROGRESS !!

Provides type indications to Civilization 5 Lua Modding API.\
Powered by TypeScriptToLua transpiler.

## Usage

`GameInfo` and `GameInfoTypes` are typed after the Gods and Kings + Brave New World database by default. To target another ruleset:

```ts
interface Civ5TypingsConfig { dlc: DLCs.BRAVE_NEW_WORLD }
```

Both expansions are optional, so there are four rulesets: `VANILLA`, `GODS_AND_KINGS`, `BRAVE_NEW_WORLD` and `GODS_AND_KINGS_BRAVE_NEW_WORLD` (Brave New World overriding the Gods and Kings data).

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
