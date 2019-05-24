import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {LinearGradient} from 'expo';

class Button extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <LinearGradient style={this.props.style} colors={this.props.colors}>
            <Text
              style={[
                styles.text,
                {
                  color: '#FFF',
                  fontWeight: 'bold',
                  fontSize: 18,
                },
              ]}
            >
              {this.props.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {padding: 10},
});

export default Button;
