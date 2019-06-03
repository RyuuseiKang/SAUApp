import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class StatusDot extends React.Component {
  props = {
    size: 10,
    backgroundColor: '#000',
    margin: 10,
  };
  render() {
    return (
      <View
        style={{
          width: this.props.size,
          height: this.props.size,
          margin: this.props.margin,
        }}
      >
        <View
          style={{
            backgroundColor: this.props.backgroundColor,
            borderRadius: this.props.size / 2,
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    );
  }
}
