import { takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_SAGA } from 'src/store/types';
import { fetchDataSaga } from 'src/store/saga/saga';

export function* OnePieceSaga() {
    yield takeEvery(FETCH_DATA_SAGA, fetchDataSaga);
}
