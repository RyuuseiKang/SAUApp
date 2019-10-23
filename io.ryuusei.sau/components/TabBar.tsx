import React from 'react';

import {normalize} from '../modules/FontNormalize';

import {View, Text, StyleSheet, TouchableOpacity, Animated, Easing} from 'react-native';
import {Ionicons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { deviceWidth } from '../styles/commons';

import {connect} from 'react-redux';

import {setPage} from '../reducers/Page';

export class TabBar extends React.Component {
  TimeLineAnimated = new Animated.Value(0);
  TimeTableAnimated = new Animated.Value(0);
  DeptAnimated = new Animated.Value(0);
  NotifyAnimated = new Animated.Value(0);
  SettingAnimated = new Animated.Value(0);

  colorAnimated = [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)];

  IndicatorAnimated = new Animated.Value(0);

  render() {
    return (
      <Animated.View>
        <Animated.View style={[styles.tabIndicator, IndicatorAnimation.getStyle(this.IndicatorAnimated)]}/>
        <Animated.View style={styles.container}>

          <TouchableOpacity style={styles.itemOuter} activeOpacity={1}
          onPress={() => {
            this.props.SetPage('이번주');
            this.props.navigation.navigate('Dashboard');
            ColorAnimation.pressAnimation(this.colorAnimated, 0);
            IndicatorAnimation.onPress(this.IndicatorAnimated, 0);}}
          onPressIn={() => {ButtonAnimation.pressInAnimation(this.TimeLineAnimated);}}
          onPressOut={() => {ButtonAnimation.pressOutAnimation(this.TimeLineAnimated);}}>
            <Animated.View style={[styles.backGradient, ButtonAnimation.getStyle(this.TimeLineAnimated)]}>
              <LinearGradient colors={['#CCC', '#FFF']} style={styles.backGradient} />
            </Animated.View>
            <Animated.View style={styles.itemInner}>
              <FontAwesome5 style={[styles.icon, ColorAnimation.getStyle(this.colorAnimated, 0)]} name="stream" size={normalize(16)} color="black"/>
              <Text style={styles.barText}>타임라인</Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemOuter} activeOpacity={1}
          onPress={() => {
            this.props.SetPage('시간표');
            this.props.navigation.navigate('TimeTable');
            ColorAnimation.pressAnimation(this.colorAnimated, 1);
            IndicatorAnimation.onPress(this.IndicatorAnimated, 1);}}
          onPressIn={() => {ButtonAnimation.pressInAnimation(this.TimeTableAnimated);}}
          onPressOut={() => {ButtonAnimation.pressOutAnimation(this.TimeTableAnimated);}}>
            <Animated.View style={[styles.backGradient, ButtonAnimation.getStyle(this.TimeTableAnimated)]}>
              <LinearGradient colors={['#CCC', '#FFF']} style={styles.backGradient} />
            </Animated.View>
            <Animated.View style={styles.itemInner}>
              <FontAwesome5 style={[styles.icon, ColorAnimation.getStyle(this.colorAnimated, 1)]} name="calendar" size={normalize(16)} color="black"/>
              <Text style={styles.barText}>시간표</Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemOuter} activeOpacity={1}
          onPress={() => {
            this.props.SetPage('학과');
            this.props.navigation.navigate('Dept');
            ColorAnimation.pressAnimation(this.colorAnimated, 2);
            IndicatorAnimation.onPress(this.IndicatorAnimated, 2);}}
          onPressIn={() => {ButtonAnimation.pressInAnimation(this.DeptAnimated);}}
          onPressOut={() => {ButtonAnimation.pressOutAnimation(this.DeptAnimated);}}>
            <Animated.View style={[styles.backGradient, ButtonAnimation.getStyle(this.DeptAnimated)]}>
              <LinearGradient colors={['#CCC', '#FFF']} style={styles.backGradient} />
            </Animated.View>
            <Animated.View style={styles.itemInner}>
              <FontAwesome5 style={[styles.icon, ColorAnimation.getStyle(this.colorAnimated, 2)]} name="clipboard" size={normalize(16)} color="black"/>
              <Text style={styles.barText}>학과정보</Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemOuter} activeOpacity={1}
          onPress={() => {
            this.props.SetPage('알림');
            this.props.navigation.navigate('Notify');
            ColorAnimation.pressAnimation(this.colorAnimated, 3);
            IndicatorAnimation.onPress(this.IndicatorAnimated, 3);}}
          onPressIn={() => {ButtonAnimation.pressInAnimation(this.NotifyAnimated);}}
          onPressOut={() => {ButtonAnimation.pressOutAnimation(this.NotifyAnimated);}}>
            <Animated.View style={[styles.backGradient, ButtonAnimation.getStyle(this.NotifyAnimated)]}>
              <LinearGradient colors={['#CCC', '#FFF']} style={styles.backGradient} />
            </Animated.View>
            <Animated.View style={styles.itemInner}>
              <FontAwesome5 style={[styles.icon, ColorAnimation.getStyle(this.colorAnimated, 3)]} name="bell" size={normalize(16)} color="black"/>
              <Text style={[styles.barText, ColorAnimation.getStyle(this.colorAnimated, 3)]}>알림</Text>
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemOuter} activeOpacity={1}
          onPress={() => {
            this.props.SetPage('설정');
            this.props.navigation.navigate('Setting');
            ColorAnimation.pressAnimation(this.colorAnimated, 4);
            IndicatorAnimation.onPress(this.IndicatorAnimated, 4);}}
          onPressIn={() => {ButtonAnimation.pressInAnimation(this.SettingAnimated);}}
          onPressOut={() => {ButtonAnimation.pressOutAnimation(this.SettingAnimated);}}>
            <Animated.View style={[styles.backGradient, ButtonAnimation.getStyle(this.SettingAnimated)]}>
              <LinearGradient colors={['#CCC', '#FFF']} style={styles.backGradient} />
            </Animated.View>
            <Animated.View style={styles.itemInner}>
              <FontAwesome5 style={[styles.icon, ColorAnimation.getStyle(this.colorAnimated, 4)]} name="cog" size={normalize(16)} color="black"/>
              <Text style={styles.barText}>설정</Text>
            </Animated.View>
          </TouchableOpacity>

        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: normalize(55),
    flexDirection: 'row',
  },
  itemOuter: {
    flex: 1,
    width: '100%',
    paddingTop: normalize(5),
  },
  itemInner: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  backGradient: {
    position: 'absolute',
    width:'100%',
    height: '100%',
    flex: 1,
  },
  barText: {
    textAlign: 'center',
  },
  icon: {
    padding: normalize(5),
  },
  tabIndicator: {
    height: normalize(5),
    width: deviceWidth / 5,
    backgroundColor: '#5572CC',
  },
  selected: {
    opacity: 1,
  },
  unSelected: {
    opacity: 0,
  }
});

