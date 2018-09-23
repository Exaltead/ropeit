import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchCharacters } from 'src/repositories/CharacterRepo'
import { fetchFailure, fetchSuccess } from './actions';
import { CharacterActionTypes } from './types'

function* handleFetch() {
    try {
        const res = yield call(fetchCharacters)
        if (res.error) {
            yield put(fetchFailure(res.error))
        } else {
            yield put(fetchSuccess(res))
        }
    } catch (err) {
        if (err instanceof Error){
            yield put(fetchFailure(err.stack!))
        }
        else{
            yield put(fetchFailure("Wut?"))
        }
    }
}

function* characterSaga(){
    yield takeEvery(CharacterActionTypes.FETCH_REQUEST, handleFetch)
}

export default characterSaga;