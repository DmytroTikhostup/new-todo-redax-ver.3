import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import rootReducer from './reducers/index';
import CounterReducer from './reducers/counterReducer';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// ---------------------------------------------------

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
