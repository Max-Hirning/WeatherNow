import { ILocation } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ILocations {
    data: ILocation;
    isActive: boolean;
}

export interface IAddLocationPayload { 
    index: number; 
    data: ILocation;
}

const initialState: ILocations[] = [
	{
		isActive: true,
		data: {
			"name": "Kiev",
			"region": "Kyyivs'ka Oblast'",
			"country": "Ukraine",
			"lat": 50.43,
			"lon": 30.52,
			"tz_id": "Europe/Kiev",
			"localtime_epoch": 1689157243,
			"localtime": "2023-07-12 13:20"
		}
	},
	{
		isActive: false,
		data: {
			"name": "Kiev",
			"region": "Kyyivs'ka Oblast'",
			"country": "Ukraine",
			"lat": 50.43,
			"lon": 30.52,
			"tz_id": "Europe/Kiev",
			"localtime_epoch": 1689157243,
			"localtime": "2023-07-12 13:20"
		}
	}
];

export const locationsSlice = createSlice({
	name: "locationsSlice",
	initialState,
	reducers: {
		addLocation: (state: ILocations[], { payload }: PayloadAction<IAddLocationPayload>): ILocations[] => {
			if(payload.index === -1) {
				state.push({
					isActive: true,
					data: payload.data,
				});
			} else {
				state[payload.index] = {
					isActive: true,
					data: payload.data,
				};
			}
			return state;
		},
		reset: (): ILocations[] => {
			return [];
		},
		choseLocation: (state: ILocations[], { payload }: PayloadAction<number>): ILocations[] => {
			const foundedIndex: number = state.findIndex((el: ILocations): boolean => el.isActive === true);
			state[foundedIndex].isActive = false;
			state[payload].isActive = true;
			return state;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setLocationsAsync.fulfilled, (_: ILocations[], { payload }: PayloadAction<ILocations[]>): ILocations[] => {
			return payload;
		});
	},
});

export const setLocationsAsync = createAsyncThunk("locations/setLocations", async (): Promise<ILocations[]> => {
	try {
		const result = localStorage.getItem("locations");
		if(result) {
			return JSON.parse(result);
		}
	} catch (error) {
		console.error(error);
	}
	return [];
});

export const { reset, choseLocation, addLocation } = locationsSlice.actions;

export default locationsSlice.reducer;