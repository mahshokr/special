import React, { Component } from "react";
import { Text, View, TextInput, Button ,Alert} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import styles from "./styles";
export default class Home extends Component {


    state = {username : '' , password : ''}

    CheckLogin =()=> {
    
        const {username , password} = this.state
        //console.warn('user name : ' , password)
      
        if(username == 'admin' && password == 'admin'){
          //  console.warn('user name : ' , username)
            // redirect to Dashboard
          this.props.navigation.navigate('dashboard')
        }else{
          //alert something is wrong
          Alert.alert('Error' , 'username / password is not correct') ;
        }
    }

  render() {
    const { heading, input, button, parentt } = styles;

    return (
      <Container>
        <Content>
          <View style={parentt}>
            <Text style={heading}>Login to our project</Text>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={text => {this.setState({username : text})}}/>
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={text => {this.setState({password : text})}}/>
              </Item>
              <Button
                title="Login"
                onPress={() => {
                    this.CheckLogin()
                  //this.props.navigation.navigate("dashboard");
                }}
              />
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
