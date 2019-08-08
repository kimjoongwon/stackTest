import React from 'react';
import { View, Text, Button } from 'react-native';

export default class F extends React.Component {
	componentDidMount() {
		console.log('f is mounted');
	}

	componentWillUnmount() {
		console.log('f will unmount');
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 60 }}>F!</Text>
				<Button title="Go to Settings" onPress={() => this.props.navigation.push('G')} />
			</View>
		);
	}
}
