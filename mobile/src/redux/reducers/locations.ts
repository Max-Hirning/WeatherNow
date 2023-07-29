import { ILocation } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MessagesTypes } from '../../constants/messagesTypes';
import { flashMessage } from '../../controllers/flashMessage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../../constants/themes';

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
        addLocation: (state: ILocations, { payload }: PayloadAction<ILocation>): ILocations => {
            state.active = `${payload.name}_${payload.region}_${payload.country}_${payload.tz_id}`;
            state.data.push(payload);
            return state;
        },
        choseLocation: (state: ILocations, { payload }: PayloadAction<ILocation>): ILocations => {
            state.active = `${payload.name}_${payload.region}_${payload.country}_${payload.tz_id}`;
            return state;
        },
        deleteLocation: (state: ILocations, { payload }: PayloadAction<ILocation>): ILocations => {
            const deletedLocation = `${payload.name}_${payload.region}_${payload.country}_${payload.tz_id}`;
            state.data = state.data.filter((el) => `${el.name}_${el.region}_${el.country}_${el.tz_id}` !== deletedLocation);
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
    } catch {
        flashMessage("Smth went wrong", "Pls contact us", MessagesTypes.ERROR, FlashMessageBackgroundColors.ERROR, FlashMessageColors.ERROR);
    }
    return initialState;
});

export const { reset, choseLocation, addLocation, deleteLocation } = locationsSlice.actions

export default locationsSlice.reducer;