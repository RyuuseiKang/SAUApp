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
import haksa from '../modules/Haksa.js';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.login = this.login.bind(this);
  }

  async login(userId, passwd) {
    //let result = testNetworking();

    //Haksa.Login(userId, passwd);

    let authPage = 'https://sso.sau.ac.kr/login.jsp';

    this.setState({
      loginUrl:
        authPage +
        '?master_id=' +
        userId +
        '&master_passwd=' +
        passwd +
        '&x=0&y=0',
    });

    //const isSuccess = await haksa.getCsCookie(userId);

    // if ((await haksa.getCsCookie(userId)) == true) console.log('로그인 성공');
    // else console.log('로그인 실패');

    // haksa.isAliveCsSession();
  }

  _onNavigationStateChange(webViewState) {
    //console.log(webViewState.url);
    alert(webViewState.postMessage);

    if (webViewState.url == 'http://haksa.sau.ac.kr/blank.jsp') {
      // TODO: 쿠키값 받아오는 부분

      //haksa.setHaksaCookie(event.jsEvolutionValue);

      this.setState({
        injectionJSCode: 'window.postMessage(String(document.cookie));',
      });
    }
  }

  props = {
    isFlag: false,
  };

  state = {
    loginUrl: '',
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ImageBackground
          blurRadius={10}
          source={require('../assets/LoginScreen_Background.jpg')}
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
            <Text style={styles.title}>학사관리</Text>
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
            style={[styles.button]}
            onPress={() => {
              this.login(
                this.refs.userId.state.textValue,
                this.refs.password.state.textValue
              );
            }}
            colors={['rgba(33, 33, 33, 33)', 'rgba(33, 33, 33, 33)']}
            text="LOGIN"
          />
          <View style={{left: 0, top: 0, width: 0, height: 0}}>
            <WebView
              automaticallyAdjustContentInsets={false}
              source={{uri: this.state.loginUrl}}
              onNavigationStateChange={() => {
                this._onNavigationStateChange(this);
              }}
              javaScriptEnabled={true}
              injectedJavaScript={this.state.injectionJSCode}
              domStorageEnabled={true}
            />
          </View>
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
    width: deviceWidth * 0.8,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(235, 235, 235, 0.3)',
    color: '#FFF',
  },
  button: {
    margin: 30,
    padding: 10,
    width: deviceWidth * 0.8,
    borderRadius: 40,
    alignItems: 'center',
  },
});
