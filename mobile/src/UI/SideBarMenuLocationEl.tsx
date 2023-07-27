import { useDispatch } from 'react-redux';
import { ILocation } from '../redux/types';
import React, { ReactElement } from 'react';
import { AppDispatch } from '../redux/store';
import LocationIcon from "../assets/icons/location";
import { Text, TouchableOpacity, View } from "react-native";
import { choseLocation } from '../redux/reducers/locations';
import { setForecastWeatherAsync } from '../redux/reducers/forecastWeather';

interface IProps {
    data: ILocation;
    isActive: boolean;
}

export default function SideBarMenuLocationEl({ data, isActive }: IProps): ReactElement {
    const dispatch: AppDispatch = useDispatch();

    const selectLocation = (): void => {
        dispatch(choseLocation(data));
        dispatch(setForecastWeatherAsync(`${data.lat},${data.lon}`));
    }

    const getActiveLocationStyle = (): string => {
        if(isActive) {
            return "border-white border-2 bg-gray-600"
        } else {
            return "bg-gray-800"
        }
    }

    const formatCountryName = (): string => {
        switch(data.country) {
            case "United States of America":
                return "USA";
            default:
                return data.country;
        }
    }

    return (
        <TouchableOpacity 
            disabled={isActive}
            onPress={selectLocation}
            className={`flex-row items-center my-2 rounded-xl py-1 px-2.5 ${getActiveLocationStyle()}`}
        >
            <LocationIcon
                width={35}
                height={35}
                color="white"
            />
            <View>
                <Text className="text-white text-base ml-3">{data.name}</Text>
                <Text className="text-white text-base ml-3">{formatCountryName()}</Text>
            </View>
        </TouchableOpacity>
    );
}