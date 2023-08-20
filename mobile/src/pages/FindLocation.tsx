import { PLACE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import React, { ReactElement } from 'react';
import { AppDispatch } from "../redux/store";
import { useNavigation } from "@react-navigation/core";
import { ScreenNavigationProp } from "../types/Navigation";
import { MessagesTypes } from "../constants/messagesTypes";
import { flashMessage } from "../controllers/flashMessage";
import { View, TouchableOpacity, Text } from "react-native";
import { useGetCurrentLocation } from "../controllers/locations";
import { setForecastWeatherAsync, setWhenLoading } from "../redux/reducers/forecastWeather";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FlashMessageBackgroundColors, FlashMessageColors } from "../constants/themes";

export default function FindLocation(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const getLocationAndForecast = useGetCurrentLocation();
    const navigation = useNavigation<ScreenNavigationProp>();

    const getMyLocation = () => {
        dispatch(setWhenLoading())
        getLocationAndForecast();
        navigation.navigate("Forecast");
    }

    return (
        <View className="bg-slate-700 px-4 py-4 flex-1">
            <TouchableOpacity 
                onPress={getMyLocation}
                className="mt-2 mb-6 w-60 p-2 m-auto flex-row items-center justify-center bg-gray-800 rounded-full"
            >
                <Text className="text-gray-400 text-lg text-center">My current location</Text>
            </TouchableOpacity>
            <GooglePlacesAutocomplete
                styles={{
                    row: {
                        borderBottomWidth: 1,
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(156 163 175)',
                    },
                    separator: {
                        backgroundColor: 'rgb(156 163 175)'
                    },
                    textInput: {
                        fontSize: 18,
                        width: "100%",
                        borderWidth: 1,
                        lineHeight: 28,
                        borderRadius: 12,
                        color: 'rgb(156 163 175)',
                        backgroundColor: 'transparent',
                        borderColor: 'rgb(156 163 175)',
                    },
                    container: {
                        marginTop: 20
                    },
                    description: {
                        fontSize: 16,
                        lineHeight: 24,
                        color: 'rgb(156 163 175)',
                    },
                    poweredContainer: {
                        backgroundColor: 'transparent'
                    },
                }}
                query={{
                    language: 'en',
                    key: PLACE_API_KEY,
                }}
                textInputProps={{
                    returnKeyType: "search",
                    placeholderTextColor: 'rgb(156 163 175)',
                }}
                fetchDetails={true}
                placeholder='Search new location'
                onPress={(_, details = null) => {
                    if(details) {
                        const { lat, lng } = details.geometry.location;
                        dispatch(setForecastWeatherAsync(`${lat},${lng}`));
                        navigation.navigate("Forecast");
                    } else {
                        flashMessage("Smth went wrong", "Pls contact us: search locations error", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
                    }
                }}
            />

            {/*In future realese will be map*/}

        </View>
    );
}