import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  AppRegistry,
} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Haksa from './modules/Haksa.js';

import LoginScreen from './screens/LoginScreen.js';
import MainScreen from './screens/MainScreen.js';
import ShuttleScreen from './screens/ShuttleScreen.js';

haksa = new Haksa();

class App extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppSwitchNavigator);

    if (1 == 1) {
      //this.props.navigation.navigate('Login');
      return <AppContainer />;
    } else {
      //this.props.navigation.navigate('Main');
      return <AppContainer />;
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          horizontal
          pagingEnabled={true}
          scrollEnabled={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <AppContainer />
          <LoginScreen />

          <ShuttleScreen />
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //backgroundColor: '#1E344F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppSwitchNavigator = new createSwitchNavigator({
  Main: {screen: MainScreen},
  Login: {screen: LoginScreen},
  Shuttle: {screen: ShuttleScreen},
});
