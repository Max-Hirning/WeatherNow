import React, { ReactElement } from 'react';
import { ScrollView, View } from 'react-native';
import ForecastInfo from '../modules/ForecastInfo/view/ForecastInfo';
import ForecastTable from '../modules/ForecastTable/view/ForecastTable';
import ForecastSlider from '../modules/ForecastSlider/view/ForecastSlider';
import ForecastDetails from '../modules/ForecastDetails/view/ForecastDetails';

export default function Forecast(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4">
            <ForecastInfo/>
            <ForecastSlider/>
            <ForecastTable/>
            <ForecastDetails/>
            <View className="mb-8"></View>
        </ScrollView>
    );
}