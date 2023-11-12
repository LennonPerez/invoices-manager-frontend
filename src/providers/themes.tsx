'use client'

import React, { createContext, useContext, useState, FunctionComponent, ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/globalStyles';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

const ThemesProvider: FunctionComponent<ThemesProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.type === 'dark' ? lightTheme : darkTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledComponentsRegistry>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    {children}
                </ThemeProvider>
            </StyledComponentsRegistry>
        </ThemeContext.Provider>
    );
};

interface ThemesProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};

export default ThemesProvider;