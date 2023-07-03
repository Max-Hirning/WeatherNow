import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import { IDailyWeather } from '../../../redux/reducers/DailyWeather';

export default function Info(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

    return (
        <View className=" flex-col">
            <View className="flex-row items-center justify-between">
                <Image source={require("../../../assets/icons/CloudySunny.png")}/>
                <View>
                    <Text className="font-bold text-8xl text-gray-400">{Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperature)}°</Text>
                    <Text className="text-white text-base">Partly cloudly</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <Text className="text-gray-400 text-base">{Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperatureApparent)}°/{Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperature)}° | Feels like <Text className="text-white">{(Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperatureApparent) + Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperature))/2}°C</Text></Text>
                <Text className="text-gray-400 text-base">|</Text>
                <Text className="text-gray-400 text-base">Wind <Text className="text-white">{Math.round(dailyWeather.data.timelines[0].intervals[0].values.windSpeed)} KM</Text>/H WSW</Text>
            </View>
        </View>
    );
}