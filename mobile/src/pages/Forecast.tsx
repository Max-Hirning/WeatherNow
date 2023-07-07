import { ScrollView } from 'react-native';
import React, { ReactElement, } from 'react';
import WeekForecast from '../modules/WeekForecast/view/WeekForecast';
import WeekForecastSlider from '../modules/WeekForecastSlider/view/WeekForecastSlider';

export default function Forecast(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4">
            <WeekForecast/>
            <WeekForecastSlider/>
        </ScrollView>
    );
}