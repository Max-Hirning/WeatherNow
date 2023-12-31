import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { getDate } from '../controller/date';

export default function DateLabel(): ReactElement {
    return (
        <View 
            style={{ marginHorizontal: "25%" }}
            className="mb-4 w-44 h-8 flex-row items-center justify-center bg-gray-800 rounded-full"
        >
            <Text className="text-gray-400 text-base">{getDate()}</Text>
        </View>
    );
}