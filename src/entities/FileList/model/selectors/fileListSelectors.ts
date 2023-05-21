import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getFileListIsLoading = (state: RootState) => state.files?.isLoading;
export const getFileListError = (state: RootState) => state.files?.error || '';
export const getFileList = (state: RootState) => state.files?.files || [];
export const getFileListLimit = createSelector(getFileList, (files) => 20 - files.length);
