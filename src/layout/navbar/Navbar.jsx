import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import LeftNavComponent from './leftNav/LeftNavComponent'
import RightNavBar from './rightNav/RightNavBar'

export default function Navbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftNavComponent />
                <RightNavBar />
            </Toolbar>
        </AppBar>
    )
}
