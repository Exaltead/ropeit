export interface Character {
    readonly id: number;
    readonly name: string;
    readonly fluff: string;
    readonly mechanics: string;
    readonly notes: string;
}

export type ApiResponse = Record<string, any>;

export const enum CharacterActionTypes {
    FETCH_REQUEST = "@@character/FETCH",
    FETCH_SUCCESS = "@@character/SUCCESS",
    FETCH_ERROR = "@@character/ERROR",
    SELECTED = "@@character/SELECTED"
}

export interface CharacterState {
    readonly loading: boolean,
    readonly charactersById: Map<number, Character>
    readonly errors?: string
}