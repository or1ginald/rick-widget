import React, { FC } from 'react';

import styles from './Loader.module.scss';

import loaderImg from 'assets/webp/cucumber.webp';

export const Loader: FC = () => (
  <div className={styles.splashScene}>
    <img src={loaderImg} alt="loader" className="animate__animated animate__rotateIn" />
  </div>
);
