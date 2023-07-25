import { data } from "../model/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import ArrowIcon from "../../../assets/icons/arrow";
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from "@react-navigation/core";
import Geolocation from 'react-native-geolocation-service';
import React, { ReactElement, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { permissionAction } from "../../../controllers/permissions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import locations, { choseLocation, setLocationsAsync } from "../../../redux/reducers/locations";
import { setForecastWeatherAsync } from "../../../redux/reducers/forecastWeather";
import { ILocation } from "../../../redux/types";

export default function StartInfo(): ReactElement {
    const navigation: any = useNavigation();
    const dispatch: AppDispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        prepareApp();
    }, []);

    const prepareApp = async (): Promise<void> => {
        try {
            const tutorialFinishedRes = await AsyncStorage.getItem('tutorialFinished');
            dispatch(setLocationsAsync());
            if(tutorialFinishedRes) {
                const locationsRes = await AsyncStorage.getItem("locations");
                if(locationsRes) {
                    const { active, data } = JSON.parse(locationsRes);
                    const activeLocation = data.find((el: ILocation) => active === `${el.name}_${el.region}_${el.country}_${el.tz_id}`);
                    if(activeLocation) {
                        dispatch(setForecastWeatherAsync(`${activeLocation.lat},${activeLocation.lon}`));
                    } else {
                        dispatch(setForecastWeatherAsync(`${data[0].lat},${data[0].lon}`));
                        dispatch(choseLocation(data[0]));
                    }
                }

                if(JSON.parse(tutorialFinishedRes)) moveToApp();
            } else {
                getLocationAndForecast();
            }
            setTimeout(() => {
                SplashScreen.hide();
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    }

    const getLocationAndForecast = async (): Promise<void> => {
        try {
            const permission = await permissionAction();

            if(permission) {
                Geolocation.getCurrentPosition(
                    (position) => {
                        dispatch(setForecastWeatherAsync(`${position.coords.latitude},${position.coords.longitude}`));
                    },
                    (error) => {
                        console.error(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                )
            } else {
                dispatch(setForecastWeatherAsync("Paris"));
            }
        } catch (error) {
            console.error(error);
        }
    }

    const moveToApp = async (): Promise<void> => {
        try {
            navigation.navigate("App");
            AsyncStorage.setItem('tutorialFinished', JSON.stringify(true));
        } catch (error) {
            console.error(error);
        }
    }

    const moveToNext = (): void => {
        if(currentPage === data.length-1) {
            moveToApp();
        } else {
            setCurrentPage((state: number) => state+1)
        }
    }

    return (
        <View className=" bg-slate-700 pt-4 justify-between flex-1 items-center">
            <TouchableOpacity 
                onPress={moveToApp}
                className='absolute top-5 right-5'
            >
                <Text className="text-white text-base">Skip</Text>
            </TouchableOpacity>
            <View>
            <Image 
                source={data[currentPage].image} 
                style={{ width: 250, height: 250, marginTop: 60 }} 
            />
            </View>
            <View className='h-96 items-center pt-20'>
                <View 
                    className='absolute bg-white' 
                    style={{ width: 600, height: 600, borderRadius: 600/2 }}
                />
                <Text className="w-64 text-center text-black text-3xl font-bold">{data[currentPage].title}</Text>
                <Text className="w-64 pt-4 text-center text-gray-400 text-lg">{data[currentPage].text}</Text>
                <TouchableOpacity 
                    onPress={moveToNext}
                    className='bg-slate-700 rounded-full p-2 mt-10'
                >
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