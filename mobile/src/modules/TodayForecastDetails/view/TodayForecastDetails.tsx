import React, { ReactElement } from 'react';
import ForecastDetails from '../../../components/ForecastDetails';
import { View, Text, Image } from 'react-native';

export default function TodayForecastDetails(): ReactElement {
    return (
        <View className=" bg-gray-800 rounded-s-xl p-5 rounded-xl my-3">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                <Image
                    className="w-32 h-32 mt-10"
                    source={require("../../../assets/icons/CloudySunny.png")}
                />
                <ForecastDetails/>
            </View>
            <Text className="text-gray-400 text-base">Tonight - Clear. Winds from SW to SSW at 10 to 11 mph (16.1 to 17.7 kph). The overnight low will be 69°F (20.0°C)</Text>
        </View>
    );
}