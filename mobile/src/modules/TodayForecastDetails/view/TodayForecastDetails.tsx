import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import ForecastDetails from '../../../components/ForecastDetails';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function TodayForecastDetails(): ReactElement {
    const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="bg-gray-800 rounded-s-xl p-5 rounded-xl my-3 max-w-sm">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                <Image 
                    style={{
                        width: 130, 
                        height: 130,
                        marginTop: 50
                    }}
                    source={{
                        uri: `https:${data.current.condition.icon}`
                    }} 
                />
                <ForecastDetails/>
            </View>
            <Text className="text-gray-400 text-base">Today - {data.current.condition.text}. Winds from {data.current.wind_dir} to {Math.round(data.current.wind_kph)} kph. The overnight low will be {Math.round(data.current.feelslike_c)}°C</Text>
        </View>
    );
}