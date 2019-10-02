import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Login extends React.Component {
	state = {
		userId: '',
		userPassword: '',
	};

	login = (userID: string, userPassword: string) => {
		// 여기서 로그인 처리하고 넘겨주면 됨
		
	};

	render() {
		const {loginStatus, login, logout} = this.props;

		return (
			<View style={styles.container}>
				<View>
					<Text onPress={() => this.login('1234', 'abcd')}>Login</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
