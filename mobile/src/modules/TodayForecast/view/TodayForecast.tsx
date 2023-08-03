import Info from './Info';
import DateLabel from './DateLabel';
import { View } from 'react-native';
import React, { ReactElement } from 'react';
import Divider from '../../../components/Divider';
import AdditionalInfo from '../../../components/AdditionalInfo';

export default function TodayForecast(): ReactElement {
    return (
        <View className="max-w-md my-3">
            <DateLabel/>
            <Info/>
            <Divider/>
            <AdditionalInfo/>
        </View>
    );
}