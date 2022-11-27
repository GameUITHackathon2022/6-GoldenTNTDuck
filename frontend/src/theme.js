import { createTheme } from '@mui/material';
import { TYPE_THEME_LOOKUP } from './shared';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#c31413',
      light: '#C70039',
    },
    secondary: {
      main: '#15c630',
    },
    otherColor: {
      main: '#999',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: TYPE_THEME_LOOKUP.dark,
  },
});
