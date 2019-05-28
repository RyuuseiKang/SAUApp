import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NowAttendWarning extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <Text>현재 수업이 진행중이지만 출석되어 있지 않습니다.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  inContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFF562',
    width: '90%',
    padding: 10,
  },
});
