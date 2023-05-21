import { RouterProvider as Router } from 'react-router-dom';
import { router } from '../config/routerConfig';

export const RouterProvider = () => (
    <Router router={router} />
);
