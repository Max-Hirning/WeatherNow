import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

export default function Info(): ReactElement {
    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                <Image source={require("../../../assets/icons/CloudySunny.png")}/>
                <View>
                    <Text className="font-bold text-8xl text-gray-400">33°</Text>
                    <Text className="text-white text-base">Partly cloudly</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <Text className="text-gray-400 text-base">29°/27° | Feels like <Text className="text-white">39°C</Text></Text>
                <Text className="text-gray-400 text-base">|</Text>
                <Text className="text-gray-400 text-base">Wind <Text className="text-white">9 KM</Text>/H WSW</Text>
            </View>
        </View>
    );
}