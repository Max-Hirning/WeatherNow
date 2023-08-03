import type { PayloadAction } from '@reduxjs/toolkit';
import { feedBackAPI } from '../../controllers/api/feedBack';
import { flashMessage } from '../../controllers/flashMessage';
import { MessagesTypes } from '../../constants/messagesTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FlashMessageBackgroundColors, FlashMessageColors } from '../../constants/themes';

export interface IFeedBack {
    theme: string;
    details: string;
}

export interface IFeedBackStore {
    error: boolean;
    data: IFeedBack;
    loading: boolean;
};

const initialState: IFeedBackStore = {
    data: {
        theme: "",
        details: "",
    },
    error: false,
    loading: true,
}

export const feedBackSlice = createSlice({
    name: 'feedBackSlice',
    initialState,
    reducers: {
        changeTheme: (state: IFeedBackStore, { payload }: PayloadAction<string>) => {
            state.data.theme = payload;
            return state;
        },
        changeDetails: (state: IFeedBackStore, { payload }: PayloadAction<string>) => {
            state.data.details = payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setFeedBackAsync.pending, (state: IFeedBackStore): IFeedBackStore => {
            state.loading = true;
            state.error = false;
            return state;
        });
        builder.addCase(setFeedBackAsync.rejected, (state: IFeedBackStore): IFeedBackStore => {
            state.loading = false;
            state.error = false;
            return state;
        });
        builder.addCase(setFeedBackAsync.fulfilled, (_: IFeedBackStore, { payload }: PayloadAction<IFeedBack>): IFeedBackStore => {
            return {
                error: false,
                data: payload,
                loading: false,
            };
        });
    },
});

export const setFeedBackAsync = createAsyncThunk("feedBack/setFeddBack", async (payload: IFeedBack): Promise<IFeedBack> => {
	const response = await feedBackAPI.post(payload);
    // if(response) {
    //     flashMessage("Success", response, MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
    // }
    console.log(response)
    return initialState.data;
});

export const { changeTheme, changeDetails } = feedBackSlice.actions;

export default feedBackSlice.reducer;