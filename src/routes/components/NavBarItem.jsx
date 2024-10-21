import React from 'react'
import NavBarLink from './NavBarLink'
import { Button, Typography } from '@mui/material'

export default function NavBarItem({ to, sx, children }) {
    return (
        <NavBarLink to={to} sx={sx}>
            <Button sx={{ color: 'inherit' }}>
                <Typography>{children}</Typography>
            </Button>
        </NavBarLink>
    )
}
