import SliderEl from '../UI/SliderEl';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import { getHourFromDate } from '../controllers/date';
import { Interval } from '../redux/types/TodaysHourlyWeather';
import { ITodaysHourlyWeather } from '../redux/reducers/TodaysHourlyWeather';

export default function HourlyForecastSlider(): ReactElement {
    const todaysHourlyWeather: ITodaysHourlyWeather = useSelector((state: RootState) => state.todaysHourlyWeather);

    return (
        <FlatList
            horizontal={true}
            className=' my-3 pb-2'
            data={todaysHourlyWeather.data.timelines[0].intervals}
            renderItem={({ item }: { item: Interval }): ReactElement => {
                return (
                    <SliderEl
                        weatherCode={item.values.weatherCode}
                        title={getHourFromDate(item.startTime)}
                        value={`${Math.round(item.values.temperatureAvg)}°`}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}