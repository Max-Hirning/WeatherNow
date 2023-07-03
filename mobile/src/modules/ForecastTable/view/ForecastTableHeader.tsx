import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';

export default function ForecastTableHeader(): ReactElement {
    return (
        <View className="flex-row items-center justify-between w-20 absolute right-5 top-3">
            <Text className="text-gray-400 text-base">High</Text>
            <Text className="text-gray-400 text-base">|</Text>
            <Text className="text-gray-400 text-base">Low</Text>
        </View>
    );
}