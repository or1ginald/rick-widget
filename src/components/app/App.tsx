import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { Box, Button, Grid, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination/Pagination';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

import { Card, Filter } from 'components';
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

  const currentPage = useSelector(getPageFilterSelector);
  const characterName = useSelector(getNameSelector);
  const status = useSelector(getStatusSelector);
  const species = useSelector(getSpeciesSelector);
  const gender = useSelector(getGenderSelector);
  const type = useSelector(getTypeSelector);
  const { results, isLoading, info } = useSelector(getCharactersSelector);

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

  return (
    <Box className={styles.container}>
      <Box className={styles.app}>
        <Grid container gap="10px" justifyContent="center" flexWrap="nowrap">
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
          <Grid item alignItems="stretch" style={{ display: 'flex' }}>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              sx={{ lineHeight: '100%' }}
              onClick={onFilterClick}
            >
              Filters
            </Button>
          </Grid>
          <Grid item alignItems="stretch" style={{ display: 'flex' }}>
            <Button
              variant="outlined"
              fullWidth
              size="large"
              sx={{ lineHeight: '100%' }}
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
            <Card character={character} key={character.id} />
          ))}
        </Box>

        {!!results.length && (
          <Pagination
            size="small"
            // sx={{ alignSelf: 'flex-end' }}
            count={info?.pages ?? 1}
            page={currentPage}
            onChange={onPageChange}
          />
        )}
      </Box>
    </Box>
  );
});
