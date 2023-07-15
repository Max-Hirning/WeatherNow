import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import Loader from '../modules/Loader/view/Loader';
import WeekForecast from '../modules/WeekForecast/view/WeekForecast';
import TodayForecast from '../modules/TodayForecast/view/TodayForecast';
import TodayForecastSlider from '../modules/TodayForecastSlider/view/TodayForecastSlider';
import TodayForecastDetails from '../modules/TodayForecastDetails/view/TodayForecastDetails';

export default function Forecast(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4" contentContainerStyle={{alignItems: 'center'}}>
            <Loader>
                <>
                    <TodayForecast/>
                    <TodayForecastSlider/>
                    <TodayForecastDetails/>
                    <WeekForecast/>
                    <View className="mb-8"></View>
                </>
            </Loader>
        </ScrollView>
    );
}