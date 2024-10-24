import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItem from '../../../routes/components/NavBarItem';
import ROUTES from '../../../routes/routesModule';


export default function LeftNavBarMobile() {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                disableScrollLock
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem><NavBarItem to={ROUTES.ROOT}>Home</NavBarItem></MenuItem>
                <MenuItem><NavBarItem to={ROUTES.ABOUT}>About Us</NavBarItem></MenuItem>
                <MenuItem><NavBarItem to={ROUTES.POSTS}>Posts</NavBarItem></MenuItem>
            </Menu>
        </Box>
    )
}
