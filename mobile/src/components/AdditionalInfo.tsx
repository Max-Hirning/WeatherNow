import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { View, Image } from 'react-native';
import React, { ReactElement } from 'react';
import AdditionalInfoEl from '../UI/AdditionalInfoEl';
import { IForecastWeather } from "../redux/reducers/forecastWeather";

export default function AdditionalInfo(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="flex-row items-center justify-between ">
            <AdditionalInfoEl
                text="Percipitation"
                value={`${forecastWeather.current.precip_in}%`}
            >
                <Image 
                    className="w-9 h-9 mr-3"
                    source={require("../assets/icons/cloudy/icon.png")}
                />
            </AdditionalInfoEl>
            <AdditionalInfoEl
                text="Humidity"
                value={`${forecastWeather.current.humidity}%`}
            >
                <Image 
                    className="w-9 h-9 mr-3"
                    source={require("../assets/icons/rain/icon.png")}
                />
            </AdditionalInfoEl>
        </View>
    );
}