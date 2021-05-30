import { CombineReducers } from 'src/store/redux';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { OnePieceSaga } from 'src/store/saga';
import Logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
/**
 * store
 * @typedef { Store<any, any> }
 */
export const store: Store<any, AnyAction> = createStore(
    CombineReducers,
    applyMiddleware(sagaMiddleware, Logger),
);

sagaMiddleware.run(OnePieceSaga); // run saga
