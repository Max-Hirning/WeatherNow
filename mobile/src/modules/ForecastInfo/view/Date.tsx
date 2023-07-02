import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';

export default function Date(): ReactElement {
    return (
        <View 
            style={{ marginHorizontal: "25%" }}
            className="my-2 w-44 h-8 flex-row items-center justify-center bg-gray-800 rounded-full"
        >
            <Text className="text-gray-400 text-base">Saturday, 11 Sept</Text>
        </View>
    );
}