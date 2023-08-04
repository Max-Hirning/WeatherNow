import { configureStore } from '@reduxjs/toolkit';
import feedBackReducer from './reducers/feedBack';
import locationsReducer from './reducers/locations';
import forecastWeatherReducer from './reducers/forecastWeather';

export const store = configureStore({
    reducer: {
        feedBack: feedBackReducer,
        locations: locationsReducer,
        forecastWeather: forecastWeatherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>