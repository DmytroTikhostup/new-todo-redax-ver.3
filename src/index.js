import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import counterReducer from './reducers/counterReducer';
import formReducer from './reducers/formReducer';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// ---- Local storage - persist -----------------------------------------------

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer, formReducer);

// ------ store ---------------------------------------------------------------
const store = configureStore({
    reducer: combineReducers({
        counter: counterReducer,
        form: formReducer,
        persist: persistedReducer,
    }),
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState());
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
