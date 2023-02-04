import React from 'react';
import {Provider} from 'react-redux';
import AppStack from './Src/Navigation/AppStack';
import {Store} from './Src/Redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};
export default App;
