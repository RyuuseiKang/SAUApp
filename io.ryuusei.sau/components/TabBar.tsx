import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TabBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barOuter}>
        <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
          <Text style={styles.barText}>타임라인</Text>
        </View>
        <View style={styles.barOuter}>
          <Text style={styles.barText}>시간표</Text>
        </View>
        <View style={styles.barOuter}>
          <Text style={styles.barText}>학과정보</Text>
        </View>
        <View style={styles.barOuter}>
          <Text style={styles.barText}>알림</Text>
        </View>
        <View style={styles.barOuter}>
          <Text style={styles.barText}>설정</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 40,
    flexDirection: 'row',
  },
  barOuter: {
    flex: 1,
  },
  barText: {
    textAlign: 'center',
  }
});
