import { APIMAPKEY } from "@env";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import React, { ReactElement } from 'react';
import { AppDispatch } from "../redux/store";
import { useNavigation } from "@react-navigation/core";
import { ScreenNavigationProp } from "../types/Navigation";
import { MessagesTypes } from "../constants/messagesTypes";
import { flashMessage } from "../controllers/flashMessage";
import { setForecastWeatherAsync } from "../redux/reducers/forecastWeather";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FlashMessageBackgroundColors, FlashMessageColors } from "../constants/themes";

export default function FindLocation(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        <View className="bg-slate-700 px-4 py-4 flex-1">
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
                    key: APIMAPKEY,
                    language: 'en',
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
                        flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
                    }
                }}
            />

            {/*In future realese will be map*/}

        </View>
    );
}