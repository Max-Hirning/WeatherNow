import { View } from 'react-native';
import React, { ReactElement } from 'react';
import ForecastDetail from '../UI/ForecastDetail';

export default function ForecastDetails(): ReactElement {
    return (
        <View className="w-36 my-5 ">
            <ForecastDetail title="Feels like" value="76°"/>
            <ForecastDetail title="Humidity" value="63%"/>
            <ForecastDetail title="Visibility" value="10 mi"/>
            <ForecastDetail title="UV Index" value="Low 0"/>
            <ForecastDetail title="Dew point" value="56°"/>
        </View>
    );
}