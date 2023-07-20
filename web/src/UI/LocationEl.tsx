import React, { ReactElement } from "react";
import LocationIcon from "../assets/icons/location";

interface IProps {
	title: string;
	isActive: boolean;
}

export default function LocationEl({ title, isActive }: IProps): ReactElement {
	const isLocationActiveStyle = (status: boolean): string => {
		if(status) {
			return "bg-gray-600";
		} else {
			return "bg-gray-800";
		}
	};

	return (
		<button 
			disabled={isActive}
			className={`border-white border-2 flex flex-row items-center my-2 rounded-xl py-1.5 px-2.5 ${isLocationActiveStyle(isActive)}`}
		>
			<LocationIcon
				width={30}
				height={30}
				color="white"
			/>
			<p className="text-white ml-2 text-lg">{title}</p>
		</button>
	);
}