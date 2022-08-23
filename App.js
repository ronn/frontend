/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BottomTabs from './components/bottom_tabs/bottom_tabs';
// SCREEN IMPORTS
import HomeScreen from './components/homescreen/homeScreen';
import FeedScreen from './components/feedScreen/FeedScreen';

const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
