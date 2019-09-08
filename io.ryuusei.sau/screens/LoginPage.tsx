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

import {commons} from '../styles/commons';
import {normalize} from '../modules/FontNormalize';

<<<<<<< HEAD
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

export default class LoginPage extends React.Component<NavigationInjectedProps> {
  state = { userId: '', password: '' }

  async login(userId: string, passwd: string) {
    
    this.props.navigation.navigate('Main');

    await this.props.haksa.Login(userId, passwd);
    console.log('LoginSuccess?', super.state.haksa.sauSession.isLoginState);

    if (super.state.haksa.sauSession.isLoginState)
      this.props.navigation.navigate('Main');
    else alert('로그인 실패');
  }

  moveMainPage() {
    this.props.navigation.navigate('Main');
  }
=======
import {
  NavigationInjectedProps,
  withNavigation,
  NavigationScreenProps,
} from 'react-navigation';

export default class LoginPage extends React.Component {
  constructor(props: any) {
    super(props);

    // 여기서부터 애니메이션 적용
    this.state = {
      userId: '',
      password: '',
      animationValue: new Animated.Value(0),
      position: new Animated.Value(300),
    };
  }

  _fadeIn() {
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.quad,
      delay: 0,
    }).start();

    Animated.timing(this.state.position, {
      toValue: 0,
      duration: 300,
      easing: Easing.quad,
      delay: 0,
    }).start();
  }

  _fadeOut() {}

  _getStyle(objectName: string) {
    return {
      opacity: this.state.animationValue,
      marginTop: this.state.position,
    };
  }

  async login(userId: string, passwd: string) {
    const isLoginStatus = await this.props.screenProps.haksa.Login(
      userId,
      passwd
    );

    console.log(
      'LoginSuccess?',
      this.props.screenProps.haksa.sauSession.isLoginState
    );

    this.props.navigation.navigate(isLoginStatus ? 'Auth' : 'Login');
  }

  // Initialize
  componentWillMount() {}
>>>>>>> ca3b324b0125e0432ae42b3e788ad786fdc2e503

  componentDidMount() {
    this._fadeIn();
  }

  render() {
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
              onPress={() => {
                this.login(this.state.userId, this.state.password);
                console.log('로그인 시도');
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
