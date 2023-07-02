import { StatusBar } from 'react-native';
import React, { ReactElement } from 'react';
import Forecast from "./src/pages/Forecast";

export default function App(): ReactElement {
  return (
    <>
      <Forecast/>
        <StatusBar
          animated={true}
          backgroundColor="rgb(30 41 59)"
        />
    </>
  );
}