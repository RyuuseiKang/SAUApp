import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Platform,
  StatusBar
} from 'react-native';

import {commons} from '../styles/commons';

import {normalize} from '../modules/FontNormalize';

export default function MainPage() {
  state = {pageName: '오늘'};
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{padding: 15}}>
          <Text allowFontScaling={false} style={styles.todayDate}>
            {getToday()}
          </Text>
          <Text allowFontScaling={false} style={styles.title}>
            {this.state.pageName}
          </Text>
        </View>
        <View style={{padding: 15}}>
          <TouchableWithoutFeedback
            onPress={() => {
              alert('Show UserProfile Page');
            }}
          >
            <Image
              style={commons.icon}
              source={require('../assets/people_front.jpg')}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <Text>여기부터 메인</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  todayDate: {
    fontSize: normalize(13),
    fontWeight: 'bold',
    color: '#8D8D8D',
    paddingBottom: 2.5,
  },
  title: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginTop: 2.5,
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
