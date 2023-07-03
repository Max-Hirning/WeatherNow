import React, { ReactElement } from 'react';
import { View, Image, Text } from 'react-native';
import { getHourFromDate } from '../controller/date';

interface IProps {
    date: string;
    temperature: number;
}

export default function SliderEl({ date, temperature }: IProps): ReactElement {
    return (
        <View className=" mx-3 bg-gray-800 rounded-full w-16 py-4 flex-col items-center justify-between">
            <Text className="text-white text-base">{getHourFromDate(date)}</Text>
            <Image 
                className="w-14 h-14 my-2"
                source={require("../../../assets/icons/CloudySunny.png")}
            />
            <Text className="text-white text-base">{Math.round(temperature)}°</Text>
        </View>
    );
}