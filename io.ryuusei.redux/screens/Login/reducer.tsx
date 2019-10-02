// Imports
import {createAction} from 'redux-actions';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

// Reducer
const initialState = {
	loginStatus: false,
	userCookie: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return applyLogin(state, action);
		case LOGOUT:
			return applyLogout(state, action);
		default:
			return state;
	}
}

// Reducer Functions
function applyLogin(state, action) {
	// 여기서 로그인 처리
	console.log('Called Login');
	return {
		...state,
		loginStatus: true,
	};
}

function applyLogout(state, action) {
	return {
		...state,
		loginStatus: false,
	};
}

// Exports
const actionCreators = {
	login,
	logout,
};
export {actionCreators};
