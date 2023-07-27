import { ILocation } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from 'react';
import { AppDispatch, RootState } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import SideBarMenuLocationEl from '../UI/SideBarMenuLocationEl';
import { IForecastWeather } from "../redux/reducers/forecastWeather";
import { ILocations, addLocation } from "../redux/reducers/locations";

export default function SideBarMenuLocationEls(): ReactElement {
    const navigation = useNavigation<any>();
    const dispatch: AppDispatch = useDispatch();
    const locations: ILocations = useSelector((state: RootState) => state.locations);
    const { data, loading, error }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    useEffect(() => {
        if(error !== true && loading !== true) {
            const currentLocation = `${data.location.name}_${data.location.region}_${data.location.country}_${data.location.tz_id}`;
            const foundedLocation = locations.data.find((el: ILocation) => currentLocation === `${el.name}_${el.region}_${el.country}_${el.tz_id}`)

            if(!foundedLocation) dispatch(addLocation(data.location));
        }
    }, [data.location]);

    const findLocation = (): void => {
        navigation.navigate("FindLocation");
    }

    return (
        <View className="mt-2">
            <View className="flex-row items-center justify-between py-2 px-3">
                <Text className="text-gray-400 text-2xl">Location</Text>
                <Text className="text-gray-400 text-2xl">|</Text>
                <TouchableOpacity onPress={findLocation}>
                    <Text className="text-white text-2xl font-bold">Edit</Text>
                </TouchableOpacity>
            </View>
            {
                locations.data.map((data: ILocation, index: number): ReactElement => {
                    return (
                        <SideBarMenuLocationEl
                            key={index}
                            data={data}
                            index={index}
                            isActive={locations.active === `${data.name}_${data.region}_${data.country}_${data.tz_id}`}
                        />
                    );
                })
            }
        </View>
    );
}