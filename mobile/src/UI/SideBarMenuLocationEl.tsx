import { useDispatch } from 'react-redux';
import { ILocation } from '../redux/types';
import React, { ReactElement } from 'react';
import { AppDispatch } from '../redux/store';
import DeleteIcon from "../assets/icons/delete";
import LocationIcon from "../assets/icons/location";
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../types/Navigation';
import { flashMessage } from '../controllers/flashMessage';
import { MessagesTypes } from '../constants/messagesTypes';
import { Text, TouchableOpacity, View } from "react-native";
import { choseLocation, deleteLocation } from '../redux/reducers/locations';
import { setForecastWeatherAsync } from '../redux/reducers/forecastWeather';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../constants/themes';

interface IProps {
    data: ILocation;
    isActive: boolean;
}

export default function SideBarMenuLocationEl({ data, isActive }: IProps): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation<ScreenNavigationProp>()

    const removeLocation = (): void => {
        if (isActive) {
            flashMessage("You can't remove active location", "", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
        } else {
            dispatch(deleteLocation(data));
        }
    }

    const formatCountryName = (): string => {
        switch (data.country) {
            case "United States of America":
                return "USA";
            default:
                return data.country;
        }
    }

    const getActiveLocationStyle = (): string => {
        if(isActive) {
            return "border-white border-2 bg-gray-600"
        } else {
            return "bg-gray-800"
        }
    }

    const shortenString = (str: string): string => {
        if (str.length > 13) {
            return (str.substring(0, 13)).trim() + "...";
        }
        return str;
    }

    const selectLocation = async (): Promise<void> => {
        navigation.navigate("Forecast");
        const res = await dispatch(setForecastWeatherAsync(`${data.lat},${data.lon}`));
        if (res.type.split("/").reverse()[0] === "fulfilled") dispatch(choseLocation(data));
    }

    return (
        <View className="flex-row items-center justify-between">
            <TouchableOpacity
                disabled={isActive}
                onPress={selectLocation}
                className={`w-4/5 flex-row items-center my-2 rounded-xl py-1 px-2.5 ${getActiveLocationStyle()}`}
            >
                <LocationIcon
                    width={35}
                    height={35}
                    color="white"
                />
                <View>
                    <Text className="text-white text-base ml-3">{shortenString(data.name)}</Text>
                    <Text className="text-white text-base ml-3">{formatCountryName()}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeLocation}>
                <DeleteIcon
                    width={35}
                    height={35}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
}