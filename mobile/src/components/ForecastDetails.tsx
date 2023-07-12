import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import ForecastDetail from '../UI/ForecastDetail';
import { IForecastWeather } from '../redux/reducers/forecastWeather';

export default function ForecastDetails(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    const uvIndexLabel = (uv: number): string => {
        switch(uv) {
            case 1:
            case 2:
                return "Low";
            case 3:
            case 4:
            case 5:
                return "Medium";
            case 6:
            case 7:
                return "High";
            case 8:
            case 9:
            case 10:
                return "Very High";
            default:
                return "Ex. High";
        }
    }

    return (
        <View className="w-40 my-5 ">
            <ForecastDetail 
                title="Feels like" 
                value={`${Math.round(forecastWeather.current.temp_c)}°`}
            />
            <ForecastDetail 
                title="Humidity" 
                value={`${Math.round(forecastWeather.current.humidity)}%`}
            />
            <ForecastDetail 
                title="Visibility" 
                value={`${Math.round(forecastWeather.current.vis_km)} km`}
            />
            <ForecastDetail 
                title="UV Index" 
                value={`${uvIndexLabel(forecastWeather.current.uv)} ${Math.round(forecastWeather.current.uv)}`}
            />
            <ForecastDetail 
                title="Wind gust" 
                value={`${Math.round(forecastWeather.current.gust_kph)} kph`}
            />
        </View>
    );
}