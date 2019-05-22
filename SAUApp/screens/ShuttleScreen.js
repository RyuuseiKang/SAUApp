import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export default class ShuttleScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text />
      </View>
    );
  }
}

var deviceHeight = Dimensions.get ('window').height;
var deviceWidth = Dimensions.get ('window').width;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});
