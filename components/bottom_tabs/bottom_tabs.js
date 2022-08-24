import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
                    
                </Tab.Navigator>
            
        </View>
 )
}

export default BottomTabs; 