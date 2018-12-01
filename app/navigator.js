import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from "./views/Home"
import SignInScreen from "./views/Signin"
import AuthLoadingScreen from "./views/Authloading"
import ProfilScreen from "./views/Profil"
import CategoryScreen from './views/Category';





const AuthStack = createStackNavigator({
    SignIn: SignInScreen
}, { headerMode: 'none' });

/**
 * TabBottomNavigator contains
 * 
 *  - Flow page
 *  - Take Picture Page
 *  - Profil Page 
 * 
 */
const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Profil: ProfilScreen,
}, { headerMode: 'none' });

/**
 * First screen contains
 * 
 *  - Flow
 *  - Catgeory
 */
const HomeStack = createStackNavigator({
    Home: TabNavigator,
    Category: CategoryScreen
}, { headerMode: 'none' });




const tabStack = createStackNavigator({
    mainContent: HomeStack
}, { headerMode: 'none' });


export default FirstAppContainer = createAppContainer(createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: tabStack,
    Auth: AuthStack,
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'AuthLoading'
}));