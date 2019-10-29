import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {normalize} from '../modules/FontNormalize';

import * as Font from 'expo-font';

import Dash from 'react-native-dash';

interface IProps {
	isEnd: boolean;
	isLesson: boolean;
	lessonName: string;
	professorName: string;
	location: string;
	time: string;
}

export default class SubjectItem extends React.Component<IProps> {
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
		let lessonLine = null;
		let professorNameView = null;
		let locationView = null;
		let splitIndicator = null;

		if (!this.props.isEnd) {
			if (this.props.isLesson) {
				lessonLine = (
					<View>
						<View style={[styles.solidLine, {backgroundColor: this.props.color}]}></View>
					</View>
				);
			} else {
				lessonLine = (
					<Dash
						style={styles.dottedLine}
						dashGap={normalize(2.2)}
						dashColor={this.props.color}
						dashThickness={normalize(2.5)}
						dashLength={normalize(2.5)}
						dashStyle={{borderRadius: normalize(2)}}
					></Dash>
				);
			}

			splitIndicator = (
				<View
					style={{
						backgroundColor: '#888888',
						opacity: 0.15,
						height: normalize(1),
						marginTop: 10,
						marginLeft: 5,
						width: deviceWidth,
					}}
				></View>
			);
		}

		if (this.props.isLesson) {
			professorNameView = (
				<View style={[styles.professorNameBack, {backgroundColor: this.props.color}]}>
					<Text allowFontScaling={false} style={styles.professorName}>
						{this.props.professorName}
					</Text>
				</View>
			);
			locationView = (
				<Text allowFontScaling={false} style={styles.lessonLocation}>
					{this.props.location}
				</Text>
			);
		} else {
			professorNameView = null;
			locationView = null;
		}

		if (this.state.isReady)
			return (
				<View>
					<View style={{flexDirection: 'row'}}>
						<View
							style={{
								height: normalize(20),
								justifyContent: 'center',
								margin: 5,
							}}
						>
							<Text allowFontScaling={false} style={styles.time}>
								{this.props.time}
							</Text>
						</View>
						<View style={{}}>
							<View
								style={{
									width: normalize(10),
									alignItems: 'center',
								}}
							>
								<View
									style={{
										marginTop: 10,
										position: 'absolute',
									}}
								>
									{lessonLine}
								</View>
								<View style={[styles.typeCircle, {borderColor: this.props.color}]}></View>
							</View>
						</View>
						<View style={{margin: 5}}>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									height: normalize(13) + 5,
								}}
							>
								<Text allowFontScaling={false} style={styles.lessonName}>
									{this.props.lessonName}
								</Text>
								{professorNameView}
							</View>
							{locationView}
							{splitIndicator}
						</View>
					</View>
				</View>
			);
		else return <View></View>;
	}
}

var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	time: {
		color: '#8D8D8D',
		fontSize: normalize(12),
		textAlign: 'right',
		width: normalize(35),
		fontFamily: 'LexendDeca-Regular',
	},
	typeCircle: {
		borderWidth: normalize(2),
		backgroundColor: '#FFFFFF',
		height: normalize(10),
		width: normalize(10),
		borderRadius: normalize(5),
		marginTop: normalize(8.7),
		position: 'absolute',
	},
	solidLine: {
		height: normalize(60),
		width: normalize(2),
	},
	dottedLine: {
		width: normalize(1),
		height: normalize(30),
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: normalize(6),
	},
	lessonName: {
		marginLeft: 5,
		marginRight: 5,
		fontWeight: '600',
		fontSize: normalize(15),
	},
	professorName: {
		color: '#FFFFFF',
		fontSize: normalize(13),
		fontWeight: '500',
		paddingLeft: 5,
		paddingRight: 5,
		padding: 2.5,
	},
	professorNameBack: {
		borderRadius: normalize(3),
		justifyContent: 'center',
		alignItems: 'center',
	},
	lessonLocation: {
		color: '#8D8D8D',
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		fontSize: normalize(14),
		fontWeight: '500',
	},
});
