import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { ReactElement } from "react";
import TodayForecastInfoEl from "../UI/TodayForecastInfoEl";
import { IForecastWeather } from "../redux/reducers/forecastWeather";

export default function TodayForecastInfo(): ReactElement {
	const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

	return (
		<div className="flex flex-col justify-between h-full">
			<TodayForecastInfoEl
				text="Percipitation"
				value={`${Math.round(data.current.precip_in)}%`}
			>
				<img 
					className="w-9 h-9 mr-3"
					alt="Weather percipitation"
					src={require("../assets/images/cloudy.png")}
				/>
			</TodayForecastInfoEl>
			<TodayForecastInfoEl
				text="Humidity"
				value={`${Math.round(data.current.humidity)}%`}
			>
				<img 
					alt="Weather humidity"
					className="w-9 h-9 mr-3"
					src={require("../assets/images/rain.png")}
				/>
			</TodayForecastInfoEl>
		</div>
	);
}