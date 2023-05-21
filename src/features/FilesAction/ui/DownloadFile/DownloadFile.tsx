import { useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import DownloadIcon from '@/shared/assets/image/download.svg';
import cls from './DownloadFile.module.scss';
import { $api } from '@/shared/api/api';

interface DownloadFileProps {
    id: string;
    fileName: string;
}

export const DownloadFile: React.FC<DownloadFileProps> = (props) => {
    const {
        id,
        fileName,
    } = props;

    const onClick = useCallback(() => {
        $api.get(
            `/media/${id}`,
            {
                responseType: 'blob',
            },
        ).then((response) => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');

            link.href = href;
            link.setAttribute('download', fileName);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
    }, [fileName, id]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={cls.downloadFile}
            type="button"
            onClick={onClick}
        >
            <DownloadIcon className={cls.icon} />
        </Button>
    );
};
