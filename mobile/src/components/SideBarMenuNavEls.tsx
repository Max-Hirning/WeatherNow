import Share from 'react-native-share';
import React, { ReactElement } from 'react';
import StarIcon from "../assets/icons/star";
import CloudIcon from "../assets/icons/cloud";
import ShareIcon from "../assets/icons/share";
import MessageIcon from "../assets/icons/message";
import { Text, View, Linking  } from "react-native";
import SideBarMenuNavEl from '../UI/SideBarMenuNavEl';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../types/Navigation';
import { MessagesTypes } from '../constants/messagesTypes';
import { flashMessage } from '../controllers/flashMessage';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../constants/themes';

export default function SideBarMenuNavEls(): ReactElement {
    const navigation = useNavigation<ScreenNavigationProp>();

    const moveToWeather = (): void => {
        navigation.navigate("Forecast");
    }

    const moveToFeedBack = (): void => {
        navigation.navigate("FeedBack");
    }

    const openAppInGooglePlay = (): void => {
        Linking.openURL("https://reactnative.dev/");
    }

    const shareApp = async (): Promise<void> => {
        try {
            await Share.open({ url: "https://reactnative.dev/" })
        } catch {
            flashMessage("Smth went wrong", "Pls contact us: share error", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
        }
    }

    return (
        <View className="mb-4">
            <Text className="text-gray-400 text-3xl">Tools</Text>
            <SideBarMenuNavEl 
                text="Weather" 
                actionFunc={moveToWeather}
            >
                <CloudIcon
                    width={30}
                    height={30}
                    color="white"
                />
            </SideBarMenuNavEl>
            <SideBarMenuNavEl 
                text="Send feedback" 
                actionFunc={moveToFeedBack}
            >
                <MessageIcon
                    width={30}
                    height={30}
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