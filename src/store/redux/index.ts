import { combineReducers, Reducer } from 'redux';
import { TCombineReducer } from 'src/store/models';
import {} from 'src/store/redux/reducers';

/**
 * Create a CombineReducer
 */
export const CombineReducers: Reducer<TCombineReducer<any>> = combineReducers<TCombineReducer<any>>(
    {},
);
