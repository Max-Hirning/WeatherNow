import { ScrollView } from 'react-native';
import React, { ReactElement } from 'react';
import ForecastInfo from '../modules/ForecastInfo/ForecastInfo';

export default function Forecast(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4 ">
            <ForecastInfo/>
        </ScrollView>
    );
}