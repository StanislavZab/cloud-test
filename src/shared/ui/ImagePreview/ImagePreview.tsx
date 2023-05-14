import { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';

interface ImagePreviewProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(className)}
            style={style}
        />
    );
};
