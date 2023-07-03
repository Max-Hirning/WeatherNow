import { View } from 'react-native';
import React, { ReactElement } from 'react';

export default function Divider(): ReactElement {
    return (
        <View className="mt-8 mb-6 bg-gray-400 " style={{height: 1}}></View>
    );
}