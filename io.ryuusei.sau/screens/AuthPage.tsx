import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class AuthPage extends React.Component {
  constructor(props: any) {
    super(props);

    this.bootStrapAsync();
  }

  bootStrapAsync = async () => {
    const isSessionAlive = await this.props.screenProps.haksa.SessionLogin();

    this.props.navigation.navigate(isSessionAlive ? 'Main' : 'Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
