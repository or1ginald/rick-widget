import React, { FC } from 'react';

import { Paper } from '@mui/material';

import { LazyImage } from '../lazyImage';

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
        minWidth: '300px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      className={`${styles.card}`}
    >
      <LazyImage
        className={`${styles.img} card-img skeleton`}
        src={character.image}
        alt=""
        // placeholderImg={`${process.env.PUBLIC_URL}/placeholder.jpg`}
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
