import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {LinearGradient} from 'expo';
import StatusDot from '../components/StatusDot.js';

export default class ScheduleElement extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            marginRight: 'auto',
            marginLeft: 10,
            flexDirection: 'row',
          }}
        >
          <View style={{justifyContent: 'center'}}>
            <StatusDot size={15} backgroundColor={'#EB3A25'} margin={10} />
          </View>
          <View style={{}}>
            <Text style={styles.lesson}>수업 이름</Text>
            <Text style={styles.location}>강의실 위치</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 'auto',
            margin: 25,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.time}>1시간 20분 후</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 5,
  },
  splitView: {
    backgroundColor: 'rgba(45, 113, 246, 0.8)',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  statusView: {
    justifyContent: 'center',
  },
  time: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  location: {
    color: '#333',
    marginLeft: 5,
    margin: 2.5,
    fontSize: 18,
    marginBottom: 10,
  },
  lesson: {
    color: '#000',
    marginLeft: 5,
    margin: 2.5,
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
