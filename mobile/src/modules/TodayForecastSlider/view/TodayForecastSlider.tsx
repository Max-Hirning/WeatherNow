import SliderEl from './SliderEl';
import { FlatList } from 'react-native';
import React, { ReactElement } from 'react';

export default function TodayForecastSlider(): ReactElement {
    return (
        <FlatList
            horizontal={true}
            className=' my-3 pb-2'
            data={[1,2,3,4,5,6,7]}
            renderItem={(): ReactElement => {
                return (
                    <SliderEl/>
                );
            }}
            keyExtractor={(_: any, index: number): string => index.toString()}
        />
    );
}