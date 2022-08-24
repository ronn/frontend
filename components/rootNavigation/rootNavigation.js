import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// SCREEN IMPORTS
import FeedScreen from '../feedScreen/FeedScreen';
import NotificationScreen from '../notificationScreen/NotificationScreen';
import ProfileScreen from '../profileScreen/ProfileScreen';
import HomeScreen from '../homescreen/homeScreen' 
import CameraScreen from '../cameraScreen/camera';




const Tab = createBottomTabNavigator();

const RootNavigation = ({ }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: 'true',
        activeTintColor: '#D7192D',
        inactiveTintColor: '#777',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          height: '12%'
        },
        headerLeft: () => null,
        headerShown: false

      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}

export default RootNavigation; 