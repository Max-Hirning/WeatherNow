import type { PayloadAction } from '@reduxjs/toolkit'
import { Timeline } from '../types/TodaysHourlyWeather';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ITodaysHourlyWeather {
    data: {
        timelines: Timeline[];
    };
}

const initialState: ITodaysHourlyWeather = {
    "data": {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2023-07-03T23:00:00Z",
                "startTime": "2023-07-03T17:00:00Z",
                "intervals": [
                    {
                        "startTime": "2023-07-03T17:00:00Z",
                        "values": {
                            "cloudBase": 1.66,
                            "cloudCeiling": null,
                            "cloudCover": 39,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "temperature": 28.19,
                            "temperatureApparent": 28.22,
                            "weatherCode": 1101,
                            "windDirection": 355.5,
                            "windGust": 1.31,
                            "windSpeed": 0.38
                        }
                    },
                    {
                        "startTime": "2023-07-03T18:00:00Z",
                        "values": {
                            "cloudBase": 2.18,
                            "cloudCeiling": null,
                            "cloudCover": 100,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "temperature": 31.6,
                            "temperatureApparent": 34.1,
                            "weatherCode": 1001,
                            "windDirection": 228.9,
                            "windGust": 5.61,
                            "windSpeed": 4.07
                        }
                    },
                    {
                        "startTime": "2023-07-03T19:00:00Z",
                        "values": {
                            "cloudBase": 2.19,
                            "cloudCeiling": null,
                            "cloudCover": 42.02,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "temperature": 32.27,
                            "temperatureApparent": 34.63,
                            "weatherCode": 1101,
                            "windDirection": 221.15,
                            "windGust": 5.98,
                            "windSpeed": 4.54
                        }
                    },
                    {
                        "startTime": "2023-07-03T20:00:00Z",
                        "values": {
                            "cloudBase": 2.47,
                            "cloudCeiling": null,
                            "cloudCover": 100,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "temperature": 32.22,
                            "temperatureApparent": 34.38,
                            "weatherCode": 1001,
                            "windDirection": 212.89,
                            "windGust": 5.62,
                            "windSpeed": 4.69
                        }
                    },
                    {
                        "startTime": "2023-07-03T21:00:00Z",
                        "values": {
                            "cloudBase": null,
                            "cloudCeiling": null,
                            "cloudCover": 0.72,
                            "precipitationIntensity": 0,
                            "precipitationType": 1,
                            "temperature": 32,
                            "temperatureApparent": 34.35,
                            "weatherCode": 1000,
                            "windDirection": 199.28,
                            "windGust": 6.66,
                            "windSpeed": 4.39
                        }
                    },
                    {
                        "startTime": "2023-07-03T22:00:00Z",
                        "values": {
                            "cloudBase": null,
                            "cloudCeiling": null,
                            "cloudCover": 10.28,
                            "precipitationIntensity": 0,
                            "precipitationType": 1,
                            "temperature": 31.39,
                            "temperatureApparent": 33.88,
                            "weatherCode": 1000,
                            "windDirection": 188.5,
                            "windGust": 5.25,
                            "windSpeed": 4.07
                        }
                    },
                    {
                        "startTime": "2023-07-03T23:00:00Z",
                        "values": {
                            "cloudBase": 8.08,
                            "cloudCeiling": null,
                            "cloudCover": 71.2,
                            "precipitationIntensity": 0,
                            "precipitationType": 1,
                            "temperature": 30.71,
                            "temperatureApparent": 33.18,
                            "weatherCode": 1102,
                            "windDirection": 187.35,
                            "windGust": 5.68,
                            "windSpeed": 3.72
                        }
                    }
                ]
            }
        ]
    }
}

export const TodaysHourlyWeatherSlice = createSlice({
    name: 'TodaysHourlyWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setTodaysHourlyWeatherAsync.fulfilled, (_: ITodaysHourlyWeather, { payload }: PayloadAction<ITodaysHourlyWeather>): ITodaysHourlyWeather => {
            return payload;
        });
    },
});

export const setTodaysHourlyWeatherAsync = createAsyncThunk("TodaysHourlyWeather/setTodaysHourlyWeather", async (payload: ITodaysHourlyWeather): Promise<ITodaysHourlyWeather> => {
	return payload;
});

export default TodaysHourlyWeatherSlice.reducer;