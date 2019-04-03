import { 
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from "react-navigation";

// Screens
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const RootNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:  {
            header: null,
            gesturesEnabled: false,
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions:  {
            header: null,
            gesturesEnabled: false,
        }
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home'
    },
    tabBarOptions: {
        showLabel: false, // hide labels
        inactiveTintColor: '#586589',  // inactive icon color
        style: {
            backgroundColor: '#171F33' // TabBar background
        }
    }
})

export default createAppContainer(RootNav)