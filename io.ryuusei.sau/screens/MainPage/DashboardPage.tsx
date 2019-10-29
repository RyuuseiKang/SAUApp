import React from 'react';
import {View, Text, StyleSheet, RefreshControl, ScrollView} from 'react-native';
import SubjectItem from '../../components/SubjectItem';

import {connect} from 'react-redux';

import {getWeekTableAsync} from '../../reducers/User';
import { normalize } from '../../modules/FontNormalize';
import {colorRandomize} from '../../modules/ColorRandomize';

export class DashboardPage extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {list: '', refreshing: false};

		// bootstrapping here
		this._onRefresh();
	}

	refreshItems = () => {
		this.props.get_weektable(this.props.state.Auth.userCookie);

		// 여기서 갱신
		this.render();
		this.setState({refreshing: false});
		// console.log(this.props.state.User.weekTable);
	};

	componentDidMount() {}

	_onRefresh = () => {
		this.setState({refreshing: true});
		this.refreshItems();
	};

	daySpliter(day: number){
		var date = new Date();
		if (date.getDay() <= day)
			return true;
		else
			return false;
	}

	render() {
		const dailyColor = [colorRandomize(), colorRandomize(), colorRandomize(), colorRandomize(), colorRandomize(), colorRandomize()];

		const mon = this.props.state.User.weekTable['mon'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[0]}
				/>
			);
		});
		const tue = this.props.state.User.weekTable['tue'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[1]}
				/>
			);
		});
		const wed = this.props.state.User.weekTable['wed'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[2]}
				/>
			);
		});
		const thu = this.props.state.User.weekTable['thu'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[3]}
				/>
			);
		});
		const fri = this.props.state.User.weekTable['fri'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[4]}
				/>
			);
		});
		const sat = this.props.state.User.weekTable['sat'].map((data, i) => {
			return (
				<SubjectItem
					lessonName={data.lessonName}
					professorName={data.professorName}
					location={data.location}
					isLesson={data.isLesson}
					time={data.time}
					isEnd={data.isEnd}
					color={dailyColor[5]}
				/>
			);
		});
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh}
						title={'일정을 새로고침합니다.'}
					/>
				}
			>
				
				{(mon != "" && this.daySpliter(1))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>월요일</Text></View>{mon}</View>):(<View></View>)}
				{(tue != "" && this.daySpliter(2))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>화요일</Text></View>{tue}</View>):(<View></View>)}
				{(wed != "" && this.daySpliter(3))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>수요일</Text></View>{wed}</View>):(<View></View>)}
				{(thu != "" && this.daySpliter(4))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>목요일</Text></View>{thu}</View>):(<View></View>)}
				{(fri != "" && this.daySpliter(5))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>금요일</Text></View>{fri}</View>):(<View></View>)}
				{(sat != "" && this.daySpliter(6))?(<View style={styles.container}><View style={styles.titleContainer}><Text style={styles.title}>토요일</Text></View>{sat}</View>):(<View></View>)}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderTopColor: 'rgba(151,151,151,0.25)',
		borderTopWidth: normalize(1),
		marginBottom: 5,
	},
	titleContainer: {
		alignItems: 'center',
		width: normalize(45),
		marginTop: 10,
	},
	title: {
		fontSize: normalize(13),
		color: '#8D8D8D',
		fontWeight: 'bold',
	},
});

function getToday() {
	var d = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	var date = new Date();
	return d[date.getDay()];
}

const mapStateToProps = state => ({
	state: state,
});

const mapDispatchToProps = dispatch => {
	return {
		get_weektable: (_cookie: string) => dispatch(getWeekTableAsync(_cookie)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DashboardPage);
