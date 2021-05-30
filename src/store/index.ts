import { CombineReducers } from 'src/store/redux';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';

/**
 * store
 * @typedef { Store<any, any> }
 */
export const store: Store<any, AnyAction> = createStore(CombineReducers, applyMiddleware());
