import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './Src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import Store from './Src/Redux/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
