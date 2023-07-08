import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import WeekForecast from '../modules/WeekForecast/view/WeekForecast';
import TodayForecast from '../modules/TodayForecast/view/TodayForecast';
import WeekForecastSlider from '../modules/WeekForecastSlider/view/WeekForecastSlider';
import TodayForecastSlider from '../modules/TodayForecastSlider/view/TodayForecastSlider';
import TodayForecastDetails from '../modules/TodayForecastDetails/view/TodayForecastDetails';

export default function Today(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4">
            <TodayForecast/>
            <TodayForecastSlider/>
            <TodayForecastDetails/>
            <WeekForecast/>
            <WeekForecastSlider/>
            <View className="mb-8"></View>
        </ScrollView>
    );
}