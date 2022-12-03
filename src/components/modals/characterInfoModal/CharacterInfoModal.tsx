import { FC, memo } from 'react';

import Box from '@mui/material/Box/Box';

import styles from './CharacterInfoModal.module.scss';

import { Character } from 'api';
import { ModalWithAnimation } from 'components/modals/ModalWithAnimation';

type Props = {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
};

export const CharacterInfoModal: FC<Props> = memo(props => {
  const { character, isOpen, onClose } = props;
  return (
    <ModalWithAnimation isOpen={isOpen} onClose={onClose} fadeIn={isOpen}>
      <Box style={{ outline: 'none' }}>
        <Box className={styles.nameWrapper}>
          <h2 className={styles.characterName}>{character?.name}</h2>
        </Box>
        <Box className={styles.infoContainer}>
          <Box>Gender: {character?.gender}</Box>
          <Box>Location: {character?.location.name}</Box>
          <Box>Species: {character?.species}</Box>
          <Box>Origin: {character?.origin.name}</Box>
          <Box>Status: {character?.status}</Box>
          {character?.type && <Box>Type: {character?.type}</Box>}
        </Box>
      </Box>
    </ModalWithAnimation>
  );
});
