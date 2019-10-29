import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {normalize} from '../modules/FontNormalize';

import * as Font from 'expo-font';
import {deviceWidth, deviceHeight} from '../styles/commons';

export default class TimeBars extends React.Component {
	render() {
		return (
			<View style={styles.timeOuter}>
				<Text style={styles.time}>{this.props.time}</Text>
				<View
					style={{
						backgroundColor: '#979797',
						opacity: 0.25,
						height: normalize(1),
						marginTop: 10,
						marginLeft: 5,
						width: deviceWidth - normalize(35) - 30,
					}}
				></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	timeOuter: {
		flexDirection: 'row',
	},
	time: {
		color: '#8D8D8D',
		fontSize: normalize(16),
		textAlign: 'right',
		width: normalize(35),
		fontFamily: 'LexendDeca-Regular',
		marginBottom: 20,
		marginRight: 5,
	},
});
