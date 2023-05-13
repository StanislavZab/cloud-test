import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { LoginPage } from '@/pages/LoginPage';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <div>404</div>,
    },
    {
        path: '/registration',
        element: <RegistrationPage />,
        errorElement: <div>404</div>,
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <div>404</div>,
    },
]);
