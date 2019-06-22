import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ListView,
  Dimensions,
  RefreshControl,
  Image,
} from 'react-native';

import NowAttendWarning from './NowAttendWarning.js';
import ScheduleElement from './ScheduleElement.js';

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class TodayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    console.log('Refreshing now');
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  };

  fetchData = async () => {
    console.log('fetch');
    return 0;
  };

  render() {
    return (
      <ScrollView
        style={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            title={'오늘을 갱신합니다.'}
          />
        }
      >
        <View style={styles.shadow}>
          <NowAttendWarning />
          <ScheduleElement />
          <ScheduleElement />
          <ScheduleElement />
          <ScheduleElement />
          <ScheduleElement />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <Image style={{width: 96, height: 96}} source={{uri}} />
          <View>
            <Text />
          </View>
          <Text />
        </View>
      </ScrollView>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: deviceWidth,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#333',
    shadowOffset: {height: 8, width: 0},
  },
});
