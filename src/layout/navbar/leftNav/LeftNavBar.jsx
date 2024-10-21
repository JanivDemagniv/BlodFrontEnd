import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../logo/LogoIcon'
import Logo from '../logo/Logo'
import NavBarItem from '../../../routes/components/NavBarItem'

export default function LeftNavBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <LogoIcon />
            <Logo webTitle='Music Lovers' />
            <NavBarItem>Home</NavBarItem>
            <NavBarItem>About Us</NavBarItem>
            <NavBarItem>Posts</NavBarItem>
            <NavBarItem>Favourite Posts</NavBarItem>
            <NavBarItem>My Posts</NavBarItem>
        </Box>
    )
}
