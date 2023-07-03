import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';

interface IProps {
    title: string;
    value: string;
}

export default function ForecastDetail({ title, value }: IProps): ReactElement {
    return (
        <View className="flex-row items-center justify-between my-3 ">
            <Text className="text-gray-400 text-base">{title}</Text>
            <Text className="font-bold text-white text-base">{value}</Text>
        </View>
    );
}