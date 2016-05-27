/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Touch,
  TouchableHighlight
} from 'react-native';

import D3Graph from './d3-graph.js';

class testGraph extends Component {

  constructor(props) {
    super(props);
    this.state = {lineColor: "black"};
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight
          onPress={() => {
            if (this.state.lineColor == "black") {
              this.setState({lineColor: "red"})
            }
            else {
              this.setState({lineColor: "black"})
            }
          }}
        >
          <Text style={styles.welcome}>
            Touch this text to change color!
          </Text>
        </TouchableHighlight>

        <D3Graph
          lineColor={this.state.lineColor}
        />

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
});

AppRegistry.registerComponent('testGraph', () => testGraph);
