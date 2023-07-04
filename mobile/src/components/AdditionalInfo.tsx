import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { View, Image } from 'react-native';
import React, { ReactElement } from 'react';
import AdditionalInfoEl from '../UI/AdditionalInfoEl';
import { ICurrentWeather } from "../redux/reducers/CurrentWeather";

export default function AdditionalInfo(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    return (
        <View>
            <View className="flex-row items-center justify-between ">
                <AdditionalInfoEl
                    text="Percipitation"
                    value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.precipitationProbabilityAvg)}%`}
                >
                    <Image 
                        className="w-9 h-9 mr-3"
                        source={require("../assets/icons/cloudy/icon.png")}
                    />
                </AdditionalInfoEl>
                <AdditionalInfoEl
                    text="Wind"
                    value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.windSpeedMax)} km/h`}
                >
                    <Image 
                        className="w-9 h-9 mr-3"
                        source={require("../assets/icons/clear/day.png")}
                    />
                </AdditionalInfoEl>
            </View>
            <View className="flex-row items-center justify-between mt-4">
                <AdditionalInfoEl
                    text="Humidity"
                    value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.humidityAvg)}%`}
                >
                    <Image 
                        className="w-9 h-9 mr-3"
                        source={require("../assets/icons/rain/icon.png")}
                    />
                </AdditionalInfoEl>
                <AdditionalInfoEl
                    value="29%"
                    text="Sunset"
                >
                    <Image 
                        className="w-9 h-9 mr-3"
                        source={require("../assets/icons/clear/night.png")}
                    />
                </AdditionalInfoEl>
            </View>
        </View>
    );
}