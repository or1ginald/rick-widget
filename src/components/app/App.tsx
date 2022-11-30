import React, { FC, memo, useMemo, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination/Pagination';
import { AxiosRequestConfig } from 'axios';

import { ErrorSnackbar } from '../errorSnackbar/ErrorSnackbar';

import styles from './App.module.scss';

import { Characters } from 'api';
import { Card, Loader } from 'components';
import { useFetch, useInput } from 'hooks';

export const App: FC = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  const { value: characterName, onInputChange: setCharacterName } = useInput();
  console.log(characterName);

  const requestCharactersAxiosConfig: AxiosRequestConfig = useMemo(
    () => ({
      params: {
        page: currentPage,
        status,
        name: characterName,
        species,
        type,
        gender,
      },
    }),
    [characterName],
  );

  const {
    data: characters,
    isLoading,
    refetch,
    error,
  } = useFetch<Characters>(
    'https://rickandmortyapi.com/api/character',
    requestCharactersAxiosConfig,
  );

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setCurrentPage(value);
    refetch();
  };

  return (
    <>
      <Box className={styles.container}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box display="flex" gap="5px" alignItems="center" justifyContent="center">
            <TextField
              key="characterName"
              label="Character name"
              value={characterName}
              onChange={setCharacterName}
            />
            <Button variant="outlined" size="large" sx={{ lineHeight: '100%' }}>
              Filters
            </Button>
          </Box>
          {error && <>No results matching your search</>}
          <Box display="flex" flexWrap="wrap" gap="10px">
            {characters?.results?.map(character => (
              <Card key={character.id} character={character} />
            ))}
          </Box>
          {characters && (
            <Pagination
              count={characters?.info?.pages ?? 1}
              page={currentPage}
              onChange={onPageChange}
            />
          )}
        </Box>
      </Box>
      <ErrorSnackbar />
    </>
  );
});
