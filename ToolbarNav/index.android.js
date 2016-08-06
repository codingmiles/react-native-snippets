import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import Home from './components/Home';
import Settings from './components/Settings';

var _navigator;

/* 
  Android hardware back button. Without this, android device back button prese
  will close the app directly if you are on settings screeb without going back to
  home.
 */
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class ToolbarNav extends Component {

  _renderScene (route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'home':
        return (
          <Home navigator={navigator}/>
        )
      case 'settings':
        return (
          <Settings navigator={navigator} />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
      />
    );
  }
}

AppRegistry.registerComponent('ToolbarNav', () => ToolbarNav);
