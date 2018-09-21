import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchGames } from 'src/repositories/GameRepo';
import { fetchGames as fetchAction } from './actions';
import { GameActionTypes } from './types';

function* handleFetch() {
    try {
        const res = yield call(fetchGames)
        if (res.error) {
            yield put(fetchAction.failure(res.error))
        } else {
            yield put(fetchAction.success(res))
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchAction.failure(err.stack!))
        }
        else {
            yield put(fetchAction.failure("Wut?"))
        }
    }
}

function* gameSaga() {
    yield takeEvery(GameActionTypes.FETCH_REQUEST, handleFetch)
}

export default gameSaga