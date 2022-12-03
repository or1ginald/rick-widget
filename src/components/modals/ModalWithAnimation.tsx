import React, { memo, ReactNode } from 'react';

import { Fade, Modal } from '@mui/material';
import Box from '@mui/material/Box/Box';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  fadeIn: boolean;
  children: ReactNode;
};

export const ModalWithAnimation = memo((props: Props) => {
  const { fadeIn, isOpen, onClose, children } = props;
  const style = {
    position: 'absolute' as 'absolute',
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 5,
    borderRadius: 5,
    p: '1em 2em',
  };
  return (
    <Modal open={isOpen} closeAfterTransition onClose={onClose}>
      <Fade in={fadeIn}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
});
