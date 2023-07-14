import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { RootState } from '../../../redux/store';
import { IHourlyForecast } from '../../../redux/types';
import HourlyForecastSlider from '../../../components/HourlyForecastSlider';

export default function TodayForecastSlider(): ReactElement {
    const hourlyForecast: IHourlyForecast[] = useSelector((state: RootState) => state.forecastWeather.forecast.forecastday[0].hour);

    return (
        <HourlyForecastSlider data={hourlyForecast}/>
    );
}