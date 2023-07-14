import { useDispatch } from 'react-redux';
import { ILocation } from '../redux/types';
import React, { ReactElement } from 'react';
import { AppDispatch } from '../redux/store';
import LocationIcon from "../assets/icons/location";
import { Text, TouchableOpacity, View } from "react-native";
import { choseLocation } from '../redux/reducers/locations';

interface IProps {
    index: number;
    data: ILocation;
    isActive: boolean;
}

export default function SideBarMenuLocationEl({ data, index, isActive }: IProps): ReactElement {
    const dispatch: AppDispatch = useDispatch();

    const selectLocation = (): void => {
        dispatch(choseLocation(index));
    }

    const getActiveLocationStyle = (): string => {
        if(isActive) {
            return "border-white border-2 bg-gray-600"
        } else {
            return "bg-gray-800"
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
                <Text className="text-white text-base ml-3">{data.country}</Text>
            </View>
        </TouchableOpacity>
    );
}