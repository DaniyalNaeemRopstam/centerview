/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/app/store';
import Navigation from './src/navigations';
import {NavigationContainerRef} from '@react-navigation/native';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  return (
    <Provider store={store}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'}  />
      <Navigation navigationRef={navigationRef} />
    </Provider>
  );
}

export default App;
