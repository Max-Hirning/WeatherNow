import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { View, Image } from 'react-native';
import React, { ReactElement } from 'react';
import AdditionalInfoEl from '../UI/AdditionalInfoEl';
import { IForecastWeather } from "../redux/reducers/forecastWeather";

export default function AdditionalInfo(): ReactElement {
    const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="flex-row items-center justify-between ">
            <AdditionalInfoEl
                text="Percipitation"
                value={`${Math.round(data.current.precip_in)}%`}
            >
                <Image 
                    className="w-9 h-9 mr-3"
                    source={require("../assets/images/cloudy.png")}
                />
            </AdditionalInfoEl>
            <AdditionalInfoEl
                text="Humidity"
                value={`${Math.round(data.current.humidity)}%`}
            >
                <Image 
                    className="w-9 h-9 mr-3"
                    source={require("../assets/images/rain.png")}
                />
            </AdditionalInfoEl>
        </View>
    );
}