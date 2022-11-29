import * as React from 'react';
import { FC } from 'react';

import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type ModalType = {
  open: boolean;
  children: React.ReactNode;
};

export const NestedModal: FC<ModalType> = ({ children, open }) => (
  <Modal
    open={open}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <Box sx={{ ...style }}>{children}</Box>
  </Modal>
);
