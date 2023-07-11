import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';

export default function ForecastTableHeader(): ReactElement {
    return (
        <View className=" flex-row items-center justify-between w-24 absolute right-5 top-3 mr-3">
            <Text className="text-gray-400 text-base">Low</Text>
            <Text className="text-gray-400 text-base">|</Text>
            <Text className="text-gray-400 text-base">High</Text>
        </View>
    );
}