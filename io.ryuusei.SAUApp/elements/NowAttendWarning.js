import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default class NowAttendWarning extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          borderRadius: 5,
          backgroundColor: '#FFF562',
          margin: 15,
          marginTop: 5,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            margin: 10,
            flexWrap: 'wrap',
          }}
        >
          <View>
            <Icon name="exclamation-triangle" type="font-awesome" size={15} />
          </View>
          <View width={5} />
          <Text style={{fontSize: 16}}>
            현재 수업의 출석이 되어있지 않습니다.
          </Text>
        </View>
      </View>
    );
  }
}

// <View style={styles.container}>
// <View style={styles.inContainer}>
//   <Icon name="exclamation-triangle" type="font-awesome" size={15} />
//   <Text style={{fontSize: 17, margin: 5, marginLeft: 5}}>
//     현재 수업이 진행중이지만 출석되어 있지 않습니다.
//   </Text>
// </View>
// </View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#FFF562',
    margin: 10,
  },
  inContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
});
