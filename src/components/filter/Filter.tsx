import React, { ChangeEvent, memo } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
// import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';

import styles from './Filter.module.scss';

import { CharactersFilterType } from 'api';
import { useAppDispatch } from 'hooks';
import {
  getGenderSelector,
  getSpeciesSelector,
  getStatusSelector,
  getTypeSelector,
  setGender,
  setStatus,
  setStringTypeFilter,
} from 'store';

export const Filter = memo(() => {
  const dispatch = useAppDispatch();

  const status = useSelector(getStatusSelector);
  const species = useSelector(getSpeciesSelector);
  const gender = useSelector(getGenderSelector);
  const type = useSelector(getTypeSelector);

  const onSpeciesChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setStringTypeFilter({ filter: 'species', newValue: e.target.value }));
  };

  const onTypeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setStringTypeFilter({ filter: 'type', newValue: e.target.value }));
  };

  const onStatusChange = (event: SelectChangeEvent): void => {
    dispatch(setStatus(event.target.value as CharactersFilterType['status']));
  };

  const onGenderChange = (event: SelectChangeEvent): void => {
    dispatch(setGender(event.target.value as CharactersFilterType['gender']));
  };

  return (
    <Box className={styles.filter}>
      <Box className={styles.filter__row}>
        <TextField
          variant="outlined"
          label="Species"
          onChange={onSpeciesChange}
          value={species}
        />
        <TextField variant="outlined" label="Type" onChange={onTypeChange} value={type} />
      </Box>
      <Box className={styles.filter__row}>
        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            value={status}
            label="Status"
            onChange={onStatusChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender-select"
            value={gender}
            label="Gender"
            onChange={onGenderChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
});
