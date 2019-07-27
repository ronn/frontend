import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class SignupScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signinText}> Sign In</Text>
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
    signinText: {
        fontSize: 16,
        fontWeight: "500"
    }
})