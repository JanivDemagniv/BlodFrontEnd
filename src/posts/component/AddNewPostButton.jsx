import { Box } from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '../../providers/CustomTheme';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';

export default function AddNewPostButton() {
    const { isDark } = useTheme();
    const navigate = useNavigate();

    return (
        <Box>
            <IconButton onClick={() => { navigate(ROUTES.ADDPOST) }} sx={{ position: 'fixed', bottom: '5vh', right: '10px', border: isDark ? '5px solid #90A4AE' : '5px solid #ff9800', bgcolor: isDark ? '#90A4AE' : '#ff9800', '&:hover': { bgcolor: isDark ? '#607D8B' : '#ed6c02' } }}>
                <AddIcon fontSize='large' />
            </IconButton>
        </Box >
    )
}
