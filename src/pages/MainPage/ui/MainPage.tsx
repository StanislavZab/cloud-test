import classNames from 'classnames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.mainPage, className)}>
            MainPage
        </div>
    );
};
