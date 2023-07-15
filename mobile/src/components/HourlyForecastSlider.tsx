import SliderEl from '../UI/SliderEl';
import { FlatList } from 'react-native';
import React, { ReactElement } from 'react';
import { IHourlyForecast } from '../redux/types';
import { getHourFromDate } from '../controllers/date';
import { checkDateWithToday } from '../modules/TodayForecastSlider/controller/date';

interface PropsI {
    data: IHourlyForecast[]
}

export default function HourlyForecastSlider({ data }: PropsI): ReactElement {
    const isToday = (date: string, index: number): number|undefined => {
        if(checkDateWithToday(date)) {
            return index;
        } else {
            return undefined;
        }
    }

    return (
        <FlatList
            data={data}
            horizontal={true}
            className='my-3 pb-2'
            renderItem={({ item, index }: { item: IHourlyForecast, index: number }): ReactElement => {
                return (
                    <SliderEl
                        weatherIcon={item.condition.icon}
                        title={getHourFromDate(item.time)}
                        isToday={isToday(item.time, index)}
                        value={`${Math.round(item.temp_c)}°`}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}