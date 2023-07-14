import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers/locations';
import forecastWeatherReducer from './reducers/forecastWeather';

export const store = configureStore({
    reducer: {
        locations: locationsReducer,
        forecastWeather: forecastWeatherReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>