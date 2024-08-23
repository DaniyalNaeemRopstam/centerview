/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/app/store';
import Navigation from './src/navigations';
import { NavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastProvider } from 'react-native-toast-notifications';

const persistor = persistStore(store);
export const NOTIFICATION_CONTEXT = createContext<any>({})

function App(): React.JSX.Element {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  const [notificaitonData,setNotificaitonData] = useState([])
 
  
  return (
    <ToastProvider
    placement="bottom"
    // renderType={{
    //   custom_toast: (toast) => <CustomToast toast={toast} />,
    // }}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NOTIFICATION_CONTEXT.Provider value={{notificaitonData,setNotificaitonData}} >
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
        <Navigation navigationRef={navigationRef} />
        </NOTIFICATION_CONTEXT.Provider>
      </PersistGate>
    </Provider>
    </ToastProvider>
  );
}

export default App;
