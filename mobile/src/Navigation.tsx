import Forecast from "./pages/Forecast";
import React, { ReactElement } from 'react';
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Navigation(): ReactElement {
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