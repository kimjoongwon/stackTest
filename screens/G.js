import React from 'react'
import {View, Text, Button} from 'react-native'

export default class G extends React.Component {
  componentDidMount() {
    console.log('g is mounted')
  }

  componentWillUnmount() {
    console.log('g will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>G!</Text>
        <Button
          title="Go to H"
          onPress={() => this.props.navigation.push('H')}
        />
        
      </View>
    );
  }
}
