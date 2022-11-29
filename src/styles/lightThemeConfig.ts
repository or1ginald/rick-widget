import { ThemeOptions } from '@mui/material';

export const lightThemeConfig: ThemeOptions = {
  typography: {
    allVariants: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 500,
      textTransform: 'none',
      fontSize: 16,
    },
    h2: {
      fontSize: 24,
      color: 'gray',
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '30px',
          color: '#7451f8',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:hover': {
            backgroundColor: '#ece8ff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '.1px solid #ccc',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#7451f8',
    },
  },
};
