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
                  "temperatureMax": 24.13,
                  "temperatureMin": 18.13,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T10:00:00Z",
                "values": {
                  "temperatureMax": 21.1,
                  "temperatureMin": 17.68,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-05T10:00:00Z",
                "values": {
                  "temperatureMax": 27.75,
                  "temperatureMin": 18.44,
                  "weatherCodeMax": 1000,
                  "weatherCodeMin": 1000
                }
              },
              {
                "startTime": "2023-07-06T10:00:00Z",
                "values": {
                  "temperatureMax": 25.92,
                  "temperatureMin": 20.31,
                  "weatherCodeMax": 2000,
                  "weatherCodeMin": 2000
                }
              },
              {
                "startTime": "2023-07-07T10:00:00Z",
                "values": {
                  "temperatureMax": 28.22,
                  "temperatureMin": 18.71,
                  "weatherCodeMax": 4200,
                  "weatherCodeMin": 4200
                }
              },
              {
                "startTime": "2023-07-08T10:00:00Z",
                "values": {
                  "temperatureMax": 26.52,
                  "temperatureMin": 19.71,
                  "weatherCodeMax": 4200,
                  "weatherCodeMin": 4200
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