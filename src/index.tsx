import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { CombineReducers } from 'src/store/redux';

/**
 * store
 * @typedef { Store<any, any> }
 */
const store: Store<any, AnyAction> = createStore(CombineReducers, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>kfhlginkp, Redux saga </React.StrictMode>
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
