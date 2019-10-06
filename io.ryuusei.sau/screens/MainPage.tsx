import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	Platform,
	StatusBar,
	Dimensions,
	ScrollView,
	Animated,
} from 'react-native';

import {normalize} from '../modules/FontNormalize';
import {commons} from '../styles/commons';

import TabBar from '../components/TabBar';

import {
	NavigationInjectedProps,
	withNavigation,
	NavigationScreenProps,
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation';

import DashboardPage from './MainPage/DashboardPage';
import TableboardPage from './MainPage/TableboardPage';
import SettingPage from './MainPage/SettingPage';

import { connect } from 'react-redux'

import {getUserDataAsync, getTimeTableAsync} from '../reducers/User';

export class MainPage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		// bootstrapping here
	}

	state = {pageName: '이번주', loaded: false, profileURI: ''};

	// Initialize
	componentWillMount() {
		
	}

	// Mounted
	componentDidMount() {
		// console.log(this.props.state.Auth.userCookie);
		if(this.props.state.Auth.loggingIn) {
			this.props.get_userdata(this.props.state.Auth.userCookie);
			this.props.get_timetable(this.props.state.Auth.userCookie);
		} else {
			// 로그인 안됨
		}
	}

	render() {
		// console.log(this.props.state.User);

		return (
			<SafeAreaView style={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<View style={{paddingLeft: 20, paddingTop: 15, paddingBottom: 15}}>
						<Text allowFontScaling={false} style={styles.todayDate}>
							{getToday()}
						</Text>
						<Text allowFontScaling={false} style={styles.title}>
							{this.state.pageName}
						</Text>
					</View>
					<View style={{paddingRight: 20, paddingTop: 15, paddingBottom: 15}}>
						<TouchableWithoutFeedback
							onPress={() => {
								alert('Show UserProfile Page');
								// 여기서 로그아웃
								this.props.screenProps.haksa.Logout();
								this.props.navigation.navigate('Login');
							}}
						>
							<View style={styles.icon}>
								<Image
									style={commons.icon}
									source={{
										uri: this.props.state.User.profileURI,
									}}
								/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
				<MainContainer />
			</SafeAreaView>
		);
	}
}

var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	todayDate: {
		fontSize: normalize(13),
		fontWeight: 'bold',
		color: '#8D8D8D',
		paddingBottom: 2.5,
	},
	title: {
		fontSize: normalize(22),
		fontWeight: 'bold',
		marginTop: 2.5,
	},
	icon: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.3,
		shadowRadius: 10,

		elevation: 10,
	},
	pages: {width: deviceWidth},
});

function getToday() {
	var d = ['일', '월', '화', '수', '목', '금', '토'];
	var date = new Date();
	return (
		date.getMonth() +
		1 +
		'월 ' +
		date.getDate() +
		'일 ' +
		d[date.getDay()] +
		'요일'
	);
}

const TabNavigator = createBottomTabNavigator(
	{
		Dashboard: DashboardPage,
		Table: TableboardPage,
		Setting: SettingPage,
	},
	{tabBarComponent: TabBar},
);

const MainContainer = createAppContainer(TabNavigator);

const mapStateToProps = state => ({
	state: state,
})

const mapDispatchToProps = dispatch => {
	return{
		get_userdata: (_cookie: string) => dispatch(getUserDataAsync(_cookie)),
		get_timetable: (_cookie: string) => dispatch(getTimeTableAsync(_cookie)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);