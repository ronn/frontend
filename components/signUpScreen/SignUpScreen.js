import React from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './style/style';


const SignUpScreen = ({ navigation, props }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Account Information</Text>
            </View>
            <View>
                <TextInput
                    style={styles.inputBox}
                    placeholder="User Name"

                ></TextInput>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"

                ></TextInput>

                <TouchableOpacity
                    style={styles.button}
                    title="Sign In"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    title="Log in"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.bottomText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen; 