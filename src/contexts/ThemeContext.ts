import React, { useState, useEffect, createContext } from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}


const defaultState = {
  isDark: false,

};

const ThemeContext = createContext<IThemeContext>(defaultState);

export default ThemeContext;
