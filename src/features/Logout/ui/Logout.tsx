import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { authUserActions } from '@/entities/AuthUser';

export const Logout = () => {
    const dispatch = useAppDispatch();

    const logout = useCallback(() => {
        dispatch(authUserActions.setAuth(false));
        localStorage.removeItem('token');
    }, [dispatch]);

    return (
        <Button
            theme={ButtonTheme.OUTLINE_RED}
            onClick={logout}
        >
            Выйти
        </Button>
    );
};
