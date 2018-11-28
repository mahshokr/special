import React, { Component } from 'react'
import { Text, View } from 'react-native'

 class Third extends Component {
  render() {
    return (
        <View style = {{
            flex : 1 , 
            backgroundColor : 'tomato',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
          <Text style = {{
              fontWeight : 'bold' , 
              fontSize : 22 ,
              color : 'white'
          }}> this is third screen </Text>
        </View>
    )
  }
}

export default Third
