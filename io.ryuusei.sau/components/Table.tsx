import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {normalize} from '../modules/FontNormalize';

import * as Font from 'expo-font';
import {deviceWidth, deviceHeight} from '../styles/commons';
import TimeBars from './TimeBars';

interface IProps {
	// 여기에 프롭들
}

export default class Table extends React.Component {
	constructor(props: IProps) {
		super(props);

		this.state = {isReady: false};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'LexendDeca-Regular': require('../assets/fonts/LexendDeca-Regular.ttf'),
		});
		this.setState({isReady: true});
	}

	render() {
		if (this.state.isReady)
			return (
                <View style={styles.time}>
                    <TimeBars time={'9H'} />
                    <TimeBars time={'10H'} />
                    <TimeBars time={'11H'} />
                    <TimeBars time={'12H'} />
                    <TimeBars time={'1H'} />
                    <TimeBars time={'2H'} />
                    <TimeBars time={'3H'} />
                    <TimeBars time={'4H'} />
                    <TimeBars time={'5H'} />
                    <TimeBars time={'6H'} />
				</View>
			);
		else return <View></View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	time: {
		color: '#8D8D8D',
		fontSize: normalize(16),
		textAlign: 'right',
		width: normalize(35),
		fontFamily: 'LexendDeca-Regular',
		marginBottom: 20,
		marginRight: 5,
		marginTop: 25,
		position: 'absolute',
	},
});
