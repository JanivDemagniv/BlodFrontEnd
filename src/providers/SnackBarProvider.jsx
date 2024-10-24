import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useCallback, useContext, useState } from 'react';

const SnackBarContext = createContext();

export default function SnackBarProvider({ children }) {
    const [isSnackOpen, setIsSnackOpen] = useState(false);
    const [snackColor, setSnackColor] = useState('success');
    const [snackVariant, setSnackVariant] = useState('filled');
    const [snackMessage, setSnackMessage] = useState('in snackbar');
    const setSnack = useCallback((color, message, variant = 'filled') => {
        setIsSnackOpen(true);
        setSnackColor(color);
        setSnackMessage(message);
        setSnackVariant(variant);
    }, [])
    return (
        <>
            <SnackBarContext.Provider value={setSnack}>
                {children}
            </SnackBarContext.Provider>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={isSnackOpen}
                onClose={() => {
                    setIsSnackOpen(false)
                }}
                autoHideDuration={2000}>
                <Alert severity={snackColor} variant={snackVariant}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export const useSnack = () => {
    const context = useContext(SnackBarContext);
    if (!context) throw new Error('useSnackbar must be use inside use provider');
    return context;
}
