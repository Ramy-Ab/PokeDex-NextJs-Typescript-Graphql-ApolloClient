import React, { useContext, useState } from 'react';

export type modeType = 'light' | 'dark';
type toggleType = () => void;

const ThemeModeContext = React.createContext<modeType | null>(null);
const ThemeModeToggleContext = React.createContext<toggleType>(() => null);

export const useThemeMode = () => {
  return useContext(ThemeModeContext);
};

export const useThemeModeToggle = () => {
  return useContext(ThemeModeToggleContext);
};

export const ThemeModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<modeType>('light');

  console.log('theme in mode : ', mode);

  const toggleThemeMode = () => {
    setMode((prevmode) => (prevmode === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeModeContext.Provider value={mode}>
      <ThemeModeToggleContext.Provider value={toggleThemeMode}>
        {children}
      </ThemeModeToggleContext.Provider>
    </ThemeModeContext.Provider>
  );
};
