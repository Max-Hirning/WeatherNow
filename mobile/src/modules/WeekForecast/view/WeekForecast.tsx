import { View } from 'react-native';
import React, { ReactElement } from 'react';
import ForecastTableEl from './ForecastTableEl';
import ForecastTableHeader from './ForecastTableHeader';

export default function WeekForecast(): ReactElement {
    return (
        <View className=" my-3 bg-gray-800 rounded-s-xl px-5 pt-10 pb-5 rounded-xl">
            <ForecastTableHeader/>
            <View>
                {
                    [1,2,3,4,5,6,7].map((el: number, index: number): ReactElement => {
                        return (
                            <ForecastTableEl key={index.toString()}/>
                        );
                    })
                }
            </View>
        </View>
    );
}