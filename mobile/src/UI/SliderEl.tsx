import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

interface IProps {
    title: string;
    value: string;
    weatherIcon: string;
}

export default function SliderEl({ title, value, weatherIcon }: IProps): ReactElement {
    return (
        <View className=" mx-3 bg-gray-800 rounded-full w-16 py-4 flex-col items-center justify-between">
            <Text className="text-white text-base">{title}</Text>
            <Image 
                    style={{
                        width: 70, 
                        height: 70,
                        marginVertical: 10
                    }}
                    source={{
                        uri: `https:${weatherIcon}`
                    }} 
                />
            <Text className="text-white text-base">{value}</Text>
        </View>
    );
}