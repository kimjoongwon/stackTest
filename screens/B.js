import React from 'react'
import {View, Text, Button} from 'react-native'

export default class B extends React.Component {
  componentDidMount() {
    console.log('b is mounted')
  }

  componentWillUnmount() {
    console.log('b will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>B!</Text>
        <Button
          title="Go to C"
          onPress={() => this.props.navigation.push('C')}
        />
        
      </View>
    );
  }
}
