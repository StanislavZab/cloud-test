import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchFileList } from '@/entities/FileList';

export const addFile = createAsyncThunk<
    void,
    FileList,
    ThunkConfig<string>
>(
    'files/addFile',
    async (formData, { extra, rejectWithValue, dispatch }) => {
        try {
            const response = await extra.api.post('/media/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status !== 200) {
                throw new Error('');
            }

            dispatch(fetchFileList());

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
