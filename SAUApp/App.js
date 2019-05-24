import React from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';

import LoginScreen from './screens/LoginScreen.js';
import MainScreen from './screens/MainScreen.js';
import ShuttleScreen from './screens/ShuttleScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          horizontal
          pagingEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <MainScreen />
          <LoginScreen />
          <ShuttleScreen />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    //backgroundColor: '#1E344F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
