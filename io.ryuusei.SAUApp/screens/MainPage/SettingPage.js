import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default class SettingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>asdfasdfasdf</Text>
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});
