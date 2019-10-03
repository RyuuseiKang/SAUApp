import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  Animated,
  Easing,
} from 'react-native';

import {Input, Button, CheckBox} from 'react-native-elements';

import {commons} from '../../styles/commons';
import {normalize} from '../../modules/FontNormalize';

import {
  NavigationInjectedProps,
  withNavigation,
  NavigationScreenProps,
} from 'react-navigation';

import { connect } from 'react-redux'
import {store} from '../../reducer';

import {loginAsync} from '../../reducers/Auth';

export class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // store.subscribe(this.render);

    // 여기서부터 애니메이션 적용
    this.state = {
      userId: '',
      password: '',
    //   animationValue: new Animated.Value(0),
    //   position: new Animated.Value(300),
    };
  }

  _fadeIn() {
  //   Animated.timing(this.state.animationValue, {
  //     toValue: 1,
  //     duration: 500,
  //     easing: Easing.quad,
  //     delay: 0,
  //   }).start();

  //   Animated.timing(this.state.position, {
  //     toValue: 0,
  //     duration: 300,
  //     easing: Easing.quad,
  //     delay: 0,
  //   }).start();
  }

  // _fadeOut() {}

  _getStyle(objectName: string) {
    return {
      opacity: this.state.animationValue,
      marginTop: this.state.position,
    };
  }

  //async login(userId: string, userPassword: string) {
    // const isLoginStatus = await this.props.screenProps.haksa.Login(
    //   userId,
    //   passwd
    // );

    // this.props.login(userId, userPassword);

    // console.log(
    //   'LoginSuccess?',
    //   this.props.screenProps.haksa.sauSession.isLoginState
    // );

    // this.props.navigation.navigate(isLoginStatus ? 'Auth' : 'Login');
  //}

  // Initialize
  componentWillMount() {
  }

  componentDidMount() {
    // this._fadeIn();
  }

  render() {
    if(this.props.state.Auth.loggingIn) {
      // 로그인이 되어있으므로 이동

      
      this.props.navigation.navigate('Main');
    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Animated.View style={this._getStyle(null)}>
          <Text allowFontScaling={false} style={styles.title}>
            Login Page
          </Text>
        </Animated.View>
        <View style={styles.loginSection}>
          <Input
            containerStyle={styles.input}
            placeholder="아이디"
            onChangeText={value => this.setState({userId: value})}
            value={this.state.userId}
          />
          <Input
            containerStyle={styles.input}
            placeholder="비밀번호"
            secureTextEntry={true}
            autoCapitalize={'none'}
            onChangeText={value => this.setState({password: value})}
            value={this.state.password}
          />
          <Text
            style={[commons.text, styles.whatIsThisApp]}
            onPress={() => {
              Linking.openURL('https://sso.sau.ac.kr/?confirmHak=true');
            }}
          >
            로그인 할 수 없나요?
          </Text>
          <View style={styles.buttonView}>
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              onPress={async () => {
                this.props.login(this.state.userId, this.state.password);
                // console.log('로그인 시도');
                // await console.log(this.props.Auth);
              }}
              title="로그인"
              type="solid"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: normalize(26),
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    margin: 15,
  },
  buttonContainer: {
    width: deviceWidth - 60,
    marginTop: 30,
  },
  button: {
    padding: 15,
  },
  buttonView: {
    shadowColor: '#6666FF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },
  loginSection: {
    alignItems: 'center',
    margin: 10,
    marginBottom: 0,
  },
  whatIsThisApp: {
    padding: 10,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
});

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => {
  return{
    login: (_userId: string, _userPassword: string) => dispatch(loginAsync(_userId, _userPassword)),
    get_userdata: (_cookie: string) => dispatch(getUserDataAsync(_cookie)),
		get_timetable: (_cookie: string) => dispatch(getTimeTableAsync(_cookie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);