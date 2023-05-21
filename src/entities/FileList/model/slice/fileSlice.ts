import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File, FileSchema } from '../types/fileList';
import { fetchFileList } from '../services/fetchFileList';

const initialState: FileSchema = {
    isLoading: false,
};

export const fileSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileList.pending, (state) => {
                state.error = undefined;
                if (!state.files) {
                    state.isLoading = true;
                }
            })
            .addCase(fetchFileList.fulfilled, (state, action: PayloadAction<File[]>) => {
                state.isLoading = false;
                state.files = action.payload;
            })
            .addCase(fetchFileList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: fileActions } = fileSlice;
export const { reducer: fileReducer } = fileSlice;
