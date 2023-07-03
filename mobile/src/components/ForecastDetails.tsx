import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import ForecastDetail from '../UI/ForecastDetail';
import { IDailyWeather } from '../redux/reducers/DailyWeather';

export default function ForecastDetails(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

    return (
        <View className="w-36 my-5 ">
            <ForecastDetail 
                title="Feels like" 
                value={`${Math.round(dailyWeather.data.timelines[0].intervals[0].values.temperature)}°`}
            />
            <ForecastDetail 
                title="Wind speed" 
                value={`${Math.round(dailyWeather.data.timelines[0].intervals[0].values.windSpeed)} km/h`}
            />
            <ForecastDetail 
                title="Visibility" 
                value={`${Math.round(dailyWeather.data.timelines[0].intervals[0].values.cloudBase)} mi`}
            />
        </View>
    );
}