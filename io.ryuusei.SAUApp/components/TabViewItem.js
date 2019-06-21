import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TabViewItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBB',
    borderTopWidth: 0.5,
    borderTopColor: '#BBB',
  },
  text: {
    fontSize: 20,
  },
});
