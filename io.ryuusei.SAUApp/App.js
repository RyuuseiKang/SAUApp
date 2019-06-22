import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Haksa from './modules/Haksa.js';

import LoginPage from './screens/LoginPage.js';

import MainPage from './screens/MainPage.js';
haksa = new Haksa();

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = new createSwitchNavigator({
  Login: {screen: LoginPage},
  Main: {screen: MainPage},
});

const AppContainer = createAppContainer(AppSwitchNavigator);
