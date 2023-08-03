import { Image, Text } from 'react-native';
import React, { ReactElement } from 'react';

interface IProps {
    error: boolean;
    loading: boolean;
    children: ReactElement;
}

export default function Loader({ error, loading, children }: IProps): ReactElement {
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