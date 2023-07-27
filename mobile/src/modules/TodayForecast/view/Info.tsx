import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useEffect } from 'react';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function Info(): ReactElement {
    const navigation = useNavigation();
    const { data, loading, error }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);
    console.log(loading, error);
    useEffect(() => {
        navigation.setOptions({
            title: getPageHeader()
        })
    }, [data, loading, error]);

    const getPageHeader = (): string => {
        // console.log(loading, error)
        if(loading) {
            return "Loading"
        }

        if(error) {
            return "Error"
        }

        return `${data.location.name}`;
    }

    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                <Image 
                    style={{
                        width: 130, 
                        height: 130
                    }}
                    source={{
                        uri: `https:${data.current.condition.icon}`
                    }} 
                />
                <View>
                    <Text className="font-bold text-8xl text-gray-400">{Math.round(data.current.temp_c)}°</Text>
                    <Text className="text-white text-base">{data.current.condition.text}</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-4">
                <Text className="text-gray-400 text-base">Feels like <Text className="text-white">{Math.round(data.current.feelslike_c)}°C</Text></Text>
                <Text className="text-gray-400 text-base">Wind <Text className="text-white">{Math.round(data.current.wind_kph)} KM</Text>/H {data.current.wind_dir}</Text>
            </View>
        </View>
    );
}