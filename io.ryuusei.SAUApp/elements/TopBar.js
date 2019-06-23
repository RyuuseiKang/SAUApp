import React from 'React';
import {View, Text, StyleSheet, Image} from 'react-native';

import {SafeAreaView} from 'react-navigation';

import {BlurView} from 'expo-blur';

export default class TopBar extends React.Component {
  state = {pageName: '오늘'};
  render() {
    return (
      <BlurView blurType="light" blurAmount={100}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
          }}
        >
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <Text style={styles.todayDate}>{getToday()}</Text>
            <Text style={styles.title}>{this.state.pageName}</Text>
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
            height: 0.3,
            width: '100%',
            backgroundColor: '#C5C5C5',
          }}
        />
      </BlurView>
    );
  }
}

const styles = StyleSheet.create({
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
