import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={{}}>
              <Text style={styles.title}>신안산대학교 학사 관리</Text>
            </View>
            <View style={styles.loginSection}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>로그인</Text>
              </View>
              <View style={styles.faceIDButton}>
                <Icon name="fingerprint" size={18} color="#FFF" />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    width: Width,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  loginSection: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 25,
    marginRight: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 23,
  },
  faceIDButton: {
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
  },
});
