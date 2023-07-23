import FeedBack from './pages/FeedBack';
import Forecast from "./pages/Forecast";
import { AppState, Button } from 'react-native';
import { reset } from "./redux/reducers/locations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import React, { ReactElement, useEffect } from 'react';
import { ILocations } from "./redux/reducers/locations";
import StartInfo from "./modules/StartInfo/view/StartInfo";
import { saveInAsyncStorage } from "./controllers/asyncStorage";
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
            <Drawer.Screen name="FeedBack" options={{ title: "Send feedback" }} component={FeedBack} />
        </Drawer.Navigator>
    );
}

export default function Navigation(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const locations: ILocations = useSelector((state: RootState) => state.locations);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if(nextAppState === "background") {
                saveInAsyncStorage("locations", JSON.stringify(locations));
            }
        });
        
        return () => {
            subscription.remove();
        };
    }, [locations]);

    return (
        <>
            <Button
                title="Press"
                onPress={async () => {
                try {
                    dispatch(reset());
                    AsyncStorage.removeItem("tutorialFinished");
                    AsyncStorage.removeItem("locations");
                } catch (error) {
                    console.error(error);
                }
                }}
            />
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="StartInfo"
            >
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="StartInfo" component={StartInfo} />
            </Stack.Navigator>
        </>
    );
}