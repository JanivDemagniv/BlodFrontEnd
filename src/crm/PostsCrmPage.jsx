import { Box } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'
import PostsInsights from './components/PostsInsights'

export default function PostsCrmPage() {
    return (
        <Box>
            <PageHeader title='Posts Insights' subtitle='See all posts details' />
            <PostsInsights />
        </Box>
    )
}
