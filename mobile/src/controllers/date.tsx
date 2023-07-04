import { Image } from 'react-native';
import React, { ReactElement } from 'react';

export const isDayTodayOrNigh = (): boolean => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isDaytime = currentHour >= 6 && currentHour < 18;
    return isDaytime;
}

export const getTemparuture = (value: number): number => {
    return Math.round(value - 273.15)
}

export const getWeatherImage = (weatherCode: number, style: any): ReactElement => {
    switch(weatherCode) {
        case 1000:
            if(isDayTodayOrNigh()) {
                return (
                    <Image 
                        style={style} 
                        source={require("../assets/icons/clear/day.png")} 
                    />
                );
            } else {
                return (
                    <Image 
                        style={style} 
                        source={require("../assets/icons/clear/night.png")} 
                    />
                );
            }
        case 1100:
            if(isDayTodayOrNigh()) {
                return (
                    <Image 
                        style={style} 
                        source={require("../assets/icons/mostly-clear/day.png")} 
                    />
                );
            } else {
                return (
                    <Image 
                        style={style} 
                        source={require("../assets/icons/mostly-clear/night.png")} 
                    />
                );
            }
        case 1101:
            if(isDayTodayOrNigh()) {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/partly-cloudy/day.png")}
                    />
                );
            } else {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/partly-cloudy/night.png")}
                    />
                );
            }
        case 1102:
            if(isDayTodayOrNigh()) {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/mostly-cloudy/day.png")}
                    />
                );
            } else {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/mostly-cloudy/night.png")}
                    />
                );
            }
        case 1001:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/cloudy/icon.png")}
                />
            );
        case 2100:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/light-fog/icon.png")}
                />
            );
        case 2000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/fog/icon.png")}
                />
            );
        case 4000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/dizzle/icon.png")}
                />
            );
        case 4200:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/light-rain/icon.png")}
                />
            );
        case 4001:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/rain/icon.png")}
                />
            );
        case 4201:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/heavy-rain/icon.png")}
                />
            );
        case 5001:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/flurries/icon.png")}
                />
            );
        case 5100:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/light-snow/icon.png")}
                />
            );
        case 5000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/snow/icon.png")}
                />
            );
        case 5101:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/heavy-snow/icon.png")}
                />
            );
        case 6000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/freezing-drizzle/icon.png")}
                />
            );
        case 6200:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/light-freezing-drizzle/icon.png")}
                />
            );
        case 6001:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/freezing-rain/icon.png")}
                />
            );
        case 6201:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/heavy-freezing-rain/icon.png")}
                />
            );
        case 7102:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/light-ice-pellets/icon.png")}
                />
            );
        case 7000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/ice-pellets/icon.png")}
                />
            );
        case 7101:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/heavy-ice-pellets/icon.png")}
                />
            );
        case 8000:
            return (
                <Image
                    style={style}
                    source={require("../assets/icons/thunderstorm/icon.png")}
                />
            );
        default:
            if(isDayTodayOrNigh()) {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/clear/day.png")}
                    />
                );
            } else {
                return (
                    <Image
                        style={style}
                        source={require("../assets/icons/clear/night.png")}
                    />
                );
            }
    }
}