import { Action, ActionCreator } from 'redux';
import { CharacterDto } from '../models/CharacterDto';

export enum CharacterActionTypes {
    AddCharacter = "ADD_CHARACTER",
    LoadCharacters = "LOAD_CHARTERS"
}

interface LoadCharacters extends Action {
    type: CharacterActionTypes.LoadCharacters
}

interface AddCharacterAction extends Action {
    type: CharacterActionTypes.AddCharacter
    payload: CharacterDto
}

export type CharacterAction = LoadCharacters | AddCharacterAction

export const addCharacter: ActionCreator<AddCharacterAction> = (character: CharacterDto) => ({
    payload: character,
    type: CharacterActionTypes.AddCharacter
});