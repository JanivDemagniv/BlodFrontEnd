import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../logo/LogoIcon'
import Logo from '../logo/Logo'

export default function LeftNavBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <LogoIcon />
            <Logo webTitle='Music Lovers' />
        </Box>
    )
}
