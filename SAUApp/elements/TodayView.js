import React from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';

import NowAttendWarning from './NowAttendWarning.js';
import ScheduleElement from './ScheduleElement.js';

export default class TodayView extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.shadow}>
          <NowAttendWarning />
          <ScheduleElement />
          <ScheduleElement />
          <View>
            <Text />
          </View>
          <Text />
        </View>
      </ScrollView>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#FCFCFC',
  },
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#333',
    shadowOffset: {height: 8, width: 0},
  },
});
