import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import MainPage from './screens/MainPage';
import LoginPage from './screens/LoginPage';
import AuthPage from './screens/AuthPage';

import Haksa from './modules/Haksa.js';

export default class App extends React.Component {
<<<<<<< HEAD
  render() {
    var haksa = new Haksa;
    return (
        <AppContainer />
    );
=======
  haksa = new Haksa();

  state = {loaded: false};

  constructor(props: any) {
    super(props);
  }

  // Initialize
  componentWillMount() {}

  render() {
    return <AppContainer screenProps={{haksa: this.haksa}} />;
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

<<<<<<< HEAD
const AppSwitchNavigator = createSwitchNavigator({
    Login: {screen: LoginPage},
    Main: {screen: MainPage},
  },
  {initialRouteName: 'Main'}
=======
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
  {initialRouteName: 'Auth'}
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503
);

const AppContainer = createAppContainer(AppSwitchNavigator);
