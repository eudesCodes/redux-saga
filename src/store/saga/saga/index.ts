// import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { FETCH_DATA, FAILLURE } from 'src/store/types';

//
import { fetchData } from 'src/api.fetch';

// @
export function* fetchDataSaga(): any {
    try {
        const result = yield call(fetchData);
        yield put({ type: FETCH_DATA, payload: result.data });
    } catch (e) {
        yield put({ type: FAILLURE, payload: e });
    }
}
