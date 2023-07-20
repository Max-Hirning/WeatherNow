import React, { ReactElement } from "react";
import Divider from "../../../components/Divider";
import Locations from "../../../components/Locations";
import Navigations from "../../../components/Navigations";

export default function SideBarMenu(): ReactElement {
	return (
		<aside className="flex flex-col w-40 bg-slate-700 p-3">
			<Locations/>
			<Divider/>
			<Navigations/>
		</aside>
	);
}