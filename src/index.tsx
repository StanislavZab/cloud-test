import ReactDOM from 'react-dom/client';
import App from './app';

const component = document.getElementById('root');

if (!component) {
    throw new Error('Не найден root. Приложению не удалось вмонтироваться!');
}

ReactDOM.createRoot(component).render(
    <App />,
);
