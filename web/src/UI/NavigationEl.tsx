import React, { ReactElement } from "react";

interface IProps {
    title: string;
    children: ReactElement;
}

export default function NavigationEl({ title, children }: IProps): ReactElement {
	return (
		<button className="flex flex-row items-center my-2">
			{children}
			<p className="text-white ml-2 text-lg">{title}</p>
		</button>
	);
}