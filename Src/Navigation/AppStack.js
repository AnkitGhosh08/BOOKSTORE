import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import CartBox from '../Screens/CartBox';
import Confirmed from '../Screens/Confirmed';
import LinkingScreen from '../Screens/LinkingScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CartBox" component={CartBox} />
      <Stack.Screen name="Confirmed" component={Confirmed} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;
