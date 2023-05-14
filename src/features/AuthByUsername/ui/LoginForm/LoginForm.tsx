import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const {
        className,
        onSuccess,
    } = props;

    const dispatch = useAppDispatch();
    const [errorValidation, setErrorValidation] = useState<string[]>([]);
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email))) {
            console.log('Email не верен');
        }

        if (!(/^[a-zA-Z0-9]{8,}.*$/.test(password))) {
            console.log('Пароль не верен');
        }
        // const result = await dispatch(loginByUsername({ email, password }));
        // if (result.meta.requestStatus === 'fulfilled') {
        //     onSuccess?.();
        // }
    }, [dispatch, onSuccess, password, email]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <VStack
                className={classNames(cls.loginForm, {}, [className])}
                gap="16"
            >
                <Text title="Авторизация" />
                {error && <Text text="Вы ввели неверный логин или пароль" theme={TextTheme.ERROR} />}
                <Input
                    type="email"
                    className={cls.input}
                    name="email"
                    label="Email"
                    onChange={onChangeEmail}
                    value={email}
                />
                <Input
                    type="password"
                    className={cls.input}
                    name="pass"
                    label="Password"
                    onChange={onChangePassword}
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
                {errorValidation.map((item) => <Text text={item} theme={TextTheme.ERROR} />)}
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
