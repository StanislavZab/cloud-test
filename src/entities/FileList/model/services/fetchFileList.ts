import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { File } from '../types/fileList';

export const fetchFileList = createAsyncThunk<
    File[],
    void,
    ThunkConfig<string>
>(
    'fileList',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<{files: File[], status: string}>('/media');

            if (!response.data) {
                throw new Error();
            }

            return response.data.files;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
