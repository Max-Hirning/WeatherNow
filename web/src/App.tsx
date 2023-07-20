import React, { ReactElement } from "react";
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import HourlyForecast from "./modules/HourlyForecats/view/HourlyForecast";
import TodayForecast from "./modules/TodayForecastDetails/view/TodayForecast";

export default function App(): ReactElement {
	return (
		<main className="flex flex-row h-screen">
			<SideBarMenu/>
			<section>
				<div>
					<TodayForecast/>
					<HourlyForecast/>
				</div>
			</section>
		</main>
	);
}