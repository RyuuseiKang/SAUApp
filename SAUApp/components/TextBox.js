import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import TextInputState from "react-native/lib/TextInputState";

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  state = {
    PlaceHolder: "TextHolder",
    textValue: "",

    placeHolderFontSize: new Animated.Value(15),
    inputHeight: new Animated.Value(20),
    inputMargin: new Animated.Value(5)
  };

  focusTextInput() {
    this.textInputRef.current.focus();
  }

  focusTextOut() {
    value = this.state.textValue;

    if (value == "")
      Animated.parallel([
        Animated.spring(
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 30,
            duration: 10,
            easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.inputHeight,
          {
            toValue: 0,
            duration: 10,
            easing: Easing.ease
          },
          this.state.inputMargin,
          {
            toValue: 0,
            easing: Easing.ease
          }
        )
      ]).start();
  }

  focusTextIn() {
    value = this.state.textValue;

    if (value == "")
      Animated.parallel([
        Animated.spring(
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 15,
            duration: 10,
            easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.inputHeight,
          {
            toValue: 20,
            duration: 10,
            easing: Easing.ease
          },
          this.state.inputMargin,
          {
            toValue: 5,
            easing: Easing.ease
          }
        )
      ]).start();
  }

  render() {
    return (
      <View
        style={styles.container}
        width={this.props.style.width}
        margin={this.props.style.margin}
      >
        <TouchableOpacity onPress={this.focusTextInput} activeOpacity={1}>
          <Animated.Text
            style={{
              color: "rgba(168, 168, 168, 0.8)",
              fontWeight: "bold",
              fontSize: this.state.placeHolderFontSize
            }}
          >
            {this.props.PlaceHolder}
          </Animated.Text>
          <Animated.View
            style={{
              height: this.state.inputHeight,
              top: 5
            }}
          >
            <TextInput
              style={{
                fontSize: 20,
                color: "#fff"
              }}
              secureTextEntry={this.props.secureTextEntry}
              ref={this.textInputRef}
              onFocus={this.focusTextIn.bind(this)}
              onEndEditing={this.focusTextOut.bind(this)}
              onChangeText={val => this.setState({ textValue: val })}
            >
              {this.props.value}
            </TextInput>
            <Animated.Text
              style={{
                height: this.state.inputMargin,
                backgroundColor: "#eee"
              }}
            >
              123123
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(238, 238, 238, 0.1)",
    borderRadius: 5,
    padding: 10
  }
});
