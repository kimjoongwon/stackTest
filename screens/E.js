import React from 'react'
import {View, Text, Button} from 'react-native'

export default class E extends React.Component {
  componentDidMount() {
    console.log('e is mounted')
  }

  componentWillUnmount() {
    console.log('e will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>E!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.push('F')}
        />
       
      </View>
    );
  }
}
