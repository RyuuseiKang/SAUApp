import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';

import MainPage from './screens/MainPage';
import LoginPage from './screens/Login/presenter';
import AuthPage from './screens/Auth/presenter';

import Haksa from './modules/Haksa.js';

import {Provider} from 'react-redux';
import {store, persistor} from './reducer';

import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {
	haksa = new Haksa();

	state = {loaded: false};

	constructor(props: any) {
		super(props);
	}

	// Initialize
	componentWillMount() {}

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppContainer screenProps={{haksa: this.haksa}} />
				</PersistGate>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const MainStack = createSwitchNavigator({
	screen: MainPage,
});
const LoginStack = createSwitchNavigator({screen: LoginPage});

const AppSwitchNavigator = createSwitchNavigator(
	{
		Auth: AuthPage,
		Login: LoginStack,
		Main: MainStack,
	},
	{initialRouteName: 'Auth'},
);

const AppContainer = createAppContainer(AppSwitchNavigator);
