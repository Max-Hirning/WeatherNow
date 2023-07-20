import LocationEl from "../UI/LocationEl";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React, { ReactElement } from "react";
import { ILocations } from "../redux/reducers/locations";

export default function Locations(): ReactElement {
	const locations: ILocations[] = useSelector((state: RootState) => state.locations);

	return (
		<>
			<h2 className="text-white text-2xl mb-2">Locations</h2>
			{
				locations.map(({ data, isActive }: ILocations, index: number): ReactElement => {
					return (
						<LocationEl
							key={index}
							title={data.name}
							isActive={isActive}
						/>
					);
				})
			}
		</>
	);
}