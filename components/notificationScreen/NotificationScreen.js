import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
    Text,
    View,
    Button
} from 'react-native';


const NotificationScreen = ({ navigation, props }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification Screen</Text>
          
        </View>
    )
}

export default NotificationScreen; 