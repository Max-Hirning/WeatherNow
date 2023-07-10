import Share from 'react-native-share';
import React, { ReactElement } from 'react';
import SideBarMenuNavEl from './SideBarMenuNavEl';
import StarIcon from "../../../assets/icons/star";
import Divider from "../../../components/Divider";
import ShareIcon from "../../../assets/icons/share";
import CrossIcon from "../../../assets/icons/cross";
import { Text, TouchableOpacity } from "react-native";
import MessageIcon from "../../../assets/icons/message";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function SideBarMenu(props: DrawerContentComponentProps): ReactElement {
    const closeMenu = (): void => {
        props.navigation.closeDrawer();
    };

    const shareApp = async (): Promise<void> => {
        try {
            const res = await Share.open({ url: "link" })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
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
            <Divider/>
            <Text className="text-gray-400 text-3xl">Tools</Text>
            <SideBarMenuNavEl 
                text="Send feedback" 
                actionFunc={shareApp}
            >
                <MessageIcon
                    width={25}
                    height={25}
                    color="white"
                />
            </SideBarMenuNavEl>
            <SideBarMenuNavEl 
                text="Rate this app" 
                actionFunc={shareApp}
            >
                <StarIcon
                    width={30}
                    height={30}
                    color="white"
                />
            </SideBarMenuNavEl>
            <SideBarMenuNavEl 
                text="Share this app" 
                actionFunc={shareApp}
            >
                <ShareIcon
                    width={30}
                    height={30}
                    color="white"
                />
            </SideBarMenuNavEl>
        </DrawerContentScrollView>
    );
}