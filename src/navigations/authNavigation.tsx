import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login';

export default function AuthNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LOGIN" component={Login} />
    </Stack.Navigator>
  );
}
