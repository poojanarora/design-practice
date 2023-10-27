import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppRoutes from './AppRoutes';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<any>();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={AppRoutes} name="AppRoutes" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
