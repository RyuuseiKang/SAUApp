import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';

export default class TabView extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Items</Text>
        </View>
        <View>
          <Text>Items</Text>
        </View>
        <View>
          <Text>Items</Text>
        </View>
        <View>
          <Text>Items</Text>
        </View>
      </ScrollView>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
  },
});
