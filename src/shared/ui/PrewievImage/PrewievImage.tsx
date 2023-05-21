import { useEffect, useState } from 'react';
import { $api } from '@/shared/api/api';
import cls from './PrewievImage.module.scss';

interface PrewievImageProps {
    id: string;
}

export const PrewievImage: React.FC<PrewievImageProps> = (props) => {
    const {
        id,
    } = props;

    const [base64, setBase64] = useState('');

    useEffect(() => {
        $api.get(
            `/media/${id}`,
            {
                responseType: 'arraybuffer',
            },
        ).then((res) => {
            const base64 = btoa(
                new Uint8Array(res.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
            );
            setBase64(base64);
        });
    }, [id]);

    return (
        <img
            className={cls.image}
            alt="prewiev"
            src={`data:image/jpeg;charset=utf-8;base64,${base64}`}
        />
    );
};
