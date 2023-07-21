import { useSelector } from "react-redux";
import React, { ReactElement } from "react";
import { RootState } from "../../../redux/store";
import ForecastDetails from "../../../components/ForecastDetails";
import { IForecastWeather } from "../../../redux/reducers/forecastWeather";

export default function TodayForecastDetails(): ReactElement {
	const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

	return (
		<div className="w-80 h-96 flex flex-col p-5 bg-gray-800 rounded-xl m-5">
			<h2 className="font-bold text-white text-base text-xl">Details</h2>
			<div className="flex flex-row">
				<img 
					className="w-32 h-32 mt-12"
					alt={data.current.condition.text}
					src={`https:${data.current.condition.icon}`} 
				/>
				<ForecastDetails/>
			</div>
			<p className="text-gray-400 text-base">Today - {data.current.condition.text}. Winds from {data.current.wind_dir} to {Math.round(data.current.wind_kph)} kph. The overnight low will be {Math.round(data.current.feelslike_c)}°C</p>
		</div>
	);
}