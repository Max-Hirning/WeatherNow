import { Text, View } from 'react-native';
import React, { ReactElement } from 'react';

interface IProps {
    title: string;
    children: ReactElement;
}

export default function FormEl({ title, children }: IProps): ReactElement {
    return (
        <View className=' my-3'>
            <Text className="text-gray-400 text-2xl ml-2 mb-1">{title}</Text>
            {children}
        </View>
    )
}