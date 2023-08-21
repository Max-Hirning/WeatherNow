import { Text } from 'react-native';
import React, { ReactElement } from 'react';
import LottieView from 'lottie-react-native';

interface IProps {
    error: boolean;
    loading: boolean;
    children: ReactElement;
}

export default function Loader({ error, loading, children }: IProps): ReactElement {
    if(loading) {
        return (
            <LottieView 
                loop
                autoPlay 
                style={{
                    width: 250, 
                    height: 250, 
                    marginTop: 60,
                }} 
                source={require("../../../assets/animations/loader.json")} 
            />
        );
    }

    if(error) {
        return (
            <>
                <LottieView 
                    loop
                    autoPlay 
                    style={{
                        width: 250, 
                        height: 250, 
                        marginTop: 60,
                    }} 
                    source={require("../../../assets/animations/404.json")} 
                />
                <Text className="text-center text-gray-400 text-3xl font-bold">Contact with our tech support</Text>
            </>
        );
    }

    return children;
}