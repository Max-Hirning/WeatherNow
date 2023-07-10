import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import ForecastDetail from '../UI/ForecastDetail';
import { IForecastWeather } from '../redux/reducers/forecastWeather';

export default function ForecastDetails(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="w-40 my-5 ">
            <ForecastDetail 
                title="Feels like" 
                value={`${forecastWeather.current.temp_c}°`}
            />
            <ForecastDetail 
                title="Humidity" 
                value={`${forecastWeather.current.humidity}%`}
            />
            <ForecastDetail 
                title="Visibility" 
                value={`${forecastWeather.current.vis_km} km`}
            />
            <ForecastDetail 
                title="UV Index" 
                value={`Low ${forecastWeather.current.uv}`}
            />
            <ForecastDetail 
                title="Wind gust" 
                value={`${forecastWeather.current.gust_kph} kph`}
            />
        </View>
    );
}