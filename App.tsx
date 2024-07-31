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

function App(): React.JSX.Element {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  return (
    <Provider store={store}>
      <Navigation navigationRef={navigationRef} />
    </Provider>
  );
}

export default App;
