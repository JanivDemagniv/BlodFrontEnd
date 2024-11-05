import { Box } from '@mui/material'
import React from 'react'
import AllUsers from './components/allUsers'
import PageHeader from '../components/PageHeader'

export default function CrmPage() {
    return (
        <Box sx={{ minHeight: '70vh' }}>
            <PageHeader title='CRM' subtitle='Manage your users' />
            <AllUsers />
        </Box>
    )
}
