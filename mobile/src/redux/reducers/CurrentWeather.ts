import { Timeline } from '../types/CurrentWeather';
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface ICurrentWeather {
    data: {
        timelines: Timeline[];
    };
}

const initialState: ICurrentWeather = {
  "data": {
    "timelines": [
      {
        "timestep": "current",
        "endTime": "2023-07-04T08:04:00Z",
        "startTime": "2023-07-04T08:04:00Z",
        "intervals": [
          {
            "startTime": "2023-07-04T08:04:00Z",
            "values": {
              "dewPointAvg": 18.88,
              "humidityAvg": 94,
              "precipitationProbabilityAvg": 0,
              "temperatureApparentAvg": 20.19,
              "temperatureAvg": 20.19,
              "temperatureMax": 20.19,
              "temperatureMin": 20.19,
              "uvIndexAvg": 0,
              "visibilityAvg": 10.39,
              "weatherCode": 1001,
              "windDirectionAvg": 53.38,
              "windSpeedAvg": 0.69,
              "windSpeedMax": 0.69,
              "windSpeedMin": 0.69
            }
          }
        ]
      }
    ]
  }
}

export const CurrentWeatherSlice = createSlice({
    name: 'CurrentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setCurrentWeatherAsync.fulfilled, (_: ICurrentWeather, { payload }: PayloadAction<ICurrentWeather>): ICurrentWeather => {
            return payload;
        });
    },
});

export const setCurrentWeatherAsync = createAsyncThunk("CurrentWeather/setCurrentWeather", async (payload: ICurrentWeather): Promise<ICurrentWeather> => {
	return payload;
});

export default CurrentWeatherSlice.reducer;