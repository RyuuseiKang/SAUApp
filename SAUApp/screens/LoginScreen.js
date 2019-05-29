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

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.login = this.login.bind(this);
  }

  async login(userId, passwd) {
    //let result = testNetworking();

    haksa.Login(userId, passwd);

    //const isSuccess = await haksa.getCsCookie(userId);

    //if ((await haksa.getCsCookie(userId)) == true) console.log('로그인 성공');
    //else console.log('로그인 실패');

    // haksa.isAliveCsSession();
  }

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
