import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import ForecastDetails from '../../../components/ForecastDetails';
import { IDailyWeather } from '../../../redux/reducers/DailyWeather';

export default function TodayForecastDetails(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

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
            <Text className="text-gray-400 text-base">Tonight - Clear. Winds from SW to SSW at {Math.round(dailyWeather.data.timelines[0].intervals[0].values.windSpeed)} km/h. The overnight low will be {Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperatureApparent)}°C</Text>
        </View>
    );
}