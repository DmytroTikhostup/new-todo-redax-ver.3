import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import counterReducer from './reducers/counterReducer';
import formReducer from './reducers/formReducer';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// ---------------------------------------------------

const store = configureStore({
    reducer: combineReducers({
        counter: counterReducer,
        form: formReducer,
    }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState());
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
