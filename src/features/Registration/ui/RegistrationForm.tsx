import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input/Input';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { TextTheme, Text } from '@/shared/ui/Text/Text';
import cls from './RegistrationForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import {
    getRegistrationEmail, getRegistrationError, getRegistrationIsLoading, getRegistrationName, getRegistrationPassword,
} from '../model/selectors/registrationSelectors';
import { registrationActions } from '../model/slice/registrationSlice';
import { emailValidation } from '@/shared/lib/validation/emailValidation';
import { registrationByUsername } from '../model/services/registrationByUsername/registrationByUsername';

export interface RegistrationFormProps {
    className?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [errorValidation, setErrorValidation] = useState<string>('');
    const email = useSelector(getRegistrationEmail);
    const password = useSelector(getRegistrationPassword);
    const name = useSelector(getRegistrationName);
    const error = useSelector(getRegistrationError);
    const isLoading = useSelector(getRegistrationIsLoading);

    const onChangeEmail = useCallback((value: string) => {
        setErrorValidation('');
        dispatch(registrationActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        setErrorValidation('');
        dispatch(registrationActions.setPassword(value));
    }, [dispatch]);

    const onChangeName = useCallback((value: string) => {
        setErrorValidation('');
        dispatch(registrationActions.setName(value));
    }, [dispatch]);

    const onFocus = useCallback(() => {
        setErrorValidation('');
    }, []);

    const onLoginClick = useCallback(async () => {
        if (!password || !email || !name) {
            setErrorValidation('Все поля обязательны к заполнению!');
            // return;
        }

        if (!emailValidation(email)) {
            setErrorValidation('Не валидный email!');
        }

        const result = await dispatch(registrationByUsername({ email, password, name }));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/login');
        }
    }, [dispatch, email, name, navigate, password]);

    return (
        <VStack
            className={classNames(cls.registrationForm, className)}
            gap="16"
        >
            <Text title="Регистрация" />
            <Input
                type="text"
                className={cls.input}
                name="name"
                label="Name"
                onChange={onChangeName}
                onFocus={onFocus}
                value={name}
            />
            <Input
                type="email"
                className={cls.input}
                name="email"
                label="Email"
                onChange={onChangeEmail}
                onFocus={onFocus}
                value={email}
            />
            <Input
                type="password"
                className={cls.input}
                name="pass"
                label="Password"
                onChange={onChangePassword}
                onFocus={onFocus}
                value={password}
            />
            <HStack
                justify="between"
                align="center"
                max
            >
                <AppLink
                    to="/login"
                    theme={AppLinkTheme.PRIMARY}
                >
                    Уже зарегистрированы?
                </AppLink>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    Регистрация
                </Button>
            </HStack>
            {error && <Text text="Вы ввели неверный логин или пароль" theme={TextTheme.ERROR} />}
            {errorValidation && <Text text={errorValidation} theme={TextTheme.ERROR} />}
        </VStack>
    );
};
