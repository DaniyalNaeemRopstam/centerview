import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Theme from '../utils/theme';
import { useSelector } from 'react-redux';
import UserNavigator from './userNavigation';
import AuthNavigator from './authNavigation';

interface NavigationProps {
  navigationRef: any;
}

export default function Navigation({ navigationRef }: NavigationProps) {
  const { isLoggedIn } = useSelector((state: any) => state?.login);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Theme.WHITE_SMOKE,
    },
  };
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      {isLoggedIn ? <UserNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
