import { View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import ForecastTableEl from './ForecastTableEl';
import { RootState } from '../../../redux/store';
import ForecastTableHeader from './ForecastTableHeader';
import { IForecastDay } from '../../../redux/types';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function WeekForecast(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="my-3 bg-gray-800 rounded-s-xl px-5 pt-10 pb-5 rounded-xl">
            <ForecastTableHeader/>
            <View>
                {
                    (forecastWeather.forecast.forecastday).map((day: IForecastDay, index: number): ReactElement => {
                        return (
                            <ForecastTableEl 
                                index={index}
                                date={day.date}
                                key={index.toString()}
                                min={day.day.mintemp_c}
                                max={day.day.maxtemp_c}
                                weatherIcon={day.day.condition.icon}
                            />
                        );
                    })
                }
            </View>
        </View>
    );
}