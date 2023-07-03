import React, { ReactElement } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ForecastTableEl(): ReactElement {
    return (
        <TouchableOpacity className="flex-row items-center justify-between">
            <Text className="text-white font-bold text-lg">Today</Text>
            <Image 
                className="w-14 h-14 mr-4"
                source={require("../../../assets/icons/CloudySunny.png")}
            />
            <View className="flex-row items-center justify-between w-20">
                <Text className="text-white font-bold text-lg">86°</Text>
                <Text className="text-white font-bold text-lg">67°</Text>
            </View>
        </TouchableOpacity>
    );
}