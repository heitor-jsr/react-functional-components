import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (firstRender) {
      firstRender.current = false;
      return;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToggleTheme} 
        selectedTheme={theme} />
    </ThemeProvider>
  );
};

export default App;
