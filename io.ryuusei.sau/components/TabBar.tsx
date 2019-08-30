import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TabBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>TabBar Component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAAAAA',
    height: 50,
  },
});
