import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { getHourFromDate } from '../controller/date';
import { getWeatherImage } from '../../../controllers/date';

interface IProps {
    date: string;
    weatherCode: number;
    temperature: number;
}

export default function SliderEl({ date, temperature, weatherCode }: IProps): ReactElement {
    return (
        <View className=" mx-3 bg-gray-800 rounded-full w-16 py-4 flex-col items-center justify-between">
            <Text className="text-white text-base">{getHourFromDate(date)}</Text>
            {getWeatherImage(weatherCode, { width: 45, height: 45, marginVertical: 10 })}
            <Text className="text-white text-base">{Math.round(temperature)}°</Text>
        </View>
    );
}