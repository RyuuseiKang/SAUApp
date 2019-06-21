import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
  WebView,
} from 'react-native';

import TextBox from '../components/TextBox.js';
import Button from '../components/Button.js';
import Haksa from '../modules/Haksa.js';

haksa = new Haksa();

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.moveMain = this.moveMain.bind(this);
  }

  async isAlreadyLogin() {
    await haksa.SessionLogin();

    if (haksa.sauSession.isLoginState) this.moveMain();
  }

  async login(userId, passwd) {
    await haksa.Login(userId, passwd);
    console.log('LoginSuccess?', haksa.sauSession.isLoginState);
    if (haksa.sauSession.isLoginState) this.moveMain();
    else alert('로그인 실패');
  }

  moveMain() {
    this.props.navigation.navigate('Main');
  }

  render() {
    this.isAlreadyLogin();

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          blurRadius={5}
          source={require('../assets/LoginPage_Background.jpg')}
          style={[
            styles.container,
            {
              resizeMode: 'stretch',
              width: deviceWidth,
              height: deviceHeight,
            },
          ]}
        >
          <View>
            <Text style={styles.title}>학사 로그인</Text>
          </View>
          <TextBox
            style={styles.textInput}
            PlaceHolder="ID"
            returnKeyType={'next'}
            blurOnSubmit={false}
            ref={'userId'}
          />
          <TextBox
            style={styles.textInput}
            PlaceHolder="PASSWORD"
            secureTextEntry={true}
            ref={'password'}
          />
          <Button
            style={styles.button}
            onPress={() => {
              this.login(
                this.refs.userId.state.textValue,
                this.refs.password.state.textValue
              );
            }}
            text="LOGIN"
          />
        </ImageBackground>
      </KeyboardAvoidingView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    margin: 50,
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(33, 33, 33, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  textInput: {
    padding: 10,
    margin: 10,
    width: deviceWidth * 0.8,
    borderRadius: 10,
    backgroundColor: 'rgba(235, 235, 235, 0.3)',
    color: '#FFF',
  },
  button: {
    margin: 30,
    width: deviceWidth * 0.8,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#212121',
  },
});
