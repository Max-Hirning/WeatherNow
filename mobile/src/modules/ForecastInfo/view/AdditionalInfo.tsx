import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';

export default function AdditionalInfo(): ReactElement {
    return (
        <View>
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between">
                    <Image 
                        className="w-14 h-12 mr-1"
                        source={require("../../../assets/icons/CloudySunny.png")}
                    />
                    <Text className="text-gray-400 text-base">Percipitation: <Text className="text-white">21%</Text></Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Image 
                        className="w-10 h-10 mr-4"
                        source={require("../../../assets/icons/Sun.png")}
                    />
                    <Text className="text-gray-400 text-base">Wind: <Text className="text-white">10km/h</Text></Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-4">
                <View className="flex-row items-center justify-between">
                    <Image
                        className="w-14 h-12 mr-1"
                        source={require("../../../assets/icons/RainySunny.png")}
                    />
                    <Text className="text-gray-400 text-base">Humidity: <Text className="text-white">59%</Text></Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Image 
                        className="w-10 h-10 mr-4"
                        style={{backgroundColor: 'red'}}
                        source={require("../../../assets/icons/Moon.png")}
                    />
                    <Text className="text-gray-400 text-base">Sunset: <Text className="text-white">29%</Text></Text>
                </View>
            </View>
        </View>
    );
}