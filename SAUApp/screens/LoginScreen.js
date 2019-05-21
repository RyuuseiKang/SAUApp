import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView
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
        <StatusBar barStyle="light-content" />
        <View>
          <Text style={styles.title}>신안산대학교 학사관리</Text>
        </View>
        <TextBox style={styles.textInput} PlaceHolder="ID" />
        <TextBox
          style={styles.textInput}
          PlaceHolder="PASSWORD"
          secureTextEntry={true}
          value=""
        />
        <Button style={styles.button} onPress={this.login} text="LOGIN" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E344F",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#FFF",
    padding: 20,
    fontSize: 35
  },
  textInput: { padding: 10, width: 300, margin: 10, borderRadius: 10 },
  button: {
    margin: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#EEE",
    borderRadius: 5
  }
});
