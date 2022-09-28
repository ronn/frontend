/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// REDUX STORE
import { store } from './store'
import { Provider } from 'react-redux'


// SCREEN IMPORTS
import LoginScreen from './components/loginScreen/LoginScreen';
import RootNavigation from './components/rootNavigation/rootNavigation';
import SignUpScreen from './components/signUpScreen/SignUpScreen';
import CameraScreen from './components/cameraScreen/camera'

// CAMERA OPTIONS
import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';

const Stack = createNativeStackNavigator();


const App = () => {



  return (
    <Provider store={store}>
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Sign Up" component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="RootNavigation" component={RootNavigation}
            options={{
              title: 'Siqpik',
              headerLeft: () => ('')
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
