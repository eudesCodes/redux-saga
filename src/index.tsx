import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>Redux saga </React.StrictMode>
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
