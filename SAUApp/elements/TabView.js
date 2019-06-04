import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export default class TabView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
  },
});
