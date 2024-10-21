import { Typography } from '@mui/material'
import React from 'react'

export default function Logo({ webTitle }) {
    return (
        <Typography sx={{ alignSelf: 'center' }}>
            {webTitle}
        </Typography>
    )
}
