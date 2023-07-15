import { useSelector } from 'react-redux';
import { Image, Text } from 'react-native';
import React, { ReactElement } from 'react';
import { RootState } from '../../../redux/store';
import { IForecastWeather } from '../../../redux/reducers/forecastWeather';

interface IProps {
    children: ReactElement;
}

export default function Loader({ children }: IProps): ReactElement {
    const { loading, error }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

    if(loading) {
        return (
            <Image 
                style={{ width: 250, height: 250, marginTop: 60 }} 
                source={require("../../../assets/images/loader.gif")} 
            />
        );
    }

    if(error) {
        return (
            <>
                <Image 
                    source={require("../../../assets/images/404.gif")} 
                    style={{ width: 250, height: 250, marginTop: 60 }} 
                />
                <Text className="text-center text-gray-400 text-3xl font-bold">Contact with our tech support</Text>
            </>
        );
    }

    return children;
}