import { Box } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavBarItem'
import ROUTES from '../../../routes/routesModule'
import { useCurrentUser } from '../../../users/provider/UserProvider'

export default function LeftNavBar() {
    const { user } = useCurrentUser();

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavBarItem to={ROUTES.ROOT}>Home</NavBarItem>
            <NavBarItem to={ROUTES.ABOUT}>About Us</NavBarItem>
            <NavBarItem to={ROUTES.POSTS}>Posts</NavBarItem>
            {user ? <NavBarItem to={ROUTES.LIKEDPOSTS}>Favourite Posts</NavBarItem> : null}
            {user && user.isCreator ? <NavBarItem to={ROUTES.MYPOSTS}>My Posts</NavBarItem> : null}
            {user && user.isAdmin ? <NavBarItem to={ROUTES.CRM}>CRM</NavBarItem> : null}
        </Box>
    )
}
