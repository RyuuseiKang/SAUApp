import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Easing,
  Animated,
  RefreshControl,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';

import {BlurView} from 'expo-blur';

import TodayView from '../../elements/TodayView.js';
import ScheduleView from '../../elements/ScheduleView.js';

var deviceHeight = Dimensions.get('window').height - 33 - 105;
var deviceWidth = Dimensions.get('window').width;
var TabCount = 2;
let tabWidth = deviceWidth * 0.6;

export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onMomentumScrollEnd={e => {
            //this.state.isTabOpen = e.nativeEvent.contentOffset.x / tabWidth;
          }}
          ref={node => (this.TabScrollView = node)}
        >
          <View>
            <TodayView />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,

    paddingBottom: 30,
  },
  tabScrollIndicator: {
    height: 5,
    width: (deviceWidth - 10) / TabCount,
    borderRadius: 2.5,
    backgroundColor: '#555',
  },
  todayDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8D8D8D',
    marginLeft: 20,
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontSize: 35,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

function getToday() {
  var d = ['일', '월', '화', '수', '목', '금', '토'];
  var date = new Date();
  return (
    date.getMonth() +
    1 +
    '월 ' +
    date.getDate() +
    '일 ' +
    d[date.getDay()] +
    '요일'
  );
}
