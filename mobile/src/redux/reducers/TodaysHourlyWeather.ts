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
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T01:00:00Z",
                "values": {
                  "temperatureAvg": 20.81,
                  "weatherCodeMax": 1101,
                  "weatherCodeMin": 1101
                }
              },
              {
                "startTime": "2023-07-04T02:00:00Z",
                "values": {
                  "temperatureAvg": 21.19,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T03:00:00Z",
                "values": {
                  "temperatureAvg": 21.5,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T04:00:00Z",
                "values": {
                  "temperatureAvg": 21.63,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T05:00:00Z",
                "values": {
                  "temperatureAvg": 21.38,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T06:00:00Z",
                "values": {
                  "temperatureAvg": 20.63,
                  "weatherCodeMax": 4001,
                  "weatherCodeMin": 4001
                }
              },
              {
                "startTime": "2023-07-04T07:00:00Z",
                "values": {
                  "temperatureAvg": 20.31,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T08:00:00Z",
                "values": {
                  "temperatureAvg": 20.4,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T09:00:00Z",
                "values": {
                  "temperatureAvg": 20.56,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T10:00:00Z",
                "values": {
                  "temperatureAvg": 20.3,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T11:00:00Z",
                "values": {
                  "temperatureAvg": 20.38,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T12:00:00Z",
                "values": {
                  "temperatureAvg": 20.28,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T13:00:00Z",
                "values": {
                  "temperatureAvg": 19.73,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T14:00:00Z",
                "values": {
                  "temperatureAvg": 19.6,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T15:00:00Z",
                "values": {
                  "temperatureAvg": 19.82,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T16:00:00Z",
                "values": {
                  "temperatureAvg": 20.04,
                  "weatherCodeMax": 4000,
                  "weatherCodeMin": 4000
                }
              },
              {
                "startTime": "2023-07-04T17:00:00Z",
                "values": {
                  "temperatureAvg": 20.5,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T18:00:00Z",
                "values": {
                  "temperatureAvg": 20.48,
                  "weatherCodeMax": 4200,
                  "weatherCodeMin": 4200
                }
              },
              {
                "startTime": "2023-07-04T19:00:00Z",
                "values": {
                  "temperatureAvg": 21.1,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T20:00:00Z",
                "values": {
                  "temperatureAvg": 20.75,
                  "weatherCodeMax": 4000,
                  "weatherCodeMin": 4000
                }
              },
              {
                "startTime": "2023-07-04T21:00:00Z",
                "values": {
                  "temperatureAvg": 20.87,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T22:00:00Z",
                "values": {
                  "temperatureAvg": 20.7,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
                }
              },
              {
                "startTime": "2023-07-04T23:00:00Z",
                "values": {
                  "temperatureAvg": 20.52,
                  "weatherCodeMax": 1001,
                  "weatherCodeMin": 1001
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