import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

export default function ForecastDetails(): ReactElement {
    return (
        <View className="bg-gray-800 rounded-s-xl p-5 rounded-xl my-3">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                <Image
                    className="w-32 h-32 mt-10"
                    source={require("../../../assets/icons/CloudySunny.png")}
                />
                <View className="w-36 my-5">
                    <View className="flex-row items-center justify-between my-3">
                        <Text className="text-gray-400 text-base">Feels like</Text>
                        <Text className="font-bold text-white text-base">76°</Text>
                    </View>
                    <View className="flex-row items-center justify-between my-3">
                        <Text className="text-gray-400 text-base">Humidity</Text>
                        <Text className="font-bold text-white text-base">63%</Text>
                    </View>
                    <View className="flex-row items-center justify-between my-3">
                        <Text className="text-gray-400 text-base">Visibility</Text>
                        <Text className="font-bold text-white text-base">10 mi</Text>
                    </View>
                    <View className="flex-row items-center justify-between my-3">
                        <Text className="text-gray-400 text-base">UV Index</Text>
                        <Text className="font-bold text-white text-base">Low 0</Text>
                    </View>
                    <View className="flex-row items-center justify-between my-3">
                        <Text className="text-gray-400 text-base">Dew point</Text>
                        <Text className="font-bold text-white text-base">56°</Text>
                    </View>
                </View>
            </View>
            <Text className="text-gray-400 text-base">Tonight - Clear. Winds from SW to SSW at 10 to 11 mph (16.1 to 17.7 kph). The overnight low will be 69°F (20.0°C)</Text>
        </View>
    );
}