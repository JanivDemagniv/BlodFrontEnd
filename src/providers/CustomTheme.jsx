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
                main: isDark ? '#607D8B' : '#ed6c02',
                light: isDark ? '#90A4AE' : '#ff9800',
                dark: isDark ? '#263238' : '#e65100',
                contrastText: '#000',
            },
            text: {
                primary: '#000',
                secondary: '#f5f4f3'
            },
            background: {
                paper: isDark ? '#263238' : '#ff9800',
                default: '#ed6c02'
            }
        },
        typography: {
            button: {
                textTransform: 'none'
            }
        }
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
