import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Table from '../../components/Table';
import {normalize} from '../../modules/FontNormalize';
import {deviceWidth, deviceHeight} from '../../styles/commons';
import TableData from '../../components/TableData';

import {colorRandomize} from '../../modules/ColorRandomize';

import {connect} from 'react-redux';
import { getTimeTableAsync } from '../../reducers/User';

export class TableboardPage extends React.Component {

	render() {
		const mon = this.props.state.User.timeTable['mon'].map((data, i) => {
			return (
				<TableData
					lesson={data.lesson}
					time={data.time}
					backgroundColor={colorRandomize()}
				/>
			);
		});

		const tue = this.props.state.User.timeTable['tue'].map((data, i) => {
			return (
				<TableData
					lesson={data.lesson}
					time={data.time}
					backgroundColor={colorRandomize()}
				/>
			);
		});

		const wed = this.props.state.User.timeTable['wed'].map((data, i) => {
			return (
				<TableData
					lesson={data.lesson}
					time={data.time}
					backgroundColor={colorRandomize()}
				/>
			);
		});

		const thu = this.props.state.User.timeTable['thu'].map((data, i) => {
			return (
				<TableData
					lesson={data.lesson}
					time={data.time}
					backgroundColor={colorRandomize()}
				/>
			);
		});

		const fri = this.props.state.User.timeTable['fri'].map((data, i) => {
			return (
				<TableData
					lesson={data.lesson}
					time={data.time}
					backgroundColor={colorRandomize()}
				/>
			);
		});

		return (
			<View style={styles.container}>
				<View style={styles.dayIndicator}>
					<Text style={styles.day}>월</Text>
					<Text style={styles.day}>화</Text>
					<Text style={styles.day}>수</Text>
					<Text style={styles.day}>목</Text>
					<Text style={styles.day}>금</Text>
				</View>
				<View style={styles.dayBarOuter}>
					<View style={styles.dayBarIndicator}>
						<View style={styles.dayBar}></View>
					</View>
					<View style={styles.dayBarIndicator}>
						<View style={styles.dayBar}></View>
					</View>
					<View style={styles.dayBarIndicator}>
						<View style={styles.dayBar}></View>
					</View>
					<View style={styles.dayBarIndicator}>
						<View style={styles.dayBar}></View>
					</View>
					<View style={styles.dayBarIndicator}>
						<View style={styles.dayBar}></View>
					</View>
				</View>
				<Table style={styles.tableBackground} />
				<View style={styles.tableData}>
					<View style={styles.dayData}>
					{mon}
					</View>
					<View style={styles.dayData}>
					{tue}
					</View>
					<View style={styles.dayData}>
					{wed}
					</View>
					<View style={styles.dayData}>
					{thu}
					</View>
					<View style={styles.dayData}>
					{fri}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	tableData: {
		marginLeft: normalize(35) + 10,
		marginRight: 20,
		marginTop: 5,
		flexDirection: 'row',
	},
	dayData: {
		flex: 1,
	},
	tData: {
		backgroundColor: '#33333333',
		height: 40,
	},
	dayIndicator: {
		marginLeft: normalize(35) + 10,
		flexDirection: 'row',
		marginRight: 20,
		marginBottom: 15,
	},
	dayBarOuter: {
		position: 'absolute',
		marginLeft: normalize(35) + 10,
		flexDirection: 'row',
		marginRight: 20,
		marginTop: 25,
	},
	dayBarIndicator: {
		flex: 1,
		alignItems:'center',
	},
	dayBar: {
		backgroundColor: '#979797',
		opacity: 0.25,
		width: normalize(1),
		height: (normalize(16) + 20) * 10 + 5,
	},
	day: {
		flex: 1,
		textAlign: 'center',
		fontSize: normalize(15),
		fontWeight: '500',
		color: '#8D8D8D',
	},
	tableBackground: {
		position: 'absolute',
	},
});

const mapStateToProps = state => ({
	state: state,
});

const mapDispatchToProps = dispatch => {
	return {
		get_timeTable: (_cookie: string) => dispatch(getTimeTableAsync(_cookie)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TableboardPage);
