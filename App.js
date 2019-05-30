import React from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import AppNavigator from './components/Navigator'

export default class App extends React.Component {
  render() {
    return (
         <AppNavigator/>  
    );
  }
}
AppRegistry.registerComponent("WorkShop", () => App);
