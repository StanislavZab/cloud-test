import classNames from 'classnames';
import cls from './RegistrationPage.module.scss';
import { RegistrationForm } from '@/features/Registration';

interface RegistrationPageProps {
    className?: string;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.registrationPage, className)}>
            <RegistrationForm />
        </div>
    );
};
