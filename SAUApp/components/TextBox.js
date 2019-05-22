import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import TextInputState from 'react-native/lib/TextInputState';

export default class TextBox extends React.Component {
  constructor (props) {
    super (props);

    this.textInputRef = React.createRef ();
    this.focusTextInput = this.focusTextInput.bind (this);
  }

  state = {
    PlaceHolder: 'TextHolder',
    textValue: '',

    placeHolderFontSize: new Animated.Value (30),
    inputHeight: new Animated.Value (45),
    inputMargin: new Animated.Value (0),
  };

  focusTextInput () {
    this.textInputRef.current.focus ();
  }

  focusTextOut () {
    value = this.state.textValue;

    if (value == '')
      Animated.parallel ([
        Animated.spring (
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 30,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.timing (
          this.state.inputHeight,
          {
            toValue: 45,
            duration: 10,
            easing: Easing.ease,
          },
          this.state.inputMargin,
          {
            toValue: 0,
            easing: Easing.ease,
          }
        ),
      ]).start ();
  }

  focusTextIn () {
    value = this.state.textValue;

    if (value == '')
      Animated.parallel ([
        Animated.spring (
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 15,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.timing (
          this.state.inputHeight,
          {
            toValue: 20,
            duration: 10,
            easing: Easing.ease,
          },
          this.state.inputMargin,
          {
            toValue: 20,
            easing: Easing.ease,
          }
        ),
      ]).start ();
  }

  render () {
    return (
      <View
        style={[
          {
            backgroundColor: 'rgba(238, 238, 238, 0.1)',
            borderRadius: 5,
            height: 40 + 25,
            padding: 10,
          },
        ]}
        width={this.props.style.width}
        margin={this.props.style.margin}
      >
        <TouchableOpacity activeOpacity={1} style={{}}>
          <Animated.Text
            style={{
              color: 'rgba(168, 168, 168, 0.8)',
              fontWeight: 'bold',
              fontSize: this.state.placeHolderFontSize,
              width: this.props.style.width - 20,
            }}
            onPress={this.focusTextInput}
          >
            {this.props.PlaceHolder}
          </Animated.Text>
          <Animated.View
            style={{
              position: 'absolute',
              top: this.state.inputMargin,
              height: this.state.inputHeight,
              width: this.props.style.width - 20,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 20,
                color: '#fff',
                width: this.props.style.width - 20,
                height: '100%',
                backgroundColor: '#ccc',
              }}
              secureTextEntry={this.props.secureTextEntry}
              returnKeyType={this.props.returnKeyType}
              blurOnSubmit={this.props.blurOnSubmit}
              ref={this.textInputRef}
              onFocus={this.focusTextIn.bind (this)}
              onEndEditing={this.focusTextOut.bind (this)}
              onChangeText={val => this.setState ({textValue: val})}
            >
              {this.props.value}
            </TextInput>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'rgba(238, 238, 238, 0.1)',
    borderRadius: 5,
  },
});
