import { useSelector } from "react-redux";
import React, { ReactElement } from "react";
import { RootState } from "../../../redux/store";
import Divider from "../../../components/Divider";
import TodayForecastInfo from "../../../components/TodayForecastInfo";
import { IForecastWeather } from "../../../redux/reducers/forecastWeather";

export default function TodayForecast(): ReactElement {
	const { data }: IForecastWeather = useSelector((state: RootState) => state.forecastWeather);

	return (
		<div className="w-80 h-96 flex flex-col p-5 bg-gray-800 rounded-xl m-5">
			<div className="flex flex-col">
				<div className="flex-row items-center justify-between flex">
					<img
						className="w-32 h-32"
						alt={data.current.condition.text}
						src={`https:${data.current.condition.icon}`}
					/>
					<div>
						<h1 className="font-bold text-8xl text-gray-400">{Math.round(data.current.temp_c)}°</h1>
						<p className="text-white text-base">{data.current.condition.text}</p>
					</div>
				</div>
				<div className="flex flex-row items-center justify-between mt-4">
					<p className="flex text-gray-400 text-base">Feels like<p className="text-white ml-1">{Math.round(data.current.feelslike_c)}°C</p></p>
					<p className="flex text-gray-400 text-base">Wind <p className="text-white ml-1">{Math.round(data.current.wind_kph)} KM</p>/H {data.current.wind_dir}</p>
				</div>
			</div>
			<Divider/>
			<TodayForecastInfo/>
		</div>
	);
}