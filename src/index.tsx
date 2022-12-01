import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { lightTheme } from './styles';

import { App } from 'components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
