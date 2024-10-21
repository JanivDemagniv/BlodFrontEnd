import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import LogoIcon from './logo/LogoIcon'
import Logo from './logo/Logo'
import LeftNavBar from './leftNav/LeftNavBar'

export default function Navbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <LeftNavBar />
            </Toolbar>
        </AppBar>
    )
}
