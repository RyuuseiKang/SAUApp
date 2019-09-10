import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {normalize} from '../modules/FontNormalize';

import Dash from 'react-native-dash';

export default class SubjectItem extends React.Component {
	render() {
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
						<Text style={styles.time}>9:00</Text>
					</View>
					<View style={{}}>
						<View
							style={{
								width: normalize(10),
								alignItems: 'center',
							}}
						>
							<View style={styles.typeCircle}></View>
							<View style={styles.solidLine}></View>
							<View style={{marginTop: normalize(14), position: 'absolute'}}>
								<Dash
									style={styles.dottedLine}
									dashGap={normalize(7.5)}
									dashColor={'#FF6663'}
									dashThickness={normalize(3)}
									dashLength={normalize(3)}
									dashStyle={{borderRadius: normalize(2)}}
								></Dash>
								<Dash
									style={styles.dottedLine}
									dashGap={normalize(7.5)}
									dashColor={'#FF6663'}
									dashThickness={normalize(3)}
									dashLength={normalize(3)}
									dashStyle={{borderRadius: normalize(2)}}
								></Dash>
							</View>
						</View>
					</View>
					<View style={{margin: 5}}>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.lessonName}>네트워크 시스템</Text>
							<View style={styles.professorNameBack}>
								<Text style={styles.professorName}>김덕은</Text>
							</View>
						</View>
						<Text style={styles.lessonLocation}>본관 502</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	time: {
		color: '#8D8D8D',
		fontWeight: '500',
		fontSize: normalize(15),
		textAlign: 'right',
	},
	typeCircle: {
		borderColor: '#FF6663',
		borderWidth: normalize(2),
		backgroundColor: '#FFFFFF',
		height: normalize(10),
		width: normalize(10),
		borderRadius: normalize(6.35),
		marginTop: normalize(10),
		position: 'absolute',
	},
	solidLine: {
		backgroundColor: '#FF6663',
		height: normalize(15),
		width: normalize(2),
	},
	dottedLine: {
		width: normalize(1),
		height: normalize(20),
		flexDirection: 'column',
		alignItems: 'center',
	},
	lessonName: {
		marginLeft: 5,
		marginRight: 5,
		fontWeight: 'bold',
		fontSize: normalize(20),
	},
	professorName: {
		color: '#FFFFFF',
		fontSize: normalize(16),
		fontWeight: '500',
		paddingLeft: 5,
		paddingRight: 5,
	},
	professorNameBack: {
		backgroundColor: '#FF6663',
		borderRadius: normalize(3),
		justifyContent: 'center',
	},
	lessonLocation: {
		color: '#8D8D8D',
		margin: 5,
		fontSize: normalize(18),
		fontWeight: '500',
	},
});
