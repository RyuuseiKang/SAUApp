import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../../modules/FontNormalize';

import {connect} from 'react-redux';

import {pageLogout} from '../../reducers/Page';
import {logout} from '../../reducers/Auth';
import {userLogout} from '../../reducers/User';


export class SettingPage extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.itemOuter}>
					<View style={styles.itemInner}>
						<Text onPress={() => {
							// 로그아웃
							this.props.logout();
							this.props.navigation.navigate('Auth');
							}} style={styles.buttonText}>로그아웃</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemOuter: {
		margin: normalize(10),
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	itemInner: {
		backgroundColor: '#EEFFFF',
		padding: 10,
		borderRadius: normalize(5),
	},
	buttonText: {
		fontSize: normalize(14),
	},
});

const mapStateToProps = state => ({
	state: state,
});

const mapDispatchToProps = dispatch => {
	return {
		logout: () => {dispatch(logout()); dispatch(pageLogout()); dispatch(userLogout());},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SettingPage);
