import { Logout } from '@/features/Logout';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={cls.header}>
            <h1>Файловый менеджер</h1>
            <Logout />
        </div>
    );
};
