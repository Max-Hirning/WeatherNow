import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { View, Image } from 'react-native';
import React, { ReactElement } from 'react';
import AdditionalInfoEl from '../UI/AdditionalInfoEl';
import { IDailyWeather } from '../redux/reducers/DailyWeather';

export default function AdditionalInfo(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

    return (
        <View className="flex-row items-center justify-between ">
            <AdditionalInfoEl
                text="Percipitation"
                value={`${Math.round(dailyWeather.data.timelines[0].intervals[0].values.precipitationIntensity)}%`}
            >
                <Image 
                    className="w-14 h-12 mr-1"
                    source={require("../assets/icons/CloudySunny.png")}
                />
            </AdditionalInfoEl>
            <AdditionalInfoEl
                text="Wind"
                value={`${Math.round(dailyWeather.data.timelines[0].intervals[0].values.windSpeed)}km/h`}
            >
                <Image 
                    className="w-10 h-10 mr-1"
                    source={require("../assets/icons/Sun.png")}
                />
            </AdditionalInfoEl>
        </View>
    );
}