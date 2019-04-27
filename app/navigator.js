import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import HomeScreen from './views/Home';
import SignInScreen from './views/LoginScreens/Signin';
import AuthLoadingScreen from './views/LoginScreens/Authloading';
import ProfilScreen from './views/Profil';
import CategoryScreen from './views/Category';


const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
}, { headerMode: 'none' });

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profil: ProfilScreen,
}, { headerMode: 'none' });

const HomeStack = createStackNavigator({
  Home: TabNavigator,
  Category: CategoryScreen,
}, { headerMode: 'none' });


const tabStack = createStackNavigator({
  mainContent: HomeStack,
}, { headerMode: 'none' });


const FirstAppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: tabStack,
  Auth: AuthStack,
}, {
  headerMode: 'none',
  initialRouteName: 'AuthLoading',
}));

export default FirstAppContainer;
