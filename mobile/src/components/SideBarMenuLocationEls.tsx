import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { ReactElement } from 'react';
import { ILocations } from "../redux/reducers/locations";
import SideBarMenuLocationEl from '../UI/SideBarMenuLocationEl';

export default function SideBarMenuLocationEls(): ReactElement {
    const locations: ILocations[] = useSelector((state: RootState) => state.locations);

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