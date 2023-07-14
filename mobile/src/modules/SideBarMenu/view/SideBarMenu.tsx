import React, { ReactElement } from 'react';
import { TouchableOpacity } from "react-native";
import Divider from "../../../components/Divider";
import CrossIcon from "../../../assets/icons/cross";
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
            style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: 'rgb(30 41 59)'
            }}
            {...props}
        >
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
        </DrawerContentScrollView>
    );
}