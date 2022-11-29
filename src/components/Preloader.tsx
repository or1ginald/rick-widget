import * as React from 'react';
import { FC } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Preloader: FC = () => (
  <Box sx={{ mx: 'auto' }}>
    <CircularProgress size={100} />
  </Box>
);
