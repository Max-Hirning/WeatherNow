import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import TodayForecast from '../modules/TodayForecast/view/TodayForecast';
import TodayForecastSlider from '../modules/TodayForecastSlider/view/TodayForecastSlider';
import TodayForecastDetails from '../modules/TodayForecastDetails/view/TodayForecastDetails';

export default function Today(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4">
            <TodayForecast/>
            <TodayForecastSlider/>
            <TodayForecastDetails/>
            <View className="mb-8"></View>
        </ScrollView>
    );
}