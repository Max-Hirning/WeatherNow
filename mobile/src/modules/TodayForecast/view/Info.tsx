import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useEffect } from 'react';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function Info(): ReactElement {
    const navigation = useNavigation();
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    useEffect(() => {
        navigation.setOptions({
            title: `${forecastWeather.location.name}`
        })
    }, [forecastWeather]);

    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                <Image 
                    style={{
                        width: 130, 
                        height: 130
                    }}
                    source={{
                        uri: `https:${forecastWeather.current.condition.icon}`
                    }} 
                />
                <View>
                    <Text className="font-bold text-8xl text-gray-400">{Math.round(forecastWeather.current.temp_c)}°</Text>
                    <Text className="text-white text-base">{forecastWeather.current.condition.text}</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-4">
                <Text className="text-gray-400 text-base">Feels like <Text className="text-white">{Math.round(forecastWeather.current.feelslike_c)}°C</Text></Text>
                <Text className="text-gray-400 text-base">Wind <Text className="text-white">{Math.round(forecastWeather.current.wind_kph)} KM</Text>/H {forecastWeather.current.wind_dir}</Text>
            </View>
        </View>
    );
}