import { createTheme, PaletteMode } from '@mui/material';
import { purple, blue, grey, deepOrange, amber } from '@mui/material/colors';
import BarcadeBrawl from '../assets/fonts/BarcadeBrawl.ttf';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: '#000',
            paper: '#000',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: 'barcadebrawl',
    fontSize: 12,
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  typography: {
    fontFamily: 'barcadebrawl',
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'BarcadeBrawl';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('BarcadeBrawl'), local('BarcadeBrawl'), url(${BarcadeBrawl}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },
});
