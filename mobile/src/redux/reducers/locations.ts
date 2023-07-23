import { ILocation } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ILocations {
    active: string;
    data: ILocation[];
}

export interface IAddLocationPayload { 
    active: string; 
    data: ILocation;
}

const initialState: ILocations = {
    data: [],
    active: "",
}

export const locationsSlice = createSlice({
    name: 'locationsSlice',
    initialState,
    reducers: {
        reset: (): ILocations => {
            return initialState;
        },
        choseLocation: (state: ILocations, { payload }: PayloadAction<string>): ILocations => {
            state.active = payload;
            return state;
        },
        addLocation: (state: ILocations, { payload }: PayloadAction<IAddLocationPayload>): ILocations => {
            state.active = payload.active;
            state.data.push(payload.data);
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setLocationsAsync.fulfilled, (_: ILocations, { payload }: PayloadAction<ILocations>): ILocations => {
            return payload;
        });
    },
});

export const setLocationsAsync = createAsyncThunk("locations/setLocations", async (): Promise<ILocations> => {
	try {
        const result = await AsyncStorage.getItem('locations');
        if(result) {
            return JSON.parse(result);
        }
    } catch (error) {
        console.error(error);
    }
    return initialState;
});

export const { reset, choseLocation, addLocation } = locationsSlice.actions

export default locationsSlice.reducer;