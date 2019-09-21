import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LandingPage from './src/components/pages/LandingPage';
import CreateProfilePage from './src/components/pages/CreateProfilePage';

const NavStack = createStackNavigator({
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#fff',
      headerBackTitle: null,
    }
  },
  CreateProfilePage: {
    screen: CreateProfilePage,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: '#fff',
      headerBackTitle: null,
    }
  },
},
  {
    initialRouteName: "LandingPage",
  }

);
const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;