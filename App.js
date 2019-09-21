
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigator from './AppNavigator'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component{
  render() {
    return (
    //   <Router>
    //   <Scene key = 'root' styles={{paddingTop:Platform.OS === 'ios' ? 64 : 54}}>
    //     <Scene key='landingPage' component={LandingPage} title = 'Landing' navigationBarStyle={{opacity:0.3}}/>
    //     <Scene key='createProfilePage' component={CreateProfilePage} title = 'CreateProfile' navigationBarStyle={{opacity:0.3}}/>
    //   </Scene>
    // </Router>
    <AppNavigator/>
    );
  }
}

