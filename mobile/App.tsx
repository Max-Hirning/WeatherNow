import { Provider } from "react-redux";
import { Button, PermissionsAndroid, StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import Navigation from "./src/Navigation";
import React, { ReactElement } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Button
          title="Press"
          onPress={async () => {
            try {
              const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
              if(!permission) {
                await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
              }
              Geolocation.getCurrentPosition(
                (position) => {
                  console.log(position);
                },
                (error) => {
                  // See error code charts below.
                  console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
              )
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <Navigation/>
        <StatusBar
          animated={true}
          backgroundColor="rgb(30 41 59)"
        />
      </Provider>
    </NavigationContainer>
  );
}