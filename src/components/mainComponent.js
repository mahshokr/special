import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from 'react-native-button'
// import { Button } from 'native-base';
import Detail from './detailComponent'
import Third from './thirdComponent'
 class MainComponent extends Component {
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
        }}> this is main screen </Text>
        <Button
        style = {{color : 'green'}}
        onPress = {()=>{
            this.props.navigate(Detail)
        }}
        >
            Navigate To Details
        </Button>
        <Button
        
        style = {{color : 'lightgreen'}}
        onPress = {()=>{
            this.props.navigate(Third)
        }}
        >
            Navigate To Third Component
        </Button>
      </View>
    )
  }
}

export default MainComponent
