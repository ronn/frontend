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


import BottomTabs from './components/bottom_tabs/bottom_tabs';

// SCREEN IMPORTS
import LoginScreen from './components/loginScreen/LoginScreen';
import HomeScreen from './components/homescreen/HomeScreen';
import FeedScreen from './components/feedScreen/FeedScreen';
import NotificationScreen from './components/notificationScreen/NotificationScreen';
import ProfileScreen from './components/profileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
