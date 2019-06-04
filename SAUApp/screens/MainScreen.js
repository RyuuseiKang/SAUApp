import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  Easing,
  Animated,
  RefreshControl,
} from 'react-native';
import {LinearGradient} from 'expo';

import {Icon} from 'react-native-elements';

import TodayView from '../elements/TodayView.js';
import ScheduleView from '../elements/ScheduleView.js';
import TabView from '../elements/TabView.js';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.openTab = this.openTab.bind(this);
  }

  state = {
    isTabOpen: false,
    TabValue: deviceWidth * 0.8,
  };

  openTab() {
    this.state.isTabOpen = !this.state.isTabOpen;

    if (this.state.isTabOpen)
      this.TabScrollView.scrollTo({x: deviceWidth * 0.8});
    else this.TabScrollView.scrollTo({x: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/MainPage_Background.jpg')}
          style={{flex: 1, width: '0%', height: '0%', position: 'absolute'}}
        />

        <SafeAreaView>
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <View
              style={{justifyContent: 'center', alignContent: 'center'}}
              onTouchEndCapture={this.openTab}
            >
              <Text style={styles.todayDate}>{getToday()}</Text>
              <Text style={styles.title}>오늘</Text>
              <View />
            </View>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 20,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={require('../assets/MainScreen_people.jpg')}
              />
            </View>
          </View>
          <ScrollView
            horizontal
            pagingEnabled={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.TabScrollView}
            scrollEventThrottle={32}
            contentOffset={[this.state.TabValue, 0]}
            onMomentumScrollEnd={e => {
              this.state.isTabOpen =
                e.nativeEvent.contentOffset.x / (deviceWidth * 0.8);
            }}
            ref={node => (this.TabScrollView = node)}
          >
            <TabView />
            <TodayView />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
var TabCount = 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#FFF',
  },
  tabScrollIndicator: {
    height: 5,
    width: (deviceWidth - 10) / TabCount,
    borderRadius: 2.5,
    backgroundColor: '#555',
  },
  todayDate: {
    fontSize: 18,
    color: '#333',
    marginLeft: 20,
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  TabScrollView: {},
});

function getToday() {
  var d = ['일', '월', '화', '수', '목', '금', '토'];
  var date = new Date();
  return (
    date.getMonth() + '월 ' + date.getDate() + '일 ' + d[date.getDay()] + '요일'
  );
}
