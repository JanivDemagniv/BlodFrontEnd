import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from './LogoIcon'
import Logo from './Logo'

export default function LogoComponent() {
    return (
        <Box sx={{ display: 'flex' }}>
            <LogoIcon />
            <Logo webTitle='Music Lovers' />
        </Box>
    )
}
