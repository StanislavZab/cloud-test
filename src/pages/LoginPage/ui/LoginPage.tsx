import classNames from 'classnames';
import { Text } from '@/shared/ui/Text/Text';
import cls from './LoginPage.module.scss';
import { Input } from '@/shared/ui/Input/Input';
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
