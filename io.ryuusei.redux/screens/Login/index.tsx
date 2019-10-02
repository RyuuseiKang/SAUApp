import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as loginActions} from './reducer';
import Login from './presenter';

function mapStateToProps(state: any) {
	const {loginStatus, userCookie} = state;
	return {
		loginStatus,
		userCookie,
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		login: bindActionCreators(loginActions.login, dispatch),
		logout: bindActionCreators(loginActions.logout, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
