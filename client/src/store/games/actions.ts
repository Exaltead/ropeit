import { action, createAsyncAction } from 'typesafe-actions';
import { Game, GameActionTypes } from './types'

export const selectGame =
    (id: number) => action(GameActionTypes.SELECT, id)

export const fetchGames = createAsyncAction(
    GameActionTypes.FETCH_REQUEST,
    GameActionTypes.FETCH_SUCCESS,
    GameActionTypes.FETCH_FAILURE)
    <void, [Game], string>()