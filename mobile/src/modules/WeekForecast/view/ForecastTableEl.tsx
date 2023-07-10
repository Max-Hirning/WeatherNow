import React, { ReactElement } from 'react';
import { getDayOfWeek } from '../controller/date';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface IProps {
    min: number;
    max: number;
    date: string;
    weatherIcon: string;
}

export default function ForecastTableEl({ date, min, max, weatherIcon }: IProps): ReactElement {
    return (
        <TouchableOpacity className="flex-row items-center justify-between my-2">
            <Text className="text-white font-bold text-lg">{getDayOfWeek(date).split(',')[0]}</Text>
            <View className="flex-row items-center justify-between w-52">
                <Image 
                    style={{
                        width: 65, 
                        height: 65
                    }}
                    source={{
                        uri: `https:${weatherIcon}`
                    }} 
                />
                <View className="flex-row items-center justify-between w-24">
                    <Text className="text-white font-bold text-lg">{min}°</Text>
                    <Text className="text-white font-bold text-lg">{max}°</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}