import { configureStore } from '@reduxjs/toolkit';
import forecastWeatherReducer from './reducers/forecastWeather';

export const store = configureStore({
    reducer: {
        forecastWeather: forecastWeatherReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>