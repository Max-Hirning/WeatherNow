import Back from "./Back";
import Front from "./Front";
import React, { ReactElement } from "react";

export default function TodayForecast(): ReactElement {
	return (
		<div className="card cursor-pointer">
			<Front/>
			<Back/>
		</div>
	);
}