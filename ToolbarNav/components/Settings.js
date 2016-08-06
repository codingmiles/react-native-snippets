import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';

var _navigator;

export default class Settings extends Component {

	render () {
		_navigator = this.props.navigator;
		return (
			<View style={styles.parentContainer}>
				<ToolbarAndroid
					title='Settings'
					navIcon={require('../images/back_arrow.png')}
					onIconClicked={() => this.props.navigator.pop()}
          style={styles.toolbar}
          titleColor='white'
        />
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.navigator.pop()}  
	        >
	        	<Text style={styles.buttonText}>Back to home</Text>
	        </TouchableOpacity>
	      </View>
			</View>
		)
	}
}

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