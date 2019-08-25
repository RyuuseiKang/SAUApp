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
} from 'react-native';

import {Input, Button, CheckBox} from 'react-native-elements';

import {commons} from '../styles/commons';
import {normalize} from '../modules/FontNormalize';

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

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Text allowFontScaling={false} style={styles.title}>
            Login Page
          </Text>
        </View>
        <View style={styles.loginSection}>
          <Input containerStyle={styles.input}
          placeholder="아이디"
          onChangeText={(value) => this.setState({userId: value})}
          value={this.state.userId}
          />
          <Input
            containerStyle={styles.input}
            placeholder="비밀번호"
            secureTextEntry={true}
            autoCapitalize={'none'}
            onChangeText={(value) => this.setState({password: value})}
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
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            onPress={() => {
              this.login(
                this.state.userId,
                this.state.password
              );
              console.log('로그인 시도');
            }}
            title="로그인"
            type="solid"
          />
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
