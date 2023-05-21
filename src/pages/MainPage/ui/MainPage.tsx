import { Header } from '@/widget/Header';
import { FileList, FilesCount } from '@/entities/FileList';
import cls from './MainPage.module.scss';
import { AddFiles } from '@/features/FilesAction';

export const MainPage = () => (
    <div className={cls.mainPage}>
        <Header />
        <div className={cls.down}>
            <FilesCount />
            <AddFiles />
        </div>
        <FileList />
    </div>
);
