import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}> Signup</Text>
          </TouchableOpacity>
        </View>
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
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    fontWeight: "500"
  }
})