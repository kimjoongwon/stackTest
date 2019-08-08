import React from 'react'
import {View, Text, Button} from 'react-native'

export default class I extends React.Component {
  componentDidMount() {
    console.log('i is mounted')
  }

  componentWillUnmount() {
    console.log('i will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>I</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('C')}
        />
        
      </View>
    );
  }
}
