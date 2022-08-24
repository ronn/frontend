/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// SCREEN IMPORTS
import LoginScreen from './components/loginScreen/LoginScreen';
import RootNavigation from './components/rootNavigation/rootNavigation';
import SignUpScreen from './components/signUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="Sign Up" component={SignUpScreen} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="RootNavigation" component={RootNavigation} 
           options={{
              title: 'Siqpik',
              headerLeft: () => ('')
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
