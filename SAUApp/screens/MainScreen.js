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
} from 'react-native';
import {LinearGradient} from 'expo';
import NowAttendWarning from '../elements/NowAttendWarning.js';
import ScheduleElement from '../elements/ScheduleElement.js';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/MainPage_Background.jpg')}
          style={{flex: 1, width: '0%', height: '0%', position: 'absolute'}}
        />

        <SafeAreaView>
          <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
            <View style={{justifyContent: 'center', alignContent: 'center'}}>
              <Text style={styles.todayDate}>{getToday()}</Text>
              <Text style={styles.title}>오늘</Text>
            </View>
            <View
              style={{
                marginLeft: 'auto',
                margin: 25,
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
          <ScrollView style={styles.scrollViewContainer}>
            <NowAttendWarning />
            <ScheduleElement />
            <ScheduleElement />
            <View>
              <Text>여기서부터 오늘 아이템들 시작</Text>
            </View>
            <Text />
          </ScrollView>
        </SafeAreaView>
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
    backgroundColor: '#FFF',
  },
  scrollViewContainer: {
    width: '100%',
    height: '100%',
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
  },
});

function getToday() {
  var d = ['일', '월', '화', '수', '목', '금', '토'];
  var date = new Date();
  return (
    date.getMonth() + '월 ' + date.getDate() + '일 ' + d[date.getDay()] + '요일'
  );
}
