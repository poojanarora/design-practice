import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import {TabBarStackParamList} from '../types/navigation/appTypes';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectScreen from '../screens/ProjectScreen';

const Tab = createBottomTabNavigator<TabBarStackParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        headerShown: false,


      })}>
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="ProjectScreen" component={ProjectScreen} />

    </Tab.Navigator>
  );
};
export default Tabs;
