import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { ReactElement } from "react";
import TodayForecastDetailsEl from "../UI/TodayForecastDetailsEl";
import { IForecastWeather } from "../redux/reducers/forecastWeather";

export default function TodayForecastDetails(): ReactElement {
	const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

	const uvIndexLabel = (uv: number): string => {
		switch(uv) {
		case 1:
		case 2:
			return "Low";
		case 3:
		case 4:
		case 5:
			return "Medium";
		case 6:
		case 7:
			return "High";
		case 8:
		case 9:
		case 10:
			return "Very High";
		default:
			return "Ex. High";
		}
	};

	return (
		<div className="w-40 my-5">
			<TodayForecastDetailsEl 
				title="Feels like" 
				value={`${Math.round(data.current.temp_c)}°`}
			/>
			<TodayForecastDetailsEl 
				title="Humidity" 
				value={`${Math.round(data.current.humidity)}%`}
			/>
			<TodayForecastDetailsEl 
				title="Visibility" 
				value={`${Math.round(data.current.vis_km)} km`}
			/>
			<TodayForecastDetailsEl 
				title="UV Index" 
				value={`${uvIndexLabel(data.current.uv)} ${Math.round(data.current.uv)}`}
			/>
			<TodayForecastDetailsEl 
				title="Wind gust" 
				value={`${Math.round(data.current.gust_kph)} kph`}
			/>
		</div>
	);
}