const ButtonAnimation = {
  getStyle(animated: Animated.Value) {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    return {opacity: interpolation};
  },
  pressInAnimation(animated: Animated.Value, duration: number = 50) {
    Animated.timing(animated, {
      toValue: 1,
      duration,
      easing: Easing.circle,
    }).start();
  },
  // This defines animatiom behavior we expect onPressOut
  pressOutAnimation(animated: Animated.Value, duration: number = 100) {
    Animated.timing(animated, {
      toValue: 0,
      duration,
      easing: Easing.circle,
    }).start();
  },
}

const ColorAnimation = {
  getStyle(animated: Array<Animated.Value>, range: number =  0) {
    const interpolation = animated[range].interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(0, 0, 0)', 'rgb(85, 114, 204)']
    });
    return {color: interpolation};
  },
  pressAnimation(animated: Array<Animated.Value>, range: number = 0 , duration: number = 100) {
    for(var i = 0; i < 5; i++) {
      Animated.timing(animated[range], {
        toValue: (range==i)?1:0,
        duration,
        easing: Easing.sin,
      }).start();
    }
  },
}

const IndicatorAnimation = {
  getStyle(animated: Animated.Value) {
    const interpolation = animated.interpolate({
      inputRange: [0, 1, 2, 3, 4],
      outputRange: [(deviceWidth / 5) * 0, (deviceWidth / 5), (deviceWidth / 5) * 2, (deviceWidth / 5) * 3, (deviceWidth / 5) * 4]
    });
    return {left: interpolation};
  },

  onPress(animated: Animated.Value, range: number = 0, duration: number = 150) {
    Animated.timing(animated, {
      toValue: range,
      duration,
      easing: Easing.sin,
    }).start();
  }
}

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => {
  return {
    SetPage: (_pageName: string) => dispatch(setPage(_pageName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);