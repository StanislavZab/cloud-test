import classNames from 'classnames';
import { useCallback, useRef } from 'react';
import cls from './AddFiles.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { addFile } from '../../model/services/addFile/addFile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDiapatch/useAppDispatch';
import { filesActionActions } from '../../model/slice/filesActionSlice';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { getFilesActionError } from '../../model/selectors/selectors';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getFileListLimit } from '@/entities/FileList/model/selectors/fileListSelectors';

interface AddFileProps {
    className?: string;
}

export const AddFiles: React.FC<AddFileProps> = (props) => {
    const {
        className,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const error = useAppSelector(getFilesActionError);
    const limit = useAppSelector(getFileListLimit);

    const buttonHendler = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const inputHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files) {
            const { files } = e.target;
            let size = 0;

            for (let i = 0; i < files.length; i++) {
                size += files[i].size;
            }

            if (size < 1048576 && files.length <= limit) {
                dispatch(addFile(e.target.files));
            } else if (size > 1048576) {
                dispatch(filesActionActions.setError('Размер файлов больше 1Mb'));
                setTimeout(() => {
                    dispatch(filesActionActions.setError(''));
                }, 3000);
            } else if (files.length > limit) {
                dispatch(filesActionActions.setError('Превышено количество файлов'));
                setTimeout(() => {
                    dispatch(filesActionActions.setError(''));
                }, 3000);
            }
        }
    }, [dispatch, limit]);

    return (
        <div className={classNames(cls.addFile, {}, [className])}>
            {error
                ? <Text text={error} theme={TextTheme.ERROR} />
                : (
                    <>
                        <input
                            className={cls.hidden}
                            type="file"
                            onChange={inputHandle}
                            multiple
                            ref={inputRef}
                        />
                        <Button
                            onClick={buttonHendler}
                            disabled={limit === 0}
                        >
                            Добавить файл
                        </Button>
                    </>
                )}
        </div>
    );
};
