import { configureStore } from '@reduxjs/toolkit';
import dailyWeatherReducer from './reducers/DailyWeather';
import todaysHourlyWeatherReducer from './reducers/TodaysHourlyWeather';

export const store = configureStore({
    reducer: {
        dailyWeather: dailyWeatherReducer,
        todaysHourlyWeather: todaysHourlyWeatherReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>