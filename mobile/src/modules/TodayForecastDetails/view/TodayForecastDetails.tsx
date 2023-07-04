import { useSelector } from 'react-redux';
import React, { ReactElement } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '../../../redux/store';
import { getWindDirection } from '../controller/windDirection';
import ForecastDetails from '../../../components/ForecastDetails';
import { ICurrentWeather } from '../../../redux/reducers/CurrentWeather';
import { getWeatherImage } from '../../../controllers/date';

export default function TodayForecastDetails(): ReactElement {
    const currentWeather: ICurrentWeather = useSelector((state: RootState) => state.currentWeather);

    // function isDayTodayOrNigh(): boolean {
    //     const currentTime = new Date();
    //     const currentHour = currentTime.getHours();
    //     const isDaytime = currentHour >= 6 && currentHour < 18;
    //     return isDaytime;
    // }

    // function getImage(weatherCode: number): ReactElement {
    //     switch(weatherCode) {
    //         case 1000:
    //             if(isDayTodayOrNigh()) {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/clear/day.png")}
    //                     />
    //                 );
    //             } else {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/clear/night.png")}
    //                     />
    //                 );
    //             }
    //         case 1100:
    //             if(isDayTodayOrNigh()) {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/mostly-clear/day.png")}
    //                     />
    //                 );
    //             } else {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/mostly-clear/night.png")}
    //                     />
    //                 );
    //             }
    //         case 1101:
    //             if(isDayTodayOrNigh()) {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/partly-cloudy/day.png")}
    //                     />
    //                 );
    //             } else {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/partly-cloudy/night.png")}
    //                     />
    //                 );
    //             }
    //         case 1102:
    //             if(isDayTodayOrNigh()) {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/mostly-cloudy/day.png")}
    //                     />
    //                 );
    //             } else {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/mostly-cloudy/night.png")}
    //                     />
    //                 );
    //             }
    //         case 1001:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/cloudy/icon.png")}
    //                 />
    //             );
    //         case 2100:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/light-fog/icon.png")}
    //                 />
    //             );
    //         case 2000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/fog/icon.png")}
    //                 />
    //             );
    //         case 4000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/dizzle/icon.png")}
    //                 />
    //             );
    //         case 4200:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/light-rain/icon.png")}
    //                 />
    //             );
    //         case 4001:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/rain/icon.png")}
    //                 />
    //             );
    //         case 4201:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/heavy-rain/icon.png")}
    //                 />
    //             );
    //         case 5001:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/flurries/icon.png")}
    //                 />
    //             );
    //         case 5100:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/light-snow/icon.png")}
    //                 />
    //             );
    //         case 5000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/snow/icon.png")}
    //                 />
    //             );
    //         case 5101:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/heavy-snow/icon.png")}
    //                 />
    //             );
    //         case 6000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/freezing-drizzle/icon.png")}
    //                 />
    //             );
    //         case 6200:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/light-freezing-drizzle/icon.png")}
    //                 />
    //             );
    //         case 6001:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/freezing-rain/icon.png")}
    //                 />
    //             );
    //         case 6201:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/heavy-freezing-rain/icon.png")}
    //                 />
    //             );
    //         case 7102:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/light-ice-pellets/icon.png")}
    //                 />
    //             );
    //         case 7000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/ice-pellets/icon.png")}
    //                 />
    //             );
    //         case 7101:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/heavy-ice-pellets/icon.png")}
    //                 />
    //             );
    //         case 8000:
    //             return (
    //                 <Image
    //                     className="w-32 h-32 mt-5"
    //                     source={require("../../../assets/icons/thunderstorm/icon.png")}
    //                 />
    //             );
    //         default:
    //             if(isDayTodayOrNigh()) {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/clear/day.png")}
    //                     />
    //                 );
    //             } else {
    //                 return (
    //                     <Image
    //                         className="w-32 h-32 mt-5"
    //                         source={require("../../../assets/icons/clear/night.png")}
    //                     />
    //                 );
    //             }
    //     }
    // }

    console.log(getWeatherImage(currentWeather.data.timelines[0].intervals[0].values.weatherCode));

    return (
        <View className=" bg-gray-800 rounded-s-xl p-5 rounded-xl my-3">
            <Text className="font-bold text-white text-base text-xl">Details</Text>
            <View className="flex-row items-start justify-between">
                {/* <Image
                    className="w-32 h-32 mt-5"
                    source={require("../../../assets/icons/CloudySunny.png")}
                /> */}
                {getWeatherImage(currentWeather.data.timelines[0].intervals[0].values.weatherCode)}
                <ForecastDetails/>
            </View>
            <Text className="text-gray-400 text-base">Tonight - /Clear\. Winds from {getWindDirection(currentWeather.data.timelines[0].intervals[0].values.windDirectionAvg)} at {currentWeather.data.timelines[0].intervals[0].values.windSpeedMin} to {currentWeather.data.timelines[0].intervals[0].values.windSpeedMax} kph. The overnight low will be {currentWeather.data.timelines[0].intervals[0].values.temperatureMin}°C</Text>
        </View>
    );
}