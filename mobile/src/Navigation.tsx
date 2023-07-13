import Forecast from "./pages/Forecast";
import React, { ReactElement } from 'react';
import StartInfo from "./modules/StartInfo/view/StartInfo";
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function App(): ReactElement {
    return (
        <Drawer.Navigator 
            screenOptions={{
                headerStyle: {
                    borderBottomWidth: 1,
                    shadowColor: 'transparent',
                    borderBottomColor: '#D8D8D8',
                    backgroundColor: 'background-color: rgb(51 65 85)',
                },
                swipeEnabled: false,
                headerTintColor: 'white',
            }}
            initialRouteName="Forecast"
            drawerContent={(props: DrawerContentComponentProps): ReactElement => SideBarMenu(props)}
        >
            <Drawer.Screen name="Forecast" component={Forecast} />
        </Drawer.Navigator>
    );
}

export default function Navigation(): ReactElement {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="StartInfo"
        >
            <Stack.Screen name="App" component={App} />
            <Stack.Screen name="StartInfo" component={StartInfo} />
        </Stack.Navigator>
    );
}