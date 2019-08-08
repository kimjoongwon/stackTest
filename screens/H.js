import React from 'react'
import {View, Text, Button} from 'react-native'

export default class H extends React.Component {
  componentDidMount() {
    console.log('h is mounted')
  }

  componentWillUnmount() {
    console.log('h will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>H!</Text>
        <Button
          title="Go to I"
          onPress={() => this.props.navigation.push('I')}
        />
        
      </View>
    );
  }
}
