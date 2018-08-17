import { Reducer } from 'redux';
import { CharacterAction, CharacterActionTypes } from '../actions/character';
import { CharacterDto } from '../models/CharacterDto';

const initialState: CharacterState = {
    characters: []
};

export const characterReducer: Reducer<CharacterState> = (state = initialState, action) => {
    switch ((action as CharacterAction).type) {
        case CharacterActionTypes.AddCharacter:
            return { ...state, characters: [...state.characters, action.payload] };
        default:
            return state
    }
};

export interface CharacterState {
    characters: CharacterDto[]
}