import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class NowAttendWarning extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inContainer}>
          <Icon name="exclamation-triangle" type="font-awesome" size={15} />
          <Text style={{fontSize: 17, margin: 10, marginLeft: 5}}>
            현재 수업이 진행중이지만 출석되어 있지 않습니다.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  inContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FFF562',
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
  },
});
