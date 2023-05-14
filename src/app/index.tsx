import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { getUserInited, userActions } from '@/entities/User/model';
import { appRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classnames('app')}>
            <Suspense fallback="">
                {inited && <RouterProvider router={appRouter} />}
            </Suspense>
        </div>
    );
};

export default App;
