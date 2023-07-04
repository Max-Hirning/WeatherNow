import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';

interface IProps {
    text: string;
    value: string;
    children : ReactElement;
}

export default function AdditionalInfoEl({ text, children , value } :IProps): ReactElement {
    return (
        <View className="flex-row items-center justify-between ">
            {children}
            <Text className="text-gray-400 text-base">{text}: <Text className="text-white">{value}</Text></Text>
        </View>
    );
}