import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export default class DashboardPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>asdfasdfasdfasdf</Text>
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#FFFFFF',
  },
});
