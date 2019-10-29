import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {normalize} from '../../modules/FontNormalize';

import {connect} from 'react-redux';

export class NotifyPage extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {};

		// bootstrapping here...
	}

	componentDidMount() {}

	render() {
		return (
			<View>
				<View>
					<Text>알림이 없어요~</Text>
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
)(NotifyPage);
