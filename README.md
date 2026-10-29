# civ5-typings

## !! HEAVILY WORK IN PROGRESS !!

Provides type indications to Civilization 5 Lua Modding API.\
Powered by TypeScriptToLua transpiler.

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

The scraper caches the table schemas in `packages/civ5-scraper/tables.json`; delete it to re-scan the game assets.
