import * as React from 'react';
import cx from 'clsx';

import { useIntersectionObserver, useImagePreload } from '@madeinhaus/hooks';

import styles from './ImageLoader.module.css';

interface ImageLoaderProps {
    dogs: string[];
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ dogs }) => {
    return (
        <div className={cx(styles.root, 'grid')}>
            <div className={styles.dogs}>
                {dogs.map((dog, i) => (
                    <LazyImage key={i} url={dog} />
                ))}
            </div>
        </div>
    );
};

interface LazyImageProps {
    url: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ url }) => {
    const [inView, intersectionRef] = useIntersectionObserver();
    const [loaded, loadRef] = useImagePreload();
    return (
        <div ref={intersectionRef} className={styles.imageWrapper}>
            <img
                ref={loadRef}
                src={inView ? url : undefined}
                className={cx(styles.image, { [styles.loaded]: loaded })}
                alt=""
            />
        </div>
    );
};

export default ImageLoader;
