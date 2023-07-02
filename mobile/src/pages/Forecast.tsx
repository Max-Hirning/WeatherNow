import { ScrollView } from 'react-native';
import React, { ReactElement } from 'react';
import ForecastInfo from '../modules/ForecastInfo/view/ForecastInfo';
import ForecastSlider from '../modules/ForecastSlider/view/ForecastSlider';

export default function Forecast(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4 ">
            <ForecastInfo/>
            <ForecastSlider/>
        </ScrollView>
    );
}