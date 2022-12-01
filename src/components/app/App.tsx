import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination/Pagination';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

import { Card, Filter } from 'components';
import { useAppDispatch } from 'hooks';
import {
  getCharacters,
  getCharactersSelector,
  getNameSelector,
  getPageFilterSelector,
  setPage,
  setStringTypeFilter,
} from 'store';

export const App: FC = memo(() => {
  const dispatch = useAppDispatch();

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const currentPage = useSelector(getPageFilterSelector);
  const characterName = useSelector(getNameSelector);
  const { results, isLoading, info } = useSelector(getCharactersSelector);

  useEffect(() => {
    dispatch(getCharacters());
  }, [currentPage, characterName]);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    dispatch(setPage(value));
  };

  const onFilterClick = (): void => {
    setIsFilterOpen(prev => !prev);
  };

  const onCharacterNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setStringTypeFilter({ filter: 'name', newValue: e.target.value }));
  };

  return (
    <Box className={styles.container}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box display="flex" gap="5px" alignItems="center" justifyContent="center">
          <TextField
            inputProps={{
              autoComplete: 'off',
            }}
            type="text"
            label="Character"
            value={characterName}
            onChange={onCharacterNameChange}
          />
          <Button
            variant="outlined"
            size="large"
            sx={{ lineHeight: '100%' }}
            onClick={onFilterClick}
          >
            Filters
          </Button>
        </Box>

        {isFilterOpen && <Filter />}

        {!results.length && <h2>No results matching your search</h2>}

        <Box display="flex" flexWrap="wrap" gap="10px">
          {results?.map(character => (
            <Card key={character.id} character={character} />
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
    </Box>
  );
});
