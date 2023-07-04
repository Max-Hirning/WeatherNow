import React, { ReactElement } from 'react';
import { View, Image, Text } from 'react-native';
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
            {/* <Image 
                className="w-14 h-14 my-2"
                source={require("../../../assets/icons/CloudySunny.png")}
            /> */}
            {getWeatherImage(weatherCode)}
            <Text className="text-white text-base">{Math.round(temperature)}°</Text>
        </View>
    );
}