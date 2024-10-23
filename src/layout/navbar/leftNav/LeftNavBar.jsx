import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../logo/LogoIcon'
import Logo from '../logo/Logo'
import NavBarItem from '../../../routes/components/NavBarItem'
import ROUTES from '../../../routes/routesModule'

export default function LeftNavBar() {

    return (
        <Box sx={{ display: 'flex' }}>
            <LogoIcon />
            <Logo webTitle='Music Lovers' />
            <NavBarItem to={ROUTES.ROOT}>Home</NavBarItem>
            <NavBarItem to={ROUTES.ABOUT}>About Us</NavBarItem>
            <NavBarItem to={ROUTES.POSTS}>Posts</NavBarItem>
            <NavBarItem>Favourite Posts</NavBarItem>
            <NavBarItem>My Posts</NavBarItem>
        </Box>
    )
}
