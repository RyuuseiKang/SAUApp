import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import devToolsEnhancer from 'remote-redux-devtools';
import {createLogger} from 'redux-logger';

import Login from './screens/Login';

const logger = createLogger();
let store = createStore(reducer, devToolsEnhancer()); //, applyMiddleware(logger));

console.log(store.getState());

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Login />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
