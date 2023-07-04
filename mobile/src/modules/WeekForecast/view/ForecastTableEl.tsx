import React, { ReactElement } from 'react';
import { getDayOfWeek } from '../controller/date';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getWeatherImage } from '../../../controllers/date';

interface IProps {
    min: number;
    max: number;
    date: string;
    weatherCode: number;
}

export default function ForecastTableEl({ date, min, max, weatherCode }: IProps): ReactElement {
    return (
        <TouchableOpacity className=" flex-row items-center justify-between">
            <Text className="text-white font-bold text-lg">{getDayOfWeek(date).split(',')[0]}</Text>
            <View className=" flex-row items-center justify-between w-44">
                {/* <Image 
                    className="w-14 h-14 mr-4"
                    source={require("../../../assets/icons/CloudySunny.png")}
                /> */}
                {getWeatherImage(weatherCode)}
                <View className="flex-row items-center justify-between w-20">
                    <Text className="text-white font-bold text-lg">{Math.round(min)}°</Text>
                    <Text className="text-white font-bold text-lg">{Math.round(max)}°</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}