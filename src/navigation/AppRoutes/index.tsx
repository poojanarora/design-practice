import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  TabBarStackParamList,
  RootStackParamList,
} from '../../types/navigation/appTypes';
import ChatScreen from '../../screens/ChatScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {Chat, Home, Profile, Projects} from '../../assets/icons/svgs';
import ProjectScreen from '../../screens/ProjectScreen';
import DashboardScreen from '../../screens/HomeScreen';

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
        tabBarStyle: styles.tabStyle,
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'ChatScreen') {
            icon = <Chat color={focused ? '#10B78B' : '#BCBCBC'} />;
          } else if (route.name === 'ProjectScreen') {
            icon = <Projects color={focused ? '#10B78B' : '#BCBCBC'} />;
          } else if (route.name === 'ProfileScreen') {
            icon = <Profile color={focused ? '#10B78B' : '#BCBCBC'} />;
          } else if (route.name === 'DashboardScreen') {
            icon = <Home color={focused ? '#10B78B' : '#BCBCBC'} />;
          }
          return icon;
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
