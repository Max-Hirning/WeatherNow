import React, { ReactElement } from "react";
import ErrorIcon from "../assets/icons/error";
import { showMessage, MessageType } from "react-native-flash-message";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../constants/themes";

export const flashMessage = (message: string, description: string, type: MessageType, backgroundColor: FlashMessageBackgroundColors, color: FlashMessageColors): void => {
    showMessage({
        type,
        message,
        style: {
            backgroundColor: backgroundColor,
        },
        description,
        textStyle: {
            fontSize: 15,
            color: color,
            marginLeft: 10,
            alignItems: 'center',
        },
        titleStyle: {
            fontSize: 18,
            color: color,
            marginTop: 5,
            marginLeft: 10,
            alignItems: 'center',
        },
        duration: 3500,
        animated: true,
        hideOnPress: true,
        animationDuration: 500,
        icon: (): ReactElement => {
        return (
                <ErrorIcon
                    width={25}
                    height={25}
                    color={color}
                />
            )
        },
    });
}