import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {SafeAreaView} from 'react-navigation';

import {BlurView} from 'expo-blur';

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class BottomNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <BlurView style={styles.bottomBar} tint="light" intensity={100}>
            <View
              style={{height: 0.4, width: '100%', backgroundColor: '#C8C8C8'}}
            >
              <View />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1,
              }}
            >
              <View style={styles.bottomItem}>
                <View>
                  <Text>오늘</Text>
                </View>
              </View>
              <View style={styles.bottomItem}>
                <View>
                  <Text>테이블</Text>
                </View>
              </View>
              <View style={styles.bottomItem}>
                <View>
                  <Text>설정</Text>
                </View>
              </View>
            </View>
          </BlurView>
        </SafeAreaView>
        <BlurView
          style={{bottom: 0, height: 33}}
          tint="light"
          intensity={100}
        />
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
    height: 83,
    width: '100%',
  },
  bottomItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
