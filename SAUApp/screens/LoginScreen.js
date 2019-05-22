import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";

import TextBox from "../components/TextBox.js";
import Button from "../components/Button.js";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    alert("a");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="dark-content" />
        <View>
          <Text style={styles.title}>학사관리</Text>
        </View>
        <TextBox
          style={styles.textInput}
          PlaceHolder="ID"
          returnKeyType={"next"}
          blurOnSubmit={false}
          ref={"userId"}
        />
        <TextBox
          style={styles.textInput}
          PlaceHolder="PASSWORD"
          secureTextEntry={true}
          value=""
          ref={"password"}
        />
        <Button style={[styles.button]} onPress={this.login} text="LOGIN" />
      </KeyboardAvoidingView>
    );
  }
}

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#000",
    padding: 20,
    fontSize: 35
  },
  textInput: {
    padding: 10,
    width: deviceWidth * 0.8,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "rgba(33, 33, 33, 0.1)"
  },
  button: {
    margin: 30,
    padding: 10,
    width: deviceWidth * 0.8,
    fontSize: 30,
    backgroundColor: "#5A789C",
    color: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    fontWeight: "bold"
  }
});
