import {combineReducers, createStore, applyMiddleware} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';

import Auth from './reducers/Auth';
import User from './reducers/User';

export const reducers = combineReducers({
    Auth,
    User,
});

export const store = createStore(reducers, applyMiddleware(ReduxThunk)); //, applyMiddleware(logger));
