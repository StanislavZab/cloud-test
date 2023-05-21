import { createSlice } from '@reduxjs/toolkit';
import { FilesActionSchema } from '../types/filesActionSchema';
import { deleteFiles } from '../services/deleteFile/deleteFile';
import { addFile } from '../services/addFile/addFile';

const initialState: FilesActionSchema = {
    isLoader: false,
    isDelete: false,
    error: '',
};

export const filesActionSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addFile.pending, (state) => {
                state.error = '';
                state.isLoader = true;
            })
            .addCase(addFile.fulfilled, (state) => {
                state.isLoader = false;
            })
            .addCase(addFile.rejected, (state, action) => {
                state.isLoader = false;
                state.error = action.payload;
            })
            .addCase(deleteFiles.pending, (state) => {
                state.error = '';
                state.isDelete = true;
            })
            .addCase(deleteFiles.fulfilled, (state) => {
                state.isDelete = false;
            })
            .addCase(deleteFiles.rejected, (state, action) => {
                state.isDelete = false;
                state.error = action.payload;
            });
    },
});

export const { actions: filesActionActions } = filesActionSlice;
export const { reducer: filesActionReducer } = filesActionSlice;
