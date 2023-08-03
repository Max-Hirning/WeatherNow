import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import Navigation from "./src/Navigation";
import React, { ReactElement, useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native';

export default function App(): ReactElement {
  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
        <StatusBar
          animated={true}
          backgroundColor="rgb(30 41 59)"
        />
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
}