import {combineReducers, createStore, applyMiddleware} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage
};

import Auth from './reducers/Auth';
import User from './reducers/User';

export const rootReducer = combineReducers({
    Auth,
    User,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk)); //, applyMiddleware(logger));

export let persistor = persistStore(store);