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
    backgroundColor: '#FCFCFC',
  },
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#333',
    shadowOffset: {height: 8, width: 0},
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
});

function getToday() {
  var d = ['일', '월', '화', '수', '목', '금', '토'];
  var date = new Date();
  return (
    date.getMonth() + '월 ' + date.getDate() + '일 ' + d[date.getDay()] + '요일'
  );
}
