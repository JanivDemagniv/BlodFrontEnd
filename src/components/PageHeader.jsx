import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../providers/CustomTheme'
import { capitalizeWords } from '../helpers/generalFunctions';

export default function PageHeader({ title, subtitle }) {
    const { isDark } = useTheme();

    return (
        <Box sx={{ p: '20px 0 5px', color: isDark ? '#fff' : '#000' }}>
            <Typography sx={{ fontSize: '3rem' }} align='center' variant='h2' component='h1'>{capitalizeWords(title)}</Typography>
            <Typography sx={{ fontSize: '1rem' }} align='center' variant='h5' component='h2'>{capitalizeWords(subtitle)}</Typography>
            <Divider sx={{ my: 2 }} />
        </Box>
    )
}
