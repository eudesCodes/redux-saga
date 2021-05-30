import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

import Container from 'src/screens/containers';

import 'assets/styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Container />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
