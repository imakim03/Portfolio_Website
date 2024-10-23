import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty('--background-color', '#1D1B1F');
      root.style.setProperty('--font-color', 'rgba(255, 255, 255, 0.814)');
      root.style.setProperty('--accent-color', '#333333');
      root.style.setProperty('--primary-accent-color', '#333333');
      root.style.setProperty('--secondary-accent-color', '#3a3a3a');
    } else {
      root.style.setProperty('--background-color', '#FFDFD6');
      root.style.setProperty('--font-color', '#493548');
      root.style.setProperty('--accent-color', '#E3A5C7');
      root.style.setProperty('--primary-accent-color', 'white');
      root.style.setProperty('--secondary-accent-color', '#D3C4E3');
    }


    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
