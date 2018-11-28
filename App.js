/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import Spalsh, { Splash } from './src/components/splash'
// import Language from './src/components/language'
// import Choose from './src/components/choose'
import Home from './src/components/Home/index'
import Dashboard from './src/components/Dashboard/index'
import MainComponent from "./src/components/mainComponent";
import Detail from "./src/components/detailComponent";
import Third from "./src/components/thirdComponent";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Choose from "./src/components/choose";
import { DetailScreen, MainScreen, ThirdScreen } from "./screenNames";

const AppNavigator = createStackNavigator({
  home: { screen: Home },
  dashboard: { screen: Dashboard }
 
});

const AppContainer = createAppContainer(AppNavigator);

// const data = createStackNavigator({
//   home: {screen: App},
//   test: {screen: Test},
// });

export default AppContainer;

// export default createStackNavigator({
//   'home':  {screen : App}  ,
//   'test' :{screen : Test}
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
