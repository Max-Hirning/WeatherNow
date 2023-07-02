import React, { ReactElement } from 'react';
import { View, Image, Text } from 'react-native';

export default function SliderEl(): ReactElement {
    return (
        <View className="mx-3 bg-slate-800 rounded-full w-16 py-4 flex-col items-center justify-between">
            <Text className="text-white text-base">01:00</Text>
            <Image 
                className="w-16 h-14 my-2"
                source={require("../../../assets/icons/CloudySunny.png")}
            />
            <Text className="text-white text-base">29°</Text>
        </View>
    );
}