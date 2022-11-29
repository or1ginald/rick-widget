import React, { memo } from 'react';

import Alert from '@mui/material/Alert/Alert';
import Snackbar from '@mui/material/Snackbar';

export const ErrorSnackbar = memo(() => {
  // const dispatch = useAppDispatch();

  // const error = useSelector(getError);

  const autoHideDuration = 7000;
  // useEffect(() => {
  //   const autoHide = setTimeout(() => {
  //     dispatch(setAppErrorAC(null));
  //   }, autoHideDuration);
  //   return () => {
  //     clearTimeout(autoHide);
  //   };
  // });

  const onCloseClick = (): void => {
    // dispatch(setAppErrorAC(null));
  };

  return (
    <Snackbar
      // open={error !== null}
      autoHideDuration={autoHideDuration}
      onClose={onCloseClick}
    >
      <Alert onClose={onCloseClick} severity="error" sx={{ width: '100%' }}>
        {/* {error} */}
      </Alert>
    </Snackbar>
  );
});
