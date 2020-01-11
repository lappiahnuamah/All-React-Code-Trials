import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import React from 'react';

import './index.css';
import App from '../components/App';

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
