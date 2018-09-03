import { Game } from "../store/games/types";

export async function fetchGames() {
    return [createGame(1, [1], [1], "Test1")]
}

const createGame = (id: number, playerIds: number[],
    characterIds: number[], name: string) => ({
        characterIds,
        id,
        name,
        playerIds
    } as Game)