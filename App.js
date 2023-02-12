import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import AppStack from './Src/Navigation/AppStack';
import {Store} from './Src/Redux/Store';
import Home from './Src/Screens/Home';
import CartBox from './Src/Screens/CartBox';
import Confirmed from './Src/Screens/Confirmed';

const App = () => {
  const config = {
    screens: {
      Home: 'home',
      CartBox: 'cartBox',
      Confirmed: 'confirmed',
    },
  };

  return (
    <Provider store={Store}>
      <NavigationContainer
        linking={{
          prefixes: ['bookstore://app', 'https://reactnative.dev'],
          config,
        }}>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
