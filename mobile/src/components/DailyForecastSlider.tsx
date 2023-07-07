import SliderEl from '../UI/SliderEl';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import { Interval } from '../redux/types/DailyWeather';
import { IDailyWeather } from '../redux/reducers/DailyWeather';

export default function DailyForecastSlider(): ReactElement {
    const dailyWeather: IDailyWeather = useSelector((state: RootState) => state.dailyWeather);

    function getDayOfWeek(dateString: string): string {
        const date = new Date(dateString);
        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const dayIndex = date.getDay();
        
        return daysOfWeek[dayIndex];
    }

    return (
        <FlatList
            horizontal={true}
            className=' my-3 pb-2'
            data={dailyWeather.data.timelines[0].intervals}
            renderItem={({ item }: { item: Interval }): ReactElement => {
                return (
                    <SliderEl
                        title={getDayOfWeek(item.startTime)}
                        weatherCode={item.values.weatherCode}
                        value={`${Math.round(item.values.temperatureAvg)}°`}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}