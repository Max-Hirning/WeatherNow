import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from 'react';
import { AppDispatch, RootState } from "../redux/store";
import SideBarMenuLocationEl from '../UI/SideBarMenuLocationEl';
import { IForecastWeather } from "../redux/reducers/forecastWeather";
import { ILocations, addLocation } from "../redux/reducers/locations";

export default function SideBarMenuLocationEls(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const locations: ILocations[] = useSelector((state: RootState) => state.locations);
    const { location }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);
    
    useEffect(() => {
        const foundedIndex = locations.findIndex((el: ILocations) => el.data.name === location.name);
        dispatch(addLocation({index: foundedIndex, data: location}));
    }, [location]);

    return (
        <View className="mt-2">
            {
                locations.map(({ data, isActive }: ILocations, index: number): ReactElement => {
                    return (
                        <SideBarMenuLocationEl
                            key={index}
                            data={data}
                            index={index}
                            isActive={isActive}
                        />
                    );
                })
            }
        </View>
    );
}