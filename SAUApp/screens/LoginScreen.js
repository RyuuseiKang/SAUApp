import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
} from 'react-native';

import TextBox from '../components/TextBox.js';
import Button from '../components/Button.js';

import haksa from '../modules/haksa.js';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login = (userId, passwd) => {
    let result = csLogin('21811017', 'asdf');
    if (result) alert('로그인 성공');
    else alert('로그인 실패');
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
            value=""
            ref={'password'}
          />
          <Button
            style={[styles.button]}
            onPress={this.login}
            colors={['#a1c4fd', '#c2e9fb']}
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

function csLogin(userNumber, password) {
  try {
    let response = fetch('https://cs.sau.ac.kr/m/loginChk.do', {
      method: 'POST',
      headers: {
        Host: 'cs.sau.ac.kr',
        Connection: 'keep-alive',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        Origin: 'https://cs.sau.ac.kr',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Referer: 'https://cs.sau.ac.kr/m/login.do',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8,ko;q=0.7',
      },
      body: 'user_id=' + userNumber + '&' + 'user_pw=' + password,
      json: true,
    })
      .then(res => JSON.stringify(response))
      .then(res => {
        console.log(res);

        console.log('로그인 정보: ');
        console.log(res._bodyInit);
      })
      .done();

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
