import Info from './view/Info';
import { View } from 'react-native';
import Divider from '../../UI/Divider';
import React, { ReactElement } from 'react';
import AdditionalInfo from './view/AdditionalInfo';
import Date from './view/Date';

export default function ForecastInfo(): ReactElement {
    return (
        <View>
            <Date/>
            <Info/>
            <Divider/>
            <AdditionalInfo/>
        </View>
    );
}