import { useSelector } from "react-redux";
import React, { ReactElement } from "react";
import { RootState } from "../../../redux/store";
import { IHourlyForecast } from "../../../redux/types";
import HourlySliderEl from "../../../UI/HourlySliderEl";
import { checkDateWithToday, getHourFromDate } from "../controller/date";

export default function HourlyForecast(): ReactElement {
	const data: IHourlyForecast[] = useSelector((state: RootState) => state.forecastWeather.data.forecast.forecastday[0].hour);

	const isToday = (date: string, index: number): number|undefined => {
		if(checkDateWithToday(date)) {
			return index;
		} else {
			return undefined;
		}
	};

	return (
		<div className="w-full py-2.5 overflow-x-auto whitespace-nowrap">
			{
				data.map((el: IHourlyForecast, index: number): ReactElement => {
					return (
						<HourlySliderEl
							key={index}
							weatherIcon={el.condition.icon}
							title={getHourFromDate(el.time)}
							isToday={isToday(el.time, index)}
							value={`${Math.round(el.temp_c)}°`}
						/>
					);
				})
			}
		</div>
	);
}