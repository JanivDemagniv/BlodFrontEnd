import { createTheme, ThemeProvider } from '@mui/material';
import React, { createContext, useCallback, useContext, useState } from 'react'

const ThemeContext = createContext();

export default function CustomTheme({ children }) {
    const [isDark, setIsDark] = useState(false);
    const toggelDarkMode = useCallback(() => {
        setIsDark((perv) => !perv);
    }, []);

    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light",
            primary: {
                main: '#344955',
                light: '#4A6572',
                dark: '#232F34',
                contrastText: '#fff',
            },
            secondary: {
                main: '#F9AA33'
            },
            text: {
                primary: '#f1f1f1',
                secondary: '#f5f4f3'
            },
            background: {
                paper: '#4A6572',
                default: '#232F34'
            }
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDark, toggelDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be use whithin provider');
    return context
}
