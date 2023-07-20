import React, { ReactElement } from "react";
import SideBarMenu from "./modules/SideBarMenu/view/SideBarMenu";

export default function App(): ReactElement {
	return (
		<main className="flex flex-row h-screen">
			<SideBarMenu/>
			<section></section>
		</main>
	);
}