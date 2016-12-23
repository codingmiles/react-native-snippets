/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Share
} from 'react-native';

class ShareAndroid extends Component {

  constructor(props) {
    super(props);

    this._shareTextWithTitle = this._shareTextWithTitle.bind(this);
    this._shareTextMessage = this._shareTextMessage.bind(this);
    this._showResult = this._showResult.bind(this);

    this.state = {
      result: ''
    };
  }

  _showResult (result) {
    console.log(result)
  }

  _shareTextMessage () {
    Share.share({
      message: 'Such sharing! Much wow!'
    })
    .then(this._showResult)
    .catch(err => console.log(err))
  }

  _shareTextWithTitle () {
    Share.share({
      message: 'This message has a title',
      title: 'Best title ever!',
      url: 'http://codingmiles.com'
    }, {
      dialogTitle: 'This is share dialog title',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter',
        'com.apple.uikit.activity.mail'
      ],
      tintColor: 'green'
    })
    .then(this._showResult)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._shareTextMessage}>
          <View style={styles.button}>
            <Text>Click to share message</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._shareTextWithTitle}>
          <View style={styles.button}>
            <Text>Click to share message, URL and title</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#76c9f8',
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
});

AppRegistry.registerComponent('ShareAndroid', () => ShareAndroid);
