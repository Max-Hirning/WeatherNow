import SliderEl from './SliderEl';
import { FlatList } from 'react-native';
import React, { ReactElement } from 'react';

export default function ForecastSlider(): ReactElement {
    return (
        <FlatList
            horizontal={true}
            className='my-8 pb-2'
            data={[1,2,3,4,5,6,7]}
            renderItem={(): ReactElement => {
                return (
                    <SliderEl/>
                );
            }}
        />
    );
}