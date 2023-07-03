import { View, Image } from 'react-native';
import React, { ReactElement } from 'react';
import AdditionalInfoEl from '../UI/AdditionalInfoEl';

export default function AdditionalInfo(): ReactElement {
    return (
        <View>
            <View className="flex-row items-center justify-between ">
                <AdditionalInfoEl
                    value="21%"
                    text="Percipitation"
                >
                    <Image 
                        className="w-14 h-12 mr-1"
                        source={require("../assets/icons/CloudySunny.png")}
                    />
                </AdditionalInfoEl>
                <AdditionalInfoEl
                    text="Wind"
                    value="10km/h"
                >
                    <Image 
                        className="w-10 h-10 mr-1"
                        source={require("../assets/icons/Sun.png")}
                    />
                </AdditionalInfoEl>
            </View>
            <View className="flex-row items-center justify-between mt-4">
                <AdditionalInfoEl
                    value="59%"
                    text="Humidity"
                >
                    <Image 
                        className="w-14 h-12 mr-1"
                        source={require("../assets/icons/RainySunny.png")}
                    />
                </AdditionalInfoEl>
                <AdditionalInfoEl
                    value="29%"
                    text="Sunset"
                >
                    <Image 
                        className="w-10 h-10 mr-1"
                        source={require("../assets/icons/Moon.png")}
                    />
                </AdditionalInfoEl>
            </View>
        </View>
    );
}