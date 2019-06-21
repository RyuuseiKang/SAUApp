import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: this.props.style.backgroundColor,
            width: this.props.style.width,
            borderRadius: this.props.style.borderRadius,
            alignItems: this.props.style.alignItems,
            margin: this.props.style.margin,
            padding: this.props.style.padding,
          }}
          onPress={this.props.onPress}
        >
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {padding: 10, margin: 3},
});

export default Button;
