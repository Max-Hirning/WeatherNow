import { View } from "react-native";
import { ILocation } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from 'react';
import { AppDispatch, RootState } from "../redux/store";
import SideBarMenuLocationEl from '../UI/SideBarMenuLocationEl';
import { IForecastWeather } from "../redux/reducers/forecastWeather";
import { ILocations, addLocation } from "../redux/reducers/locations";

export default function SideBarMenuLocationEls(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const locations: ILocations = useSelector((state: RootState) => state.locations);
    const { data, loading, error }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    useEffect(() => {
        if(error !== true && loading !== true) {
            const currentLocation = `${data.location.name}_${data.location.region}_${data.location.country}_${data.location.tz_id}`;
            const foundedLocation = locations.data.find((el: ILocation) => currentLocation === `${el.name}_${el.region}_${el.country}_${el.tz_id}`)
            console.log('foundedLocation', foundedLocation)
            if(!foundedLocation) {
                dispatch(addLocation({active: currentLocation, data: data.location}));
            }
            // const foundedIndex = locations.findIndex((el: ILocations) => el.data.name === data.location.name);
            // dispatch(addLocation({index: foundedIndex, data: data.location}));
        }
    }, [data.location]);

    return (
        <View className="mt-2">
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