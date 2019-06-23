import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class DashboardPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 96, height: 96}} source={{uri}} />
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});
