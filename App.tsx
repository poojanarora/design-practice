import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/navigation/tabs';
import { Provider } from 'react-redux';
import { store } from './src/store';


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
