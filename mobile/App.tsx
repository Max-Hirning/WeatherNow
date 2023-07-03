import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import React, { ReactElement } from 'react';
import Forecast from "./src/pages/Forecast";

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <Forecast/>
      <StatusBar
        animated={true}
        backgroundColor="rgb(30 41 59)"
      />
    </Provider>
  );
}