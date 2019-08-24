import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';

import MainPage from './screens/MainPage';
import LoginPage from './screens/LoginPage';

import Haksa from './modules/Haksa.js';

export default class App extends React.Component {
  render() {

    this.state = {haksa: {Haksa}};

    return (
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginPage},
  Main: {screen: MainPage},
});

const AppContainer = createAppContainer(AppSwitchNavigator);