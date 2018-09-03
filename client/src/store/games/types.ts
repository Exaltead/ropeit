export interface Game {
    readonly id: number
    readonly playerIds: number[]
    readonly characterIds: number[]
    readonly name: string
}

export type ApiResponse = Record<string, any>

export enum GameActionTypes {
    FETCH_REQUEST = "@@game/FETCH",
    FETCH_SUCCESS = "@@game/FETCH_SUCCESS",
    FETCH_FAILURE = "@@game/FETCH_FAILURE",
    SELECT = "@@game/SELECT"
}

export interface GameState {
    gamesById: Map<number, Game>
    selectedGame?: number
    loading: boolean
    errors?: string
}