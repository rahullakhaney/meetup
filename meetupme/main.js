import Expo from 'expo';
import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';

EstyleSheet.build(Colors);

class App extends React.Component {
  render() {
    return <HomeScreen />;
  }
}


Expo.registerRootComponent(App);
