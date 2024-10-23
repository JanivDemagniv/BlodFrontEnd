import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import ProfileManu from './rightNav/ProfileManu'
import LeftNavComponent from './leftNav/LeftNavComponent'

export default function Navbar() {
    return (
        <AppBar position='sticky' color="primary" elevation={10}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftNavComponent />
                <ProfileManu />
            </Toolbar>
        </AppBar>
    )
}
