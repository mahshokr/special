import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from 'react-native-button'
class Detail extends Component {
  render() {
    return (
        <View style = {{
            flex : 1 , 
            backgroundColor : 'dodgerblue',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
          <Text style = {{
              fontWeight : 'bold' , 
              fontSize : 22 ,
              color : 'white'
          }}> Details Screen </Text>
        </View>
    )
  }
}

export default Detail
