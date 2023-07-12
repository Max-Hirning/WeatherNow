import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getDayOfWeek } from '../controller/date';
import Collapsible from 'react-native-collapsible';
import React, { ReactElement, useState } from 'react';
import ChevronIcon from "../../../assets/icons/chevron";
import { IHourlyForecast } from '../../../redux/types/forecastWeather';
import HourlyForecastSlider from '../../../components/HourlyForecastSlider';
import { View, Text, Image, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';

interface IProps {
    min: number;
    max: number;
    date: string;
    index: number;
    weatherIcon: string;
}

export default function ForecastTableEl({ date, min, max, index, weatherIcon }: IProps): ReactElement {
    const spinValue = React.useState(new Animated.Value(0))[0];
    const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);
    const hourlyForecast: IHourlyForecast[] = useSelector((state: RootState) => state.forecastWeather.forecast.forecastday[index].hour);

    const openCloseForecastInfo = () => {
        Animated.spring(spinValue, {
            useNativeDriver: true,
            toValue: +!showAdditionalInfo,
        }).start();
        setShowAdditionalInfo((state: boolean) => !state);
    };

    const spinDeg = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const animatedScaleStyle = { transform: [{rotate: spinDeg}] };

    return (
        <View className="my-2 bg-slate-700 rounded-xl px-3">
            <TouchableOpacity 
                onPress={openCloseForecastInfo}
                className="flex-row items-center justify-between"
            >
                <View className="flex-row items-center">
                    <Animated.View style={[animatedScaleStyle]}>
                        <ChevronIcon
                            width={14}
                            height={14}
                            color="white"
                        />
                    </Animated.View>
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
                        <Text className="text-white font-bold text-lg">{Math.round(min)}°</Text>
                        <Text className="text-white font-bold text-lg">{Math.round(max)}°</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={!showAdditionalInfo}>
                <HourlyForecastSlider data={hourlyForecast}/>
            </Collapsible>
        </View>
    );
}