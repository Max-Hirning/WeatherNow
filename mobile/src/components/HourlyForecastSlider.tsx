import SliderEl from '../UI/SliderEl';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import { getHourFromDate } from '../controllers/date';
import { IHourlyForecast } from '../redux/types/forecastWeather';
import { IForecastWeather } from '../redux/reducers/forecastWeather';

export default function HourlyForecastSlider(): ReactElement {
    const forecastWeather: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    return (
        <FlatList
            horizontal={true}
            className=' my-3 pb-2'
            data={forecastWeather.forecast.forecastday[0].hour}
            renderItem={({ item }: { item: IHourlyForecast }): ReactElement => {
                return (
                    <SliderEl
                        value={`${item.temp_c}°`}
                        weatherIcon={item.condition.icon}
                        title={getHourFromDate(item.time)}
                    />
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}