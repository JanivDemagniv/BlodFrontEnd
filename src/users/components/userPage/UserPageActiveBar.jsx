import { Box, IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

export default function UserPageActiveBar({ user }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <IconButton onClick={() => {
                console.log(user._id);
            }}>
                <EditIcon />
            </IconButton>
        </Box>
    )
}
