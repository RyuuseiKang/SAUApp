import React from 'react';
import {View, Text, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import SubjectItem from '../../components/SubjectItem';

import { connect } from 'react-redux'

import {getWeekTableAsync} from '../../reducers/User';

export class DashboardPage extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {list: '', refreshing: false,};

		// bootstrapping here
		this._onRefresh();
	}

	refreshItems = () => {
    this.props.get_weektable(this.props.state.Auth.userCookie);

		// 여기서 갱신
		this.render();
		this.setState({refreshing: false});
		// console.log(this.props.state.User.weekTable);
	}
	
	

	componentDidMount() {

	}

	_onRefresh = () => {
		this.setState({refreshing: true});
		this.refreshItems();
	  }

	render() {

		const mon = this.props.state.User.weekTable['mon'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});
		const tue = this.props.state.User.weekTable['tue'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});
		const wed = this.props.state.User.weekTable['wed'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});
		const thu = this.props.state.User.weekTable['thu'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});
		const fri = this.props.state.User.weekTable['fri'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});
		const sat = this.props.state.User.weekTable['mon'].map((data, i) => {
			return (<SubjectItem lessonName={data.lessonName}
								professorName={data.professorName}
								location={data.location}
								isLesson={data.isLesson}
								time={data.time}
								isEnd={data.isEnd}
								/>);
		});

		return (
			<ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} title={'일정을 새로고침합니다.'}/>}>
				{mon}
				{tue}
				{wed}
				{thu}
				{fri}
				{sat}
			</ScrollView>
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
	return {
	  get_weektable: (_cookie: string) => dispatch(getWeekTableAsync(_cookie)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);