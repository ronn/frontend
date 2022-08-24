import React from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './style/style';


const LoginScreen = ({ navigation, props }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Siqpik</Text>
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
                    title="Login"
                    onPress={() => navigation.navigate('RootNavigation')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    title="Sign Up"
                    onPress={() => navigation.navigate('Sign Up')}
                >
                    <Text style={styles.bottomText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen; 