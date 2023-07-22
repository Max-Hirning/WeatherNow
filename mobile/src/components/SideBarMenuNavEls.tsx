import Share from 'react-native-share';
import React, { ReactElement } from 'react';
import StarIcon from "../assets/icons/star";
import ShareIcon from "../assets/icons/share";
import MessageIcon from "../assets/icons/message";
import { Text, View, Linking  } from "react-native";
import SideBarMenuNavEl from '../UI/SideBarMenuNavEl';
import { useNavigation } from '@react-navigation/native';

export default function SideBarMenuNavEls(): ReactElement {
    const navigation = useNavigation<any>();

    const moveToFeedBack = (): void => {
        navigation.navigate("FeedBack");
    }

    const openAppInGooglePlay = (): void => {
        Linking.openURL("market://details?id=com.finance.tracker");
    }

    const shareApp = async (): Promise<void> => {
        try {
            await Share.open({ url: "link" })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View className="mb-4">
            <Text className="text-gray-400 text-3xl">Tools</Text>
            <SideBarMenuNavEl 
                text="Send feedback" 
                actionFunc={moveToFeedBack}
            >
                <MessageIcon
                    width={25}
                    height={25}
                    color="white"
                />
            </SideBarMenuNavEl>
            <SideBarMenuNavEl 
                text="Rate this app" 
                actionFunc={openAppInGooglePlay}
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
        </View>
    );
}