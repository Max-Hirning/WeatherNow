import React, { ReactElement } from "react";
import NavigationEl from "../UI/NavigationEl";
import MessageIcon from "../assets/icons/message";

export default function Navigations(): ReactElement {
	return (
		<nav>
			<NavigationEl title="Contact">
				<MessageIcon
					width={30}
					height={30}
					color="white"
				/>
			</NavigationEl>
		</nav>
	);
}