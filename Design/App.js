import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Routes from './src/Routes';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Routes />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

