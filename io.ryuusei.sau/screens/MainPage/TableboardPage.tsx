import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Table from '../../components/Table';

export default class TableboardPage extends React.Component {
  render() {
    return (
      <View>
          <Table />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
