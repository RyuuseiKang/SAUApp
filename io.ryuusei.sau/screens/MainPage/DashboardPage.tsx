import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SubjectItem from '../../components/SubjectItem';

import { connect } from 'react-redux'

import {getWeekTableAsync} from '../../reducers/User';

export class DashboardPage extends React.Component {
	static defaultProps = { table: [] }

	refresh() {
    this.props.get_weektable(this.props.state.Auth.userCookie);

		// 여기서 갱신
		//console.log(this.props.state.User.weekTable[0]);
	}
	
	componentDidMount() {
		this.refresh();
	}

	render() {
		// this.refresh();

		const list = this.props.state.User.weekTable.map(
		 	tableData => (<SubjectItem lessonName={tableData.lessonName} professorName={tableData.professorName} location={tableData.location} isLesson={tableData.isLesson} time={tableData.time} />)
		);

		return (
			<View>
				<View>
					<Text onPress={() => {

          }}>ASDFASDFASDF</Text>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
});

function getToday() {
	var d = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	var date = new Date();
	return d[date.getDay()];
}

const mapStateToProps = state => ({
	state: state,
})

const mapDispatchToProps = dispatch => {
	return{
		get_weektable: (_cookie: string) => dispatch(getWeekTableAsync(_cookie)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);