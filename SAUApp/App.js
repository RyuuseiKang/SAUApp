import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import LoginScreen from './screens/LoginScreen.js';
import MainScreen from './screens/MainScreen.js';
import ShuttleScreen from './screens/ShuttleScreen.js';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <LoginScreen />
          <ShuttleScreen />
          <MainScreen />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#1E344F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
