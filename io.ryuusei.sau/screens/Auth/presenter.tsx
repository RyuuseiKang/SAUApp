import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {store} from '../../reducer';
import { connect } from 'react-redux'

import {login, loginAsync} from '../../reducers/Auth';

export class AuthPage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.bootStrapAsync();
	}

	bootStrapAsync = async () => {
		if(this.props.state.Auth.loggingIn)
			this.props.navigation.navigate('Main');
		else
			this.props.navigation.navigate('Login');

		const isSessionAlive = await this.props.screenProps.haksa.SessionLogin();

		this.props.navigation.navigate(isSessionAlive ? 'Main' : 'Login');
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text>Loading...</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
	},
});

const mapStateToProps = state => ({
	state: state,
  })
  
  const mapDispatchToProps = dispatch => {
	return{
		login: (_userId: string, _userPassword: string) => dispatch(loginAsync(_userId, _userPassword)),
		
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);