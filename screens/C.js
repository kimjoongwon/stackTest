import React from 'react'
import {View, Text, Button} from 'react-native'

export default class C extends React.Component {
  componentDidMount() {
    console.log('c is mounted')
  }

  componentWillUnmount() {
    console.log('c will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>C</Text>
        <Button
          title="Go to D"
          onPress={() => {
            this.props.navigation.push('D')}}
        />
        <Button
          title="nav to D"
          onPress={() => {
            this.props.navigation.navigate('E')}}
        />
       
      </View>
    );
  }
}
