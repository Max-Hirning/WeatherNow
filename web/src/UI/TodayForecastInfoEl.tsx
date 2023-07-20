import React, { ReactElement } from "react";

interface IProps {
    text: string;
    value: string;
    children : ReactElement;
}

export default function TodayForecastInfoEl({ text, children , value } :IProps): ReactElement {
	return (
		<div className="flex flex-row items-center">
			{children}
			<p className="flex text-gray-400 text-base ml-1">{text}: <p className="text-white ml-2">{value}</p></p>
		</div>
	);
}