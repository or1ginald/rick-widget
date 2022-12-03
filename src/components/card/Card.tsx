import React, { FC } from 'react';

import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './Card.module.scss';

import { Character } from 'api';

type Props = {
  character: Character;
  handleCardClick: (character: Character) => void;
};

export const Card: FC<Props> = props => {
  const { character, handleCardClick } = props;

  const onCardClick = (): void => {
    handleCardClick(character);
  };

  const onEnterKeyDown = (e: any): void => {
    if (e.key === 'Enter') {
      handleCardClick(character);
    }
  };

  return (
    <Paper
      elevation={4}
      onClick={onCardClick}
      className={styles.card}
      onKeyDown={onEnterKeyDown}
      tabIndex={0}
    >
      <LazyLoadImage
        src={character.image}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
      />
      <Box className={styles.content}>
        <h3 className={styles.characterName}>{character.name}</h3>
      </Box>
    </Paper>
  );
};
