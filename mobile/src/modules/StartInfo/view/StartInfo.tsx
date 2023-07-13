import { data } from "../model/data";
import ArrowIcon from "../../../assets/icons/arrow";
import React, { ReactElement, useState } from 'react';
import { View, TouchableOpacity, Text, Image  } from 'react-native';
import { useNavigation } from "@react-navigation/core";


export default function StartInfo(): ReactElement {
    const navigation: any = useNavigation();
    const [currentPage, setCurrentPage] = useState<number>(0);

    const moveToApp = (): void => {
        navigation.navigate("App");
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
                <Text className="w-56 text-center text-black text-3xl font-bold">{data[currentPage].title}</Text>
                <Text className="w-60 pt-4 text-center text-gray-400 text-lg">{data[currentPage].text}</Text>
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