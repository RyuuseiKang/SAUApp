import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {LinearGradient} from 'expo';

export default class AttendElement extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.splitView}>
          <View style={styles.center}>
            <Text style={styles.time}>10시</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.lesson}>네트워크 시스템</Text>
            <Text style={styles.location}>본관 405호</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginTop: 20,
    alignItems: 'center',
  },
  splitView: {
    width: '90%',
    backgroundColor: 'rgba(45, 113, 246, 0.8)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  time: {
    color: '#FFF',
    margin: 20,
    fontSize: 20,
  },
  location: {
    color: '#FFF',
    marginLeft: 15,
    margin: 5,
    fontSize: 20,
    marginBottom: 10,
  },
  lesson: {
    color: '#FFF',
    marginLeft: 15,
    margin: 5,
    fontSize: 20,
    marginTop: 10,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
