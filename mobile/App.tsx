import Today from "./src/pages/Today";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { store } from "./src/redux/store";
import React, { ReactElement } from 'react';
import Forecast from "./src/pages/Forecast";
import Precipitation from "./src/pages/Precipitation";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab.Navigator 
          screenOptions={{
            tabBarStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0.5,
              borderBottomColor: '#D8D8D8',
              backgroundColor: 'rgb(51 65 85)',
            },
            tabBarIndicatorStyle: {
              width: 100,
              height: 0.75,
              marginHorizontal: "2%",
              backgroundColor: 'white',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'rgb(156 163 175)',
          }}
          initialRouteName="Today"
        >
          <Tab.Screen name="Today" component={Today} />
          <Tab.Screen name="Forecast" component={Forecast} />
          <Tab.Screen name="Precipitation" component={Precipitation} />
        </Tab.Navigator>
        <StatusBar
          animated={true}
          backgroundColor="rgb(30 41 59)"
        />
      </Provider>
    </NavigationContainer>
  );
}