import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigation from "./src/Navigation";
import { StatusBar } from 'react-native';
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation/>
        <StatusBar
          animated={true}
          backgroundColor="rgb(30 41 59)"
        />
      </Provider>
    </NavigationContainer>
  );
}