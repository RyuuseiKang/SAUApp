import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export default class ScheduleView extends React.Component {
  render() {
    return (
      <View>
        <View />
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#FCFCFC',
  },
});
