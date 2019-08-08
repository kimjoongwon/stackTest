import React  from 'react'
import {View, Text, Button} from 'react-native'

export default class A extends React.Component {
  componentDidMount() {
    console.log('A is mounted')
    // console.log(this.props)
  }

  componentWillUnmount() {
    console.log('A will unmount')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:60}}>A!</Text>
        <Button
          title="Go to B"
          onPress={() => this.props.navigation.push('B')}
        />
        
      </View>
    );
  }
}
