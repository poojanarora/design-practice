import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardScreen from '../../screens/DashboardScreen';
import {
  TabBarStackParamList,
  RootStackParamList,
} from '../../types/navigation/appTypes';
import ChatScreen from '../../screens/ChatScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {Chat, Home, Profile, Projects} from '../../assets/icons/svgs';
import HomeScreen from '../../screens/ProjectScreen';

const Tab = createBottomTabNavigator<TabBarStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={TabBar} name="Root" />
    </Stack.Navigator>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused, color, size}) => (
            <Chat color={focused ? 'green' : 'red'} /> // Change color conditionally
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Projects color={focused ? 'green' : 'red'} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Profile color={focused ? 'green' : color} /> // Keep the original color for unfocused icons
          ),
        }}
      />
      <Tab.Screen
        name="ProjectScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home color={focused ? 'green' : color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
