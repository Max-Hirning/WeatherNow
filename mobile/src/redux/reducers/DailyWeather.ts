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
        "endTime": "2023-07-11T10:00:00Z",
        "startTime": "2023-07-06T10:00:00Z",
        "intervals": [
          {
            "startTime": "2023-07-06T10:00:00Z",
            "values": {
              "precipitationProbability": 5,
              "temperatureAvg": 26.95,
              "temperatureMax": 31.38,
              "temperatureMin": 21.69,
              "weatherCode": 1000
            }
          },
          {
            "startTime": "2023-07-07T10:00:00Z",
            "values": {
              "precipitationProbability": 0,
              "temperatureAvg": 23.94,
              "temperatureMax": 27.53,
              "temperatureMin": 21.07,
              "weatherCode": 1000
            }
          },
          {
            "startTime": "2023-07-08T10:00:00Z",
            "values": {
              "precipitationProbability": 5,
              "temperatureAvg": 22.2,
              "temperatureMax": 23.86,
              "temperatureMin": 20.93,
              "weatherCode": 1001
            }
          },
          {
            "startTime": "2023-07-09T10:00:00Z",
            "values": {
              "precipitationProbability": 50,
              "temperatureAvg": 21.85,
              "temperatureMax": 23.58,
              "temperatureMin": 20.33,
              "weatherCode": 1001
            }
          },
          {
            "startTime": "2023-07-10T10:00:00Z",
            "values": {
              "precipitationProbability": 65,
              "temperatureAvg": 19.35,
              "temperatureMax": 20.39,
              "temperatureMin": 18.54,
              "weatherCode": 4200
            }
          },
          {
            "startTime": "2023-07-11T10:00:00Z",
            "values": {
              "precipitationProbability": 30,
              "temperatureAvg": 19.93,
              "temperatureMax": 23,
              "temperatureMin": 18.55,
              "weatherCode": 1000
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