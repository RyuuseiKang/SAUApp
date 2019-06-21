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
import {LinearGradient} from 'expo';

import {
  SafeAreaView,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import TodayView from '../elements/TodayView.js';
import ScheduleView from '../elements/ScheduleView.js';
import TabView from '../elements/TabView.js';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
var TabCount = 2;
let tabWidth = deviceWidth * 0.6;

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.openTab = this.openTab.bind(this);
  }

  state = {
    isTabOpen: false,
    TabValue: tabWidth,
  };

  openTab() {
    this.state.isTabOpen = !this.state.isTabOpen;

    if (this.state.isTabOpen) this.TabScrollView.scrollTo({x: tabWidth});
    else {
      this.TabScrollView.scrollTo({x: 0});
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView forceInset={{bottom: 'never'}}>
          <View style={{height: '100%', width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
              }}
            >
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
                  source={require('../assets/MainPage_people.jpg')}
                />
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: deviceWidth,
                backgroundColor: '#DDD',
              }}
            />
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
                this.state.isTabOpen = e.nativeEvent.contentOffset.x / tabWidth;
              }}
              ref={node => (this.TabScrollView = node)}
            >
              <TabView style={{width: tabWidth}} />
              <View>
                <TodayView />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

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
