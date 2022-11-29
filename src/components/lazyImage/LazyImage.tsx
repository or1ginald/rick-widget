import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';

import styles from '../card/Card.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
  errorImg?: string;
}
export const LazyImage: FC<ImageProps> = (props): ReactElement => {
  const { src, placeholderImg, errorImg } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [imgSrc, setSrc] = useState(placeholderImg || src);
  const onLoad = useCallback(() => {
    setSrc(src);
    setIsLoaded(true);
  }, [src]);
  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src, onLoad, onError]);
  if (!isLoaded) {
    return (
      <div style={{ height: '300px', width: '300px' }} className={styles.skeleton} />
    );
  }
  return <img {...props} alt={imgSrc} src={imgSrc} />;
};
