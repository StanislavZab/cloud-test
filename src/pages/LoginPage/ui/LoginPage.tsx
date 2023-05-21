import classNames from 'classnames';
import cls from './LoginPage.module.scss';
import { LoginForm } from '@/features/AuthByUsername';

interface LoginPageProps {
    className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.loginPage, className)}>
            <LoginForm />
        </div>
    );
};
