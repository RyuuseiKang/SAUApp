import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {BlurView} from 'expo-blur';

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class BottomNavigator extends React.Component {
  render() {
    return (
      <View>
        <BlurView style={styles.bottomBar} tint="light" intensity={100}>
          <View
            style={{height: 0.3, width: '100%', backgroundColor: '#C5C5C5'}}
          >
            <View />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image style={{width: 96, height: 96}} source={{uri}} />
            <Image style={{width: 96, height: 96}} source={{uri}} />
          </View>
        </BlurView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBar: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    position: 'absolute',
    bottom: 0,
    height: 145,
    width: '100%',
  },
});
