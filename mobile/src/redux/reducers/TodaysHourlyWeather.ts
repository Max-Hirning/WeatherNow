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
            "endTime": "2023-07-04T23:00:00Z",
            "startTime": "2023-07-04T00:00:00Z",
            "intervals": [
              {
                "startTime": "2023-07-04T00:00:00Z",
                "values": {
                  "temperatureAvg": 21.81,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T01:00:00Z",
                "values": {
                  "temperatureAvg": 20.81,
                  "weatherCode": 1101,
                }
              },
              {
                "startTime": "2023-07-04T02:00:00Z",
                "values": {
                  "temperatureAvg": 21.19,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T03:00:00Z",
                "values": {
                  "temperatureAvg": 21.5,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T04:00:00Z",
                "values": {
                  "temperatureAvg": 21.63,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T05:00:00Z",
                "values": {
                  "temperatureAvg": 21.38,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T06:00:00Z",
                "values": {
                  "temperatureAvg": 20.63,
                  "weatherCode": 4001,
                }
              },
              {
                "startTime": "2023-07-04T07:00:00Z",
                "values": {
                  "temperatureAvg": 20.31,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T08:00:00Z",
                "values": {
                  "temperatureAvg": 20.4,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T09:00:00Z",
                "values": {
                  "temperatureAvg": 20.56,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T10:00:00Z",
                "values": {
                  "temperatureAvg": 20.3,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T11:00:00Z",
                "values": {
                  "temperatureAvg": 20.38,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T12:00:00Z",
                "values": {
                  "temperatureAvg": 20.28,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T13:00:00Z",
                "values": {
                  "temperatureAvg": 19.73,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T14:00:00Z",
                "values": {
                  "temperatureAvg": 19.6,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T15:00:00Z",
                "values": {
                  "temperatureAvg": 19.82,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T16:00:00Z",
                "values": {
                  "temperatureAvg": 20.04,
                  "weatherCode": 4000,
                }
              },
              {
                "startTime": "2023-07-04T17:00:00Z",
                "values": {
                  "temperatureAvg": 20.5,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T18:00:00Z",
                "values": {
                  "temperatureAvg": 20.48,
                  "weatherCode": 4200,
                }
              },
              {
                "startTime": "2023-07-04T19:00:00Z",
                "values": {
                  "temperatureAvg": 21.1,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T20:00:00Z",
                "values": {
                  "temperatureAvg": 20.75,
                  "weatherCode": 4000,
                }
              },
              {
                "startTime": "2023-07-04T21:00:00Z",
                "values": {
                  "temperatureAvg": 20.87,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T22:00:00Z",
                "values": {
                  "temperatureAvg": 20.7,
                  "weatherCode": 1001,
                }
              },
              {
                "startTime": "2023-07-04T23:00:00Z",
                "values": {
                  "temperatureAvg": 20.52,
                  "weatherCode": 1001,
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