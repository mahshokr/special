/** @format */

import {AppRegistry} from 'react-native';
 import AppContainer from './App';
import {name as appName} from './app.json';
import {StackNavigator , createStackNavigator} from 'react-navigation'
import MainComponent from './src/components/mainComponent'
import Detail from './src/components/detailComponent'
import Third from './src/components/thirdComponent'
import {DetailScreen , MainScreen , ThirdScreen} from './screenNames'


AppRegistry.registerComponent(appName, () => AppContainer);
