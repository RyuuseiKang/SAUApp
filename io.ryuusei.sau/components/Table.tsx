import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import {normalize} from '../modules/FontNormalize';

import * as Font from 'expo-font';

import Dash from 'react-native-dash';

interface IProps {
	// 여기에 프롭들
}

export default class Table extends React.Component {
	constructor(props: IProps) {
		super(props);

		this.state = {isReady: false};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'LexendDeca-Regular': require('../assets/fonts/LexendDeca-Regular.ttf'),
		});
		this.setState({isReady: true});
	}

	render() {
		if (this.state.isReady)
			return (
				<View>
					<View>
                        <Text style={styles.time}>9H</Text>
                        <Text style={styles.time}>10H</Text>
                        <Text style={styles.time}>11H</Text>
                        <Text style={styles.time}>12H</Text>
                        <Text style={styles.time}>1H</Text>
                        <Text style={styles.time}>2H</Text>
                        <Text style={styles.tㅐime}>3H</Text>
                        <Text style={styles.time}>4H</Text>
                        <Text style={styles.time}>5H</Text>
                        <Text style={styles.time}>6H</Text>
                    </View>
				</View>
            );
        else return <View></View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    },
    time: {
        color: '#8D8D8D',
        fontSize: normalize(16),
        textAlign: 'right',
        width: normalize(35),
        fontFamily: 'LexendDeca-Regular',
        marginBottom: 20,
    }
});
