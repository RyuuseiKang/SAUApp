// Imports
import {createAction} from 'redux-actions';
import { check_auth } from './Auth';

import {serverUri} from './Server';

// Actions
const GET_USERDATA = 'GET_USERDATA';

export const get_userdata = createAction(GET_USERDATA);

// Reducer
const initialState = {
	name: '',
    number: '',
    profileURI: '',
    table: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERDATA:
			return func_getUserData(state, action);
		default:
			return state;
	}
}


// Reducer Functions
function apply_login(state, action) {



	// 여기서 로그인 처리
	console.log('Called Login');
	return {
		...state,
		loginStatus: true,
	};
}

function func_getUserData(state, action) {
	return {
		...state,
		loginStatus: false,
	};
}


// Exports
const actionCreators = {
	get_userdata,
};

export {actionCreators};
