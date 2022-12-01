import React, { FC } from 'react';

import { Paper } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './Card.module.scss';

import { Character } from 'api';

type Props = {
  character: Character;
};

export const Card: FC<Props> = props => {
  const { character } = props;
  return (
    <Paper
      elevation={4}
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      className={`${styles.card}`}
    >
      <LazyLoadImage
        src={character.image}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
      />
      <div className={`${styles.content}`}>
        <div>{character.name}</div>
        <div className="">
          <div>Last Location</div>
          <div>{character.location.name}</div>
        </div>
      </div>
    </Paper>
  );
};
