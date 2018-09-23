import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all, fork } from "redux-saga/effects";
import { characterReducer } from "./characters/reducer";
import characterSaga from "./characters/sagas";
import { CharacterState } from "./characters/types";
import { gameReducer } from "./games/reducers";
import gameSaga from "./games/sagas";
import { GameState } from "./games/types";

function* rootSaga() {
    yield all([fork(characterSaga), fork(gameSaga)])
}

export interface ApplicationState {
    characters: CharacterState;
    games: GameState
}

const rootReducer = combineReducers<ApplicationState>(
    {
        characters: characterReducer,
        games: gameReducer
    })


export function configureStore(): Store<ApplicationState> {
    const middlewares = Array<any>()
    if (process.env.NODE_ENV === 'development') {
        const { logger } = require('redux-logger')
        middlewares.push(logger)
    }

    const sagaMiddleware = createSagaMiddleware()
    middlewares.push(sagaMiddleware)

    const store = createStore(rootReducer,
        applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store
}