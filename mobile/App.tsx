import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import Navigation from "./src/Navigation";
import React, { ReactElement } from 'react';
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native';

export default function App(): ReactElement {
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