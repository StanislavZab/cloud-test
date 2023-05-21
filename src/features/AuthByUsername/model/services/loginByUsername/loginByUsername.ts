import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { authUserActions } from '@/entities/AuthUser';

export interface LoginByUsernameProps {
    email: string;
    password: string;
}

interface Response {
    status: string;
    token: string;
}

export const loginByUsername = createAsyncThunk<Response, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<Response>('/login', authData);

            if (!response.data) {
                throw new Error('');
            }

            console.log(response);

            localStorage.setItem('token', response.data.token);
            dispatch(authUserActions.setAuth(true));

            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
