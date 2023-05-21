import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import DeleteIcon from '@/shared/assets/image/delete.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { deleteFiles } from '../../model/services/deleteFile/deleteFile';
import { getFilesActionIsDelete } from '../../model/selectors/selectors';
import cls from './FileDelete.module.scss';

interface FileDeleteProps {
    id: string;
}

export const FileDelete: React.FC<FileDeleteProps> = (props) => {
    const {
        id,
    } = props;

    const dispatch = useAppDispatch();
    const isDelete = useSelector(getFilesActionIsDelete);

    const onClickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deleteFiles(id));
    }, [dispatch, id]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            disabled={isDelete}
            className={cls.fileDelete}
            type="button"
            onClick={onClickHandler}
        >
            <DeleteIcon className={cls.icon} />
        </Button>
    );
};
