import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SubjectItem from '../../components/SubjectItem';

export default class DashboardPage extends React.Component {
	render() {
		return (
			<View>
				<View>
					<SubjectItem />
					<SubjectItem />
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
