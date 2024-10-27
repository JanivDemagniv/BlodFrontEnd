import { Box, IconButton } from '@mui/material';
import React from 'react';
import ProfileManu from './ProfileManu';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from '../../../providers/CustomTheme';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import NavBarItem from '../../../routes/components/NavBarItem';
import ROUTES from '../../../routes/routesModule';

export default function RightNavBar() {
    const { isDark, toggelDarkMode } = useTheme();
    const { user } = useCurrentUser();

    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton sx={{ ml: 1, width: '32px', height: '32px', alignSelf: 'center' }} onClick={toggelDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {user ? null : <NavBarItem to={ROUTES.LOGIN}>Lognin</NavBarItem>}
            {user ? <ProfileManu /> : null}
        </Box>
    )
}
