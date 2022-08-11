import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../homescreen/HomeScreen'


import {
    View,
    Text
} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

 return (
        <View>
            <Text>HELLO THERE</Text>
           
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />

                </Tab.Navigator>
            
        </View>
 )
}

export default BottomTabs; 