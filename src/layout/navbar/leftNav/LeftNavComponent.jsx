import React from 'react'
import LogoComponent from '../logo/LogoComponent'
import LeftNavBar from './LeftNavBar'
import LeftNavBarMobile from './LeftNavBarMobile'
import { Box } from '@mui/material'

export default function LeftNavComponent() {
    return (
        <Box sx={{ display: 'flex' }}>
            <LeftNavBarMobile />
            <LogoComponent />
            <LeftNavBar />
        </Box>
    )
}
