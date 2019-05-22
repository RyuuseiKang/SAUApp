import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Button extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
          <Text
            style={[
              styles.text,
              {
                color: "#FFF",
                fontWeight: "bold",
                fontSize: 18
              }
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
  text: { padding: 10 }
});

export default Button;
