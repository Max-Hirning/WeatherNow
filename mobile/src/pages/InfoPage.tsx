import React, { ReactElement } from 'react';
import ArrowIcon from "../assets/icons/arrow";
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default function InfoPage(): ReactElement {
    return (
        <View className="bg-slate-700 pt-4 justify-between flex-1 items-center">
            <TouchableOpacity className='absolute top-5 right-5'>
                <Text className="text-white text-base">Skip</Text>
            </TouchableOpacity>
            <View>
            <Image 
                source={require('../assets/images/sunny.gif')} 
                style={{ width: 250, height: 250, marginTop: 60 }} 
            />
            </View>
            <View className='h-96 items-center pt-20'>
                <View 
                    className='absolute bg-white' 
                    style={{ width: 600, height: 600, borderRadius: 600/2 }}
                />
                <Text className="w-56 text-center text-black text-3xl font-bold">Detailed Hourly Forecast</Text>
                <Text className="w-60 pt-4 text-center text-gray-400 text-lg">Get in - depth weather information.</Text>
                <TouchableOpacity className='bg-slate-700 rounded-full p-2 mt-10'>
                    <ArrowIcon
                        width={30}
                        height={30}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}