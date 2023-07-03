import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

interface IProps {
    text: string;
    value: string;
    children : ReactElement;
}

export default function AdditionalInfoEl({ text, children , value } :IProps): ReactElement {
    return (
        <View className="flex-row items-center justify-between ">
            {/* <Image 
                source={image}
                className="w-14 h-12 mr-1"
            /> */}
            {children}
            <Text className="text-gray-400 text-base">{text}: <Text className="text-white">{value}</Text></Text>
        </View>
    );
}