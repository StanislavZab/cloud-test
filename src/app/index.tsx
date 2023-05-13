import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import classnames from 'classnames';
import { appRouter } from './providers/router';
import './styles/index.scss';

const App = () => (
    <div className={classnames('app')}>
        <Suspense fallback="">
            <RouterProvider router={appRouter} />
        </Suspense>
    </div>
);

export default App;
