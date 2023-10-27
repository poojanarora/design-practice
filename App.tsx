import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {store} from './src/store';
import RootNavigator from './src/navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
