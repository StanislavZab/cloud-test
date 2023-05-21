export interface RegistrationSchema {
    email: string;
    password: string;
    name: string;
    isLoading: boolean;
    error?: string;
}
