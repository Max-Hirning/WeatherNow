import React, { ReactElement } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Divider from "../../../components/Divider";
import CrossIcon from "../../../assets/icons/cross";
import { getVersion } from 'react-native-device-info';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import SideBarMenuNavEls from '../../../components/SideBarMenuNavEls';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import SideBarMenuLocationEls from '../../../components/SideBarMenuLocationEls';

export default function SideBarMenu(props: DrawerContentComponentProps): ReactElement {
    const closeMenu = (): void => {
        props.navigation.closeDrawer();
    };

    return (
        <DrawerContentScrollView 
            contentContainerStyle={{
                height: "100%",
                display: "flex",
                paddingBottom: 25,
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: 'rgb(30 41 59)',
            }}
            {...props}
        >
            <View style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
            }}>
                <TouchableOpacity 
                    onPress={closeMenu}
                    className="relative left-52"
                >
                    <CrossIcon
                        width={30}
                        height={30}
                        color="white"
                    />
                </TouchableOpacity>
                <SideBarMenuLocationEls/>
                <Divider/>
                <SideBarMenuNavEls/>
            </View>
            <Text className="text-gray-400 text-2xl text-center">Version: {getVersion()}</Text>
        </DrawerContentScrollView>
    );
}