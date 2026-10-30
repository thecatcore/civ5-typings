// The Lua API typings, checked against a port of the Lua script of the "City States Evolved" mod (by Charsi).

function startTurn(this: void, player: PlayerID) {
    const minor = Players[player];
    const team = Teams[minor.GetTeam()];

    if (!team.IsAlive() || !minor.IsMinorCiv()) {
        return;
    }

    const trait = minor.GetMinorCivTrait();
    const building = trait == GameInfoTypes.MINOR_TRAIT_CULTURED ? GameInfoTypes.BUILDING_MONUMENT : -1;

    for (const city of minor.Cities()) {
        if (building != -1 && !city.IsHasBuilding(building)) {
            city.SetNumRealBuilding(building, 1);
        }
    }

    for (let other = GameDefines.MAX_MAJOR_CIVS; other < GameDefines.MAX_CIV_PLAYERS; other++) {
        const otherTeam = Players[other].GetTeam();

        if (team.CanChangeWarPeace(otherTeam) && team.IsAtWar(otherTeam) && team.GetNumTurnsLockedIntoWar(otherTeam) <= 0) {
            team.MakePeace(otherTeam);

            const capital = minor.GetCapitalCity();

            if (capital != null) {
                const text = `${minor.GetName()} makes peace with ${Players[other].GetName()}!`;
                Players[Game.GetActivePlayer()].AddNotification(NotificationTypes.NOTIFICATION_GENERIC, text, text, capital.GetX(), capital.GetY());
            }
        }
    }

    const active = Game.GetActivePlayer();
    const quest = MinorCivQuestTypes.MINOR_CIV_QUEST_BULLY_CITY_STATE;

    if (minor.IsMinorCivActiveQuestForPlayer(active, quest)) {
        const victimTeam = Players[minor.GetQuestData1(active, quest)].GetTeam();

        if (team.CanDeclareWar(victimTeam) && minor.GetQuestTurnsRemaining(active, quest, Game.GetGameTurn() - 1) <= 1) {
            team.DeclareWar(victimTeam);
        }
    }
}

function limitSettlers(this: void, player: PlayerID, unit: InfoID): boolean {
    const minor = Players[player];

    if (!minor.IsMinorCiv() || unit != GameInfoTypes.UNIT_SETTLER) {
        return true;
    }

    const settlers = minor.GetUnitClassCountPlusMaking(GameInfoTypes.UNITCLASS_SETTLER);

    return minor.GetNumCities() + settlers < minor.GetCurrentEra() + 2;
}

GameEvents.PlayerCanTrain.Add(limitSettlers);
GameEvents.CityCanTrain.Add((player, _city, unit) => limitSettlers(player, unit));
GameEvents.PlayerDoTurn.Add(startTurn);

// The rest of the API, generated from the wiki.
const plot = GameMap.GetPlot(0, 0);

if (plot != null) {
    const [width, height] = GameMap.GetGridSize();
    print(plot.GetX(), width, height, plot.GetTerrainType() == TerrainTypes.TERRAIN_GRASS);
}

for (const row of DB.Query("SELECT Type FROM Buildings")) {
    print(row.Type);
}

print(Locale.ConvertTextKey("TXT_KEY_CIV5_MY_TEXT", Players[0].GetName()));
Events.ActivePlayerTurnStart.Add(() => ContextPtr.SetHide(false));
GameEvents.CanDeclareWar.Add((myTeam, theirTeam) => myTeam != theirTeam);
LuaEvents.MyModEvent.Add((value: int) => print(value));
LuaEvents.MyModEvent(1);

// The plot may not exist.
// @ts-expect-error
GameMap.GetPlot(-1, -1).GetX();

// The capital may not exist.
// @ts-expect-error
Players[0].GetCapitalCity().GetX();

// Listeners must match the event.
// @ts-expect-error
GameEvents.PlayerCanTrain.Add((player: PlayerID) => print(player));

export {};
