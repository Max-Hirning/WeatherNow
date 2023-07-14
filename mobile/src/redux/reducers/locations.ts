import { ILocation } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ILocations {
    data: ILocation;
    isActive: boolean;
}

const initialState: ILocations[] = []

export const locationsSlice = createSlice({
    name: 'locationsSlice',
    initialState,
    reducers: {
        choseLocation: (state: ILocations[], { payload }: PayloadAction<number>): ILocations[] => {
            const foundedIndex: number = state.findIndex((el: ILocations): boolean => el.isActive === true);
            state[foundedIndex].isActive = false;
            state[payload].isActive = true;
            console.log(state);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setLocationsAsync.fulfilled, (_: ILocations[], { payload }: PayloadAction<ILocations[]>): ILocations[] => {
            return payload;
        });
    },
});

export const setLocationsAsync = createAsyncThunk("locations/setLocations", async (): Promise<ILocations[]> => {
	try {
        const result = await AsyncStorage.getItem('locations');
        if(result) {
            return JSON.parse(result);
        }
    } catch (error) {
        console.log(error);
    }
    return [];
});

export const { choseLocation } = locationsSlice.actions

export default locationsSlice.reducer;