import React from 'react';
import THEME from './THEME';
import merge from '../style-functions/mergeObjects';
import { ThemeProvider as Provider } from 'styled-components';

const ThemeProvider = ({ theme, children }) => {
  const customTheme = merge(THEME, theme);

  return <Provider theme={customTheme}>{children}</Provider>;
};

export { ThemeProvider };
