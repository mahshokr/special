import React, { Component } from "react";
import { Text, View, ImageBackground, Image, StyleSheet ,ActivityIndicator } from "react-native";

export class Splash extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/bg_splash.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
        <Text style = {{ flex : .3}}></Text>
          <View style={styles.imageContainer}>
          {/* <Text></Text> */}
            <Image
              style={styles.image}
              source={require("../images/logo.png")}
            />
          {/* <Text></Text> */}
          <View style={styles.ActivityIndicatorView}>
          <ActivityIndicator size={45} color="#f1b104" style={styles.ActivityIndicator}></ActivityIndicator>
          </View>
            
          </View>

          <Text style={styles.text}>
            ALL RIGHTS RESERVED . COPYRIGHT C 2018
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // display : flex ,
    flex: 1,
    flexDirection: "column",
    //   padding : "20px",
    justifyContent: "space-between",
      alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 36 ,
    color: "#f1b104",
    fontSize: 10
  },
  imageContainer : {
      flex : 1 ,
      flexDirection : 'row' ,
      justifyContent : 'center'
  },
  image: {
    //textAlign: 'center',
    //flex : 1 ,
    alignItems: 'center',
    width: "46%",
    height: "20%",
    //margin: 120
  },
  ActivityIndicatorView : {
    //  flex : 1
    justifyContent : 'center' ,
    alignItems : 'center'
  } ,
  ActivityIndicator : {
      flex : 1 ,
      justifyContent : 'center'
  }
});