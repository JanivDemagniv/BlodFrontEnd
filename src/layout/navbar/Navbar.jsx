import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import LogoIcon from './logo/LogoIcon'
import Logo from './logo/Logo'

export default function Navbar() {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <LogoIcon />
                    <Logo webTitle='Music Lovers' />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
