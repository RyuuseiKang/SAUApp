import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground,
  WebView,
  Image,
} from 'react-native';

import {SafeAreaView} from 'react-navigation';

import {BlurView} from 'expo-blur';

import DashboardPage from './MainPage/DashboardPage.js';
import SettingPage from './MainPage/SettingPage.js';
import TablePage from './MainPage/TablePage.js';

import TopBar from '../elements/TopBar.js';
import BottomNavigator from '../elements/BottomNavigator.js';

var deviceWidth = Dimensions.get('window').width;

const uri =
  'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.setPage = this.setPage.bind(this);
  }

  state = {
    navigationIndex: 0,
    isTabOpen: false,
    TabValue: 0,
  };

  setPage(index) {
    this.TabScrollView.scrollTo({x: deviceWidth * index});
  }

  render() {
    return (
      <View>
        <SafeAreaView forceInset={{bottom: 'never'}}>
          <TopBar />
          <ScrollView
            horizontal
            pagingEnabled={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={32}
          >
            <DashboardPage style={styles.pages} />
            <DashboardPage style={styles.pages} />
            <DashboardPage style={styles.pages} />
          </ScrollView>

          <BottomNavigator />
        </SafeAreaView>
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  pages: {margin: 0, height: '100'},
});

/* 
<ScrollView
            style={styles.pages}
            horizontal
            pagingEnabled={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            contentOffset={[this.state.navigationIndex, 0]}
            onMomentumScrollEnd={e => {
              this.state.navigationIndex =
                e.nativeEvent.contentOffset.x / deviceWidth;
              console.log(this.state.navigationIndex);
            }}
            ref={node => (this.TabScrollView = node)}
          >
            <DashboardPage />
            <Image style={{width: 96, height: 96}} source={{uri}} />
            <Image style={{width: 96, height: 96}} source={{uri}} />
          </ScrollView>
*/
