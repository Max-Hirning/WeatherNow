import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getDayOfWeek } from '../controller/date';
import React, { ReactElement, useState } from 'react';
import ChevronIcon from "../../../assets/icons/chevron";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { IHourlyForecast } from '../../../redux/types/forecastWeather';
import HourlyForecastSlider from '../../../components/HourlyForecastSlider';

interface IProps {
    min: number;
    max: number;
    date: string;
    index: number;
    weatherIcon: string;
}

export default function ForecastTableEl({ date, min, max, index, weatherIcon }: IProps): ReactElement {
    const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);
    const hourlyForecast: IHourlyForecast[] = useSelector((state: RootState) => state.forecastWeather.forecast.forecastday[index].hour);

    const getBackgroundColor = (): string => {
        return (showAdditionalInfo) ? "bg-slate-600" : "bg-inherit";
    }

    return (
        <View className={`my-2 ${getBackgroundColor()} rounded-xl px-3`}>
            <TouchableOpacity 
                className="flex-row items-center justify-between"
                onPress={() => setShowAdditionalInfo((state: boolean) => !state)}
            >
                <View className="flex-row items-center">
                    <ChevronIcon
                        width={14}
                        height={14}
                        color="white"
                    />
                    <Text className="text-white font-bold text-lg ml-2">{getDayOfWeek(date).split(',')[0]}</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Image 
                        style={{
                            width: 65, 
                            height: 65
                        }}
                        source={{
                            uri: `https:${weatherIcon}`
                        }} 
                    />
                    <View className="flex-row items-center justify-between w-24 ml-3">
                        <Text className="text-white font-bold text-lg">{min}°</Text>
                        <Text className="text-white font-bold text-lg">{max}°</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {
                (showAdditionalInfo) &&
                <HourlyForecastSlider data={hourlyForecast}/>
            }
        </View>
    );
}