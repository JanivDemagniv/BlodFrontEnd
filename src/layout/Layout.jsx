import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import Footer from './footer/Footer';
import { Box } from '@mui/material';
import { useTheme } from '../providers/CustomTheme';

export default function Layout({ children }) {
    const { isDark } = useTheme();

    return (
        <Box sx={{ bgcolor: isDark ? '#263239' : '#FFFDE7' }}>
            <Navbar />
            <Main>{children}</Main >
            <Footer />
        </Box>
    )
}
