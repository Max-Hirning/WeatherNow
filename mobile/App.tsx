import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import Navigation from "./src/Navigation";
import InfoPage from "./src/pages/InfoPage";
import SplashScreen from 'react-native-splash-screen';
import React, { ReactElement, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): ReactElement {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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