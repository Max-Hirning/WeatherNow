import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import ForecastDetails from '../../../components/ForecastDetails';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function TodayForecastDetails(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className=" bg-gray-800 rounded-s-xl p-5 rounded-xl my-3">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                <Image 
                    style={{
                        width: 130, 
                        height: 130,
                        marginTop: 50
                    }}
                    source={{
                        uri: `https:${forecastWeather.current.condition.icon}`
                    }} 
                />
                <ForecastDetails/>
            </View>
            <Text className="text-gray-400 text-base">Tonight - {forecastWeather.current.condition.text}. Winds from {forecastWeather.current.wind_dir} to {forecastWeather.current.wind_kph} kph. The overnight low will be {forecastWeather.current.feelslike_c}°C</Text>
        </View>
    );
}