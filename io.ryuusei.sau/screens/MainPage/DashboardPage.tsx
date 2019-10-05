import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SubjectItem from '../../components/SubjectItem';

import { connect } from 'react-redux'

import {getUserDataAsync, getTimeTableAsync} from '../../reducers/User';

export class DashboardPage extends React.Component {
	render() {
		return (
			<View>
				<View>
					<SubjectItem
						lessonName={'네트워크 시스템'}
						professorName={'김덕은'}
						location={'본관 502'}
						isLesson={true}
						time={'9:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'캡스톤디자인'}
						professorName={'권용광'}
						location={'본관 404'}
						isLesson={true}
						time={'12:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'공강'}
						isLesson={false}
						time={'2:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'셔틀버스'}
						isLesson={false}
						time={'5:15'}
					></SubjectItem>

					<SubjectItem
						lessonName={'자바 프로그래밍'}
						professorName={'김진봉'}
						location={'본관 413'}
						isLesson={true}
						time={'3:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'네트워크 시스템'}
						professorName={'김덕은'}
						location={'본관 502'}
						isLesson={true}
						time={'9:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'수업 끝'}
						isLesson={false}
						time={'5:00'}
					></SubjectItem>

					<SubjectItem
						lessonName={'셔틀 버스'}
						isLesson={false}
						isEnd={true}
						time={'5:15'}
					></SubjectItem>
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
		get_timetable: (_cookie: string) => dispatch(getTimeTableAsync(_cookie)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);