import React, { useEffect } from 'react'
import { useCurrentUser } from '../provider/UserProvider'
import useUsers from '../hooks/useUsers';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Box, Divider, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { capitalizeWords } from '../../helpers/generalFunctions';
import UserPageActiveBar from '../components/userPage/UserPageActiveBar';
import { getUser } from '../services/localStorageService';
import { useTheme } from '../../providers/CustomTheme';

export default function UserDetails() {
    const { user } = useCurrentUser();
    const { isLoading, error, handleGetUserById, userDeatails } = useUsers();
    const { isDark } = useTheme();

    useEffect(() => {
        if (user) {
            handleGetUserById(user._id);
        }
        if (!user) {
            let userFromLs = getUser();
            handleGetUserById(userFromLs._id);
        };
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (userDeatails == undefined || userDeatails == null) return <Typography>Sorry there is no user like that</Typography>
    if (userDeatails) return (
        <Box>
            <PageHeader title='My Profile' subtitle='If you wanna see your profile, that is the place' />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '620px' }, p: { xs: '2px', md: '5px' }, m: '0 auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', p: '20px' }}>
                    <Box sx={{ width: { xs: '100%', md: '620px' }, height: '300px', overflow: 'hidden', borderRadius: '5px' }}>
                        <Box sx={{ width: '100%', height: '100%', objectFit: 'cover' }} component='img' src={userDeatails.profilePic.url} alt={userDeatails.profilePic.alt} />
                    </Box>
                    <Box sx={{ bgcolor: isDark ? '#90A4AE' : '#ff9800', p: '10px', borderRadius: '5px', mt: '10px', width: { xs: '94%', md: '600px' } }}>
                        <Typography>Username: {capitalizeWords(userDeatails.userName)}</Typography>
                        <Typography>Email : {userDeatails.email}</Typography>
                        <Typography>Creator? {userDeatails && user.isCreator ? 'Yes' : 'No'}</Typography>
                        <Divider />
                        <Typography>Name</Typography>
                        <Typography>First: {capitalizeWords(userDeatails.name.first)}</Typography>
                        <Typography>Middle: {capitalizeWords(userDeatails.name.middle)}</Typography>
                        <Typography>Last: {capitalizeWords(userDeatails.name.last)}</Typography>
                        <UserPageActiveBar user={user} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
