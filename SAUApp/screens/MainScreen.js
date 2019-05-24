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

import AttendElement from '../elements/AttendElement.js';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/MainPage_Background.jpg')}
          style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}}
        />
        <View styles={styles.colorOverlay} />
        <View style={styles.titleBar}>
          <SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
              <View>
                <Text style={styles.todayDate}>5월 24일 금요일</Text>
                <Text style={styles.title}>일정</Text>
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
                  source={require('../assets/LoginScreen_Background.jpg')}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
        <AttendElement />
        <SafeAreaView>
          <ScrollView style={styles.scrollViewContainer}>
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
  },
  colorOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(132, 128, 230, 0.7)',
  },
  scrollViewContainer: {
    width: '100%',
    height: '100%',
  },
  titleBar: {
    width: '100%',
    height: 170,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderBottomLeftRadius: 60,
  },
  todayDate: {
    fontSize: 18,
    color: '#333',
    margin: 5,
    marginLeft: 20,
  },
  title: {
    color: '#000',
    fontSize: 40,
    margin: 5,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
