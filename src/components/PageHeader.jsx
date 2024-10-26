import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../providers/CustomTheme'

export default function PageHeader({ title, subtitle }) {
    const { isDark } = useTheme();

    return (
        <Box sx={{ p: '20px 0 5px', color: isDark ? '#fff' : '#000' }}>
            <Typography align='center' variant='h2' component='h1'>{title}</Typography>
            <Typography align='center' variant='h5' component='h2'>{subtitle}</Typography>
            <Divider sx={{ my: 2 }} />
        </Box>
    )
}
