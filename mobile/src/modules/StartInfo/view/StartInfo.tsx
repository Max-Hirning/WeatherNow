import { data } from "../model/data";
import { useDispatch } from "react-redux";
import LottieView from 'lottie-react-native';
import { ILocation } from "../../../redux/types";
import { AppDispatch } from "../../../redux/store";
import ArrowIcon from "../../../assets/icons/arrow";
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from "@react-navigation/core";
import { ScreenNavigationProp } from "../../../types/Navigation";
import React, { ReactElement, useEffect, useState } from 'react';
import { MessagesTypes } from "../../../constants/messagesTypes";
import { flashMessage } from "../../../controllers/flashMessage";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetCurrentLocation } from "../../../controllers/locations";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { setForecastWeatherAsync } from "../../../redux/reducers/forecastWeather";
import { choseLocation, setLocationsAsync } from "../../../redux/reducers/locations";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../../../constants/themes";

export default function StartInfo(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const getLocationAndForecast = useGetCurrentLocation();
    const navigation = useNavigation<ScreenNavigationProp>();
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
            }, 1000);
        } catch {
            flashMessage("Smth went wrong", "Pls contact us: location error", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
        }
    }

    const moveToApp = async (): Promise<void> => {
        try {
            navigation.navigate("App");
            AsyncStorage.setItem('tutorialFinished', JSON.stringify(true));
        } catch {
            flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
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
            <LottieView 
                loop
                autoPlay 
                style={{
                    width: 250, 
                    height: 250, 
                    marginTop: 100,
                }} 
                source={data[currentPage].image} 
            />
            </View>
            <View className='h-96 items-center pt-20'>
                <View 
                    className='absolute bg-white' 
                    style={{ width: 600, height: 600, borderRadius: 600/2 }}
                />
                <Text className="w-64 text-center text-black text-3xl font-bold">{data[currentPage].title}</Text>
                <Text className="w-64 pt-4 text-center text-gray-400 text-lg">{data[currentPage].text}</Text>
                <AnimatedCircularProgress
                    size={75}
                    width={5}
                    tintColor="#DA42AE"
                    style={{marginTop: 20}}
                    backgroundColor="#BBC5D4"
                    children={(): ReactElement => {
                        return (
                            <TouchableOpacity 
                                onPress={moveToNext}
                                className='bg-slate-700 rounded-full p-2'
                            >
                                <ArrowIcon
                                    width={30}
                                    height={30}
                                    color="white"
                                />
                            </TouchableOpacity>
                        )
                    }}
                    fill={((currentPage)/data.length)*100}
                />
            </View>
        </View>
    );
}