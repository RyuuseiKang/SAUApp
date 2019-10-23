import {createAction} from 'redux-actions';
import {serverUri} from './Server';

import axios from 'axios';
import { logout } from './Auth';


// Actions
const SET_PAGENAME = 'SET_PAGENAME';
const LOGOUT = 'LOGOUT';

// Action Creators
export const set_pageName = () => ({
    type: SET_PAGENAME
})

export const pageLogout = () => ({
    type: LOGOUT
})

// Reducer
const initialState = {
    pageName: '이번주',
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_PAGENAME:
            return set_PageName(state, action);
        case LOGOUT:
            return func_logout(state, action);
        default: 
            return state;
    }
}

// Async Reducer Functions
export const setPage = (_pageName) => {
    return dispatch => {
        dispatch({
            type: SET_PAGENAME,
            pageName: _pageName,
        });
    }
}

// Reducer Functions
function set_PageName(state, action){
    return Object.assign({}, state, {
        pageName: action.pageName,
    });
}

function func_logout(state, action) {
    return Object.assign({}, state, {
        pageName: '이번주',
    })
}

// Exports
const actionCreators = {
    set_pageName,
}

export {actionCreators};