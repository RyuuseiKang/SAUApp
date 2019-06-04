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

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  state = {
    PlaceHolder: 'TextHolder',
    textValue: '',

    ViewHeight: new Animated.Value(45),
    placeHolderFontSize: new Animated.Value(20),
    placeHolderTopMargin: new Animated.Value(3),
    inputHeight: new Animated.Value(25),
    TopMargin: new Animated.Value(0),
  };

  focusTextInput() {
    this.textInputRef.current.focus();
  }

  focusTextOut() {
    value = this.state.textValue;

    if (value == '')
      Animated.parallel([
        Animated.spring(
          // Animate over time
          this.state.ViewHeight, // The animated value to drive
          {
            toValue: 45,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.spring(
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 20,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.spring(
          this.state.placeHolderTopMargin, // The animated value to drive
          {
            toValue: 3,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.timing(this.state.TopMargin, {
          toValue: 0,
          duration: 10,
          easing: Easing.ease,
        }),
        Animated.timing(this.state.inputHeight, {
          toValue: 25,
          duration: 10,
          easing: Easing.ease,
        }),
      ]).start();
  }

  focusTextIn() {
    value = this.state.textValue;

    if (value == '')
      Animated.parallel([
        Animated.spring(
          // Animate over time
          this.state.ViewHeight, // The animated value to drive
          {
            toValue: 65,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.spring(
          // Animate over time
          this.state.placeHolderFontSize, // The animated value to drive
          {
            toValue: 15,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.spring(
          this.state.placeHolderTopMargin, // The animated value to drive
          {
            toValue: 0,
            duration: 10,
            easing: Easing.ease,
          }
        ),
        Animated.timing(this.state.TopMargin, {
          toValue: 25,
          duration: 10,
          easing: Easing.ease,
        }),
        Animated.timing(this.state.inputHeight, {
          toValue: 20,
          duration: 10,
          easing: Easing.ease,
        }),
      ]).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            backgroundColor: this.props.style.backgroundColor,
            borderRadius: 5,
            height: this.state.ViewHeight,
            padding: 10,
          },
        ]}
        width={this.props.style.width}
        margin={this.props.style.margin}
      >
        <View>
          <Animated.Text
            style={{
              color: 'rgba(244, 244, 244, 0.8)',
              fontSize: this.state.placeHolderFontSize,
              marginTop: this.state.placeHolderTopMargin,
              width: this.props.style.width - 20,
            }}
            onPress={this.focusTextInput}
          >
            {this.props.PlaceHolder}
          </Animated.Text>
          <View style={{position: 'absolute'}}>
            <Animated.View
              style={{
                marginTop: this.state.TopMargin,
                height: this.state.inputHeight,
                width: this.props.style.width - 20,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: this.props.style.color,
                  width: this.props.style.width - 20,
                  height: '100%',
                }}
                secureTextEntry={this.props.secureTextEntry}
                returnKeyType={this.props.returnKeyType}
                blurOnSubmit={this.props.blurOnSubmit}
                ref={this.textInputRef}
                onFocus={this.focusTextIn.bind(this)}
                onEndEditing={this.focusTextOut.bind(this)}
                onChangeText={val => this.setState({textValue: val})}
              >
                {this.props.value}
              </TextInput>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(238, 238, 238, 0.1)',
    borderRadius: 5,
  },
});
