import React, { useEffect } from 'react'
import { useCurrentUser } from '../provider/UserProvider'
import useUsers from '../hooks/useUsers';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Box, Divider, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';

export default function UserDetails() {
    const { user } = useCurrentUser();
    const { isLoading, error, handleGetUserById, userDeatails } = useUsers();

    useEffect(() => {
        handleGetUserById(user._id);
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (userDeatails == undefined || userDeatails == null) return <Typography>Sorry there is no user like that</Typography>
    if (userDeatails) return (
        <Box>
            <PageHeader title='My Profile' subtitle='If you wanna see your profile, that is the place' />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50vw', m: '0 auto' }}>
                <Box>
                    <Box sx={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '5px' }}>
                        <Box sx={{ width: '100%', height: '100%', objectFit: 'cover' }} component='img' src={userDeatails.profilePic.url} alt={userDeatails.profilePic.alt} />
                    </Box>
                    <Typography>Username: {userDeatails.userName}</Typography>
                    <Typography>Email : {userDeatails.email}</Typography>
                    <Typography>Creator? {userDeatails && user.isCreator ? 'Yes' : 'No'}</Typography>
                </Box>
                <Box>
                    <Divider />
                    <Typography>Name</Typography>
                    <Typography>First:{userDeatails.name.first}</Typography>
                    <Typography>Middle:{userDeatails.name.middle}</Typography>
                    <Typography>Last:{userDeatails.name.last}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
