import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import ShoppingCart from '../Screens/ShoppingCart';
import OrderPlaced from '../Screens/OrderPlaced';
import LinkingScreen from '../Screens/LinkingScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="OrderPlaced"
        component={OrderPlaced}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="LinkingScreen"
        component={LinkingScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
