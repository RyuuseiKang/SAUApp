import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../../modules/FontNormalize';

export default class SettingPage extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.itemOuter}>
					<View style={styles.itemInner}>
						<Text>로그아웃</Text>
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
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,

		elevation: 10,
  },
  itemInner: {
    
  },
});
