import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {normalize} from '../modules/FontNormalize';

export default class TableData extends React.Component {
	render() {

		return (
            <View style={[styles.container, {backgroundColor: (this.props.lesson != "")?this.props.backgroundColor:'#00000000', height: 40 * this.props.time}]}>
				<Text style={styles.text}>{this.props.lesson}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        padding: 2,

    },
	text: {
        fontSize: normalize(14),
        color: '#FFFFFF',
	},
});
