import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

interface IProps {
    title: string;
    value: string;
    isToday?: number;
    weatherIcon: string;
}

export default function SliderEl({ title, value, isToday, weatherIcon }: IProps): ReactElement {
    const getNowTimeStyle = (): string => {
        if(isToday) {
            return "border-white border-2 bg-gray-600"
        } else {
            return "bg-gray-800"
        }
    }

    return (
        <View className={`mx-3 rounded-full w-16 py-4 flex-col items-center justify-between ${getNowTimeStyle()}`}>
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