import Date from './Date';
import Info from './Info';
import { View } from 'react-native';
import Divider from '../../../UI/Divider';
import React, { ReactElement } from 'react';
import AdditionalInfo from '../../../components/AdditionalInfo';

export default function TodayForecast(): ReactElement {
    return (
        <View className=" my-3">
            <Date/>
            <Info/>
            <Divider/>
            <AdditionalInfo/>
        </View>
    );
}