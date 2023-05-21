import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export interface RegistrationByUsernameProps {
    email: string;
    password: string;
    name: string;
}

interface Response {
    status: string;
}

export const registrationByUsername = createAsyncThunk<Response, RegistrationByUsernameProps, ThunkConfig<string>>(
    'registration/registrationByUsername',
    async (authData, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<Response>('/register', authData);

            if (!response.data) {
                throw new Error('');
            }

            console.log(response);

            return response.data;
        } catch (e) {
            return rejectWithValue('Что-то пошло не так');
        }
    },
);
