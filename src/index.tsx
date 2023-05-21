import ReactDOM from 'react-dom/client';
import { StoreProvider } from './app/providers/StoreProvider';
import { RouterProvider } from './app/providers/RouterProvider';
import '@/app/styles/index.scss';

const component = document.getElementById('root');

if (!component) {
    throw new Error('Не найден root. Приложению не удалось вмонтироваться!');
}

ReactDOM.createRoot(component).render(
    <StoreProvider>
        <RouterProvider />
    </StoreProvider>,
);
