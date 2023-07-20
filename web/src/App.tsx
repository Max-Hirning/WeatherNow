import React, { ReactElement } from "react";
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";
import TodayForecast from "./modules/TodayForecastDetails/view/TodayForecast";

export default function App(): ReactElement {
	return (
		<main className="flex flex-row h-screen">
			<SideBarMenu/>
			<section>
				<TodayForecast/>
				{/* <div className="wrapper">
					<div className="card">
						<div className="front">
							<img src="https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Photo"/>
						</div>
						<div className="back">
							<div className="content">
								<h1>John Doe<span>Front-end Developer</span></h1>
								<ul className="socials">
									<li>
										<a href="#"><i className="fa fa-youtube"></i></a>
										<a href="#"><i className="fa fa-instagram"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-vk"></i></a>
										<a href="#"><i className="fa fa-github"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div> */}
			</section>
		</main>
	);
}