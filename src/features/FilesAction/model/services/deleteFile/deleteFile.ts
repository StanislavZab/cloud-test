import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchFileList } from '@/entities/FileList';

export const deleteFiles = createAsyncThunk<
    void,
    string,
    ThunkConfig<string>
>(
    'files/deleteFiles',
    async (id, { extra, rejectWithValue, dispatch }) => {
        try {
            const response = await extra.api.delete(`/media/${id}`);

            if (response.status !== 200) {
                throw new Error();
            }

            dispatch(fetchFileList());

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
