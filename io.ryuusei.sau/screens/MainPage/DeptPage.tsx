import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';

import {connect} from 'react-redux';

export class DeptPage extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {uri: ''};

        // bootstrapping here...
	}

	componentDidMount() {
	}

	render() {
		return (
			<WebView useWebKit={true} source={{uri: 'http://dept1.sau.ac.kr/sau' + this.props.state.User.number.substr(3, 2) + '/218'}} style={styles.web} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	web: {
		flex: 1,
		backgroundColor: '#EEE',
	},
});

const mapStateToProps = state => ({
	state: state,
});

const mapDispatchToProps = dispatch => {
	return {
		// reducers
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DeptPage);
