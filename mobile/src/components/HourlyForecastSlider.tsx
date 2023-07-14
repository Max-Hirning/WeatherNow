import SliderEl from '../UI/SliderEl';
import { FlatList } from 'react-native';
import React, { ReactElement, useRef } from 'react';
import { getHourFromDate } from '../controllers/date';
import { IHourlyForecast } from '../redux/types';
import { checkDateWithToday } from '../modules/TodayForecastSlider/controller/date';

interface PropsI {
    data: IHourlyForecast[]
}

export default function HourlyForecastSlider({ data }: PropsI): ReactElement {
    const initialScrollIndex = useRef(0);

    const test = (date: string, index: number): number|undefined => {
        if(checkDateWithToday(date)) {
            initialScrollIndex.current = index;
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
            initialScrollIndex={initialScrollIndex.current}
            renderItem={({ item, index }: { item: IHourlyForecast, index: number }): ReactElement => {
                return (
                    <SliderEl
                        isToday={test(item.time, index)}
                        weatherIcon={item.condition.icon}
                        title={getHourFromDate(item.time)}
                        value={`${Math.round(item.temp_c)}°`}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}