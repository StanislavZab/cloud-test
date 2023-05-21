import { RootState } from '@/app/providers/StoreProvider/config/store';

export const getRegistrationEmail = (state: RootState) => state?.registrationForm.email || '';

export const getRegistrationError = (state: RootState) => state?.registrationForm.error || '';

export const getRegistrationIsLoading = (state: RootState) => state?.registrationForm.isLoading || false;

export const getRegistrationPassword = (state: RootState) => state?.registrationForm.password || '';

export const getRegistrationName = (state: RootState) => state?.registrationForm.name || '';
