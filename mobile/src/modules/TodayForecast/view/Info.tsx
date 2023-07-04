import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { RootState } from '../../../redux/store';
import { getWeatherImage } from '../../../controllers/date';
import { ICurrentWeather } from '../../../redux/reducers/CurrentWeather';
import { weatherCodeFullDay } from '../../../model/weatherCode';

export default function Info(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                {getWeatherImage(currentWeather.data.timelines[0].intervals[0].values.weatherCode, { width: 130, height: 130 })}
                <View>
                    <Text className="font-bold text-8xl text-gray-400">{Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureAvg)}°</Text>
                    <Text className="text-white text-base">{weatherCodeFullDay[`${currentWeather.data.timelines[0].intervals[0].values.weatherCode}`]}</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <Text className="text-gray-400 text-base">{Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureMin)}°/{Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureMax)}° | Feels like <Text className="text-white">{Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureApparentAvg)}°C</Text></Text>
                <Text className="text-gray-400 text-base">|</Text>
                <Text className="text-gray-400 text-base">Wind <Text className="text-white">{Math.round(currentWeather.data.timelines[0].intervals[0].values.windSpeedAvg)} KM</Text>/H WSW</Text>
            </View>
        </View>
    );
}