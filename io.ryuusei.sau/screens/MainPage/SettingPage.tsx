import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SettingPage extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Setting Page</Text>
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
