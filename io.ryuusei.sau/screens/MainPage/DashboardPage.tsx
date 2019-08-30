import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DashboardPage extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>DashboardPage</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
