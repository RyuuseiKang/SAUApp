// Imports
import {createAction} from 'redux-actions';
import {serverUri} from './Server';

import axios from 'axios';

// Actions
const GET_USERDATA = 'GET_USERDATA';
const GET_TIMETABLE = 'GET_TIMETABLE';
const GET_WEEKTABLE = 'GET_WEEKTABLE';
const LOGOUT = 'LOGOUT';

// Action Creators
export const get_userdata = createAction(GET_USERDATA);
export const get_timetable = createAction(GET_TIMETABLE);
export const get_weektable = createAction(GET_WEEKTABLE);
export const userLogout = createAction(LOGOUT);

// Reducer
const initialState = {
	name: '',
    number: '',
    profileURI: '',
	timeTable: {mon: [],
				tue: [],
				wed: [],
				thu: [],
				fri: [],
				},
	weekTable: {mon: [],
				tue: [],
				wed: [],
				thu: [],
				fri: [],
				sat: [],
				},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_USERDATA:
			return func_getUserData(state, action);
		case GET_TIMETABLE:
			return func_getTimeTable(state, action);
		case GET_WEEKTABLE:
			return func_getWeekTable(state, action);
		case LOGOUT:
			return func_logout(state, action);
		default:
			return state;
	}
}


// Async Reducer Functions
export const getUserDataAsync = (_cookie) => {
	return dispatch => {
		console.log('try GetUserData');

		let getUserResult = axios.get(serverUri + '/me?cookie=' + _cookie).then(response => {
			
			dispatch({
				type: GET_USERDATA,
				number: response.data.userNumber,
				name: response.data.userName,
				profileURI: response.data.profileImageURI,
			});

			// const timeTable = getTimeTableAsync(_cookie);
			// const weekTable = getWeekTableAsync(_cookie);
		}).catch(err => {

		});
	
		//dispatch(loginResult);
	}
};

export const getTimeTableAsync = (_cookie) => {
	return dispatch => {
		console.log('try GetTimeTable');

		let getTimeTableResult = axios.get(serverUri + '/me/timetable?cookie=' + _cookie).then(response => {
			
			dispatch({
				type: GET_TIMETABLE,
				timeTable: response.data,
			})
		})
	}
}

export const getWeekTableAsync = (_cookie) => {
	return dispatch => {
		console.log('try GetWeekTable');

		let getWeekTableResult = axios.get(serverUri + '/me/weekTimeTable?cookie=' + _cookie).then(response => {
			dispatch({
				type: GET_WEEKTABLE,
				weekTable: response.data,
			})
		})
	}
}

// Reducer Functions
function func_getUserData(state, action) {
	return Object.assign({}, state, {
		number: action.number,
		name: action.name,
		profileURI: action.profileURI,
	});
}

function func_getTimeTable(state, action) {
	return Object.assign({}, state, {
		timeTable: action.timeTable,
	});
}

function func_getWeekTable(state, action) {
	return Object.assign({}, state, {
		weekTable: action.weekTable,
	});
}

function func_logout(state, action) {
	return Object.assign({}, state, initialState);
}

// Exports
const actionCreators = {
	get_userdata,
	get_timetable,
	get_weektable,
};

export {actionCreators};
