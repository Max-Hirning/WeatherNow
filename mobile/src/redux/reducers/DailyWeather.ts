import { Timeline } from '../types/DailyWeather';
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface IDailyWeather {
    data: {
        timelines: Timeline[];
    };
}

const initialState: IDailyWeather = {
    "data": {
        "timelines": [
            {
                "timestep": "1d",
                "endTime": "2023-07-08T10:00:00Z",
                "startTime": "2023-07-03T10:00:00Z",
                "intervals": [
                    {
                        "startTime": "2023-07-03T10:00:00Z",
                        "values": {
                            "cloudBase": 8.08,
                            "cloudCeiling": 8.76,
                            "cloudCover": 100,
                            "precipitationIntensity": 2.13,
                            "precipitationType": 1,
                            "temperature": 32.28,
                            "temperatureApparent": 34.19,
                            "weatherCode": 1001,
                            "windDirection": 247.87,
                            "windGust": 9.74,
                            "windSpeed": 4.49
                        }
                    },
                    {
                        "startTime": "2023-07-04T10:00:00Z",
                        "values": {
                            "cloudBase": 3.56,
                            "cloudCeiling": 9.44,
                            "cloudCover": 100,
                            "precipitationIntensity": 4.97,
                            "precipitationType": 1,
                            "temperature": 26.7,
                            "temperatureApparent": 28.69,
                            "weatherCode": 1001,
                            "windDirection": 240.62,
                            "windGust": 6.31,
                            "windSpeed": 3.38
                        }
                    },
                    {
                        "startTime": "2023-07-05T10:00:00Z",
                        "values": {
                            "cloudBase": 2.78,
                            "cloudCeiling": 11.17,
                            "cloudCover": 88.28,
                            "precipitationIntensity": 0.02,
                            "precipitationType": 1,
                            "temperature": 31.36,
                            "temperatureApparent": 34.14,
                            "weatherCode": 1100,
                            "windDirection": 185.13,
                            "windGust": 7.88,
                            "windSpeed": 4.13
                        }
                    },
                    {
                        "startTime": "2023-07-06T10:00:00Z",
                        "values": {
                            "cloudBase": 3.58,
                            "cloudCeiling": 4.04,
                            "cloudCover": 98.44,
                            "precipitationIntensity": 0.57,
                            "precipitationType": 1,
                            "temperature": 30.74,
                            "temperatureApparent": 33.02,
                            "weatherCode": 1101,
                            "windDirection": 175.17,
                            "windGust": 6.2,
                            "windSpeed": 4.62
                        }
                    },
                    {
                        "startTime": "2023-07-07T10:00:00Z",
                        "values": {
                            "cloudBase": 7.08,
                            "cloudCeiling": 0,
                            "cloudCover": 99.95,
                            "precipitationIntensity": 0.02,
                            "precipitationType": 1,
                            "temperature": 31.32,
                            "temperatureApparent": 30.92,
                            "weatherCode": 1001,
                            "windDirection": 164.38,
                            "windGust": 6.55,
                            "windSpeed": 5.27
                        }
                    },
                    {
                        "startTime": "2023-07-08T10:00:00Z",
                        "values": {
                            "cloudBase": 4.57,
                            "cloudCeiling": 0,
                            "cloudCover": 95.61,
                            "precipitationIntensity": 0,
                            "precipitationType": 1,
                            "temperature": 29.41,
                            "temperatureApparent": 29.34,
                            "weatherCode": 1001,
                            "windDirection": 54.9,
                            "windGust": 2.3,
                            "windSpeed": 2.24
                        }
                    }
                ]
            }
        ]
    }
}

export const DailyWeatherSlice = createSlice({
    name: 'DailyWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setDailyWeatherAsync.fulfilled, (_: IDailyWeather, { payload }: PayloadAction<IDailyWeather>): IDailyWeather => {
            return payload;
        });
    },
});

export const setDailyWeatherAsync = createAsyncThunk("CurrentWeather/setCurrentWeather", async (payload: IDailyWeather): Promise<IDailyWeather> => {
	return payload;
});

export default DailyWeatherSlice.reducer;