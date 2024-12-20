import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react'
import { useState } from 'react'
import { useCurrentUser } from '../../../users/provider/UserProvider';
import { rplacePic } from '../../../helpers/replaceValues';
import useUsers from '../../../users/hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';

export default function ProfileManu() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { user } = useCurrentUser();
    const { handleLogout } = useUsers();
    const navigate = useNavigate();

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
                    <Avatar alt={user && user.profilePic.alt ? user.profilePic.alt : rplacePic.alt} src={user ? user.profilePic.url : rplacePic.url} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px', width: '100%' }}
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
                <MenuItem onClick={() => navigate(ROUTES.MYPROFILE)}>Profile</MenuItem>
                <Divider sx={{ width: '90%', m: '0 auto' }} />
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}
