import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';

import {normalize} from '../modules/FontNormalize';
import {commons} from '../styles/commons';

import {
  NavigationInjectedProps,
  withNavigation,
  NavigationScreenProps,
  createBottomTabNavigator,
} from 'react-navigation';

export default class MainPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  state = {pageName: '오늘', loaded: false};

  // Initialize
  componentWillMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{paddingLeft: 20, paddingTop: 15, paddingBottom: 15}}>
            <Text allowFontScaling={false} style={styles.todayDate}>
              {getToday()}
            </Text>
            <Text allowFontScaling={false} style={styles.title}>
              {this.state.pageName}
            </Text>
          </View>
          <View style={{paddingRight: 20, paddingTop: 15, paddingBottom: 15}}>
            <TouchableWithoutFeedback
              onPress={() => {
                alert('Show UserProfile Page');
                this.props.screenProps.haksa.Logout();
                this.props.navigation.navigate('Login');
              }}
            >
              <View style={styles.icon}>
                <Image
                  style={commons.icon}
                  source={{
                    uri: this.props.screenProps.haksa.GetProfileImageURI(),
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ScrollView
          horizontal
          pagingEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={32}
        >
          <View style={styles.pages}>
            <Text>대시보드</Text>
          </View>
          <View style={styles.pages}>
            <Text>학사 시간표</Text>
          </View>
          <View style={styles.pages}>
            <Text>학과 게시판</Text>
          </View>
          <View style={styles.pages}>
            <Text>기타</Text>
          </View>
          <View style={styles.pages}>
            <Text>설정</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  icon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },
  pages: {width: deviceWidth},
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
