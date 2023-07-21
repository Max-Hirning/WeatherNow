import React, { ReactElement } from "react";
// import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import TodayForecast from "./modules/TodayForecast/view/TodayForecast";
import HourlyForecast from "./modules/HourlyForecats/view/HourlyForecast";
import TodayForecastDetails from "./modules/TodayForecastDetails/view/TodayForecastDetails";


export default function App(): ReactElement {
	return (
		<main className="flex flex-row h-screen w-full">
			{/* <SideBarMenu/> */}
			<section className="flex flex-col w-full">
				<div className="flex flex-row w-full justify-around items-center flex-wrap">
					<TodayForecast/>
					<TodayForecastDetails/>
				</div>
				<HourlyForecast/>
			</section>
		</main>
	);
}