import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getLoginEmail = (state: RootState) => state?.loginForm?.email || '';

export const getLoginError = (state: RootState) => state?.loginForm?.error || '';

export const getLoginIsLoading = (state: RootState) => state?.loginForm?.isLoading || false;

export const getLoginPassword = (state: RootState) => state?.loginForm?.password || '';
