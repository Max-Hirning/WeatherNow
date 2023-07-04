import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import { ICurrentWeather } from '../../../redux/reducers/CurrentWeather';
import { getWeatherImage } from '../../../controllers/date';

export default function Info(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                {/* <Image source={require("../../../assets/icons/CloudySunny.png")}/> */}
                {getWeatherImage(currentWeather.data.timelines[0].intervals[0].values.weatherCode)}
                <View>
                    <Text className="font-bold text-8xl text-gray-400">{Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureAvg)}°</Text>
                    <Text className="text-white text-base">Partly cloudly</Text>
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