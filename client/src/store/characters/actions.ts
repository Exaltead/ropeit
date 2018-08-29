import { action } from 'typesafe-actions';
import { Character, CharacterActionTypes } from './types'

export const fetchRequest =
    () => action(CharacterActionTypes.FETCH_REQUEST)
export const fetchSuccess =
    (characters: [Character]) => action(CharacterActionTypes.FETCH_SUCCESS, characters)
export const fetchFailure =
    (message: string) => action(CharacterActionTypes.FETCH_ERROR, message)