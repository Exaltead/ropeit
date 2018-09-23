import { Reducer } from "redux";
import { Character, CharacterActionTypes, CharacterState } from "./types";

const initialState: CharacterState = {
    charactersById: new Map<number, Character>(),
    errors: undefined,
    loading: false
}

const reducer: Reducer<CharacterState> = (state = initialState, action) => {
    switch (action.type) {
        case CharacterActionTypes.FETCH_REQUEST:
            return { ...state, loading: true }
        case CharacterActionTypes.FETCH_SUCCESS: {
            const byId = (action.payload as [Character]).map(t => [t.id, t] as [number, Character]);
            return { ...state, loading: false, charactersById: new Map(byId) }
        }
        case CharacterActionTypes.FETCH_ERROR:
            return { ...state, loading: false, message: action.payload }
        default:
            return state;
    }
}

export {reducer as characterReducer}