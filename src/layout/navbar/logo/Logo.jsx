import { Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../../providers/CustomTheme'

export default function Logo({ webTitle }) {
    const { isDark } = useTheme();

    return (
        <Typography sx={{ alignSelf: 'center', color: isDark ? '#fff' : '#000', fontWeight: 'bold' }}>
            {webTitle}
        </Typography>
    )
}
