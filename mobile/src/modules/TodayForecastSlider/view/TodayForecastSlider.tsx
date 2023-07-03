import SliderEl from './SliderEl';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { RootState } from '../../../redux/store';
import { Interval } from '../../../redux/types/TodaysHourlyWeather';
import { ITodaysHourlyWeather } from '../../../redux/reducers/TodaysHourlyWeather';

export default function TodayForecastSlider(): ReactElement {
    const todaysHourlyWeather: ITodaysHourlyWeather = useSelector((state: RootState) => state.todaysHourlyWeather);

    return (
        <FlatList
            horizontal={true}
            className=' my-3 pb-2'
            data={todaysHourlyWeather.data.timelines[0].intervals}
            renderItem={({ item }: { item: Interval }): ReactElement => {
                return (
                    <SliderEl
                        date={item.startTime}
                        temperature={item.values.temperature}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}