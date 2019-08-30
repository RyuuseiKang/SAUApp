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
  createAppContainer,
} from 'react-navigation';

<<<<<<< HEAD
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

export default class MainPage extends React.Component<NavigationInjectedProps> {
  state = {pageName: '오늘'};

  CheckLogin() {
    if(true)
      this.moveLoginPage();
  }

  moveLoginPage() {
    this.props.navigation.navigate('Login');
  }

  render() {
    // 서비스 사용 전 로그인 확인
    this.CheckLogin();

=======
import DashboardPage from './MainPage/DashboardPage';
import TableboardPage from './MainPage/TableboardPage';
import SettingPage from './MainPage/SettingPage';

export default class MainPage extends React.Component {
  constructor(props: any) {
    super(props);

    // bootstrapping here
  }

  state = {pageName: '오늘', loaded: false};

  // Initialize
  componentWillMount() {}

  // Mounted
  componentDidMount() {}

  render() {
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
<<<<<<< HEAD
          <View style={{padding: 15}}>
=======
          <View style={{paddingLeft: 20, paddingTop: 15, paddingBottom: 15}}>
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503
            <Text allowFontScaling={false} style={styles.todayDate}>
              {getToday()}
            </Text>
            <Text allowFontScaling={false} style={styles.title}>
              {this.state.pageName}
            </Text>
          </View>
<<<<<<< HEAD
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
=======
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
        <MainContainer />
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503
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

const TabNavigator = createBottomTabNavigator({
  Dashboard: DashboardPage,
  Table: TableboardPage,
  Setting: SettingPage,
});

const MainContainer = createAppContainer(TabNavigator);
