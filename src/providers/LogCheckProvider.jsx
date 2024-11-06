import React, { createContext, useEffect } from 'react'
import useUsers from '../users/hooks/useUsers';

const LogCheckContext = createContext();

export default function LogCheckProvider({ children }) {
    const { handleLogout } = useUsers();

    const updateActivity = () => {
        localStorage.setItem('last activity', Date.now());
    };


    useEffect(() => {
        updateActivity();

        window.addEventListener('mouseover', updateActivity);
        window.addEventListener('keypress', updateActivity);
        window.addEventListener('click', updateActivity);

        const checkActivity = setInterval(() => {
            const lastActivity = parseInt(localStorage.getItem('last activity'));
            const currentTime = Date.now();
            const fourHour = 4 * 60 * 60 * 1000;

            if (currentTime - lastActivity > fourHour) {
                handleLogout();
            }
        }, 60000);

        return () => {
            clearInterval(checkActivity)
            window.removeEventListener('mouseover', updateActivity)
            window.removeEventListener('keypress', updateActivity)
            window.removeEventListener('click', updateActivity);
        }
    }, [handleLogout])

    return (
        <LogCheckContext.Provider value={{}}>
            {children}
        </LogCheckContext.Provider>
    );
};
