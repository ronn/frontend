import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// STYLE
import { styles } from './style/style'

// Authentication
import { authenticate } from '../service/AuthenticationService'


const LoginScreen = ({ navigation, props }) => {


    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [formUnFilled, setFormUnFilled] = useState(false);
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [signUpButtonEnabled, setCountSignUpButton] = useState(false);
    const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);


    loginClicked = () => {
        if (!(username || password)) {
            setFormUnFilled(true);
        } else {
            setLoginButtonDisabled(true)
            setHasLoginFailed(false)
            
            authenticate(username, password)
                .then(() => (navigation.navigate('RootNavigation'), console.log("Navigate here") ))
                .catch(() => {
                    setSuccessMessage(false)
                    setFormUnFilled(false)
                    setHasLoginFailed(true)
                    setLoginButtonDisabled(false)
                })
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Siqpik</Text>
            <View>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Username'
                    onChangeText={userName => setUserName(userName)}
                    value={username}
                ></TextInput>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={password => setPassWord(password)}
                    value={password}

                ></TextInput>
                {
                    
                    <TouchableOpacity
                        style={styles.button}
                        title="Login"
                        onPress={() => loginClicked(username, password)}                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                }
            </View>
            {hasLoginFailed && <Text style={{ color: 'red' }}>Invalid Credentials</Text>}
            {formUnFilled && <Text style={{ color: 'red' }}>Please fill the fields</Text>}
            {showSuccessMessage && <Text>Login Successful</Text>}
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