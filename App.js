import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import A from './screens/A';
import B from './screens/B';
import C from './screens/C';
import D from './screens/D';
import E from './screens/E';
import F from './screens/F';
import G from './screens/G';
import H from './screens/H';
import I from './screens/I';
import {Text} from 'react-native'


// const FullStack = createStackNavigator({
// 	A: A,
// 	B: B,
// 	C: C,
// 	D: D,
// 	E: E,
// 	F: F,
// 	G: G,
// 	H: H,
// 	I: I
// });

// export default createAppContainer(FullStack)

const FirstStack = createStackNavigator({
	A: A,
	B: B,
	C: C
});

const SecondStack = createStackNavigator({
	D: D,
	E: E,
	F: F
});

const ThirdStack = createStackNavigator({
	G: G,
	H: H,
	I: I
});

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;
	// console.log(navigation.state)
	let iconName;
	if (routeName === 'Home') {
		iconName = `ios-information-circle${focused ? '' : '-outline'}`;
		// We want to add badges to home tab icon
		IconComponent = HomeIconWithBadge;
	} else if (routeName === 'Settings') {
		iconName = `ios-options${focused ? '' : '-outline'}`;
	}

	// You can return any component that you like here!
	return <Text>{routeName}</Text>;
};

const AppContainer = createAppContainer(
	createBottomTabNavigator(
		{
			OneTab: { screen: FirstStack },
			SecondTab: { screen: SecondStack },
			ThirdTab: { screen: ThirdStack }
		},
		{
			defaultNavigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
			}),
			tabBarOptions: {
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray'
      }
      
		}
	)
);

handleNavigationChange= (prevState,newState,action) =>{

	// console.log('prevState: ')
	console.log(prevState)
	// console.log('newState: ')
	// console.log(newState)
	// console.log(action)
	console.log('----------------------end-------------------')

}
// 이게 비직관 적이다.

export default class App extends Component{
	render(){
		return <AppContainer onNavigationStateChange={handleNavigationChange}/>
	}
}