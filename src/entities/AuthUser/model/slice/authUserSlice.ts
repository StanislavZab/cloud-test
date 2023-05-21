import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserSchema } from '../types/AuthUserSchema';

const initialState: AuthUserSchema = {
    auth: false,
    inited: false,
};

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
        initAuthData: (state) => {
            const token = localStorage.getItem('token');

            if (token) {
                state.auth = true;
            }
            state.inited = true;
        },
    },
});

export const { actions: authUserActions } = authUserSlice;
export const { reducer: authUserReducer } = authUserSlice;
