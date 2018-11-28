/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {StackNavigator} from 'react-navigation'
import MainComponent from './src/components/mainComponent'
import Detail from './src/components/detailComponent'
import Third from './src/components/thirdComponent'
import {DetailScreen , MainScreen , ThirdScreen} from './screenNames'

const App = StackNavigator ( {
    MainScreen : {
        screen : MainComponent , 
        navigationOption : {
            headerTitle : 'Main'
        }
    }  , 
    DetailScreen : {
        screen : Detail , 
        navigationOption : {
            headerTitle : 'Details'
        }
    }  ,
    ThirdScreen : {
        screen : Third , 
        navigationOption : {
            headerTitle : 'Third Component'
        }
    }  
})

AppRegistry.registerComponent(appName, () => App);
