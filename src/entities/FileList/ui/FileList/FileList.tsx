import { useEffect } from 'react';
import cls from './FileList.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { fetchFileList } from '../../model/services/fetchFileList';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { getFileList, getFileListError, getFileListIsLoading } from '../../model/selectors/fileListSelectors';
import { FileListItem } from '../FileListItem/FileListItem';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

export const FileList = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getFileListIsLoading);
    const fileList = useAppSelector(getFileList);

    useEffect(() => {
        dispatch(fetchFileList());
    }, [dispatch]);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className={cls.fileList}>
            {fileList.length ? <div>Список файлов</div> : <div>Список файлов пуст</div>}
            {fileList.map(((item) => (
                <FileListItem key={item.id} fileItem={item} />
            )))}
        </div>
    );
};
