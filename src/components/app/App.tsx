import React, { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Pagination from '@mui/material/Pagination/Pagination';
import TextField from '@mui/material/TextField/TextField';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

import { Character } from 'api';
import { CharacterInfoModal, Card, Filter } from 'components';
import { useAppDispatch } from 'hooks';
import {
  getCharacters,
  getCharactersSelector,
  getGenderSelector,
  getNameSelector,
  getPageFilterSelector,
  getSpeciesSelector,
  getStatusSelector,
  getTypeSelector,
  resetFilters,
  setPage,
  setStringTypeFilter,
} from 'store';

export const App: FC = memo(() => {
  const dispatch = useAppDispatch();

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);

  const currentPage = useSelector(getPageFilterSelector);
  const characterName = useSelector(getNameSelector);
  const status = useSelector(getStatusSelector);
  const species = useSelector(getSpeciesSelector);
  const gender = useSelector(getGenderSelector);
  const type = useSelector(getTypeSelector);
  const { results, info } = useSelector(getCharactersSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, [currentPage, characterName, species, status, gender, type]);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    dispatch(setPage(value));
  };

  const onFilterClick = (): void => {
    setIsFilterOpen(prev => !prev);
  };

  const onResetFilterClick = (): void => {
    dispatch(resetFilters());
  };

  const onCharacterNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setStringTypeFilter({ filter: 'name', newValue: e.target.value }));
  };

  const onCardClick = useCallback((character: Character): void => {
    setCurrentCharacter(character);
  }, []);

  const onModalClose = useCallback((): void => {
    setCurrentCharacter(null);
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.app}>
        <Grid container className={styles.controls}>
          <Grid item>
            <TextField
              inputProps={{
                autoComplete: 'off',
              }}
              fullWidth
              type="text"
              label="Character"
              value={characterName}
              onChange={onCharacterNameChange}
            />
          </Grid>
          <Grid item>
            <Button
              className={styles.controls__button}
              variant="outlined"
              onClick={onFilterClick}
            >
              Filters
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className={styles.controls__button}
              onClick={onResetFilterClick}
            >
              Reset
            </Button>
          </Grid>
        </Grid>

        {isFilterOpen && <Filter />}

        {!results.length && <h2>No results matching your search</h2>}

        <Box className={styles.cardsContainer}>
          {results?.map(character => (
            <Card
              character={character}
              key={character.id}
              handleCardClick={onCardClick}
            />
          ))}
        </Box>

        {!!results.length && (
          <Pagination
            size="small"
            count={info?.pages ?? 1}
            page={currentPage}
            onChange={onPageChange}
          />
        )}
      </Box>
      <CharacterInfoModal
        isOpen={!!currentCharacter}
        onClose={onModalClose}
        character={currentCharacter}
      />
    </Box>
  );
});
