import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginPage from './screens/LoginPage.js';
import MainPage from './screens/MainPage.js';

export default function App() {
  const AppContainer = createAppContainer(AppSwitchNavigator);
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppSwitchNavigator = new createSwitchNavigator({
  Login: {screen: LoginPage},
  Main: {screen: MainPage},
});
