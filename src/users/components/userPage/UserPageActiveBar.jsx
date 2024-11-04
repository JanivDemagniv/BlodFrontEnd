import { Box, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';

export default function UserPageActiveBar({ user }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <IconButton onClick={() => {
                navigate(ROUTES.EDITPROFILE)
            }}>
                <EditIcon />
            </IconButton>
        </Box>
    )
}
