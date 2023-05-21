import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {
    getLoginEmail, getLoginPassword, getLoginError, getLoginIsLoading,
} from '../../model/selectors/loginSelectors';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { emailValidation } from '@/shared/lib/validation/emailValidation';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [errorValidation, setErrorValidation] = useState<string>('');
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeEmail = useCallback((value: string) => {
        setErrorValidation('');
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        setErrorValidation('');
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onFocus = useCallback(() => {
        setErrorValidation('');
    }, []);

    const onLoginClick = useCallback(async () => {
        if (!password || !email) {
            setErrorValidation('Все поля обязательны к заполнению!');
            return;
        }

        if (!emailValidation(email)) {
            setErrorValidation('Не валидный email!');
            return;
        }

        const result = await dispatch(loginByUsername({ email, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    }, [dispatch, email, password, navigate]);

    return (
        <VStack
            className={classNames(cls.loginForm, {}, [className])}
            gap="16"
        >
            <Text title="Авторизация" />
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
                    to="/registration"
                    theme={AppLinkTheme.PRIMARY}
                >
                    Регистрация
                </AppLink>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </HStack>
            {error && <Text text="Вы ввели неверный логин или пароль" theme={TextTheme.ERROR} />}
            {errorValidation && <Text text={errorValidation} theme={TextTheme.ERROR} />}
        </VStack>
    );
});
