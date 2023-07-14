import React, { ReactElement } from 'react';
import { Text, TouchableOpacity } from "react-native";

interface IProps {
    text: string;
    children: ReactElement;
    actionFunc: () => void;
}

export default function SideBarMenuNavEl({ text, children, actionFunc }: IProps): ReactElement {
    return (
        <TouchableOpacity 
            onPress={actionFunc}    
            className="my-4 flex-row items-center"
        >
            {children}
            <Text className="ml-5 text-white font-bold text-2xl">{text}</Text>
        </TouchableOpacity>
    );
}