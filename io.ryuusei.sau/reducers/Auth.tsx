// Imports
import {createAction} from 'redux-actions';
import { serverUri } from './Server';

import axios from 'axios';


// Actions
const CHECK_AUTH = 'CHECK_AUTH';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
export const login = () => ({
	type: LOGIN,
})

export const logout = () => ({
	type: LOGOUT
})

export const check_auth = (_userCookie) => ({
	type: CHECK_AUTH,
	userCookie: _userCookie
})


// Reducer
const initialState = {
	loggingIn: false,
	userCookie: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return func_login(state, action);
		case CHECK_AUTH:
			return func_checkAuth(state, action);
		case LOGOUT:
			return func_logout(state, action);
		default:
			return state;
	}
}


// Async Reducer Functions
export const loginAsync = (_userId, _userPassword) => {
	return dispatch => {
		console.log('try login');

		let loginResult = axios.get(serverUri + '/auth/login?userId=' + _userId + '&userPassword=' + _userPassword).then(response => {
			// console.log(response.data);
	
			if(response.data.isLogin) {
				dispatch({
					type: LOGIN,
					loggingIn: response.data.isLogin,
					userCookie: response.data.Cookie,
				});
			} else {
				dispatch({
					type: LOGIN,
					loggingIn: response.data.isLogin,
					userCookie: '',
				});
			}
		}).catch(err => {

		});
	
		//dispatch(loginResult);
	}
};

export const checkAuthAsync = (_cookie) => {
	return dispatch => {
		console.log('try Check Auth');

		let loginResult = axios.get(serverUri + '/auth/session?cookie=' + _cookie).then(response => {
			if(response.data.isSessionAlive) {
				dispatch({
					type: LOGIN,
					loggingIn: response.data.isSessionAlive,
					userCookie: _cookie
				});
			} else {
				dispatch({
					type: LOGIN,
					loggingIn: response.data.isSessionAlive,
					userCookie: ''
				})
			}
		}).catch(err => {

		});
	}
}


// Reducer Functions
function func_login(state, action) {
	console.log('func_login: ' + action.userCookie);

	return Object.assign({}, state, {
		loggingIn: action.loggingIn,
		userCookie: action.userCookie,
	});
}

function func_checkAuth(state, action) {
	return {
		...state,
		loggingIn: false,
	};
}

function func_logout(state, action) {
	return {
		...state,
		loggingIn: false,
		userCookie: '',
	}
}

function func_loginSuccess(state, action) {
	return {
		...state,
		loggingIn: true,
		cookie: action.cookie,
	}
}


// Exports
const actionCreators = {
	login,
	check_auth,
};

export {actionCreators};
