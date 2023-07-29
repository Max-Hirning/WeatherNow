import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ScrollView, View } from 'react-native';
import Loader from '../modules/Loader/view/Loader';
import React, { ReactElement, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../types/Navigation';
import { IForecastWeather } from '../redux/reducers/forecastWeather';
import WeekForecast from '../modules/WeekForecast/view/WeekForecast';
import TodayForecast from '../modules/TodayForecast/view/TodayForecast';
import TodayForecastSlider from '../modules/TodayForecastSlider/view/TodayForecastSlider';
import TodayForecastDetails from '../modules/TodayForecastDetails/view/TodayForecastDetails';

export default function Forecast(): ReactElement {
    const navigation = useNavigation<ScreenNavigationProp>();
    const { data, loading, error }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    useEffect(() => {
        navigation.setOptions({
            title: getPageHeader()
        })
    }, [data, loading, error]);

    const getPageHeader = (): string => {
        if(loading) return "Loading";

        if(error) return "Error";

        return `${data.location.name}`;
    }

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