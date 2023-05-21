import file from '@/shared/assets/image/file.png';
import { DownloadFile, FileDelete } from '@/features/FilesAction';
import { File } from '../../model/types/fileList';
import cls from './FileListItem.module.scss';
import { PrewievImage } from '@/shared/ui/PrewievImage/PrewievImage';

interface FileListItemProps {
    fileItem: File;
}

export const FileListItem: React.FC<FileListItemProps> = (props) => {
    const {
        fileItem,
    } = props;

    const createdAt = new Date(fileItem.createdAt);
    const date = `${createdAt.getDate()}.${createdAt.getMonth()}.${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

    return (
        <div className={cls.fileListItem}>
            <div className={cls.icon}>
                {fileItem.mimeType.split('/')[0] === 'image' ? <PrewievImage id={fileItem.id} /> : <img src={file} alt="картинка" />}
            </div>
            <div className={cls.name}>
                {fileItem.fileName}
            </div>
            <div className={cls.createdAt}>
                {date}
            </div>
            <div className={cls.delete}>
                <DownloadFile fileName={fileItem.fileName} id={fileItem.id} />
            </div>
            <div className={cls.delete}>
                <FileDelete id={fileItem.id} />
            </div>
        </div>
    );
};
