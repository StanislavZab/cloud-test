import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { authUserActions, getAuth, getAuthInited } from '@/entities/AuthUser';

export const AuthProvider = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(getAuth);
    const inited = useAppSelector(getAuthInited);

    useEffect(() => {
        dispatch(authUserActions.initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            {!isAuth && <Navigate to="/login" replace />}
            <Outlet />
        </>
    );
};
