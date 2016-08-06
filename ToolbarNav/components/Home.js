import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';

var _navigator;

export default class Home extends Component {

	_navigateToSettings () {
		this.props.navigator.push({
			id: 'settings'
		});
	}

	_onActionSelected () {
		this._navigateToSettings()
	}

	render () {
		_navigator = this.props.navigator;
		return (
			<View style={styles.parentContainer}>
				<ToolbarAndroid
					title='Home'
					logo={require('../images/logo.png')}
          actions={toolbarActions}
          style={styles.toolbar}
          titleColor='white'
          onActionSelected={() => this._onActionSelected()}
        />
        <View style={styles.container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
	            this._navigateToSettings()
	        	}  
	        }>
	        	<Text style={styles.buttonText}>Go to Settings</Text>
	        </TouchableOpacity>
	      </View>
			</View>
		)
	}
}

var toolbarActions = [
	{title: 'Settings', icon: require('../images/settings.png'), show: 'always'},
];

var styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
	},
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
  	height: 56,
    backgroundColor: '#4883da',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    width: 200,
    backgroundColor: '#4883da',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});