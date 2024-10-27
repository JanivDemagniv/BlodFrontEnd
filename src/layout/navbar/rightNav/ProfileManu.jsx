import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { useCurrentUser } from '../../../users/provider/UserProvider';
import { rplacePic } from '../../../helpers/replaceValues';

export default function ProfileManu() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { user } = useCurrentUser();


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} >
                    <Avatar alt={user ? user.profilePic.alt : rplacePic.alt} src={user ? user.profilePic.url : rplacePic.url} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                disableScrollLock
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem>Profile</MenuItem>
            </Menu>
        </Box>
    )
}
