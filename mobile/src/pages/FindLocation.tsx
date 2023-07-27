import { APIMAPKEY } from "@env";
import { View } from "react-native";
import React, { ReactElement } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function FindLocation(): ReactElement {
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
                        console.log(details.geometry.location);
                    }
                }}
            />

            {/*In future realese will be map*/}

        </View>
    );
}