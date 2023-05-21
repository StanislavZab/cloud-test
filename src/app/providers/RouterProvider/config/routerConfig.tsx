import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/app/providers/AuthProvider';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

export const router = createBrowserRouter([
    {
        element: <AuthProvider />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
    },
]);
