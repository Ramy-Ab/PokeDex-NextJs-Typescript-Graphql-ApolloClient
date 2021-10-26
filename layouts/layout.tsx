import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { useThemeMode } from '../contexts/ThemeModeContext';
import { getDesignTokens } from '../helpers/MuiTheme';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const test = useThemeMode();
  return (
    <>
      <ThemeProvider theme={createTheme(getDesignTokens(test))}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
