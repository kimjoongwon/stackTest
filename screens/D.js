import React from 'react'
import {View, Text, Button} from 'react-native'

export default class D extends React.Component {
  componentDidMount() {
    console.log('d is mounted')
  }

  componentWillUnmount() {
    console.log('d will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>D!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.push('E')}
        />
      
      </View>
    );
  }
}
