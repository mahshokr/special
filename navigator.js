import {StackNavigator , createStackNavigator} from 'react-navigation'
import {DetailScreen , MainScreen , ThirdScreen} from './screenNames'
import MainComponent from './src/components/mainComponent'
import Detail from './src/components/detailComponent'
import Third from './src/components/thirdComponent'
export const Stack = createStackNavigator ({
    'MainScreen' : {
        screen : MainComponent
    } ,
    DetailScreen : {
        screen : Detail
    },
    ThirdScreen : {
        screen : Third
    }
} , {
    initialRouteName : MainComponent
})