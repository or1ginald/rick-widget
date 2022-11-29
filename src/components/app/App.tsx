import React, { FC, memo, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination/Pagination';

import { ErrorSnackbar } from '../errorSnackbar/ErrorSnackbar';

import styles from './App.module.scss';

import { Characters } from 'api';
import { Card } from 'components';
import { useFetch } from 'hooks';

export const App: FC = memo(() => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: characters,
    isLoading,
    refetch,
  } = useFetch<Characters>(
    `https://rickandmortyapi.com/api/character?page=${currentPage}&type=`,
  );

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setCurrentPage(value);
    refetch();
  };

  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <Box className={styles.container}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box display="flex" gap="5px" alignItems="center" justifyContent="center">
            <TextField label="Character name" />
            <Button variant="outlined" sx={{ height: '100%' }}>
              Filters
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="10px">
            {characters?.results?.map(character => (
              <Card key={character.id} character={character} />
            ))}
          </Box>
          <Pagination
            count={characters?.info?.pages ?? 1}
            page={currentPage}
            onChange={onPageChange}
          />
        </Box>
      </Box>
      <ErrorSnackbar />
    </>
  );
});
