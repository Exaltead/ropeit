import { combineReducers, createStore } from "redux";
import { characterReducer, CharacterState } from './reducers/character';

export interface AppState {
    characterState: CharacterState
}

const rootReducer = combineReducers({
    characterReducer
});

const store = createStore(rootReducer);
export default store;