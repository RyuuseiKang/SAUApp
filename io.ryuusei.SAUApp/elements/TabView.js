import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';
import TabViewItem from '../components/TabViewItem';

export default class TabView extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.container, {width: this.props.style.width}]}>
        <View>
          <TabViewItem>오늘</TabViewItem>
        </View>
        <View>
          <TabViewItem>수업</TabViewItem>
        </View>
        <View>
          <TabViewItem>출석</TabViewItem>
        </View>
        <View>
          <TabViewItem>학사일정</TabViewItem>
        </View>
        <View>
          <TabViewItem>교통</TabViewItem>
        </View>
        <View>
          <TabViewItem>설정</TabViewItem>
        </View>
      </ScrollView>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {},
});
