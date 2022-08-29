import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREEN IMPORTS
import FeedScreen from '../feedScreen/FeedScreen';
import NotificationScreen from '../notificationScreen/NotificationScreen';
import ProfileScreen from '../profileScreen/ProfileScreen';
import HomeScreen from '../homescreen/homeScreen'
import CameraScreen from '../cameraScreen/camera';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const RootNavigation = ({ }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'md-search' : 'md-search-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications-sharp' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        keyboardHidesTabBar: 'true',
        headerLeft: () => null,
        headerShown: false

      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}

export default RootNavigation; 