import React, { ReactElement } from "react";

interface IProps {
    title: string;
    value: string;
    isToday?: number;
    weatherIcon: string;
}

export default function HourlySliderEl({ title, value, isToday, weatherIcon }: IProps): ReactElement {
	const getNowTimeStyle = (): string => {
		if(isToday) {
			return "border-white border-2 bg-gray-600";
		} else {
			return "bg-gray-800";
		}
	};

	return (
		<div className={`inline-flex mx-3 rounded-full w-16 py-4 flex-col items-center justify-between ${getNowTimeStyle()}`}>
			<p className="text-white text-base">{title}</p>
			<img
				src={`https:${weatherIcon}`}
				className="w-16 h-16 my-2.5"
			/>
			<p className="text-white text-base">{value}</p>
		</div>
	);
}