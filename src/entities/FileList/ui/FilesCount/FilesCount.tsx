import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import cls from './FilesCount.module.scss';
import { getFileListLimit } from '../../model/selectors/fileListSelectors';

interface FilesCountProps {
    className?: string;
}

export const FilesCount: React.FC<FilesCountProps> = (props) => {
    const {
        className,
    } = props;

    const limit = useAppSelector(getFileListLimit);

    return (
        <div className={cls.filesCount}>{`Лимит файлов: ${limit} из 20`}</div>
    );
};
