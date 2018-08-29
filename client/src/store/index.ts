import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all, fork } from "redux-saga/effects";
import { characterReducer } from "./characters/reducer";
import characterSaga from "./characters/sagas";
import { CharacterState } from "./characters/types";

function* rootSaga() {
    yield all([fork(characterSaga)])
}

interface ApplicationState {
    characterState: CharacterState
}

const rootReducer = combineReducers<ApplicationState>(
    {
        characterState: characterReducer
    })


export function configureStore(initialState: ApplicationState): Store<ApplicationState> {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, initialState,
        applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}