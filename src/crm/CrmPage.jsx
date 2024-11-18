import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import AllUsers from './components/allUsers'
import PageHeader from '../components/PageHeader'
import useAdmin from './hooks/useAdmin';

export default function CrmPage() {
    const { handleGetAllUsers, handleUpdateStatus, handleDeleteUser, error, isLoading, allUsers } = useAdmin();

    useEffect(() => {
        handleGetAllUsers();
    }, [])
    return (
        <Box sx={{ minHeight: '70vh' }}>
            <PageHeader title='CRM' subtitle='Manage your users' />
            <AllUsers
                handleDeleteUser={handleDeleteUser}
                handleGetAllUsers={handleGetAllUsers}
                handleUpdateStatus={handleUpdateStatus}
                error={error}
                isLoading={isLoading}
                allUsers={allUsers}
            />
        </Box>
    )
}
