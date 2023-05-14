import ReactDOM from 'react-dom/client';
import App from './app';
import { StoreProvider } from './app/providers/StoreProvider';

const component = document.getElementById('root');

if (!component) {
    throw new Error('Не найден root. Приложению не удалось вмонтироваться!');
}

ReactDOM.createRoot(component).render(
    <StoreProvider>
        <App />
    </StoreProvider>,
);
