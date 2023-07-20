import React, { ReactElement } from "react";

interface IProps {
    value: string;
    title: string;
}

export default function TodayForecastDetailsEl({ value, title }: IProps): ReactElement {
	return (
		<div className="flex flex-row items-center justify-between my-3">
			<p className="text-gray-400 text-base">{title}</p>
			<p className="font-bold text-white text-base">{value}</p>
		</div>
	);
}