import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import { getWindDirection } from '../controller/windDirection';
import ForecastDetails from '../../../components/ForecastDetails';
import { ICurrentWeather } from '../../../redux/reducers/CurrentWeather';

export default function TodayForecastDetails(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    return (
        <View className=" bg-gray-800 rounded-s-xl p-5 rounded-xl my-3">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                <Image
                    className="w-32 h-32 mt-5"
                    source={require("../../../assets/icons/CloudySunny.png")}
                />
                <ForecastDetails/>
            </View>
            <Text className="text-gray-400 text-base">Tonight - /Clear\. Winds from {getWindDirection(currentWeather.data.timelines[0].intervals[0].values.windDirectionAvg)} at {currentWeather.data.timelines[0].intervals[0].values.windSpeedMin} to {currentWeather.data.timelines[0].intervals[0].values.windSpeedMax} kph. The overnight low will be {currentWeather.data.timelines[0].intervals[0].values.temperatureMin}°C</Text>
        </View>
    );
}