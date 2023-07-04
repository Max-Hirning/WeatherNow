import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import ForecastDetail from '../UI/ForecastDetail';
import { ICurrentWeather } from '../redux/reducers/CurrentWeather';

export default function ForecastDetails(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    return (
        <View className="w-36 my-5 ">
            <ForecastDetail 
                title="Feels like" 
                value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.temperatureApparentAvg)}°`}
            />
            <ForecastDetail 
                title="Humidity" 
                value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.humidityAvg)}%`}
            />
            <ForecastDetail 
                title="Visibility" 
                value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.visibilityAvg)} mi`}
            />
            <ForecastDetail 
                title="UV Index" 
                value={`Low ${Math.round(currentWeather.data.timelines[0].intervals[0].values.uvIndexAvg)}`}
            />
            <ForecastDetail 
                title="Dew point" 
                value={`${Math.round(currentWeather.data.timelines[0].intervals[0].values.dewPointAvg)}°`}
            />
        </View>
    );
}