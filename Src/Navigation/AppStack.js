import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import CartBox from '../Screens/CartBox';
import Confirmed from '../Screens/Confirmed';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CartBox" component={CartBox} />
        <Stack.Screen name="Confirmed" component={Confirmed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
