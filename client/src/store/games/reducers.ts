import { Reducer } from "redux"
import { ActionType } from "typesafe-actions";
import * as gameActions from './actions'
import { Game, GameActionTypes, GameState } from './types'
const initialState: GameState = {
    errors: undefined,
    gamesById: new Map<number, Game>(),
    loading: false,
    selectedGame: undefined
}

export type GameAction = ActionType<typeof gameActions>

const reducer: Reducer<GameState, GameAction> = (state = initialState, action: GameAction) => {
    switch (action.type) {
        case GameActionTypes.FETCH_REQUEST:
            return { ...state, loading: true, selectedGame: undefined }
        case GameActionTypes.FETCH_SUCCESS:
            const byId = action.payload.map(t => [t.id, t] as [number, Game])
            return { ...state, loading: false, gamesById: new Map(byId) }
        case GameActionTypes.FETCH_FAILURE:
            return { ...state, loading: false, message: action.payload }
        case GameActionTypes.SELECT:
            return { ...state, selectedGame: action.payload }
        default:
            return state
    }
}

export { reducer as gameReducer }