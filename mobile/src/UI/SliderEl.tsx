import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { getWeatherImage } from '../controllers/date';

interface IProps {
    title: string;
    value: string;
    weatherCode: number;
}

export default function SliderEl({ title, value, weatherCode }: IProps): ReactElement {
    return (
        <View className=" mx-3 bg-gray-800 rounded-full w-16 py-4 flex-col items-center justify-between">
            <Text className="text-white text-base">{title}</Text>
            {getWeatherImage(weatherCode, { width: 45, height: 45, marginVertical: 10 })}
            <Text className="text-white text-base">{value}</Text>
        </View>
    );
}