import { IForecast } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILocation, ICurrentWeather } from '../types';
import { flashMessage } from '../../controllers/flashMessage';
import { MessagesTypes } from '../../constants/messagesTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { forecastWeatherAPI } from '../../controllers/api/forecastWeather';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../../constants/themes';

interface IForecastWeatherData {
  location: ILocation;
  forecast: IForecast;
  current: ICurrentWeather;
}

export interface IForecastWeather {
  error: boolean;
  loading: boolean;
  data: IForecastWeatherData;
};

const initialState: IForecastWeather = {
  data: {
    "location": {
      "name": "Kiev",
      "region": "Kyyivs'ka Oblast'",
      "country": "Ukraine",
      "lat": 50.43,
      "lon": 30.52,
      "tz_id": "Europe/Kiev",
      "localtime_epoch": 1689157243,
      "localtime": "2023-07-12 13:20"
    },
    "current": {
      "last_updated_epoch": 1689156900,
      "last_updated": "2023-07-12 13:15",
      "temp_c": 24.3,
      "temp_f": 75.7,
      "is_day": 1,
      "condition": {
        "text": "Sunny",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
        "code": 1000
      },
      "wind_mph": 6.5,
      "wind_kph": 10.4,
      "wind_degree": 285,
      "wind_dir": "WNW",
      "pressure_mb": 1015,
      "pressure_in": 29.98,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 30,
      "cloud": 17,
      "feelslike_c": 24.3,
      "feelslike_f": 75.7,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 6,
      "gust_mph": 7.4,
      "gust_kph": 11.9
    },
    "forecast": {
      "forecastday": []
    }
  },
  error: false,
  loading: true,
}

export const forecastWeatherSlice = createSlice({
  name: 'forecastWeatherSlice',
  initialState,
  reducers: {
    setWhenError: (state: IForecastWeather): IForecastWeather => {
      state.loading = false;
      state.error = true;
      return state;
    },
    setWhenLoading: (state: IForecastWeather): IForecastWeather => {
      console.log('set, loading')
      state.loading = true;
      state.error = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setForecastWeatherAsync.pending, (state: IForecastWeather): IForecastWeather => {
      state.loading = true;
      state.error = false;
      return state;
    });
    builder.addCase(setForecastWeatherAsync.rejected, (state: IForecastWeather): IForecastWeather => {
      state.loading = false;
      state.error = false;
      return state;
    });
    builder.addCase(setForecastWeatherAsync.fulfilled, (_: IForecastWeather, { payload }: PayloadAction<IForecastWeatherData>): IForecastWeather => {
      return {
        error: false,
        data: payload,
        loading: false,
      };
    });
  },
});

export const setForecastWeatherAsync = createAsyncThunk("forecastWeather/setForecastWeather", async (payload: string): Promise<IForecastWeatherData> => {
	console.log(payload);
  const response = await forecastWeatherAPI.get(payload);
  if(response) {
    return response;
  } else {
    flashMessage("Smth went wrong", "Pls contact us: weather api error", MessagesTypes.ERROR, FlashMessageBackgroundColors.ERROR, FlashMessageColors.ERROR);
    throw "Error"
  }
});

export const { setWhenError, setWhenLoading } = forecastWeatherSlice.actions
export default forecastWeatherSlice.reducer;