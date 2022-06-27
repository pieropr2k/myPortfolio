import { useState, createContext } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme') || 'light'

    if (typeof storedPrefs === 'string') return storedPrefs

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }
  return 'light'; // light theme as the default;
}

export const ThemeContext = createContext();

export function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  return <ThemeContext.Provider value={{ initialTheme, theme, setTheme }}>{children}</ThemeContext.Provider>;
}