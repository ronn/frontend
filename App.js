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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './components/bottom_tabs/bottom_tabs';


const App = () => {
 

  return (
    <NavigationContainer>
     <BottomTabs/>
      <Text>HELLO</Text>
    </NavigationContainer>
  );
};



export default App;
