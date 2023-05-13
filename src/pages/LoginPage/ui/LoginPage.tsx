import classNames from 'classnames';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.loginPage, className)}>
            LoginPage
        </div>
    );
};
