import { View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import ForecastTableEl from './ForecastTableEl';
import { RootState } from '../../../redux/store';
import ForecastTableHeader from './ForecastTableHeader';
import { Interval } from '../../../redux/types/DailyWeather';
import { IDailyWeather } from '../../../redux/reducers/DailyWeather';

export default function WeekForecast(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

    return (
        <View className=" my-3 bg-gray-800 rounded-s-xl px-5 pt-10 pb-5 rounded-xl">
            <ForecastTableHeader/>
            <View>
                {
                    dailyWeather.data.timelines[0].intervals.map(({ startTime, values }: Interval, index: number): ReactElement => {
                        return (
                            <ForecastTableEl 
                                date={startTime}
                                key={index.toString()}
                                min={values.temperatureMin}
                                max={values.temperatureMax}
                                weatherCode={values.weatherCode}
                            />
                        );
                    })
                }
            </View>
        </View>
    );
}