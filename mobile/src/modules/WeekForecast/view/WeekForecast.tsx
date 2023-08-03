import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ForecastTableEl from './ForecastTableEl';
import { RootState } from '../../../redux/store';
import { IForecastDay } from '../../../redux/types';
import React, { Fragment, ReactElement } from 'react';
import ForecastTableHeader from './ForecastTableHeader';
import { checkDateWithToday } from '../controller/date';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

export default function WeekForecast(): ReactElement {
    const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <View className="my-3 max-w-xl bg-gray-800 px-5 pt-10 pb-5 rounded-xl">
            <ForecastTableHeader/>
            <View>
                {
                    (data.forecast.forecastday).map((day: IForecastDay, index: number): ReactElement => {
                        if(!checkDateWithToday(day.date)) {
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
                        } else {
                            return <Fragment key={index}></Fragment>;
                        }
                    })
                }
            </View>
        </View>
    );
}