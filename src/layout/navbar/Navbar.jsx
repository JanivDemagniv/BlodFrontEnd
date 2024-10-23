import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import LogoIcon from './logo/LogoIcon'
import Logo from './logo/Logo'
import LeftNavBar from './leftNav/LeftNavBar'
import ProfileManu from './rightNav/ProfileManu'

export default function Navbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftNavBar />
                <ProfileManu />
            </Toolbar>
        </AppBar>
    )
}
