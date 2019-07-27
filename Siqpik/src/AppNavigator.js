import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './pages/Login';
import SigninScreen from './pages/Signup';


const AppNavigator = createStackNavigator({
    Login: LoginScreen,
    Signin: SigninScreen
},
    {
        initialRouteName: "Login"
    });

export default createAppContainer(AppNavigator); 