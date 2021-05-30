import { CombineReducers } from 'src/store/redux';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { OnePieceSaga } from 'src/store/saga';

const sagaMiddleware = createSagaMiddleware();
/**
 * store
 * @typedef { Store<any, any> }
 */
export const store: Store<any, AnyAction> = createStore(
    CombineReducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(OnePieceSaga); // run saga
