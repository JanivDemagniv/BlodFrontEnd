import { Box } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavBarItem'
import ROUTES from '../../../routes/routesModule'
import { useCurrentUser } from '../../../users/provider/UserProvider'

export default function LeftNavBar() {
    const { user } = useCurrentUser();
    console.log(user);


    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavBarItem to={ROUTES.ROOT}>Home</NavBarItem>
            <NavBarItem to={ROUTES.ABOUT}>About Us</NavBarItem>
            <NavBarItem to={ROUTES.POSTS}>Posts</NavBarItem>
            <NavBarItem>Favourite Posts</NavBarItem>
            {user && user.isCreator ? <NavBarItem>My Posts</NavBarItem> : null}
        </Box>
    )
}
